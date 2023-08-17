import Link from "next/link";
import { ButtonContainer } from "./styles";

interface GameButtonsProps {
    game_id: string;
    purchase_link?: string;
}

export function GameButtons({ game_id, purchase_link } : GameButtonsProps){
    const link_de_compra = purchase_link ? purchase_link : '/' //EXCLUIR QUANDO TIVER OS LINKS REAIS
    
    return(
        <ButtonContainer>
            <button>Favoritar</button>
            <Link href={link_de_compra}>Comprar</Link>
        </ButtonContainer>
    )
}