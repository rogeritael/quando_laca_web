import { useEffect, useRef, useState } from "react";
import { Title } from "../ui/Title";
import { GameListContainer } from "./styles";

interface GameListProps {
    title: string,
    children: React.ReactNode
}

export function GameList({ children, title } : GameListProps){
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
            <Title content={title} controllers={true} onNext={next} onPrev={before} />
            <div className="carousel" ref={carouselRef}>
                <div className="rail" style={{ transform: `translateX(${railPosition}px)`}} ref={railRef}>
                    {children}
                </div>
            </div>
        </GameListContainer>
    )
}