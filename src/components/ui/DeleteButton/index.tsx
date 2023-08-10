import Image from "next/image";
import { ButtonComponent } from "./styles";
import bin from '@/assets/icons/bin.svg'

interface DeleteButtonProps {

}
export function DeleteButton(props : DeleteButtonProps){
    return(
        <ButtonComponent>
            Remover
            <Image src={bin} alt="icone de lixeira" />
        </ButtonComponent>
    )
}