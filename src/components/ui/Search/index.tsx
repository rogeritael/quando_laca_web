'use client'
import Image from "next/image";
import { SearchComponent } from "./styles";
import SearchIcon from "@/assets/icons/Search.png";

interface SearchProps {

}

export function Search(props : SearchProps){
    return(
        <SearchComponent>
            <input type="text" placeholder="encontre um jogo..." />
            <Image
                src={SearchIcon}
                alt="search icon"
            />
        </SearchComponent>
    )
}