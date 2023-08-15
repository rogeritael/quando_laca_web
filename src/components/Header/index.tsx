'use client'
import Image from "next/image";
import { CategoryList } from "../CategoryList/CategoryList";
import { Logo } from "../ui/Logo";
import { Search } from "../ui/Search";
import { HeaderComponent } from "./styles";

import bell from '@/assets/icons/bell.svg';

interface HeaderProps {
    className?: string;
}

export function Header( className : HeaderProps){
    return(
        <HeaderComponent>
            <Search />
            <CategoryList />
        </HeaderComponent>
    )
}