import Image from "next/image";
import { Bell } from "../ui/bell";
import { MobileHeaderContainer } from "./styles";
import search from "@/assets/icons/Search.png"
import { Logo } from "../ui/Logo";
import SearchIcon from '@/assets/icons/Search.png'
import { useState } from 'react';

interface MobileHeaderProps {

}

export function MobileHeader(props : MobileHeaderProps){
    const [ isInputVisible, setIsInputVisible ] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" || event.keyCode === 13) {
            window.location.href = `/Search?term=${searchTerm}`;
        }
    };

    function handleSearch(){
        window.location.href = `/Search?term=${searchTerm}`;
    }

    return(
        <MobileHeaderContainer className="header_mobile">
            <Logo />
            <Image className="search" src={search} alt="icone de pesquisa de jogos" onClick={() => setIsInputVisible(true)} />
            <Bell />
            {
                isInputVisible && (
                    <div className="search_container">
                        <Image
                            src={SearchIcon}
                            alt="search icon"
                            onClick={() => handleSearch()}
                        />
                        <input type="text" placeholder="encontre um jogo.." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}  onKeyDown={(e) => handleKeyPress(e)} />
                        <span className="search_bg" onClick={() => setIsInputVisible(false)} />
                    </div>
                )
            }
            
        </MobileHeaderContainer>
    )
}