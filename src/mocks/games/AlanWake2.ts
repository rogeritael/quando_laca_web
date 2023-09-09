import { GameProps, category } from "../games"

export const AlanWake2: GameProps = {

    id: "alan_wake_2",
    name: "Alan Wake 2",
    description: `O estúdio que trouxe Control ao público agora apresenta um terror psicológico de sobrevivência estrelando dois protagonistas em dois mundos muito diferentes.

    Saga Anderson é uma talentosa agente do FBI enviada a Bright Falls, uma pequena cidade do noroeste do Pacífico, para investigar uma série de assassinatos ritualísticos. Alan Wake é um escritor que passou anos preso no Lugar Obscuro, uma aterrorizante realidade alternativa que pode ser remodelada pelas suas palavras. Apesar de nunca terem se encontrado, os dois estão conectados através de realidades separadas, e suas ações são capazes de mudar seus respectivos mundos.
    
    Quando os acontecimentos narrados em uma história de terror mergulham Bright Falls em uma escuridão sobrenatural corrompedora, Anderson e Wake precisam usar o poder da luz para sobreviver e proteger aqueles que amam. Em um mundo distorcido repleto de vítimas e monstros, será que eles podem se tornar os heróis desta história?`,
    image: "https://store-images.s-microsoft.com/image/apps.53207.14335040691238971.69596c0b-00e0-49eb-a6ce-2535ef602b5e.610aeb08-6b0a-45d5-86cc-107b90e66c80?q=90&w=177&h=265",
    price: 100,
    media: [
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/alan_wake_2_06072023_02-ps5-en-07jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/alan_wake_2_06072023_03-ps5-en-07jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/alan_wake_2_06072023_08-ps5-en-07jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/alan_wake_2_06072023_05-ps5-en-07jun23?$1600px$'},
        {type: 'video', image: 'https://img.youtube.com/vi/q0vNoRhuV_I/hqdefault.jpg', link: 'https://youtu.be/q0vNoRhuV_I'},
    ],
    developer: "Remedy Entertainment",
    platforms: ["PS5", "Xbox Series X/S", "PC"],
    releaseDate: new Date(2023, 10-1, 27),
    category: [
        {id: '0', name: 'Ação'},
        {id: '1', name: 'Aventura'},
        {id: '2', name: 'Terror'},
    ],

}