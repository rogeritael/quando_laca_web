import { SmallGameCard } from "../ui/SmallGameCard";
import { Title } from "../ui/Title";
import { PopularGamesContainer } from "./styles";

interface PopularGamesProps {

}
export function PopularGames(props : PopularGamesProps){
    return(
        <div>
            <Title content="Populares" />
            <PopularGamesContainer>
                <SmallGameCard v2={true} data_lancamento="PS5 • Xbox Series S/X" nome="Resident Evil 4" />
                <SmallGameCard v2={true} data_lancamento="PS5 • Xbox Series S/X" nome="Resident Evil 4" />
                <SmallGameCard v2={true} data_lancamento="PS5 • Xbox Series S/X" nome="Resident Evil 4" />
                <SmallGameCard v2={true} data_lancamento="PS5 • Xbox Series S/X" nome="Resident Evil 4" />
            </PopularGamesContainer>
        </div>
    )
}