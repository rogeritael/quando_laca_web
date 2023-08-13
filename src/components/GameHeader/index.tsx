import Image from "next/image";
import { GameHeaderContainer } from "./styles";

import cover from '@/assets/jogo_exemplo.png'
import game from '@/assets/jogo_exemplo.png'

interface GameHeaderProps {
    image: string; 
    name: string;
    countdown: string;
}

export function GameHeader({ image, name, countdown } : GameHeaderProps){
    return(
        <GameHeaderContainer>
            <figure className="cover">
                <Image width={200} height={300} src={image} alt="capa do jogo" />
                <figure className="game_image">
                    <Image width={200} height={300} src={image} alt="capa do jogo" />
                </figure>
            </figure>
            
            <div className="info_container">
                <div className="titles">
                    <h2>{name}</h2>
                    <p>{countdown}</p>
                </div>
                <div className="buttons">
                    {/* <button>Comprar</button>
                    <button>Favoritar</button> */}
                </div>
            </div>
        </GameHeaderContainer>
    )
}