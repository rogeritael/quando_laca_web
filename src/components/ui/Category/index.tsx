import Link from "next/link";
import { CategoryComponent } from "./styles";

interface CategoryProps {
    label: string;
}
export function Category(props : CategoryProps){
    return(
        <Link href={`/Search?term=${props.label}`}>
        <CategoryComponent>
            {props.label}
        </CategoryComponent>
        </Link>
    )
}