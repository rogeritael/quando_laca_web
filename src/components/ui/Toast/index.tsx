import { useEffect, useState } from "react";
import { ToastComponent } from "./styles";
import bus from "@/utils/bus";

interface ToastProps {
    isVisible: boolean;
}

export function Toast({ isVisible } : ToastProps){
    const [isToastVisible, setIsToastVisible] = useState(true)
    const [message, setMessage] = useState('')

    useEffect(() => {

        //listener que fica escutando o evento, e quando for ativado, realiza a lógica
        bus.addListener('flash_message', ({ message, type }) => {
            setIsToastVisible(true)
            setMessage(message)

            setTimeout(() => {
                setIsToastVisible(false)
            }, 3000)
        })

    }, [])

    return(
        isToastVisible &&
        <ToastComponent isVisible={isVisible}>
            <h3>Removido com sucesso!</h3>
            <p>notificações <span>desativadas.</span></p>
            <span className="progress_bar"></span>
        </ToastComponent>
    )
}