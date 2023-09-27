import { getVideoId } from "@/utils/getVideoId";
import { ModalContainer } from "./styles";
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import backArrow from '@/assets/icons/title_reverse_arrow.svg'
import Image from "next/image";
import { Logo } from "../Logo";
import { IoIosArrowUp } from 'react-icons/io'
import Link from "next/link";
import { MediaProps } from "@/mocks/games";

interface TrailerModalProps {
    videoUrl: string;
    isOpen: boolean;
    setIsOpen: (param: boolean) => void;
    medias: MediaProps[]
}

export function TrailerModal({ videoUrl, isOpen, setIsOpen, medias } : TrailerModalProps){
    const [embedUrl, setEmbedUrl] = useState(`https://www.youtube.com/embed/${getVideoId(videoUrl)}`);
    const videoRef = useRef<HTMLIFrameElement | null>(null);
    const [relatedProps, setRelatedProps] = useState({
        isOpen: false,
        controlPosition: '20px',
        railPosition: '-100px'
    })

    function handleCloseModal(){
        
    }

    function handleToggleRelated(){
        relatedProps.isOpen ?
            setRelatedProps({
                isOpen: false,
                controlPosition: '20px',
                railPosition: '-100px'
            })
        :
            setRelatedProps({
                isOpen: true,
                controlPosition: '120px',
                railPosition: '0'
            })
    }

    function setCurrentTrailer(link: string){
        setEmbedUrl(`https://www.youtube.com/embed/${getVideoId(link)}`)
    }

    return(
        isOpen &&
        <ModalContainer isOpen={isOpen}>
            <span className="background" onClick={() => handleCloseModal()} />
            <div className="header">
                <Image alt="voltar" src={backArrow} onClick={() => setIsOpen(false)} />
                <Logo />
                <span />
            </div>
            <iframe
                ref={videoRef}
                src={`${embedUrl}?autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&showinfo=1&rel=0&fs=0&iv_load_policy=3`}
                title="Trailer do jogo"
                allowFullScreen
            ></iframe>
            <div style={{ bottom: relatedProps.controlPosition }} className="show_hide" onClick={() => handleToggleRelated()}>
                <IoIosArrowUp style={relatedProps.isOpen && { rotate: '180deg' }} />
                <p>{relatedProps.isOpen ? 'ver menos' : 'ver mais'}</p>
            </div>
            <div className="related" style={{bottom: relatedProps.railPosition}}>
                <div className="rail">
                    {medias.map((media, index) => (
                        media.link &&
                        <figure key={index} className="related_video" onClick={() => setCurrentTrailer(media.link!)}>
                            <Image height={120} width={213} alt="capa do trailer" src={`https://img.youtube.com/vi/${getVideoId(media.link)}/mqdefault.jpg`} />
                        </figure>
                    ))}
                </div>
            </div>
        </ModalContainer>
    )
}