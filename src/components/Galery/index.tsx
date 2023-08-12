import { GaleryItem } from "../GaleryItem";
import { Title } from "../ui/Title";
import { GaleryContainer } from "./styles";

import imagem_teste1 from '@/assets/galery(exc)/a1.jpg';
import imagem_teste2 from '@/assets/galery(exc)/a2.webp';
import imagem_teste3 from '@/assets/galery(exc)/a3.jpg';
import imagem_teste4 from '@/assets/galery(exc)/a4.jpg';
import imagem_teste5 from '@/assets/galery(exc)/a5.jpg';
import imagem_teste6 from '@/assets/galery(exc)/a6.jpg';
import imagem_teste7 from '@/assets/galery(exc)/a7.jpg';
import imagem_teste8 from '@/assets/galery(exc)/a8.jpg';
import imagem_teste9 from '@/assets/galery(exc)/a9.jpg';
// const images = [imagem_teste1,imagem_teste2,imagem_teste3,imagem_teste1]

interface GaleryProps {
    images: string[]
}

export function Galery({ images } : GaleryProps){
    return(
        <GaleryContainer>
            <Title content="Galeria" controllers={true}/>
            <div className="carousel">
                <div className="rail">
                    {images.map((image) => (
                        <GaleryItem key={image} image_url={image} />
                    ))}
                </div>
            </div>
        </GaleryContainer>
    )
}