import Image from "next/image";
import { TrailerComponent } from "./styles";
import player from '@/assets/icons/player.svg'

interface TrailerProps {
    cover: string;
    videoUrl: string;
    setTrailerUrl: (param: string) => void;
    setIsModalOpen: (param: boolean) => void;
}


export function Trailer({ cover, videoUrl, setTrailerUrl, setIsModalOpen } : TrailerProps){

    function handleClick(){
        setTrailerUrl(videoUrl)
        setIsModalOpen(true)
    }

    return(
        <TrailerComponent onClick={() => handleClick()}>
            <Image width={400} height={400} src={cover} alt="trailer do game" />
            <Image src={player} alt="ícone de player" className="player_icon" />
        </TrailerComponent>
    )
}