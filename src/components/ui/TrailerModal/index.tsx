import { getVideoId } from "@/utils/getVideoId";
import { ModalContainer } from "./styles";
import { useEffect, useRef, useState } from 'react';

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
            <iframe
                ref={videoRef}
                // width="640"
                // height="360"
                src={embedUrl}
                title="Trailer do jogo"
                allowFullScreen
            ></iframe>
        </ModalContainer>
    )
}