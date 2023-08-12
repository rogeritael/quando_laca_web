import Image from "next/image";
import { GaleryItemComponent } from "./styles";

interface GaleryItemProps {
    image_url: any;
    // ----------------- MUDAR O TYPE ANY
    // ----------------- MUDAR O TYPE ANY
    // ----------------- MUDAR O TYPE ANY
}

export function GaleryItem({ image_url } : GaleryItemProps){
    return(
        <GaleryItemComponent>
            <Image width={400} height={250} src={image_url} alt="imagem da galeria do jogo"/>
        </GaleryItemComponent>
    )
}