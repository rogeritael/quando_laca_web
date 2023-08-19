import React, { useEffect, useRef, useState } from "react"
import { SliderContainer } from "./styles"

import arrow from '@/assets/icons/arrow.svg'
import Image from "next/image"

interface CarouselProps {
    children: React.ReactNode
}
export function Carousel({ children } : CarouselProps){
    const [railPosition, setRailPosition] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [scroll, setScroll] = useState(0)
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
                const newPosition = Math.max(railPosition - carouselWidth, maxRailPosition);
                setRailPosition(newPosition);
        }
    }
  };

  // Função para mover o rail para a direita
  const next = () => {
    if (railRef.current && railPosition < 0) {
        const maxRailPosition = 0;
        const newPosition = Math.min(railPosition + carouselWidth, maxRailPosition);
        setRailPosition(newPosition);
    }
  };

    return(
        <SliderContainer>
            <div className="carousel_header">
                <h2>Midias</h2>
                <div className="controllers">
                    <Image src={arrow} alt="voltar slider" onClick={() => next()} />
                    <Image src={arrow} alt="avançar slider" onClick={() => before()} />
                </div> 
            </div>
            <div className="carousel" ref={carouselRef}>
                <div className="rail" ref={railRef} style={{ transform: `translateX(${railPosition}px)`}}>
                    {children}
                </div>
            </div>
        </SliderContainer>
    )
}