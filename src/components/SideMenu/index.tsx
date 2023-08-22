import { SideMenuContainer } from "./styles";
import Image from 'next/image';

import categoryIcon from '@/assets/icons/menu_home.svg';
import favoritedIcon from '@/assets/icons/menu_favorite.svg';
import searchIcon from '@/assets/icons/menu_search.svg';
import Link from "next/link";

interface SideMenuProps {

}
export function SideMenu(props : SideMenuProps){
    return(
        <SideMenuContainer className="side">
                <a href="/" className="active">
                    <Image src={categoryIcon} alt="ver todos os jogos" />
                </a>
                    <Link href="/Library">
                    <Image src={favoritedIcon} alt="ver todos os jogos" />
                    </Link>
                <a href="/Search?term=populares">
                    <Image src={searchIcon} alt="ver todos os jogos" />
                </a>
        </SideMenuContainer>
    )
}