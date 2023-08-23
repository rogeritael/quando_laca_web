import Image from "next/image";
import { NotificationContainer } from "./styles";

interface NotificationProps {
    image: string;
    title: string;
    description: string;
    isRead: boolean;
}

export function Notification({ image, title, description, isRead } : NotificationProps){
    return(
        <NotificationContainer>
            <figure className="notification_image">
                <Image src={image} alt="imagem da notificação"/>
                
                {!isRead && (
                    <figure className="alert"></figure>
                )}

            </figure>
            <div className="info_container">
                <div className="info_box">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </NotificationContainer>
    )
}