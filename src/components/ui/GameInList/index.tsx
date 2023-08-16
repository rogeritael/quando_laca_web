import Image from "next/image";
import { GameListContainer } from "./styles";
import { countdown } from "@/utils/countdown";
import { AiOutlineDelete } from 'react-icons/ai';
import Link from "next/link";

interface GameInListProps {
    name: string;
    id: string;
    image: string;
    developer: string;
    release_date: Date;
}

export function GameInList({ name, id, image, developer, release_date } : GameInListProps){
    return(
        <GameListContainer>
            <Image width={200} height={300} src={image} alt={`imagem do jogo ${name}`}></Image>
            <div className="infos">
                <h2>{name}</h2>
                <span>{developer}</span>
                <p>{countdown(release_date)}</p>
            </div>
            <div className="buttons">
                <button>
                    <AiOutlineDelete />
                </button>
                <Link href={`/About?id=${id}`}>
                    <button>
                        Ver Mais
                    </button>
                </Link>
            </div>
        </GameListContainer>
    )
}