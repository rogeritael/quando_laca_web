import Image from "next/image";
import { GameComponent } from "./styles";

import exemplo from '@/assets/jogo_exemplo.png'

interface GameProps {
    name: string;
    image: string;
    platforms: string[];
    isPopular: boolean;
}

export function Game({ name, image, platforms, isPopular } : GameProps){
    return(
        <GameComponent>
            <figure>
                <Image src={exemplo} alt="capa do jogo" />
            </figure>
            <div className="about">
                <ul>
                    {platforms.map((platform) => (
                        <li key={platform}>{platform}</li>
                    ))}
                </ul>
                <h1>{name}</h1>
                {isPopular &&(
                    <span>popular</span>
                )}
            </div>
        </GameComponent>
    )
}