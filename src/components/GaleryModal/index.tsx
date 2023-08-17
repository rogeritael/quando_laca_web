import Image from "next/image";
import { GaleryModalContainer } from "./styles";
import arrow from '@/assets/icons/arrow.svg'
import { useState } from "react";
import { isAVideoLink } from "@/utils/isAVideoLink";
import { getVideoId } from "@/utils/getVideoId";

interface GaleryModalProps {
    images: string[];
    initial_index?: string;
    isGaleryModalOpen: boolean;
    setIsGaleryModalOpen: (param: boolean) => void;
}

export function GaleryModal({ images, isGaleryModalOpen, setIsGaleryModalOpen, initial_index } : GaleryModalProps){
    const [mainImage, setMainImage] = useState(images[1]);
    


    return(
        isGaleryModalOpen && 
        <GaleryModalContainer>
            <span className="background" onClick={() => setIsGaleryModalOpen(false)}/>
            <div className="galery_container">
                <div className="title">
                    <h2>Galeria</h2>
                    <span>(3 de {images.length})</span>
                </div>
                <div className="display">
                    <div className="display_rail">
                        <Image width={700} height={500} src={mainImage} alt="imagem do jogo" />
                    </div>
                </div>
                <div className="galery_carousel">
                    
                    <figure><Image className="arrow" src={arrow} alt="voltar slider"/></figure>
                    <figure><Image className="arrow" src={arrow} alt="avançar slider"/></figure>
                    <div className="mini_rail">
                        {images.map((image, index) => (
                            <Image onClick={() => setMainImage(image)} width={300} height={200} key={index} src={image} alt="imagem do jogo" />
                        ))}
                    </div>
                </div>
            </div>
        </GaleryModalContainer>
    )
}