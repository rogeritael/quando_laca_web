import { GameProps, category } from "../games"

export const Tekken8: GameProps = {

    id: "tekken_8",
    name: "Tekken 8",
    description: `Sinta o poder de cada golpe em Tekken 8, o mais novo capítulo da lendária franquia de jogo de luta da Bandai Namco. 

    Usando o poder e realismo da Unreal Engine 5, Tekken 8 leva os jogos de luta a um novo nível, aproveitando toda a potência da nova geração de consoles. 
    
    Novos recursos inovadores, personagens incrivelmente detalhados e cenários dramáticos fazem deste um dos títulos mais visualmente impressionantes e imersivos do gênero até agora. 
    
    Tekken 8 retoma a história após a violenta batalha que terminou na derrota de Heihachi Mishima em Tekken 7 — mas agora o foco é um novo conflito de pai contra filho: Jin Kazama vai desafiar Kazuya Mishima num confronto que vai abalar as estruturas da cidade.`,
    image: "https://store-images.s-microsoft.com/image/apps.43812.14322949163163356.dae4c2ae-9fa8-482a-9815-7473f8376992.169cc773-a4fd-4726-a9c1-7674c007c758?q=90&w=177&h=265",
    price: 100,
    media: [
        {type: 'video', image: '', link: 'https://youtu.be/2hPuRQz6IlM'},
        {type: 'video', image: '', link: 'https://youtu.be/551hCMK0Qqo'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-02-en-20sep22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-05-en-20sep22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-06-en-20sep22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-08-en-20sep22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-screenshot-07-en-20sep22?$1600px$'},
    ],
    developer: "Bandai Namco",
    platforms: ["PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2024, 1-1, 25),
    category: [
        {id: '0', name: 'Ação'},
        {id: '1', name: 'Luta'},
    ],

}