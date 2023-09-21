import { getVideoId } from "@/utils/getVideoId";
import { ModalContainer } from "./styles";
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";

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
            <AiOutlineCloseCircle onClick={() => setIsOpen(false)} />
            <iframe
                ref={videoRef}
                src={embedUrl}
                title="Trailer do jogo"
                allowFullScreen
            ></iframe>
        </ModalContainer>
    )
}