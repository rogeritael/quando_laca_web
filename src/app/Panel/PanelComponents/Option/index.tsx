import Link from "next/link";
import { OptionComponent } from "./styles";

interface OptionProps {
    option: string;
    link: string;
}

export function Option({ option, link }: OptionProps){
    return (
        <OptionComponent>
            <Link href={link}>
                {option}
            </Link>
        </OptionComponent>
    )
}