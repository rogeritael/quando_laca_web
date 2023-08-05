interface Category {
    id: string;
    name: string;
}

interface GameProps {
    name: string;
    releaseDate: Date;
    description: string;
    price: number;
    image: string;
    category: Category[];
}

const category: Category[] = [
    {
        id: '0',
        name: 'terror'
    },
    {
        id: '1',
        name: 'estratégia'
    },
    {
        id: '2',
        name: 'aventura'
    },
];

export const gameList: GameProps[] = [
    {
        name: "Resident Evil 4 Remake",
        description: "Jogo do ano",
        image: "https://",
        price: 100,
        releaseDate: new Date(2020, 1, 1),
        category: [
            {id: category[0].id, name: category[0].name},
            {id: category[2].id, name: category[2].name},
        ],
    },
    {
        name: "Hogwarts Legacy",
        description: "Jogo do ano",
        image: "https://",
        price: 90,
        releaseDate: new Date(2020, 1, 1),
        category: [
            {id: category[2].id, name: category[2].name},
            {id: category[3].id, name: category[3].name},
        ],
    },
    {
        name: "Star Wars: Jedi Survivor",
        description: "Jogo do ano",
        image: "https://",
        price: 120,
        releaseDate: new Date(2020, 1, 1),
        category: [
            {id: category[3].id, name: category[3].name},
        ],
    },
]