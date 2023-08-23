import { Notification } from "../ui/Notification";
import { NotificationsContainer } from "./styles";

interface NotificationsModalProps {

}
export function NotificationsModal(props : NotificationsModalProps){
    return(
        <NotificationsContainer>
            <div className="notifications_header">
                <h2 className="title">

                </h2>
                <figure className="new_notifications_quantity">
                    <figure>
                        4+
                    </figure>
                </figure>
            </div>
            <div className="notifications_box">
                <span className="date">
                    Hoje, 28 de Maio
                </span>
                <Notification image="" title="Resident Evil 4 Remake" description="Resident Evil 4 Remake lançou hoje!" isRead={false} />
            </div>
        </NotificationsContainer>
    )
}