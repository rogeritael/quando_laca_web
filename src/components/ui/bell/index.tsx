import { useContext } from "react";
import { BellContainer } from "./styles";
import { Context } from "@/context/UserContext";
import Image from "next/image";
import bell from '@/assets/icons/bell.svg'

interface BellProps {

}
export function Bell(props : BellProps){
    const { areThereUnread, isNotificationsVisible, setIsNotificationsVisible } = useContext(Context)

    function handleModal(){
        isNotificationsVisible === true ? setIsNotificationsVisible(false) : setIsNotificationsVisible(true);
    }

    return(
        <BellContainer className="bell_container">
            {areThereUnread &&
                <>
                <span className='pulsing_alert' />
                <span className='pulsing_alert_pulse' />
                </>
            }
            <Image className='bell' src={bell} alt="notificações" onClick={() => handleModal()} />
        </BellContainer>
    )
}