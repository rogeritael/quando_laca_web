import { GameProps, category } from "../games"

export const AssassinsCreedMirage: GameProps = {

    id: "assassins_creed_mirage",
    name: "Assassin's Creed Mirage",
    description:
    `Experimente o lar dos Assassinos originais nesta aventura incrível em mundo aberto com foco narrativo.

    Passados 15 anos após o primeiro Assassin's Creed redefinir o gênero aventura, experimente o parkour e a furtividade tradicionais da franquia como nunca antes em Assassin's Creed Mirage. 
    
    Em uma escala menor, em um retorno ao básico dos Assassinos, você jogará com Basim, um jovem ladrão em busca de respostas. Vague pelo mundo ricamente detalhado, interativo e vibrante das ruas da Bagdá do século IX, descubra os mistérios do passado e lute para garantir seu futuro.
    
    Esgueire-se pelas sombras. Torne-se o maior assassino de todos.`,
    image: "https://store-images.s-microsoft.com/image/apps.23659.14135771392422555.5ce715a2-1c1c-4b01-aed8-c2e964c55efc.005cb1b5-f46f-43e0-a800-7bbe3bbf96b1?q=90&w=177&h=265",
    price: 100,
    media: [
        {type: 'video', image: 'https://img.youtube.com/vi/PPoU4EFeVEI/hqdefault.jpg', link: 'https://youtu.be/PPoU4EFeVEI'},
        {type: 'video', image: 'https://img.youtube.com/vi/lsYkzsLBIWQ/hqdefault.jpg', link: 'https://youtu.be/lsYkzsLBIWQ'},
        {type: 'video', image: 'https://img.youtube.com/vi/SI0JHjfo26M/hqdefault.jpg', link: 'https://youtu.be/SI0JHjfo26M'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-05-en-19oct22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-02-en-19oct22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-03-en-19oct22?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/assassins-creed-mirage-screenshot-01-en-19oct22?$1600px$'},
    ],
    developer: "Ubisoft",
    platforms: ["PS4", "PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 10-1, 5),
    category: [
        {id: '0', name: 'Ação'},
        {id: '1', name: 'Aventura'},
    ],

}