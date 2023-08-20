'use client'
import { SideMenu } from "@/components/SideMenu";
import Image from "next/image";
import { PageContainer } from "./styles";
import { GaleryModal } from "@/components/GaleryModal";
import { useState, useEffect, useContext } from 'react';
import { GameProps } from "@/mocks/games";
import { gamesService } from "@/services/gameService";
import { countdown } from "@/utils/countdown";
import Link from "next/link";
import { Context } from "@/context/UserContext";
import { isGameAlreadyAdded } from './../../utils/isGameFavorited';
import { Carousel } from "@/components/ui/Carousel";
import player from '@/assets/icons/player.svg'
import { useFlashMessage } from "@/hooks/useFlashMessage";

interface AboutProps {

}

export default function About(props : AboutProps){
    const { addToList, removeFromList, gameList, setGameIdToRemoveFromList, setIsConfirmModalVisible } = useContext(Context);
    const [selectedGame, setSelectedGame] = useState<GameProps>()
    const [backgroundImage, setBackgroudImage] = useState('')
    const [isGaleryModalOpen, setIsGaleryModalOpen] = useState(false);
    const [initialIndex, setInitialIndex] = useState(0);
    const { setFlashMessage } = useFlashMessage();

    

    useEffect(() => {

        (async () => {
            const url = window.location.href;
            const id = url.split('id=')[1];

            if(typeof id === 'string'){
                const game = await gamesService().findById(id)

                if(game) {
                    setSelectedGame(game)

                    game.media.map((media) => (
                        backgroundImage === '' &&
                            media.type === 'image' && setBackgroudImage(media.image)
                    ))
                }
            }

        })()
        
    }, [])

    function handleSetList(){
        if(selectedGame){
            if(isGameAlreadyAdded({gameId: selectedGame.id, gameList: gameList})) {
                setGameIdToRemoveFromList(selectedGame.id)
                setIsConfirmModalVisible(true)
            } else {
                addToList(selectedGame)
                setFlashMessage({type:'success', message: `${selectedGame.name} foi adicionado aos seus favoritos`})
            }
        }

    }

    function handleOpenModal(index: number){
        setInitialIndex(index)
        setIsGaleryModalOpen(true)
    }

    return(
        selectedGame && (
        <PageContainer>
            {/* <Toast /> */}
            <GaleryModal initialIndex={initialIndex} media={selectedGame.media} isGaleryModalOpen={isGaleryModalOpen} setIsGaleryModalOpen={setIsGaleryModalOpen}/>
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
                    <Carousel title="" maxWidth="800px">

                    {selectedGame.media.map((media, index) => (
                        
                        <figure key={index}>
                            {media.type === 'image' ? (
                                <Image onClick={() => handleOpenModal(index)} width={270} height={150} src={media.image} alt="imagem da galeria do jogo"/>
                            ):(
                                media.link && (
                                <>
                                    <Image onClick={() => handleOpenModal(index)} width={270} height={150} src={media.image} alt="imagem da galeria do jogo"/>
                                    <Image className="player" src={player} alt="icone de player"/>
                                </>
                                )
                            )
                            }
                        </figure>
                        
                    ))}
                    </Carousel>
                </div>
            </div>
            
        </PageContainer>
        )
    )
}