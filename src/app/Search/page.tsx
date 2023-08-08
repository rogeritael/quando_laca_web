'use client'
import { Game } from "@/components/Game";
import { GameList } from "@/components/GameList";
import { PageContainer } from "./styles";
import { SideMenu } from "@/components/SideMenu";
import { Header } from "@/components/Header";
import { Logo } from "@/components/ui/Logo";
import { MyLibrary } from "@/components/MyLibrary";
import Image from "next/image";
import bell from '@/assets/icons/bell.svg';
import { PopularGames } from "@/components/PopularGames";

interface AboutProps {

}
export default function Search(props : AboutProps){
    return(
        <PageContainer>
            <div className="main_content">
                <SideMenu />

                <div className="main">
                    <Header />
                    {/* <h2 className="search_term">Resident Evil 4 Remake</h2> */}
                    <GameList title='Resultados da pesquisa' >
                        <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
                        <Game name='Resident Evil 4 Remake' image='' isPopular={true} platforms={['PS4', 'PS5']} />
                        <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
                        <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
                        <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
                        <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
                        <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
                        <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
                        <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
                    </GameList>
                    <div className="featured">
                        <PopularGames />
                        <PopularGames />
                    </div>
                </div>
                
                <div className="library">
                    <div className="logo_container">
                            <Logo />
                            <Image src={bell} alt="notificações" />
                    </div>
                    <MyLibrary />
                </div>
            </div>
            </PageContainer>
    )
}