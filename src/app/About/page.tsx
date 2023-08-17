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
import { useState, useEffect, useContext } from 'react';
import { GameProps } from "@/mocks/games";
import { gamesService } from "@/services/gameService";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/formatDate";
import { countdown } from "@/utils/countdown";
import { GameButtons } from "@/components/GameButtons";
import { GameGalery } from "@/components/GameGalery";
import Link from "next/link";
import { isAVideoLink } from "@/utils/isAVideoLink";
import { getVideoId } from "@/utils/getVideoId";
import { Context } from "@/context/UserContext";
import { isGameAlreadyAdded } from './../../utils/isGameFavorited';
import { TrailerModal } from "@/components/ui/TrailerModal";

interface AboutProps {

}

export default function About(props : AboutProps){
    const [selectedGame, setSelectedGame] = useState<GameProps>()
    const [backgroundImage, setBackgroudImage] = useState('')
    const { addToList, removeFromList, gameList } = useContext(Context);
    const [isGaleryModalOpen, setIsGaleryModalOpen] = useState(false)
    // const { findById } = useGames()

    

    useEffect(() => {

        (async () => {
            const url = window.location.href;
            const id = url.split('id=')[1];

            if(typeof id === 'string'){
                const game = await gamesService().findById(id)

                if(game) {
                    setSelectedGame(game)

                    game.images.map((image) => (
                        backgroundImage === '' &&
                            !isAVideoLink(image) && setBackgroudImage(image)
                    ))
                }
            }

        })()
        
    }, [])

    function handleSetList(){
        if(selectedGame){
            isGameAlreadyAdded({gameId: selectedGame.id, gameList: gameList}) ?
                removeFromList(selectedGame.id)
            :
                addToList(selectedGame)
        }

    }

     return(
        selectedGame && (    
        <PageContainer>
            {/* <Galery images={selectedGame.images} /> */}
            <GaleryModal images={selectedGame.images} isGaleryModalOpen={isGaleryModalOpen} setIsGaleryModalOpen={setIsGaleryModalOpen}/>
            <SideMenu />
            <div className="game_section">
                <figure className="background_image">
                    <span className="image_mask"/>
                    <Image width={1200} height={1200} src={backgroundImage} alt="imagem de fundo do jogo"/>
                </figure>

                <div className="game_infos">
                    <h1 className="title">{selectedGame.name}</h1>
                    <div className="info_list">
                        <p>{selectedGame.developer}</p>
                        <p className="categories">
                            {selectedGame.category.map((category, index) => (
                                <span key={index}>{category.name}</span>
                            ))}
                        </p>
                        <p className="countdown">{countdown(selectedGame.releaseDate)}</p>
                    </div>
                    <p className="description">{selectedGame.description}</p>
                    <div className="buttons_container">
                        <button onClick={() => handleSetList()}>
                            {isGameAlreadyAdded({gameId: selectedGame.id, gameList: gameList}) ?
                                'Remover da Lista'
                                :
                                'Adicionar a Lista'
                            }
                        </button>
                        <Link href="/">Comprar Jogo</Link>
                    </div>
                </div>
                <div className="image_galery">

                    {selectedGame.images.map((image, index) => (
                        
                        <figure key={index}>
                            {isAVideoLink(image) ? (
                                <Image onClick={() => setIsGaleryModalOpen(true)} width={270} height={150} src={image} alt="imagem da galeria do jogo"/>
                            ):(
                                <iframe onClick={() => setIsGaleryModalOpen(true)}
                                    width="640"
                                    height="360"
                                    src={`https://www.youtube.com/embed/${getVideoId(image)}?controls=0mo`}
                                    title="Trailer do jogo"
                                    allowFullScreen
                                ></iframe>
                            )
                            }
                        </figure>
                        
                    ))}
                </div>
            </div>
            
        </PageContainer>
        )
    )
}