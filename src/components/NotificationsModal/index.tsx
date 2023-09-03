import { NotificationProps, useNotifications } from "@/hooks/useNotifications";
import { Notification } from "../ui/Notification";
import { NotificationsContainer } from "./styles";

import { gameList as games } from "@/mocks/games";
import React, { useContext, useEffect, useState, useRef } from "react";
import { formatDate, formatDateMinified } from "@/utils/formatDate";
import { Context } from "@/context/UserContext";
import { formatNotificationDate1 } from "@/utils/formatNotificationDate1";
import { getUnreadQuantity } from "@/utils/getUnreadQuantity";
import backImage from '@/assets/icons/arrow_v2.svg'
import Image from "next/image";
import Link from "next/link";

interface NotificationsModalProps {

}

export function NotificationsModal(props : NotificationsModalProps){
    const { generateNotifications, userNotifications, setUserNotifications, isNotificationsVisible, setIsNotificationsVisible, markAllAsRead, findAllNotifications } = useContext(Context)
    const modalRef = useRef<HTMLDivElement | null>(null);

    function handleCloseModal(){
        setIsNotificationsVisible(false);
        markAllAsRead()
    }

    return(
        isNotificationsVisible &&
        <NotificationsContainer ref={modalRef}>
            <span className="background" onClick={() => handleCloseModal()} />

            <div className="notification_box">
                <div className="notifications_header">
                    <h2 className="title">
                        <span className="back_icon" onClick={() => setIsNotificationsVisible(false)}>
                            <Image alt="voltar para a página anterior" src={backImage} />
                        </span>
                        Minhas notificações
                    </h2>
                    <figure className="new_notifications">
                        <figure>
                            { getUnreadQuantity(userNotifications) }+
                        </figure>
                    </figure>
                </div>
                <div className="notifications_box">
                
                    {userNotifications.reverse().map((notifications, index) => (
                        <>
                        <Notification  image={notifications.image} title={notifications.title} description={notifications.description} isRead={notifications.isRead} /> 
                        <span className="date">
                            {formatDate(new Date(notifications.created_at))}
                        </span>
                        </> 
                    ))}

                </div>
            </div>
        </NotificationsContainer>
    )
}