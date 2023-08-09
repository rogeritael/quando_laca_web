import Image from "next/image";
import { GameHeaderContainer } from "./styles";

import cover from '@/assets/jogo_exemplo.png'
import game from '@/assets/jogo_exemplo.png'

interface GameHeaderProps {

}

export function GameHeader(props : GameHeaderProps){
    return(
        <GameHeaderContainer>
            <figure className="cover">
                <Image src={cover} alt="capa do jogo" />
                <figure className="game_image">
                    <Image src={game} alt="capa do jogo" />
                </figure>
            </figure>
            
            <div className="info_container">
                <div className="titles">
                    <h2>FIFA 2023</h2>
                    <p>Faltam 14 dias</p>
                </div>
                <div className="buttons">
                    {/* <button>Comprar</button>
                    <button>Favoritar</button> */}
                </div>
            </div>
        </GameHeaderContainer>
    )
}