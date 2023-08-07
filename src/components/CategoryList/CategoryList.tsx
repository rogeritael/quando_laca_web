'use client'
import Image from "next/image";
import { Category } from "../ui/Category";
import { CategoryListContainer } from "./styles";
import arrow from "@/assets/icons/arrow.svg";
import { useState, useRef, useEffect } from 'react';

interface CategoryListProps {

}
export function CategoryList(props : CategoryListProps){
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
        <CategoryListContainer>
            <span className="controller left-controller" onClick={() => before()}>
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
            <span className="controller right-controller" onClick={() => next()}>
                <Image src={arrow} alt="seta avançar slider" />
            </span>
        </CategoryListContainer>
    )
}