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

    //excluir quando terminar de refatorar o código
    function handleOpenModal(index: number, media: MediaProps){
        setInitialIndex(index)
        setMediaType(media.type)
        setIsGaleryModalOpen(true)
    }

    function handleOpenGallery(media: MediaProps){

        if(media.type === 'video'){
            media.link &&
            setMediaUrl(media.link)
            setIstrailerModalOpen(true)
        } else if(media.type === 'image'){
            // media.link &&
            setMediaUrl(media.image)
            setIsImageModalOpen(true)
        }
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

                <section className="content">
                    <button onClick={() => handleSetList()}>
                        {isGameAlreadyAdded({gameId: selectedGame.id, gameList: gameList}) ?
                            'Remover da Lista'
                            :
                            'Adicionar a Lista'
                        }
                    </button>
                </section>
            </div>
            
        </PageContainer>
        )
    )
}