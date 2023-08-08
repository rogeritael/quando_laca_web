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

interface AboutProps {

}
export default function About(props : AboutProps){
    return(
        <div>
            <div className="side">

            </div>
            <div className="main">
                <div className="header">
                    <Search />
                    <Logo />
                </div>
                <div className="game_header">
                    
                </div>
                <div className="galery_slider">

                </div>
                <div className="game_description">

                </div>
            </div>
            <div className="related_games">

            </div>
        </div>
    )
}