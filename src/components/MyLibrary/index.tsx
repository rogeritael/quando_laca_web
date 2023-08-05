import Image from "next/image";
import { SmallGameCard } from "../ui/SmallGameCard";
import { LibraryComponent } from "./styles";
import arrow from '@/assets/icons/arrow_v2.svg';

interface MyLibraryProps {

}
export function MyLibrary(props : MyLibraryProps){
    return(
        <LibraryComponent>
            <h1>Biblioteca</h1>
            <div className="games_container">
                <SmallGameCard data_lancamento="22 de nov de 2023" nome="Resident Evil 4" />
                <SmallGameCard data_lancamento="22 de nov de 2023" nome="Resident Evil 4" />
                <SmallGameCard data_lancamento="22 de nov de 2023" nome="Resident Evil 4" />
            </div>
            <a href="">
                <p>Ver biblioteca completa</p>
                <Image src={arrow} alt="seta ver todos os jogos adicionados aos favoritos" />
            </a>
        </LibraryComponent>
    )
}