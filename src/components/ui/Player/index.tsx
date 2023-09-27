import { useEffect, useRef, useState } from "react";
import { TrailerContainer } from "./styles";
import { getVideoId } from "@/utils/getVideoId";

interface PlayerProps {

}

interface PlayerState {
    playing: boolean;
}

function usePlayerState(player: HTMLVideoElement | null){
    const [playerState, setPlayerState] = useState<PlayerState>({
        playing: false,
    })

    function toggleVideoPlay(){
        setPlayerState({
            ...playerState, playing: !playerState.playing
        })
    }

    return { playerState, toggleVideoPlay }
}



export function Player(props : PlayerProps){
    // const $videoPlayer = useRef<HTMLIFrameElement>(null)
    // const { playerState, toggleVideoPlay } = usePlayerState($videoPlayer.current)

    // useEffect(() => {
    //     playerState.playing ? $videoPlayer.current!.play() : $videoPlayer.current!.pause()
    // }, [playerState.playing])

    // function teste(){
    //     $videoPlayer.current &&
    //     $videoPlayer.current.play()

    // }

    return(
        <TrailerContainer>
            
        </TrailerContainer>
    )
}