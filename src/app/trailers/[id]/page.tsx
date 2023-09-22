'use client'

import Image from "next/image";
import { TrailersContainer } from "./styles";
import back_icon from '@/assets/icons/title_reverse_arrow.svg'
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { trailers } from "@/mocks/trailers";
import { getVideoId } from "@/utils/getVideoId";
import { useRouter } from "next/navigation";

interface PageProps {
    params: {
        id: string
    }
}

export default function Trailers({ params: { id } }: PageProps){
    const embedUrl = `https://www.youtube.com/embed/${id}`;
    const router = useRouter();

    function backPage(){
        router.push('/')
    }

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
                {/* MAP: renderize se for diferente do trailer brogmain */}


                <div className="rail">

                    {trailers.map((trailer, index) => (
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