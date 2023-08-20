import { SmallGameCard } from "../ui/SmallGameCard";
import { Title } from "../ui/Title";
import { PopularGamesContainer } from "./styles";
import { GameProps } from "@/mocks/games";

interface PopularGamesProps {
    games: GameProps[];
    url: string;
    title?: string;
}

export function PopularGames({ games, url, title } : PopularGamesProps){
    return(
        <div>
            <Title content={title ? title : 'populares'} url={url} />
            <PopularGamesContainer>
                {games.map((game, index) => index < 4 && (
                    <SmallGameCard key={game.id} id={game.id} v2={true} image={game.image} release_date={game.releaseDate} name={game.name} />
                ))}
            </PopularGamesContainer>
        </div>
    )
}