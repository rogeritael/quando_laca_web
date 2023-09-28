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
import { useRouter } from 'next/navigation'

import title_reverse_arrow from '@/assets/icons/title_reverse_arrow.svg'
import { Category } from "@/components/ui/Category";
import trailer_player from '@/assets/icons/trailer_play_icon.svg'

import { SiPlaystation4, SiPlaystation5 } from 'react-icons/si'
import { BsNintendoSwitch, BsXbox, BsMicrosoft } from 'react-icons/bs'
import { formatDate } from "@/utils/formatDate";
import { platform } from "os";

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
    const [isLoading, setIsLoading] = useState(true)
    const { setFlashMessage } = useFlashMessage();
    const { createNotification } = useContext(Context)

    const [isTrailerModalOpen, setIstrailerModalOpen] = useState(false);
    const [mediaUrl, setMediaUrl] = useState('');
    const [medias, setMedias] = useState<MediaProps[]>([])
    const router = useRouter();

    

    useEffect(() => {

        const fetchData = async() => {
            const game = await gamesService().findById(id)

            if(game) {
                setSelectedGame(game)

                //background de acordo com o tamanho da tela
                let screenWidth = window.innerWidth;
                const medias = game.media;
                if(screenWidth > 425){
                    // game.media.map((media) => (
                    //     backgroundImage === '' &&
                    //         media.type === 'image' && setBackgroudImage(media.image)
                    // ))
                    setBackgroudImage(medias[medias.length -1].image)
                } else {
                    setBackgroudImage(medias[medias.length -2].image)
                }
                
                game.media[0].link &&
                setMediaUrl(game.media[0].link)

                setMedias(game.media)
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

    function handleClickPlay(){
        let screenWidth = window.screen.width;
        if(screenWidth > 425){
            setIstrailerModalOpen(true)
        } else {
            router.push(`/trailers/${getVideoId(mediaUrl)}?game=${selectedGame?.id}`)
        }
    }

    return(
        selectedGame && !isLoading && (
        <PageContainer>
            {/* <ImageModal isOpen={isImageModalOpen} image={mediaUrl} setIsOpen={setIsImageModalOpen} /> */}
            {/* <GaleryModal mediaType={mediaType} initialIndex={initialIndex} media={selectedGame.media} isGaleryModalOpen={isGaleryModalOpen} setIsGaleryModalOpen={setIsGaleryModalOpen}/> */}
            
            <SideMenu />

            <div className="game_section">
                <TrailerModal medias={medias} isOpen={isTrailerModalOpen} videoUrl={mediaUrl} setIsOpen={setIstrailerModalOpen} />

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
                        <h1><Link href={'/'}><Image src={title_reverse_arrow} alt="voltar para a página anterior" /></Link>{selectedGame.name}</h1>
                        <div className="group_info">
                            <Category label={selectedGame.category[0].name}></Category>
                            <p className="date">{formatDate(selectedGame.releaseDate)}</p>
                        </div>
                    </div>

                    <Image src={trailer_player} alt="player" className="player" onClick={() => handleClickPlay()}/>

                    <div className="bottom_infos">
                        <p className="countdown_text">
                            {countdown(selectedGame.releaseDate)}
                        </p>
                        <div className="platforms">
                            {selectedGame.platforms.map((platform) => {
                                switch(platform){
                                    case "PlayStation 4":
                                        return <SiPlaystation4 className="playstation" />
                                    case "PlayStation 5":
                                        return <SiPlaystation5 className="playstation" />
                                    case "PC (Microsoft Windows)":
                                        return <BsMicrosoft />
                                    case "Nintendo Switch":
                                        return <BsNintendoSwitch />
                                    case "Xbox Series X|S":
                                        return <BsXbox />
                                }
                            })}                         
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