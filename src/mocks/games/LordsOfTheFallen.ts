import { GameProps, category } from "../games"

export const LordsOfTheFallen: GameProps = {

    id: "lords_of_the_fallen",
    name: "Lords Of The Fallen",
    description: `Derrote um deus demoníaco ressuscitado nesta novíssima aventura ambientada em um mundo interconectado cinco vezes maior do que no jogo original.

    Em Lords of the Fallen, você controla um dos lendários Cruzadores das Trevas e deve se aventurar pelos reinos dos vivos e dos mortos para frustrar o governo de Adyr, um cruel tirano que deu início a uma nova era de desolação para a humanidade.
    
    Ao longo do caminho, você vai encarar batalhas colossais contra chefes e se aventurar em um sistema de combate veloz e desafiador. Com nove classes de personagens e centenas de armas à sua escolha, você vai poder personalizar seu herói e desenvolver o próprio estilo de jogo ao se preparar para desafiar os deuses.
    
    A sua lenda será de luz... ou de escuridão?`,
    image: "https://store-images.s-microsoft.com/image/apps.14068.14012312710731854.b35d6c19-45c9-43f7-8557-3cfd2324108f.5fd6d369-a584-49cb-957d-437a43dee662?q=90&w=177&h=265",
    price: 100,
    media: [
        {type: 'video', image: 'https://img.youtube.com/vi/uw_Lskv6ZjQ/hqdefault.jpg', link: 'https://youtu.be/uw_Lskv6ZjQ'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/the-lords-of-the-fallen-screenshot-02-en-3feb23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/the-lords-of-the-fallen-screenshot-01-en-3feb23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/the-lords-of-the-fallen-screenshot-03-en-3feb23?$1600px$'},
    ],
    developer: "HEXWORKS",
    platforms: ["PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 10-1, 13),
    category: [
        {id: '0', name: 'Ação'},
        {id: '1', name: 'RPG'},
    ],

}