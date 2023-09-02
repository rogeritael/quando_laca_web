import Image from "next/image";
import { Bell } from "../ui/bell";
import { MobileHeaderContainer } from "./styles";
import search from "@/assets/icons/Search.png"
import { Logo } from "../ui/Logo";

interface MobileHeaderProps {

}

export function MobileHeader(props : MobileHeaderProps){

    return(
        <MobileHeaderContainer className="header_mobile">
            <Logo />
            <Image className="search" src={search} alt="icone de pesquisa de jogos" />
            <Bell />
        </MobileHeaderContainer>
    )
}