import Image from "next/image";
import { GameComponent } from "./styles";

import exemplo from '@/assets/jogo_exemplo.png'
import Link from "next/link";
import { useState } from "react";
import defaultImage from '@/assets/image_error.svg'

interface GameProps {
    name: string;
    image: string;
    platforms: string[];
    isPopular: boolean;
    id: string;
}

export function Game({ name, image, platforms, isPopular, id } : GameProps){
    const [imageSrc, setImageSrc] = useState<string>(image);

    function handleImageError() {
      setImageSrc(defaultImage.src);
    };

    return(
        <Link href={`/About?id=${id}`}>
            <GameComponent>
                <figure>
                    <Image width={100} height={200} src={imageSrc} onError={() => handleImageError()} alt="capa do jogo" />
                </figure>
                <div className="about">
                    <ul>
                        {platforms.map((platform, index) => index < 2 &&(
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