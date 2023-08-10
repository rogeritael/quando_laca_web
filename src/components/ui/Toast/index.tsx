import { ToastComponent } from "./styles";

interface ToastProps {
    isVisible: boolean;
}

export function Toast({ isVisible } : ToastProps){
    return(
        <ToastComponent isVisible={isVisible}>
            <h3>Removido com sucesso!</h3>
            <p>notificações <span>desativadas.</span></p>
            <span className="progress_bar"></span>
        </ToastComponent>
    )
}