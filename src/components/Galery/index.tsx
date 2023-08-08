import { GaleryItem } from "../GaleryItem";
import { Title } from "../ui/Title";
import { GaleryContainer } from "./styles";

import imagem_teste from '@/assets/cover_exemplo.png';

interface GaleryProps {

}
export function Galery(props : GaleryProps){
    return(
        <GaleryContainer>
            <Title content="Galeria" />
            <div className="carousel">
                <div className="rail">
                    <GaleryItem image_url={imagem_teste} />
                    <GaleryItem image_url={imagem_teste} />
                    <GaleryItem image_url={imagem_teste} />
                    <GaleryItem image_url={imagem_teste} />
                </div>
            </div>
        </GaleryContainer>
    )
}