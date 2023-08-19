import { useEffect, useState } from "react";
import { ToastComponent } from "./styles";
import bus from "@/utils/bus";

interface ToastProps {
}

export function Toast(props: ToastProps){
    const [isToastVisible, setIsToastVisible] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {

        //listener que fica escutando o evento, e quando for ativado, realiza a lógica
        bus.addListener('flash_message', ({ message, type }) => {
            setIsToastVisible(true)
            setMessage(message)
            setType(type)

            setTimeout(() => {
                setIsToastVisible(false)
            }, 3000)
        })

    }, [])

    return(
        isToastVisible &&
        <ToastComponent isVisible={isToastVisible}>
            <h3>{type === 'success' ? 'Adicionado a Lista' : 'Removido com sucesso'}!</h3>
            <p>{message}</p>
            <span className="progress_bar"></span>
        </ToastComponent>
    )
}