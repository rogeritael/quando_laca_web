'use client'

import Image from "next/image";
import { TrailersContainer } from "./styles";
import back_icon from '@/assets/icons/title_reverse_arrow.svg'
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { trailers } from "@/mocks/trailers";
import { getVideoId } from "@/utils/getVideoId";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MediaProps, gameList } from "@/mocks/games";


interface PageProps {
    params: {
        id: string
    }
}

export default function Trailers({ params: { id } }: PageProps){
    const embedUrl = `https://www.youtube.com/embed/${id}`;
    const router = useRouter();
    const [medias, setMedias] = useState<MediaProps[]>([])

    function backPage(){
        router.push('/')
    }

    useEffect(() => {
        const url = window.location.href
        if(url.includes('game=')){
            const gameId = url.split('game=')[1]
            const game = gameList.find((game) => game.id === gameId)
            game?.media&&
            setMedias(game?.media)
        }

    }, [])

    return(
        <TrailersContainer>
            <div className="header">
                <Image src={back_icon} width={200} height={200} alt="voltar para a página anterior" onClick={() => backPage()} />
                <Logo />
            </div>
            <div className="main_trailer">
                <iframe
                    src={embedUrl}
                    title="Trailer do jogo"
                    allowFullScreen
                ></iframe>
                <h2>{trailers.find((trailer) => trailer.video_url.split('/')[trailer.video_url.split('/').length - 1] === id)?.name}</h2>
            </div>
            
            <div className="trailers_section">

                <div className="rail">
                    {medias.length > 0 && medias.map((trailer, index) => trailer.link && (
                        <Link key={index} href={`/trailers/${getVideoId(trailer.link!)}`} className="mini_trailer">
                            <figure>
                                <Image width={500} height={500} src={`https://i.ytimg.com/vi/${getVideoId(trailer.link!)}/hqdefault.jpg`} alt="trailer" />
                            </figure>
                            <div className="infos">
                                <p>Trailer</p>
                                <span>Assistir agora</span>
                            </div>
                        </Link>
                    ))}


                    { medias.length < 1 && trailers.map((trailer, index) => (
                        <Link key={index} href={`/trailers/${getVideoId(trailer.video_url)}`} className="mini_trailer">
                            <figure>
                                <Image width={500} height={500} src={`https://i.ytimg.com/vi/${getVideoId(trailer.video_url)}/hqdefault.jpg`} alt="trailer" />
                            </figure>
                            <div className="infos">
                                <p>{trailer.name}</p>
                                <span>Assistir agora</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </TrailersContainer>
    )
}