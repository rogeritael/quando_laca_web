import { GameProps, category } from "../games"

export const AvatarFrontiersOfPandora: GameProps = {

    id: "avatar_frontiers_of_pandora",
    name: "Avatar: Frontiers of Pandora",
    description: `Avatar: Frontiers of Pandora™ é um jogo de ação e aventura em primeira pessoa ambientado no mundo aberto da desconhecida Fronteira Ocidental de Pandora.

    A corporação militarista humana conhecida como RDA abduziu, treinou e moldou você, um Na'vi, para servir a ela. Quinze anos depois, você está livre, mas se sente um estranho na própria terra natal.
    
    Reconecte-se com seu passado perdido, descubra o que significa de verdade ser Na'vi e junte-se aos outros clãs para proteger Pandora da RDA. `,
    image: "https://store-images.s-microsoft.com/image/apps.63545.13532281981722910.c73fcb29-e2af-4599-b241-4a8bde2d732c.76656ba3-0068-4f3f-a1da-c78cbc798b87?q=90&w=177&h=265",
    price: 100,
    media: [
        {type: 'video', image: 'https://img.youtube.com/vi/bgqGdIoa52s/hqdefault.jpg', link: 'https://youtu.be/fTPJt7ZcR7g'},
        {type: 'video', image: 'https://img.youtube.com/vi/bgqGdIoa52s/hqdefault.jpg', link: 'https://youtu.be/CpFL1Ib77hE'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/avatar-frontiers-of-pandora-screenshot-09-en-13jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/avatar-frontiers-of-pandora-screenshot-07-en-13jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/avatar-frontiers-of-pandora-screenshot-02-en-18jan22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/avatar-frontiers-of-pandora-screenshot-08-en-13jun23?$1600px$'},
    ],
    developer: "Ubisoft",
    platforms: ["PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 12-1, 7,),
    category: [
        {id: '0', name: 'Ação'},
        {id: '1', name: 'Aventura'},
    ],

}