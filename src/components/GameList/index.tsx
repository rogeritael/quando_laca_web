import { useEffect, useRef, useState } from "react";
import { Title } from "../ui/Title";
import { GameListContainer } from "./styles";
import { Carousel } from "../ui/Carousel";

interface GameListProps {
    title: string;
    children: React.ReactNode;
    url: string;
}

export function GameList({ children, title, url } : GameListProps){
    const [railPosition, setRailPosition] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const railRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if(carouselRef.current)
            setCarouselWidth(carouselRef.current?.offsetWidth)
    },[])

    // Função para mover o rail para a esquerda
    const before = () => {
        if (railRef.current) {
            const maxRailPosition = -railRef.current.offsetWidth + carouselWidth;
            if (railPosition > maxRailPosition) {
                setRailPosition(railPosition - carouselWidth);
            }
        }
    };

    // Função para mover o rail para a direita
    const next = () => {
        if (railRef.current && railPosition < 0) {
            setRailPosition(railPosition + carouselWidth);
        }
    };

    return(
        <GameListContainer>
            <Carousel title={title} maxWidth="100%">
                {children}
            </Carousel>
        </GameListContainer>
    )
}