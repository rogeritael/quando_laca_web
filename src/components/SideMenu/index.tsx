import { SideMenuContainer } from "./styles";
import Image from 'next/image';
import { useEffect, useState } from 'react'

import categoryIcon from '@/assets/icons/menu_home.svg';
import favoritedIcon from '@/assets/icons/menu_favorite.svg';
import searchIcon from '@/assets/icons/menu_search.svg';
import Link from "next/link";
import { useRouter } from 'next/navigation';

interface SideMenuProps {

}

export function SideMenu(props : SideMenuProps){
    const [activeLink, setActiveLink] = useState<'home'|'library'|'search'|''>()

    useEffect(() => {
    
        const fetchData = async() => {
            let route = await window.location.href
            route = route.split('/')[ route.split('/').length - 1]
            route = route.split('?')[0]

            switch(route){
                case '':
                    setActiveLink('home')
                    break;
                case 'Library':
                    setActiveLink('library')
                    break;
                case 'Search':
                    setActiveLink('search')
                    break;
                case 'About':
                    setActiveLink('')
                    break;
                default:
                    setActiveLink('home')
                    break;
            }
        }
        fetchData()

    }, [])

    return(
        <SideMenuContainer className="side">
            <Link href="/" className={activeLink === 'home' ? 'active' : ''}>
                <Image src={categoryIcon} alt="ver todos os jogos" />
            </Link>
            <Link href="/Library" className={activeLink === 'library' ? 'active' : ''}>
                <Image src={favoritedIcon} alt="ver todos os jogos" />
            </Link>
            <Link href="/Search?term=populares" className={activeLink === 'search' ? 'active' : ''}>
                <Image src={searchIcon} alt="ver todos os jogos" />
            </Link>
        </SideMenuContainer>
    )
}