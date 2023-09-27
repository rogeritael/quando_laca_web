import { getVideoId } from "@/utils/getVideoId";
import { ModalContainer } from "./styles";
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Player } from "../Player";
import backArrow from '@/assets/icons/title_reverse_arrow.svg'
import Image from "next/image";
import { Logo } from "../Logo";
import { IoIosArrowUp } from 'react-icons/io'
import Link from "next/link";

interface TrailerModalProps {
    videoUrl: string;
    isOpen: boolean;
    setIsOpen: (param: boolean) => void;
}

export function TrailerModal({ videoUrl, isOpen, setIsOpen } : TrailerModalProps){
    const embedUrl = `https://www.youtube.com/embed/${getVideoId(videoUrl)}`;
    const videoRef = useRef<HTMLIFrameElement | null>(null);

    function handleCloseModal(){
        setIsOpen(false)
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
            <div className="show_hide">
                <IoIosArrowUp />
                <p>ver mais</p>
            </div>
            <div className="related">
                <div className="rail">
                    <figure className="related_video" >
                        <Image height={120} width={213} alt="capa do trailer" src='https://img.youtube.com/vi/qIQ3xNqkVC4/hqdefault.jpg' />
                    </figure>
                    <figure className="related_video" >
                        <Image height={120} width={213} alt="capa do trailer" src='https://img.youtube.com/vi/qIQ3xNqkVC4/hqdefault.jpg' />
                    </figure>
                    <figure className="related_video" >
                        <Image height={120} width={213} alt="capa do trailer" src='https://img.youtube.com/vi/qIQ3xNqkVC4/hqdefault.jpg' />
                    </figure>
                    <figure className="related_video" >
                        <Image height={120} width={213} alt="capa do trailer" src='https://img.youtube.com/vi/qIQ3xNqkVC4/hqdefault.jpg' />
                    </figure>
                    <figure className="related_video" >
                        <Image height={120} width={213} alt="capa do trailer" src='https://img.youtube.com/vi/qIQ3xNqkVC4/hqdefault.jpg' />
                    </figure>
                    <figure className="related_video" >
                        <Image height={120} width={213} alt="capa do trailer" src='https://img.youtube.com/vi/qIQ3xNqkVC4/hqdefault.jpg' />
                    </figure>
                    <figure className="related_video" >
                        <Image height={120} width={213} alt="capa do trailer" src='https://img.youtube.com/vi/qIQ3xNqkVC4/hqdefault.jpg' />
                    </figure>
                </div>
            </div>
        </ModalContainer>
    )
}