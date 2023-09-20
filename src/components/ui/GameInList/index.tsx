import Image from "next/image";
import { GameListContainer } from "./styles";
import { countdown } from "@/utils/countdown";
import { AiOutlineDelete } from 'react-icons/ai';
import Link from "next/link";
import { useRouter } from 'next/navigation'

interface GameInListProps {
    name: string;
    id: string;
    image: string;
    developer: string;
    release_date: Date;
    removeGame: (id: string) => void;
    animationDelay: number;
}

export function GameInList({ name, id, image, developer, release_date, removeGame, animationDelay } : GameInListProps){
    const router = useRouter()

    function handleRedirect(id: string){
        router.push(`/game/${id}`, { scroll: false })
    }

    return(
        <GameListContainer animationDelay={animationDelay}>
            <Image width={200} height={300} src={image} alt={`imagem do jogo ${name}`} onClick={() => handleRedirect(id)} ></Image>
            <div className="infos" onClick={() => handleRedirect(id)}>
                <h2>{name}</h2>
                <span>{developer}</span>
                <p>{countdown(release_date)}</p>
            </div>
            <div className="buttons">
                <button onClick={() => removeGame(id)}>
                    <AiOutlineDelete />
                </button>
                <Link href={`/game/${id}`}>
                    <button>
                        Ver Mais
                    </button>
                </Link>
            </div>
        </GameListContainer>
    )
}