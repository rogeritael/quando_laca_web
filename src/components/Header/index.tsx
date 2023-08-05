'use client'
import { CategoryList } from "../CategoryList/CategoryList";
import { Logo } from "../ui/Logo";
import { Search } from "../ui/Search";
import { HeaderComponent } from "./styles";

interface HeaderProps {

}
export function Header(props : HeaderProps){
    return(
        <HeaderComponent>
            <Search />
            <CategoryList />
            <Logo />
        </HeaderComponent>
    )
}