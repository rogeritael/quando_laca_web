import Link from "next/link";
import { CategoryComponent } from "./styles";
import { useContext } from 'react';
import { Context } from "@/context/UserContext";

interface CategoryProps {
    label: string;
}
export function Category(props : CategoryProps){
    const { setSearchTerm } = useContext(Context)

    return(
        <Link href={`/Search?term=${props.label}`} onClick={() => setSearchTerm(props.label)}>
        <CategoryComponent>
            {props.label}
        </CategoryComponent>
        </Link>
    )
}