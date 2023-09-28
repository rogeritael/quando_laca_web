import Image from "next/image";
import { TrailerComponent } from "./styles";
import player from '@/assets/icons/player.svg'
import { getVideoId } from "@/utils/getVideoId";
import { useRouter } from "next/navigation";
import { trailers } from "@/mocks/trailers";

interface TrailerProps {
    videoUrl: string;
    setTrailerUrl: (param: string) => void;
    setIsModalOpen: (param: boolean) => void;
    animationDelay: number;
}


export function Trailer({ videoUrl, setTrailerUrl, setIsModalOpen, animationDelay } : TrailerProps){
    const router = useRouter()

    async function handleClick(){
        // setTrailerUrl(videoUrl)
        // setIsModalOpen(true)
        let screenWidth = window.screen.width;
        if(screenWidth > 425){
            setTrailerUrl(videoUrl)
            setIsModalOpen(true)
        } else {
            router.push(`/trailers/${getVideoId(videoUrl)}`)
        }
        
    }

    return(
        <TrailerComponent onClick={() => handleClick()} animationDelay={animationDelay}>
            <Image width={400} height={400} src={`https://img.youtube.com/vi/${getVideoId(videoUrl)}/mqdefault.jpg`} alt="trailer do game" />
            <Image src={player} alt="ícone de player" className="player_icon" />
        </TrailerComponent>
    )
}