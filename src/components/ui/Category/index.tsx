import { CategoryComponent } from "./styles";

interface CategoryProps {
    label: string;
}
export function Category(props : CategoryProps){
    return(
        <CategoryComponent>
            {props.label}
        </CategoryComponent>
    )
}