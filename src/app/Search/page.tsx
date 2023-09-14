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
import { gamesService } from "@/services/gameService";
import { TrailerProps, trailers } from "@/mocks/trailers";
import { Trailer } from "@/components/ui/Trailer";
import { Carousel } from "@/components/ui/Carousel";
import { TrailerModal } from "@/components/ui/TrailerModal";
import { Bell } from "@/components/ui/bell";
import { MobileHeader } from "@/components/MobileHeader";
import { CategoryList } from "@/components/CategoryList/CategoryList";
import { Empty } from "@/components/ui/Empty";

interface AboutProps {

}

export default function Search(props : AboutProps){
    const [searchResults, setSearchResults] = useState<GameProps[]>([])
    const [trailerResults, setTrailerResults] = useState<TrailerProps[]>([])
    const { searchTerm, setSearchTerm, findAllNotifications, generateNotifications } = useContext(Context);
    const { findJustReleased, findPopularGames } = gamesService()
    const [isLoading, setIsLoading] = useState(true)
    
    const [isTrailerModalOpen, setIstrailerModalOpen] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState('')

    

    const [ justReleased, setJustReleased] = useState<GameProps[]>([])
    const [ popularGames, setPopularGames] = useState<GameProps[]>([])

    useEffect(() => {
        
        const fetchData = async () => {
            const url = window.location.href;
            const term = url.split('term=')[1];

            const popular = await findPopularGames()
            setPopularGames(popular)
            const just_released_games = await findJustReleased()
            setJustReleased(just_released_games)
            
            if(term === 'populares'){
                setSearchResults(popular)

            } else if(term === 'recem_lancados'){
                setSearchResults(just_released_games)

            } else if(term === 'ultimos_trailers'){
                setTrailerResults(trailers)
            } else {
                if(typeof term === 'string'){
                    setSearchTerm(term) 
                    const results = findGame(term)
                    setSearchResults(results)
                }
            }

            //notifications
            await generateNotifications();
            await findAllNotifications();
        }
        
        fetchData()
        setIsLoading(false)

    }, [setSearchTerm])
        

    return(
        !isLoading &&
        <PageContainer>
            <TrailerModal videoUrl={trailerUrl} isOpen={isTrailerModalOpen} setIsOpen={setIstrailerModalOpen} />
            <div className="main_content">
                <SideMenu />

                <div className="main">
                    <Header />
                    <MobileHeader />
                    <CategoryList className="category_list_mobile" />
                    {/* <h2 className="search_term">{searchTerm}</h2> */}
                    { searchResults.length > 0 && 
                        <GameList title='Resultados da pesquisa' >
                            {searchResults.map((result) => (
                                <Game key={result.id} id={result.id} name={result.name} image={result.image} isPopular={false} platforms={result.platforms} />
                            ))}
                        </GameList>
                    }

                    { trailerResults.length > 0 && 
                        <Carousel maxWidth="100%" title="" >
                            {trailerResults.map((result, index) => (
                                <Trailer animationDelay={0} videoUrl={result.video_url} setIsModalOpen={setIstrailerModalOpen} setTrailerUrl={setTrailerUrl} key={index}/>
                            ))}
                        </Carousel>
                    }

                    {searchResults.length <= 0 && trailerResults.length <= 0 && (
                        // <p className="result_paragraph">Nenhum resultado encontrado :c </p>
                        <Empty listType="search" button/>
                    )}
                    

                    <div className="featured">
                        <PopularGames url="/Search?term=populares" games={popularGames} />
                        <PopularGames title="recém lançados" url="/Search?term=recem_lancados" games={justReleased} />
                    </div>
                </div>
                
                <div className="library">
                    <div className="logo_container">
                        <Logo />
                        <Bell />
                    </div>
                    <MyLibrary />
                </div>
            </div>
        </PageContainer>
    )
}