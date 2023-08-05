'use client'
import Image from "next/image";
import { Category } from "../ui/Category";
import { CategoryListContainer } from "./styles";
import arrow from "@/assets/icons/arrow.svg";

interface CategoryListProps {

}
export function CategoryList(props : CategoryListProps){
    return(
        <CategoryListContainer>
            <span className="controller left-controller">
                <Image src={arrow} alt="seta voltar slider" />
            </span>
            <div className="slider">
                <Category label="survivor-horror" />
                <Category label="aventura" />
                <Category label="estratégia" />
                <Category label="corrida" />
                <Category label="luta" />
            </div>
            <span className="controller right-controller">
                <Image src={arrow} alt="seta avançar slider" />
            </span>
        </CategoryListContainer>
    )
}