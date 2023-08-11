import Image from "next/image";
import { GameComponent } from "./styles";

import exemplo from '@/assets/jogo_exemplo.png'
import Link from "next/link";

interface GameProps {
    name: string;
    image: string;
    platforms: string[];
    isPopular: boolean;
}

export function Game({ name, image, platforms, isPopular } : GameProps){
    return(
        <Link href='/About'>
            <GameComponent>
                <figure>
                    <Image width={100} height={200} src={image} alt="capa do jogo" />
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
        </Link>
    )
}