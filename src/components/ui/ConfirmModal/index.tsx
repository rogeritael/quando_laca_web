import { useFavoriteGames } from "@/hooks/useFavoriteGames";
import { ModalContainer } from "./styles";

interface ConfirmModalProps {
    isConfirmModalVisible: boolean,
    setIsConfirmModalVisible: (param: boolean) => void;
    gameId: string;
}

export function ConfirmModal({ gameId, isConfirmModalVisible, setIsConfirmModalVisible } : ConfirmModalProps){
    const { removeFromList } = useFavoriteGames();

    function handleConfirm(){
        removeFromList(gameId);
        setIsConfirmModalVisible(false);
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
            <span className="background"></span>
        </ModalContainer>
    )
}