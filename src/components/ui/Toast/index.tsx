import { ToastComponent } from "./styles";

interface ToastProps {

}
export function Toast(props : ToastProps){
    return(
        <ToastComponent>
            <h3>Removido com sucesso!</h3>
            <p>notificações <span>desativadas.</span></p>
            <span className="progress_bar"></span>
        </ToastComponent>
    )
}