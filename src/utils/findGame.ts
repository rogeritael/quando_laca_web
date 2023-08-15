import { gameList as games } from "@/mocks/games";
import { GameProps } from "@/mocks/games";

function findByName(name: string): GameProps[] {
    const filteredGames = games.filter((game) =>
        game.name.toLowerCase().includes(name.toLowerCase())
    );

    return filteredGames;
}

function findByCategory(category: string): GameProps[] {
    const filteredGames = games.filter((game) =>
        game.category.some((cat) => cat.name.toLowerCase().includes(category.toLowerCase()))
    );

    return filteredGames;
}

export function findGame(term: string){
    const gamesByCategory = findByCategory(term);
    const gamesByName = findByName(term);

    const results = Array.from(new Set([...gamesByCategory, ...gamesByName]));

    return results;
}