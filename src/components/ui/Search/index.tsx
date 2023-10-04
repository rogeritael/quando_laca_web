'use client'
import Image from "next/image";
import { SearchComponent } from "./styles";
import SearchIcon from "@/assets/icons/Search.png";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface SearchProps {

}

export function Search(props : SearchProps){
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
          router.push(`/Search?term=${searchTerm}`);
        }
      };
    
    return(
        <SearchComponent>
            <input onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="encontre um jogo..." />
            <Image
                src={SearchIcon}
                alt="search icon"
            />
        </SearchComponent>
    )
}