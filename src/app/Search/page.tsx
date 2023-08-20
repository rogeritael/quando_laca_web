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
import { useEffect } from 'react';
import { findGame } from "@/utils/findGame";
import { useState, useContext } from 'react';
import { GameProps } from './../../mocks/games';
import { gameList as games } from "./../../mocks/games";
import { Context } from "@/context/UserContext";

interface AboutProps {

}

export default function Search(props : AboutProps){
    const [searchResults, setSearchresults] = useState<GameProps[]>([])
    const { searchTerm, setSearchTerm } = useContext(Context);

    useEffect(() => {

        const url = window.location.href;
        const term = url.split('term=')[1];

        if(typeof term === 'string'){
            setSearchTerm(term)
            const results = findGame(term)
            setSearchresults(results)
        }
            
    }, [setSearchTerm])
        

    return(
        <PageContainer>
            <div className="main_content">
                <SideMenu />

                <div className="main">
                    <Header />
                    <h2 className="search_term">{searchTerm}</h2>
                    { searchResults.length > 0 ? (
                        <GameList title='Resultados da pesquisa' >
                            {searchResults.map((result) => (
                                <Game key={result.id} id={result.id} name={result.name} image={result.image} isPopular={false} platforms={result.platforms} />
                            ))}
                        </GameList>
                    ) : (
                        <p>Nenhum resultado encontrado :c </p>
                    )}
                    

                    <div className="featured">
                        <PopularGames url="/Search?term=populares" games={games} />
                        <PopularGames url="/Search?term=populares" games={games} />
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