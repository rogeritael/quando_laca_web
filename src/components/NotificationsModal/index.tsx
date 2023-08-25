import { NotificationProps, useNotifications } from "@/hooks/useNotifications";
import { Notification } from "../ui/Notification";
import { NotificationsContainer } from "./styles";

import { gameList as games } from "@/mocks/games";
import React, { useContext, useEffect, useState, useRef } from "react";
import { formatDate, formatDateMinified } from "@/utils/formatDate";
import { Context } from "@/context/UserContext";
import { formatNotificationDate1 } from "@/utils/formatNotificationDate1";

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
//             },
//             {
//                 image: 'data:image/jpeg;base64,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',
//                 title: 'Jedi Survivor',
//                 description: 'Jedi survivor lança amanhã',
//                 isRead: false,
//                 created_at: new Date(2023, 8, 10),
//             },
//         ]
//     },
//     {
//         date: new Date(2023, 8, 4),
//         notifications: [
//             {
//                 image: 'data:image/jpeg;base64,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',
//                 title: 'Hogwarts Legacy',
//                 description: 'Falta 1 mês para o lançamento de Hogwarts Legacy',
//                 isRead: true,
//                 created_at: new Date(2023, 8, 4),
//             },
//         ]
//     }
// ]

export function NotificationsModal(props : NotificationsModalProps){
    // const [notifications, setNotifications] = useState()
    const { userNotifications } = useContext(Context)
    const [isOpen, setIsOpen] = useState(true)
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
          };
      
          document.addEventListener('mousedown', handleClickOutside);
      
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
    }, [])

    return(
        isOpen &&
        <NotificationsContainer ref={modalRef}>
            <div className="notifications_header">
                <h2 className="title">
                    Minhas notificações
                </h2>
                <figure className="new_notifications">
                    <figure>
                        4+
                    </figure>
                </figure>
            </div>
            <div className="notifications_box">
            
                {userNotifications.map((notifications) => (
                    <>
                    <span className="date">
                        {formatDate(notifications.created_at)}
                    </span>
                    <Notification key={notifications.title} image={notifications.image} title={notifications.title} description={notifications.description} isRead={notifications.isRead} /> 
                    </> 
                ))}
                {/* sinalizando 1 mes a 15 dias
                lembrando 15 dias a 7 dias
                avisando 3 dias a 2 dias
                hoje
                relembrando -depois que lançou  */}

            </div>
        </NotificationsContainer>
    )
}