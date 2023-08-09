import { SideMenuContainer } from "./styles";
import Image from 'next/image';

import categoryIcon from '@/assets/icons/Category.svg';

interface SideMenuProps {

}
export function SideMenu(props : SideMenuProps){
    return(
        <SideMenuContainer className="side">
                <a href="" className="active">
                    <Image src={categoryIcon} alt="ver todos os jogos" />
                </a>
                <a href="">
                    <Image src={categoryIcon} alt="ver todos os jogos" />
                </a>
                <a href="">
                    <Image src={categoryIcon} alt="ver todos os jogos" />
                </a>
        </SideMenuContainer>
    )
}