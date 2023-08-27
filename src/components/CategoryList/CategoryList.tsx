'use client'
import Image from "next/image";
import { Category } from "../ui/Category";
import { CategoryListContainer } from "./styles";
import arrow from "@/assets/icons/arrow.svg";
import { useState, useRef, useEffect } from 'react';

interface CategoryListProps {
    className?: string;
}
export function CategoryList({ className }: CategoryListProps){
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
        <CategoryListContainer className={className}>
            <span className="controller left-controller" onClick={() => next()}>
                <Image src={arrow} alt="seta voltar slider" />
            </span>
            <div className="slider" ref={carouselRef}>
                <div className="rail" style={{ transform: `translateX(${railPosition}px)`}} ref={railRef}>
                    <Category label="survivor-horror" />
                    <Category label="aventura" />
                    <Category label="estratégia" />
                    <Category label="corrida" />
                    <Category label="RPG" />
                    <Category label="familia" />
                    <Category label="plataforma" />
                    <Category label="stealth" />
                    <Category label="puzzle" />
                    <Category label="terror" />
                </div>
            </div>
            <span className="controller right-controller" onClick={() => before()}>
                <Image src={arrow} alt="seta avançar slider" />
            </span>
        </CategoryListContainer>
    )
}