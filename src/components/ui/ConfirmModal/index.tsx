import { ModalContainer } from "./styles";

interface ConfirmModalProps {

}

export function ConfirmModal(props : ConfirmModalProps){
    return(
        <ModalContainer isVisible={false}>
            <h2>Tem certeza que quer remover este jogo?</h2>
            <p>Ao remover <span>Red Dead Redemption</span> da sua lista você não receberá mais atualizações. </p>
            <div className="buttons">
                <button>Cancelar</button>
                <button>Deletar</button>
            </div>
        </ModalContainer>
    )
}