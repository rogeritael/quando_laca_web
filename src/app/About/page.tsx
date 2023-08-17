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
import { gamesService } from "@/services/gameService";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/formatDate";
import { countdown } from "@/utils/countdown";
import { GameButtons } from "@/components/GameButtons";
import { GameGalery } from "@/components/GameGalery";
import Link from "next/link";
import { isAVideoLink } from "@/utils/isAVideoLink";
import { getVideoId } from "@/utils/getVideoId";


interface AboutProps {

}

export default function About(props : AboutProps){
    const [selectedGame, setSelectedGame] = useState<GameProps>()
    // const { findById } = useGames()

    useEffect(() => {

        (async () => {
            const url = window.location.href;
            const id = url.split('id=')[1];

            if(typeof id === 'string'){
                const game = await gamesService().findById(id)

                if(game)
                    setSelectedGame(game)
            }
        })()
        
    }, [])

     return(
        selectedGame && (    
        <PageContainer>
            <SideMenu />
            
            <div className="game_section">
                {/* <div className="header">
                    <Search />
                    <div className="logo_container">
                        <Logo />
                        <Image src={bell} alt="notificações" />
                    </div>
                </div> */}

                <figure className="background_image">
                    <span className="image_mask"/>
                    <Image width={1200} height={1200} src={selectedGame.images[2]} alt="imagem de fundo do jogo"/>
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
                        <button>Adicionar a Lista</button>
                        <Link href="/">Comprar Jogo</Link>
                    </div>
                </div>
                <div className="image_galery">
                    {selectedGame.images.map((image, index) => (
                        
                        <figure key={index}>
                            {isAVideoLink(image) ? (
                                <Image width={270} height={150} src={image} alt="imagem da galeria do jogo"/>
                            ):(
                                <iframe
                                    width="640"
                                    height="360"
                                    src={`https://www.youtube.com/embed/${getVideoId(image)}`}
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