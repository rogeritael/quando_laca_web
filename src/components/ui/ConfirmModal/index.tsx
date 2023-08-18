import { useFavoriteGames } from "@/hooks/useFavoriteGames";
import { ModalContainer } from "./styles";
import { useFlashMessage } from "@/hooks/useFlashMessage";

interface ConfirmModalProps {
    isConfirmModalVisible: boolean,
    setIsConfirmModalVisible: (param: boolean) => void;
    removeFromList: (id: string) => void;
    gameId: string;
}

export function ConfirmModal({ gameId, removeFromList, isConfirmModalVisible, setIsConfirmModalVisible } : ConfirmModalProps){
    const { setFlashMessage } = useFlashMessage();

    function handleConfirm(){
        removeFromList(gameId);
        setIsConfirmModalVisible(false);
        setFlashMessage({type:'type', message:'message'})
    }
    
    return(
        <ModalContainer isConfirmModalVisible={isConfirmModalVisible}>
            <div className="modal">
                <div className="text_container">
                    <h2>Tem certeza que quer remover este jogo?</h2>
                    <p>Ao remover <span>Red Dead Redemption</span> da sua lista você não receberá mais atualizações. </p>
                </div>
                <div className="buttons_container">
                    <button onClick={() => setIsConfirmModalVisible(false)}>Cancelar</button>
                    <button onClick={() => handleConfirm()}>Deletar</button>
                </div>
            </div>
            <span className="background" onClick={() => setIsConfirmModalVisible(false)}></span>
        </ModalContainer>
    )
}