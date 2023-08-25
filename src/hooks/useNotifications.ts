import { GameProps } from "@/mocks/games";
import { groupNotifications } from "@/utils/groupNotifications";
import { useEffect, useState } from "react";
import { useFavoriteGames } from "./useFavoriteGames";
import { countdown, countdownInNumber } from "@/utils/countdown";
import { formatDate } from "@/utils/formatDate";
import { Context } from "@/context/UserContext";

export interface NotificationProps {
    image: string;
    title: string;
    description: string;
    isRead: boolean;
    created_at: Date;
}

interface NotificationsGroupProps {
    date: Date;
    notifications: NotificationProps[];
}

export function useNotifications(){
    const [userNotifications, setUserNotifications] = useState<NotificationProps[]>([]);
    const { gameList } = useFavoriteGames()
    const teste = []

    useEffect(() => {

        // const notifications = findAllNotifications()
        
        // generateNotifications()
        // groupNotifications(notifications)
        // setUserNotifications(notifications)
        generateNotifications()

    }, [])

    async function generateNotifications(){
        const storedGamesJSON = localStorage.getItem('favorites')
        const storedGames: GameProps[] = storedGamesJSON ? JSON.parse(storedGamesJSON) : [];

       storedGames.map(async(game) => {
            const notification = await createNotification(game);
        })

        const updatedNotificationsJSON = localStorage.getItem('notifications')
        const updatedNotifications: NotificationProps[] = updatedNotificationsJSON ? JSON.parse(updatedNotificationsJSON) : [];
        setUserNotifications(updatedNotifications)
        
    }

    async function createNotification(game: GameProps){
        const releaseDate = game.releaseDate;

        let title = ''
        let description = ''

        if(countdownInNumber(releaseDate) > 0 && countdownInNumber(releaseDate) <= 30){
            
            title = `Pré-Lançamento de ${game.name} 🚀`
            description = `Fique preparado! ${game.name} está prestes a ser lançado. Marque na sua agenda o dia ${formatDate(new Date(game.releaseDate))}.`

        } else if (countdownInNumber(releaseDate) === 0){

            title = `Hora de Jogar ${game.name} 🎮`
            description = `É hoje! ${game.name} foi oficialmente lançado e já está disponível para você aproveitar.`

        } else if (countdownInNumber(releaseDate) < 0 && countdownInNumber(releaseDate) > -90){
            
            title = `Você já teve tempo de experimentar ${game.name}? 🎉`
            description = 'O jogo foi lançado recentemente e está pronto para ser explorado. Mergulhe em horas de diversão, desafios e emoções enquanto você mergulha nesta jornada épica.'

        } else {
            return null
        }

        const newNotification = await {
            image: game.image,
            title,
            description,
            isRead: false,
            created_at: new Date()
        }

        const storedNotificationsJSON = localStorage.getItem('notifications')
        const storedNotifications: NotificationProps[] = storedNotificationsJSON ? JSON.parse(storedNotificationsJSON) : [];
        
        const isAlreadyStored = storedNotifications.find((notification) => notification.title === newNotification.title)
        if(isAlreadyStored){
            return;
        }

        const updatedNotifications = [...storedNotifications, newNotification]

        localStorage.setItem('notifications', JSON.stringify(updatedNotifications))
    }

     function findAllNotifications(){

        const storedNotificationsJSON = localStorage.getItem('notifications');
        const storedNotifications: NotificationProps[] = storedNotificationsJSON ? JSON.parse(storedNotificationsJSON) : [];

        setUserNotifications(storedNotifications)
        return storedNotifications;
        // return notificationsMock;
    }

    async function markAllAsRead(){
        const updatedNotifications = userNotifications.map((notification) => {
            notification.isRead = true;
        })
    }

    return { userNotifications, findAllNotifications }
}