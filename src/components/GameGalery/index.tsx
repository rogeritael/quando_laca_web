import Image from "next/image";
import { GaleryContainer } from "./styles";
import { useState } from 'react';
import { useEffect } from 'react';

interface GameGaleryProps {
    images: string[];
}

export function GameGalery({ images } : GameGaleryProps){
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {

        setCurrentImage(images[0])

    }, [])

    return(
        <GaleryContainer>
            <figure className="main_image">
                <Image width={820} height={460} src={currentImage} alt="imagem selecionada do jogo"/>
            </figure>
            <div className="mini_images_container">
                {images.map((image, index) => (
                    <figure key={index}>
                        <Image width={300} height={200} src={image} alt="imagem do jogo" />
                    </figure>
                ))}
            </div>
        </GaleryContainer>
    )
}