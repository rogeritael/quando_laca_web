import Image from "next/image";
import { GaleryModalContainer } from "./styles";
import arrow from '@/assets/icons/arrow.svg'
import { useEffect, useState } from "react";
import { isAVideoLink } from "@/utils/isAVideoLink";
import { getVideoId } from "@/utils/getVideoId";

interface MediaProps {
    type: string;
    image: string;
    link?: string;
}

interface GaleryModalProps {
    media: MediaProps[];
    initialIndex: number;
    isGaleryModalOpen: boolean;
    setIsGaleryModalOpen: (param: boolean) => void;
    mediaType: string;
}

export function GaleryModal({ media, isGaleryModalOpen, setIsGaleryModalOpen, initialIndex, mediaType } : GaleryModalProps){
    const [mainImage, setMainImage] = useState('');
    const [type, setType] = useState<string>()
    
    useEffect(() => {
        const selectedImage = media[initialIndex].link ?? media[initialIndex].image;

        setMainImage(selectedImage)
        setType(mediaType)
    }, [initialIndex, media, mediaType])

    function handleSetMedia(media: MediaProps){
        if(media.type === 'image') {
            setMainImage(media.image)
            setType('image')
        } else if (media.type === 'video' && media.link){
             setMainImage(media.link)
             setType('video')
        }
    }

    return(
        isGaleryModalOpen && 
        <GaleryModalContainer>
            <span className="background" onClick={() => setIsGaleryModalOpen(false)}/>
            <div className="galery_container">
                <div className="title">
                    <h2>Galeria</h2>
                    <span>(3 de {media.length})</span>
                </div>
                <div className="display">
                    {type === 'image' ? (
                        <Image width={700} height={500} src={mainImage} alt="imagem do jogo" />
                    ) : (
                        <iframe
                            width="640"
                            height="360"
                            src={`https://www.youtube.com/embed/${getVideoId(mainImage)}`}
                            title="Trailer do jogo"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <div className="galery_carousel">
                    <figure><Image className="arrow" src={arrow} alt="voltar slider"/></figure>
                    <figure><Image className="arrow" src={arrow} alt="avançar slider"/></figure>
                    <div className="mini_rail">
                        {media.map((image, index) => (
                            <Image onClick={() => handleSetMedia(image)} width={300} height={200} key={index} src={image.image} alt="imagem do jogo" />
                        ))}
                    </div>
                </div>
            </div>
        </GaleryModalContainer>
    )
}