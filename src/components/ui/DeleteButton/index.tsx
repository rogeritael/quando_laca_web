import Image from "next/image";
import { ButtonComponent } from "./styles";
import bin from '@/assets/icons/bin.svg'

interface DeleteButtonProps {
    isVisible: boolean;
}

export function DeleteButton({ isVisible } : DeleteButtonProps){
    return(
        <ButtonComponent isVisible={isVisible}>
            Remover
            <Image src={bin} alt="icone de lixeira" />
        </ButtonComponent>
    )
}