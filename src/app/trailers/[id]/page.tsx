'use client'

import Image from "next/image";
import { TrailersContainer } from "./styles";
import back_icon from '@/assets/icons/title_reverse_arrow.svg'
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getVideoId } from "@/utils/getVideoId";




interface PageProps {
    params: {
        id: string
    }
}

import { trailers } from "@/mocks/trailers";

export default function Trailers({ params: { id } }: PageProps){
    const embedUrl = `https://www.youtube.com/embed/${id}`;
    const img_excluir = 'https://i.ytimg.com/vi/U4kAhlDwqAM/hqdefault.jpg?sqp=-oaymwEpCNACELwBSFryq4qpAxsIARUAAIhCGAHYAQHiAQwIGhACGAYgATgBQAE=&rs=AOn4CLDy1ZEbyiYGuy1CH4YtXLDd3g2ESQ'

    return(
        <TrailersContainer>
            <div className="header">
                <Image src={back_icon} width={200} height={200} alt="voltar para a página anterior" />
                <Logo />
            </div>
            <div className="main_trailer">
                <iframe
                    src={embedUrl}
                    title="Trailer do jogo"
                    allowFullScreen
                ></iframe>
                <h2>SpiderMan 2 - PS5 - Announcement Trailer 2023 </h2>
            </div>
            
            <div className="trailers_section">
                {/* MAP: renderize se for diferente do trailer brogmain */}
                <div className="rail">
                    <Link href={'/'} className="mini_trailer">
                        <figure>
                            <Image width={500} height={500} src={img_excluir} alt="trailer" />
                        </figure>
                        <div className="infos">
                            <p>Lies of P Announcement Trailer</p>
                            <span>Assistir agora</span>
                        </div>
                    </Link>

                    <Link href={'/'} className="mini_trailer">
                        <figure>
                            <Image width={500} height={500} src={img_excluir} alt="trailer" />
                        </figure>
                        <div className="infos">
                            <p>Lies of P Announcement Trailer</p>
                            <span>Assistir agora</span>
                        </div>
                    </Link>

                    <Link href={'/'} className="mini_trailer">
                        <figure>
                            <Image width={500} height={500} src={img_excluir} alt="trailer" />
                        </figure>
                        <div className="infos">
                            <p>Lies of P Announcement Trailer</p>
                            <span>Assistir agora</span>
                        </div>
                    </Link>

                    <Link href={'/'} className="mini_trailer">
                        <figure>
                            <Image width={500} height={500} src={img_excluir} alt="trailer" />
                        </figure>
                        <div className="infos">
                            <p>Lies of P Announcement Trailer</p>
                            <span>Assistir agora</span>
                        </div>
                    </Link>

                    <Link href={'/'} className="mini_trailer">
                        <figure>
                            <Image width={500} height={500} src={img_excluir} alt="trailer" />
                        </figure>
                        <div className="infos">
                            <p>Lies of P Announcement Trailer</p>
                            <span>Assistir agora</span>
                        </div>
                    </Link>
                </div>
            </div>
        </TrailersContainer>
    )
}