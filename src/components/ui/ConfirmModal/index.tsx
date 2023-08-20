import { useFavoriteGames } from "@/hooks/useFavoriteGames";
import { ModalContainer } from "./styles";
import { useFlashMessage } from "@/hooks/useFlashMessage";
import { useContext } from 'react'
import { Context } from "@/context/UserContext";

interface ConfirmModalProps {
    isConfirmModalVisible: boolean,
    setIsConfirmModalVisible?: (param: boolean) => void;
    removeFromList: (id: string) => void;
    gameId: string;
}

// { gameId, removeFromList, isConfirmModalVisible, setIsConfirmModalVisible } : ConfirmModalProps

export function ConfirmModal(){
    const { setFlashMessage } = useFlashMessage();
    const { isConfirmModalVisible, setIsConfirmModalVisible, removeFromList, gameIdToRemoveFromList } = useContext(Context)

    function handleConfirm(){
        removeFromList(gameIdToRemoveFromList);
        setIsConfirmModalVisible(false);
        setFlashMessage({type:'error', message:'O jogo foi removido da sua lista. Você não receberá novas notificações.'})
    }
    
    return(
        <ModalContainer isConfirmModalVisible={isConfirmModalVisible}>
            <div className="modal">
                <div className="text_container">
                    <h2>Tem certeza que quer remover este jogo?</h2>
                    <p>Ao remover o jogo da sua lista você não receberá mais atualizações. </p>
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