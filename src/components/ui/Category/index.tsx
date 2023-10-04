import Link from "next/link";
import { CategoryComponent } from "./styles";
import { useContext } from 'react';
import { Context } from "@/context/UserContext";
import { useRouter } from "next/navigation";

interface CategoryProps {
    label: string;
}

export function Category(props : CategoryProps){
    const { setSearchTerm } = useContext(Context)
    const router = useRouter()

    function handleSearchCategory(){
        // alert('ss')
        setSearchTerm(props.label)
        router.push(`/Search?term=${props.label}`)
    }

    return(
        <CategoryComponent className="category" onClick={() => handleSearchCategory()}>
            {props.label}
        </CategoryComponent>
    )
}