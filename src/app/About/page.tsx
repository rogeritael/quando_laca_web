'use client'
import { Game } from "@/components/Game";
import { GameList } from "@/components/GameList";
import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/Header";
import { Logo } from "@/components/ui/Logo";
import { MyLibrary } from "@/components/MyLibrary";
import Image from "next/image";
import bell from '@/assets/icons/bell.svg';
import { PopularGames } from "@/components/PopularGames";
import { Search } from './../../components/ui/Search/index';
import { PageContainer } from "./styles";
// import bell from '@/assets/icons/bell.svg'

interface AboutProps {

}
export default function About(props : AboutProps){
    return(
        <PageContainer>
            <SideMenu className="side" />
            <div className="game_section">
                <div className="header">
                    <Search />
                    <div className="logo_container">
                        <Logo />
                        <Image src={bell} alt="notificações" />
                    </div>
                </div>

                <div className="game_header">

                </div>
                <div className="galery_slider">

                </div>
                <div className="game_description">

                </div>
                <div className="related_games">

                </div>
            </div>
            
        </PageContainer>
    )
}