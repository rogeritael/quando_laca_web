'use client'
import { SideMenu } from "@/components/SideMenu";
import { Logo } from "@/components/ui/Logo";
import Image from "next/image";
import bell from '@/assets/icons/bell.svg';
import { Search } from './../../components/ui/Search/index';
import { PageContainer } from "./styles";
import { GameHeader } from './../../components/GameHeader/index';
import { Galery } from "@/components/Galery";
import { Title } from "@/components/ui/Title";
import { gameList as games } from "@/mocks/games";
import { GaleryModal } from "@/components/GaleryModal";
import { useState, useEffect } from 'react';
import { GameProps } from "@/mocks/games";
import { useGames } from "@/hooks/useGames";
import { formatDate } from "@/utils/formatDate";
import { countdown } from "@/utils/countdown";


interface AboutProps {

}

export default function About(props : AboutProps){
    const [selectedGame, setSelectedGame] = useState<GameProps>()
    const { findById } = useGames()

    useEffect(() => {

        (async () => {
            const game = await findById('Quake II')
            if(game)
                setSelectedGame(game)
        })()
        
    }, [])

     return(
        selectedGame && (    
        <PageContainer>
            {/* <GaleryModal /> */}
            <SideMenu />
            <div className="game_section">
                <div className="header">
                    <Search />
                    <div className="logo_container">
                        <Logo />
                        <Image src={bell} alt="notificações" />
                    </div>
                </div>
                <GameHeader />
                <Galery images={selectedGame?.images} />
                
                <div className="info_section">
                    <div className="left">
                        <div className="description">
                            <Title content="Resumo" disableLink/>
                            <p>
                                {selectedGame?.description}
                            </p>
                        </div>
                    </div>
                    
                    <div className="info">
                        <Title content="Informações" disableLink/>
                        <ul className="info_box">
                            <li>
                                <p>Plataformas</p>
                                <span>{selectedGame?.platforms}</span>
                            </li>
                            <li>
                                <p>Data de lançamento</p>
                                <span>{formatDate(selectedGame?.releaseDate)}</span>
                            </li>
                            <li>
                                <p>Desenvolvedora</p>
                                <span>{selectedGame?.developer}</span>
                            </li>
                            <li>
                                <p>Gêneros</p>
                                {selectedGame?.category.map((category) => (
                                    <span key={category.id}>{category.name} •</span>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </PageContainer>
        )
    )
}