import Image from "next/image";
import { ButtonComponent } from "./styles";
import bin from '@/assets/icons/bin.svg'
import { useContext } from "react";
import { Context } from "@/context/UserContext";

interface DeleteButtonProps {
    isVisible: boolean;
    gameId: string;
}

export function DeleteButton({ isVisible, gameId } : DeleteButtonProps){
    const { setIsConfirmModalVisible, setGameIdToRemoveFromList } = useContext(Context)

    function handleClick(){
        setIsConfirmModalVisible(true)
        setGameIdToRemoveFromList(gameId)
    }

    return(
        <ButtonComponent isVisible={isVisible} onClick={() => handleClick()}>
            Remover
            <Image src={bin} alt="icone de lixeira" />
        </ButtonComponent>
    )
}