import Image from "next/image";
import { ImageModalContainer } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface ImageModalProps {
    image: string;
    isOpen: boolean;
    setIsOpen: (param: boolean) => void;
}

export function ImageModal({ image, isOpen, setIsOpen } : ImageModalProps){
    return(
        isOpen &&
        <ImageModalContainer>
            <span className="background" onClick={() => setIsOpen(false)} />
            <AiOutlineCloseCircle onClick={() => setIsOpen(false)} />
            <figure className="image_container">
                <Image
                    layout='fill'
                    objectFit='contain'
                    src={image}
                    alt="Imagem da galeria de imagens do jogo"
                />
            </figure>
        </ImageModalContainer>
    )
}