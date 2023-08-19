import bus from "@/utils/bus";

interface FlashMessageProps {
    removeFromList: (id: string) => void;
    gameId: string;
}

export function useConfirmModal(){
    function setConfirmMessage({ gameId, removeFromList }: FlashMessageProps){
        bus.emit('confirm_modal', {
            gameId: gameId,
            removeFromList: removeFromList
        })
    }

    return { setConfirmMessage }
}