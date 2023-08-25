import Image from "next/image";
import { ButtonComponent } from "./styles";
import bin from '@/assets/icons/bin.svg'
import { useContext, useEffect, useRef } from "react";
import { Context } from "@/context/UserContext";

interface DeleteButtonProps {
    isVisible: boolean;
    setIsDeleteButtonOpen: (param: boolean) => void;
    gameId: string;
}

export function DeleteButton({ isVisible, setIsDeleteButtonOpen, gameId } : DeleteButtonProps){
    const { setIsConfirmModalVisible, setGameIdToRemoveFromList } = useContext(Context)

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsDeleteButtonOpen(false);
            }
          };
      
          document.addEventListener('mousedown', handleClickOutside);
      
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
    }, [])

    function handleClick(){
        setIsConfirmModalVisible(true)
        setGameIdToRemoveFromList(gameId)
    }

    return(
        <ButtonComponent ref={buttonRef} isVisible={isVisible} onClick={() => handleClick()}>
            Remover
            <Image src={bin} alt="icone de lixeira" />
        </ButtonComponent>
    )
}