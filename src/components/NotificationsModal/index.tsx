import { Notification } from "../ui/Notification";
import { NotificationsContainer } from "./styles";

import { gameList as games } from "@/mocks/games";

interface NotificationsModalProps {

}

export function NotificationsModal(props : NotificationsModalProps){
    return(
        <NotificationsContainer>
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
                <span className="date">
                    Hoje, 28 de Maio
                </span>
                <Notification image={games[0].image} title="Resident Evil 4 Remake" description="Resident Evil 4 Remake lançou hoje!" isRead={false} />
                <Notification image={games[0].image} title="Star Wars: Jedi Survivor" description="Faltam dois dias para o lançamento de Star-wars Jedi Survivor!" isRead={false} />
                <span className="date">
                    semana passada, 26 de Maio
                </span>
                <Notification image={games[0].image} title="Hogwarts Legacy" description="Está preparado? Hogwarts legacy chega em apenas 1 mês" isRead={true} />
            </div>
        </NotificationsContainer>
    )
}