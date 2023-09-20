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
import { isGameAlreadyAdded } from '../../../utils/isGameFavorited';
import { Carousel } from "@/components/ui/Carousel";
import player from '@/assets/icons/player.svg'
import { useFlashMessage } from "@/hooks/useFlashMessage";
import backImage from '@/assets/icons/arrow_v2.svg'
import { TrailerModal } from "@/components/ui/TrailerModal";
import { ImageModal } from "@/components/ImageModal";
import { getVideoId } from "@/utils/getVideoId";

import title_reverse_arrow from '@/assets/icons/title_reverse_arrow.svg'
import { Category } from "@/components/ui/Category";
import trailer_player from '@/assets/icons/trailer_play_icon.svg'

import { SiPlaystation4, SiPlaystation5 } from 'react-icons/si'
import { BsNintendoSwitch, BsXbox, BsMicrosoft } from 'react-icons/bs'
import { formatDate } from "@/utils/formatDate";

interface PageProps {
    params: {
        id: string
    }
}

interface MediaProps {
    type: string;
    image: string;
    link?: string;
}

export default function Game( { params: { id } }  : PageProps){
    const { addToList, findAllNotifications, gameList, setGameIdToRemoveFromList, setIsConfirmModalVisible } = useContext(Context);
    const [selectedGame, setSelectedGame] = useState<GameProps>()
    const [backgroundImage, setBackgroudImage] = useState('')
    const [isGaleryModalOpen, setIsGaleryModalOpen] = useState(false);
    const [initialIndex, setInitialIndex] = useState(0);
    const [mediaType, setMediaType] = useState<string>('image')
    const [isLoading, setIsLoading] = useState(true)
    const { setFlashMessage } = useFlashMessage();
    const { createNotification } = useContext(Context)

    const [isTrailerModalOpen, setIstrailerModalOpen] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [mediaUrl, setMediaUrl] = useState('');

    

    useEffect(() => {

        const fetchData = async() => {
            const game = await gamesService().findById(id)

            if(game) {
                setSelectedGame(game)

                game.media.map((media) => (
                    backgroundImage === '' &&
                        media.type === 'image' && setBackgroudImage(media.image)
                ))
            }

        }

        fetchData()
        setIsLoading(false)
        
    }, [])

    function handleSetList(){
        if(selectedGame){
            if(isGameAlreadyAdded({gameId: selectedGame.id, gameList: gameList})) {
                setGameIdToRemoveFromList(selectedGame.id)
                setIsConfirmModalVisible(true)
            } else {
                addToList(selectedGame)
                createNotification(selectedGame)
                findAllNotifications()
                setFlashMessage({type:'success', message: `${selectedGame.name} foi adicionado aos seus favoritos`})
            }
        }
    }

    function handleOpenGallery(){
        alert('galeria aberta')
    }

    return(
        selectedGame && !isLoading && (
        <PageContainer>
            <TrailerModal isOpen={isTrailerModalOpen} videoUrl={mediaUrl} setIsOpen={setIstrailerModalOpen} />
            <ImageModal isOpen={isImageModalOpen} image={mediaUrl} setIsOpen={setIsImageModalOpen} />
            <GaleryModal mediaType={mediaType} initialIndex={initialIndex} media={selectedGame.media} isGaleryModalOpen={isGaleryModalOpen} setIsGaleryModalOpen={setIsGaleryModalOpen}/>
            
            <SideMenu />

            <div className="game_section">

                <figure className="background">
                    <span className="overlay01"/>
                    <span className="overlay02"/>
                    <Image width={2400} height={2400} src={backgroundImage} alt="imagem de fundo do jogo"/>
                </figure>

                <Link href={'/'}>
                    <Image src={title_reverse_arrow} alt="voltar para a página anterior" className="return_icon" />
                </Link>

                <section className="content">
                    <div className="top_infos">
                        <span className="developer">{selectedGame.developer}</span>
                        <h1><Image src={title_reverse_arrow} alt="voltar para a página anterior" />{selectedGame.name}</h1>
                        <div className="group_info">
                            <Category label={selectedGame.category[0].name}></Category>
                            <p className="date">{formatDate(selectedGame.releaseDate)}</p>
                        </div>
                    </div>

                    <Image src={trailer_player} alt="player" className="player" onClick={() => handleOpenGallery()}/>

                    <div className="bottom_infos">
                        <p className="countdown_text">
                            {countdown(selectedGame.releaseDate)}
                        </p>
                        <div className="platforms">                            
                            <SiPlaystation4 className="playstation" />
                            <SiPlaystation5 className="playstation" />
                            <BsXbox />
                            <BsMicrosoft />
                            <BsNintendoSwitch />
                        </div>
                        <button className="favoriteButton" onClick={() => handleSetList()}>
                            {isGameAlreadyAdded({gameId: selectedGame.id, gameList: gameList}) ?
                                'Remover da Lista'
                                :
                                'Adicionar a Lista'
                            }
                        </button>
                    </div>
                </section>
            </div>
            
        </PageContainer>
        )
    )
}