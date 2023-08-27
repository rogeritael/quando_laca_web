import { NotificationProps, useNotifications } from "@/hooks/useNotifications";
import { Notification } from "../ui/Notification";
import { NotificationsContainer } from "./styles";

import { gameList as games } from "@/mocks/games";
import React, { useContext, useEffect, useState, useRef } from "react";
import { formatDate, formatDateMinified } from "@/utils/formatDate";
import { Context } from "@/context/UserContext";
import { formatNotificationDate1 } from "@/utils/formatNotificationDate1";
import { getUnreadQuantity } from "@/utils/getUnreadQuantity";

interface NotificationsModalProps {

}

// const  formattedNotifications = [
//     {
//         date: new Date(2023, 8, 10),
//         notifications: [
//             {
//                 image: 'data:image/jpeg;base64,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',
//                 title: 'Resident Evil 4 remake lanou hoje',
//                 description: 'Resident Evil 4 Remake',
//                 isRead: false,
//                 created_at: new Date(2023, 8, 10),
//             }
//      }
// ]

export function NotificationsModal(props : NotificationsModalProps){
    // const [notifications, setNotifications] = useState()
    const { userNotifications, isNotificationsVisible, setIsNotificationsVisible, markAllAsRead, findAllNotifications } = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            const notifications = await findAllNotifications()
            // setUserNotifications(notifications)
        }
        fetchData()
        setIsLoading(false)
    }, [])

    function handleCloseModal(){
        setIsNotificationsVisible(false);
        markAllAsRead()
    }

    return(
        isNotificationsVisible && !isLoading &&
        <NotificationsContainer ref={modalRef}>
            <span className="background" onClick={() => handleCloseModal()} />

            <div className="notification_box">
                <div className="notifications_header">
                    <h2 className="title">
                        Minhas notificações
                    </h2>
                    <figure className="new_notifications">
                        <figure>
                            { getUnreadQuantity(userNotifications)}+
                        </figure>
                    </figure>
                </div>
                <div className="notifications_box">
                
                    {userNotifications.map((notifications) => (
                        <>
                        <span className="date">
                            {formatDate(new Date(notifications.created_at))}
                        </span>
                        <Notification key={notifications.title} image={notifications.image} title={notifications.title} description={notifications.description} isRead={notifications.isRead} /> 
                        </> 
                    ))}

                </div>
            </div>
        </NotificationsContainer>
    )
}