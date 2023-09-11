import { GameProps, category } from "../games"

export const Starfield: GameProps = {

    id: "starfield",
    name: "Starfield",
    description: `Starfield é o primeiro universo novo em mais de 25 anos da Bethesda Game Studios, os premiados criadores de The Elder Scrolls V: Skyrim e Fallout 4. Neste RPG para a nova geração em meio às estrelas, crie o personagem que você quiser e explore com liberdade inigualável enquanto embarca em uma jornada épica para desvendar o maior mistério da humanidade.

    No ano de 2330, a humanidade já se aventurou para além do nosso sistema solar, colonizando planetas novos, e agora habita o espaço. Você passará a integrar a Constelação – o último grupo de exploradores espaciais em busca de artefatos raros pela galáxia – e navegará pela vastidão do espaço no maior e mais ambicioso jogo da Bethesda Game Studios.`,
    image: "https://store-images.s-microsoft.com/image/apps.35187.14419706211314168.b0f9d237-3727-4f27-a56e-60574c628757.8c25b7fa-b3bf-4e81-80c9-b996780e22ae?q=90&w=177&h=265",
    price: 100,
    media: [
        // {type: 'video', image: 'https://img.youtube.com/vi/bgqGdIoa52s/hqdefault.jpg', link: ''},
        {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.9603.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.43e39058-906b-411f-997b-b55c5f805028'},
        {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.31631.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.fd7e0259-9a1d-4f4e-b8f3-625929a5aaaf'},
        {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.2173.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.8e7c69e3-1a7e-4155-965a-757c6bce9259'},
        {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.37599.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.05991eed-a648-4fc8-8929-b4feb79b45e7'},
        {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.20343.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.5527065c-b4ea-4f86-a93e-6f42fab458c2'},
        {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.44257.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.82fb94c9-de2d-483d-9336-035b8fabd1fd'},
        {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.6948.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.89a9232c-6540-405d-8d75-db5f91e3d63b'},
        {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.43359.13567343664224659.80549498-60fd-43e8-8e69-6dbaf57c5b6d.d508a14d-b90a-4aba-81aa-04325b8c7813'},
    ],
    developer: "Bethesda Softworks",
    platforms: ["Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 9-1, 6),
    category: [
        {id: '0', name: 'RPG'},
    ],

}