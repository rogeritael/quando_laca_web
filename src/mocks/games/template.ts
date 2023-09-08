import { GameProps, category } from "../games"

export const game: GameProps = {

    id: "",
    name: "",
    description: "",
    image: "",
    price: 100,
    media: [
        {type: 'image', image: ''},
    ],
    developer: "",
    platforms: [""],
    releaseDate: new Date(2023, 8-1, 10),
    category: [
        {id: category[0].id, name: category[0].name},
    ],

}