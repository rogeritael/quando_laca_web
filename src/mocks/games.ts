const trailerCover = 'https://i.ytimg.com/vi/Hyh6UqP1YPM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGhACGAYgATgB&rs=AOn4CLCIXUOMnZXQJ_Q19t6h0uKoAF6aig'

import { AlanWake2 } from './games/AlanWake2';
import { AssassinsCreedMirage } from './games/AssassinsCreedMirage';
import { BaldursGate3 } from './games/BaldursGate3';
import { BombRushCyberfunk } from './games/BombRushCyberfunk'
import { GoodbyeVolcanoHigh } from './games/GoodbyeVolcanoHigh';

import { LiesOfP } from './games/LiesOfP';
import { LordsOfTheFallen } from './games/LordsOfTheFallen';
import { MetalHellsinger } from './games/MetalHellsinger';
import { MortalKombat1 } from './games/MortalKombat1';
import { SpiderMan2 } from './games/SpiderMan2'
import { Starfield } from './games/Starfield';
// import { SuicideSquadKillTheJusticeLeague } from './games/SuicideSquadKilltheJusticeLeague';
import { Tekken8 } from './games/Tekken8';
import { TrainSimWorld3 } from './games/TrainSimWorld3';

interface Category {
    id: string;
    name: string;
}

interface MediaProps  {
    type: 'image' | 'video';
    image: string;
    link?: string;
}

export interface GameProps {
    name: string;
    releaseDate: Date;
    description: string;
    developer: string;
    price: number;
    media: MediaProps[];
    platforms: string[];
    image: string;
    category: Category[];
    id: string
}

export const category: Category[] = [
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
    BombRushCyberfunk,
    LiesOfP,
    SpiderMan2,
    AlanWake2,
    AssassinsCreedMirage,
    LordsOfTheFallen,
    MortalKombat1,
    GoodbyeVolcanoHigh,
    Tekken8,
    TrainSimWorld3,
    BaldursGate3,
    MetalHellsinger,
    Starfield,
    // SuicideSquadKillTheJusticeLeague,
    {
        id: "Persona5Tactica",
        name: "Persona 5 Tactica",
        description: `Persona 5 Tactica é um jogo de estratégia em turnos que conta com uma história inédita, a volta de personagens populares e novos aliados e inimigos. 
        
        Após um estranho incidente, os Ladrões-Fantasma se veem em um reino bizarro onde os habitantes vivem sob opressão tirânica. Cercados por um grupo militar chamado Legionários, eles se encontram em grave perigo até que Erina, uma misteriosa revolucionária, resgata-os e oferece um acordo tentador em troca de ajuda. 
        
        Qual é a verdade por trás de Erina e sua proposta para os Ladrões-Fantasma? Junte-se ao grupo e lidere uma revolução de emoções nesta aventura de combate empolgante.`,
        image: "https://store-images.s-microsoft.com/image/apps.21771.14461424539776518.be5fa828-401b-4f0c-ac86-920d7dcbfada.66d054ea-84d9-40f2-bffb-49eb5cb272c9?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'video', image: '', link: 'https://youtu.be/NBFyld5Ouc8'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/persona-5-tactica-screenshot-02-en-09aug23?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/persona-5-tactica-screenshot-05-en-09aug23?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/persona-5-tactica-screenshot-03-en-09aug23?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/persona-5-tactica-screenshot-10-en-09aug23?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/persona-5-tactica-screenshot-08-en-09aug23?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/persona-5-tactica-screenshot-09-en-09aug23?$1600px$'},
        ],
        developer: "ATLUS",
        platforms: ['PS5', 'Xbox Series X/S', 'PC'],
        releaseDate: new Date(2023, 11-1, 17),
        category: [
            {id: '0', name: 'Estratégia'},
            {id: '1', name: 'RPG'},
        ],
    },
    {
        id: "CallofDutyModernWarfare3",
        name: "Call of Duty: Modern Warfare 3",
        description: `Call of Duty volta com uma campanha inédita, uma versão modernizada dos mapas de multijogador clássicos e uma experiência JxA com zumbis em mundo aberto.

        A campanha, continuação direta do fenômeno Call of Duty: Modern Warfare II, segue o embate do capitão Price e da Força Tarefa 141 contra o criminoso de guerra ultranacionalista Vladimir Makarov, que busca estender sua influência pelo mundo. 
        
        No multijogador, os 16 mapas que foram lançados com Modern Warfare 2 em 2009 voltam com gráficos atualizados, novos modos e recursos de jogo inovadores.
        
        Em Modern Warfare Zombies, alie-se a outros esquadrões pela primeira vez e trabalhe em conjunto para sobreviver ao maior mapa do modo Zombies já visto.
        
        `,
        image: "https://store-images.s-microsoft.com/image/apps.22323.13966330883349940.8613419e-9360-4964-ad0f-24ef1b486f3e.85d64fa3-7f73-4a02-a821-3adf7708a6b2?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'video', image: '', link: 'https://youtu.be/R0_dLXH9Z4I'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.38493.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.b6bab6ba-4612-42ab-bb56-03b6f1bf5359'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.43274.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.b1ad7540-e92a-4325-9e4a-51f233d8dd6e'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.20832.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.ce79ee32-92b0-49ed-bed8-7ebee941c28f'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.40309.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.5090e43d-346e-4ea5-9d16-be68b4ca2371'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.8624.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.3f67966c-8dfd-45e5-a6fb-19cbf0b95db0'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.324.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.9781fd3a-850c-4985-841d-7f656c15ed41'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.39381.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.40b3eeee-980c-4107-890d-3b5b8d76f871'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.51498.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.c90f9d57-405b-481a-878a-13f79d7e2d86'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.25324.13966330883349940.d6f7894b-fa5c-4b05-8b45-7eec0beb64f1.1132c612-c40f-4055-b769-8e49caf81e0b'},
        ],
        developer: "Activision",
        platforms: ['PS4', 'PS5', 'Xbox One', 'Xbox Series X/S', 'PC'],
        releaseDate: new Date(2023, 11-1, 2),
        category: [
            {id: '0', name: 'Ação'},
            {id: '1', name: 'Tiro'},
        ],
    },
    {
        id: "banishers",
        name: "Banishers: Ghosts of New Eden",
        description: `New Eden, 1695. Antea Duarte e Red Mac Raith são amantes e Banishers, caçadores de fantasmas que juraram proteger os vivos da ameaça de fantasmas e espectros que se recusam a partir. No seguimento de uma última missão desastrosa, Antea é ferida fatalmente, tornando-se um dos espíritos que abomina. Nas zonas selvagens e assombradas da América do Norte, o casal procura desesperadamente por uma forma de libertar Antea da sua nova condição.

        Mergulha na bela e poderosa história íntima entre dois amantes predestinados. Enquanto Banisher, entra nas vidas das comunidades de New Eden e resolve casos assombrosos num mundo místico e repleto de tradições, assolado por criaturas sobrenaturais e segredos antigos. Usa a tua inteligência ou combina os poderes espirituais de Antea com o arsenal de Red para derrotar e banir as almas que atormentam os vivos.
        
        Vais enfrentar decisões desafiantes que irão definir o teu caminho, impactando drasticamente a tua história e o destino dos habitantes de New Eden — quer das pessoas vivas ou das almas penadas. Até que ponto vais comprometer o teu juramento de caçar fantasmas pelo bem da tua amante, que se tornou um desses espíritos?`,
        image: "https://store-images.s-microsoft.com/image/apps.37841.13873423350094695.ab54d22d-759b-4894-897d-66ec21b5c47a.4e00a9b6-e78b-4186-b94e-2ead1104cf05?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'video', image: '', link: ''},
            {type: 'video', image: '', link: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''}
        ],
        developer: "Focus",
        platforms: ['PS5', 'Xbox Series X/S', ''],
        releaseDate: new Date(2023, 11-1, 7),
        category: [
            {id: '', name: 'Ação'},
            {id: '', name: 'Aventura'},
        ],
    },
    {
        id: "StarOceanTheSecondStoryR",
        name: "Star Ocean The Second Story R",
        description: `O celebrado JRPG exclusivo do PlayStation, Star Ocean: The Second Story, celebra seu 25o aniversário com uma revisão completa e impressionante em 2.5D, fundindo os personagens em pixels 2D com ambientes 3D, como o muito elogiado Octopath Traveler II, da Square Enix.

        Jogue como Claude C. Kenni, um jovem oficial da Federação transportado para um planeta místico durante uma missão de reconhecimento de rotina. Lá, ele encontra uma jovem que acredita que Claude é o herói anunciado em uma antiga profecia.
        
        Além da notável reformulação visual, Star Ocean The Second Story R conta com novas mecânicas de batalha, dublagem completa em inglês e japonês, a escolha da música original ou os novos arranjos do compositor Motoi Sakuraba e recursos que melhoram a experiência do jogador, como viagem rápida e três modos de dificuldade. Esta é a versão definitiva do clássico atemporal que vai agradar fãs antigos e dar as boas-vindas a novos jogadores.`,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2912/58e2ce3f6f0b5c8f8894101737ab8a68cf3cc2cbae68603d.jpg",
        price: 100,
        media: [
            {type: 'video', image: '', link: 'https://youtu.be/T9j7mP9Nr9g'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/star-ocean-the-second-story-r-screen-01-en-03jul23?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/star-ocean-the-second-story-r-screen-04-en-03jul23?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/star-ocean-the-second-story-r-screen-03-en-03jul23?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/star-ocean-the-second-story-r-screen-02-en-03jul23?$1600px$'},
        ],
        developer: "Square Enix",
        platforms: ['PS4', 'PS5', 'PC'],
        releaseDate: new Date(2023, 11-1, 2),
        category: [
            {id: '', name: 'RPG'},
        ],
    },
    {
        id: "ghostrunner_2",
        name: "Ghostrunner 2",
        description: `Ghostrunner 2 é uma experiência de ação intensa e imersiva que aprimora a ação acelerada de Ghostrunner. Você terá que cortar seu caminho através dos inimigos enquanto tenta não sofrer dano para alcançar o seu objetivo. 

        Em um futuro cyberpunk pós-apocalítico, um culto a uma violenta IA se formou dentro da Torre Dharma — o último refúgio da humanidade — após a queda do tirano anterior, o Mestre das Chaves.
        
        Ghostrunner 2 conta com mecânicas de morte com um golpe, uma exploração mais aprofundada do mundo além da Torre Dharma por meio de novas opções de diálogo, diversas melhorias no combate, fases não lineares com seções de motocicleta complexas e modos novos e empolgantes. 
        
        Ghostrunner 2 apresenta novas técnicas que permitem que você use mais a criatividade e enfrente até os encontros mais desafiadores de forma mais acessível. Porém, dependendo das técnicas usadas, os inimigos se comportarão de forma única e oferecerão um desafio novo a cada encontro.`,
        image: "https://store-images.s-microsoft.com/image/apps.60209.14393359190152767.28742aed-5c22-46cd-a3b0-df9ec8938514.ad5e5dfc-2368-43b5-996c-240556a0a387?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'video', image: '', link: 'https://youtu.be/RL6tLbeMt2A'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.36236.13701301247073711.b2f8c64e-4c35-40a4-b811-df26dae24665.4e86caa5-3367-4b46-8bee-eabe60adf089'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.5783.14393359190152767.ee7712ec-f6b2-40db-ae87-3655a098ffd3.659236f3-de3b-4744-9702-06c7c903353f'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.45029.14393359190152767.ee7712ec-f6b2-40db-ae87-3655a098ffd3.ca41ed20-4bc6-4641-9d70-bc42f5a862f5'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.44223.14393359190152767.ee7712ec-f6b2-40db-ae87-3655a098ffd3.ed2353c8-b6af-4b2a-9d3c-1c56af346ddf'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.56166.14393359190152767.ee7712ec-f6b2-40db-ae87-3655a098ffd3.20c99cd4-bc83-408a-a541-f80cd3ef5a1c'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/ghostrunner-2-screen-01-en-19jun23?$1600px$'},
        ],
        developer: "One More Level",
        platforms: ['PS5', 'Xbox Series X/S', 'PC'],
        releaseDate: new Date(2023, 10-1, 26),
        category: [
            {id: '', name: 'Ação'},
            {id: '', name: 'Aventura'},
        ],
    },
    {
        id: "MinekosNightMarket",
        name: "Mineko's Night Market",
        description: `Jogue como Mineko, uma menina curiosa que acaba de chegar em sua nova casa em uma ilha com dificuldades inspirada no Japão, na base do Monte Fugu. Os locais de superstição da ilha veneram o Gato Solar, Nikko. A cidade ficou confusa quando, o que sempre foi considerado um antigo mito, começou a aparecer entre os habitantes nos últimos dias.

        Descubra os segredos por trás da cidade e recupere a antiga glória desse sofrido vilarejo. Enquanto isso, faça suas atividades diárias, conclua diversas tarefas, aventure-se em missões fantásticas e construa itens peculiares para se preparar para o Mercado Noturno semanal!`,
        image: "https://store-images.s-microsoft.com/image/apps.49605.13513466192535313.8b8ee3c5-de55-451f-bb06-0d7638fa2ca9.e3091673-7481-4f50-adcc-8bf2d33f5334?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.51552.13513466192535313.8b8ee3c5-de55-451f-bb06-0d7638fa2ca9.bcde13eb-5f21-4eeb-b732-64ff20521e2d'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.29987.13513466192535313.8b8ee3c5-de55-451f-bb06-0d7638fa2ca9.5e21548f-08af-43be-8a34-7263070ff25f'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.17449.13513466192535313.8b8ee3c5-de55-451f-bb06-0d7638fa2ca9.b56af46e-5782-4977-b687-d031e90c7035'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.58578.13513466192535313.8b8ee3c5-de55-451f-bb06-0d7638fa2ca9.dc48b17e-131a-440a-8f0b-14ab8ad5eb2d'}
        ],
        developer: "Humble Games",
        platforms: ['PS4', 'PS5', 'Xbox Series X/S'],
        releaseDate: new Date(2023, 8-1, 10),
        category: [
            {id: '', name: 'RPG'},
        ],
    },
    {
        id: "AloneInTheDark",
        name: "Alone in the Dark",
        description: `Alone in the Dark é uma releitura da  atmosfera de terror de sobrevivência do revolucionário jogo homônimo de 1992.

        Nos Estados Unidos dos anos 1920, Emily Hartwood contrata o detetive particular Edward Carnby para ajudá-la a encontrar o tio desaparecido. A busca leva-os até a mansão Derceto, uma casa de repouso para deficientes mentais situada no sul gótico dos Estados Unidos e que guarda um segredo sombrio. 
        
        Explore Derceto jogando como Edward ou Emily e descubra horrores que desafiam qualquer explicação. Você terá que desbravar as sombras, resolver quebra-cabeças nos ambientes do jogo e sobreviver a encontros com criaturas de dar frio na espinha se quiser sobreviver a esse pesadelo.`,
        image: "https://store-images.s-microsoft.com/image/apps.61825.13970220150326028.9032ac83-611c-4133-8638-8636d620d5a3.660134bb-4145-44db-ad0c-af5b1f1d1244?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/alone-in-the-dark-screenshot-05-en-19oct22?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/alone-in-the-dark-screenshot-02-en-19oct22?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/alone-in-the-dark-screenshot-04-en-19oct22?$1600px$'},
            {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/alone-in-the-dark-screenshot-01-en-19oct22?$1600px$'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.55798.14107808045122428.a531c592-5fb6-4aee-8a14-f5696dae743e.f87fdd4d-a2e0-4861-8b75-045aff16750d'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.22778.14107808045122428.a531c592-5fb6-4aee-8a14-f5696dae743e.c4869d97-2464-4f64-89a3-57f959f439aa'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.6178.13970220150326028.45c23b35-f912-4ba0-a634-6dead3ebe1eb.d7ad5474-9ba4-436f-8108-8d3e1dec3ccc'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.13063.13970220150326028.45c23b35-f912-4ba0-a634-6dead3ebe1eb.39c7da34-8ce8-46c7-928b-694b2b80faf4'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.40783.13970220150326028.45c23b35-f912-4ba0-a634-6dead3ebe1eb.abfad428-05d5-4b79-87ea-c11e26c6df56'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.55343.13970220150326028.45c23b35-f912-4ba0-a634-6dead3ebe1eb.1124eedc-870c-43eb-80d9-6674ac6747f9'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.52099.13970220150326028.45c23b35-f912-4ba0-a634-6dead3ebe1eb.a87b4dfe-249d-4acd-b7ad-87d938439d8b'}
        ],
        developer: "THQ Nordic",
        platforms: ['PS5', 'Xbox Series X/S', 'PC'],
        releaseDate: new Date(2024, 1-1, 16),
        category: [
            {id: '', name: 'Terror'},
        ],
    },
    {
        id: "(anunciado)TheLordoftheRingsReturntoMoria",
        name: "The Lord of the Rings: Return to Moria",
        description: ``,
        image: "",
        price: 100,
        media: [
            {type: 'video', image: '', link: ''},
            {type: 'video', image: '', link: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''}
        ],
        developer: "Open Door Entertainment",
        platforms: ['', '', ''],
        releaseDate: new Date(2023, 8-1, 10),
        category: [
            {id: '', name: 'Aventura'},
        ],
    },
    {
        id: "CitiesSkylinesII",
        name: "Cities: Skylines II",
        description: `Se pode sonhar, você pode construir.

        Erga uma cidade do chão e a transforme em uma metrópole próspera que só você é capaz de imaginar. Você nunca construiu nessa escala. Com uma simulação profunda e uma economia viva, Cities: Skylines II é a construção de mundos sem limites.
        
        Comece pelas fundações da sua cidade. Crie estradas a infraestrutura e sistemas que possibilitarão a vida diária. Tudo depende de você.
        
        Você também decidirá como sua cidade crescerá, mas planeje estrategicamente. Cada decisão tem um impacto. Você conseguirá estimular as indústrias locais e, ao mesmo tempo, usar o comércio para fortalecer a economia? O que fará bairros residenciais florescerem sem eliminar o movimento do centro? Como você atenderá às necessidades e desejos dos cidadãos sem comprometer o orçamento da cidade?
        
        Sua cidade nunca descansa. Como qualquer mundo vivo, que respira, ela muda com o tempo. Algumas mudanças serão lentas e graduais, enquanto outras serão repentinas e inesperadas. Assim, enquanto as estações mudam e o dia vira noite, prepare-se para agir quando a vida não correr conforme os planos.
        
        O jogo de construção de cidades mais detalhista e realista já criado, Cities: Skylines II leva sua criatividade e capacidade de resolver problemas a outro nível. Com gráficos de alta resolução belamente renderizados, ele também vai inspirar você a construir a cidade dos seus sonhos.`,
        image: "https://store-images.s-microsoft.com/image/apps.63682.13615111448719096.66548dfc-09a2-496a-a15d-a31ce19ced60.6bde3697-14e0-48a1-a04f-ed93155248c5?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.34304.13615111448719096.66548dfc-09a2-496a-a15d-a31ce19ced60.a5b69d3e-b9ce-4efb-9890-c57f749b9e00'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.89.13615111448719096.66548dfc-09a2-496a-a15d-a31ce19ced60.8d8ded02-6131-4469-881d-dd9cc977f325'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.10082.13615111448719096.66548dfc-09a2-496a-a15d-a31ce19ced60.79646ce1-ec40-4c84-bd94-ad32b755e9d1'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.30926.13615111448719096.66548dfc-09a2-496a-a15d-a31ce19ced60.1d8a7ab5-1b05-4aff-b82d-36834e3d2c05'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.25312.13615111448719096.66548dfc-09a2-496a-a15d-a31ce19ced60.21765b17-5079-49be-bf0c-93641a5083b8'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.46914.13615111448719096.66548dfc-09a2-496a-a15d-a31ce19ced60.20704bad-1939-4f0e-9869-d7046394729d'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.10744.13615111448719096.66548dfc-09a2-496a-a15d-a31ce19ced60.90edce9d-413c-4c8a-ac02-dd3db9bfee93'},
        ],
        developer: "Paradox",
        platforms: ['PS5', 'Xbox Series X|S', 'PC'],
        releaseDate: new Date(2023, 10-1, 24),
        category: [
            {id: '', name: 'Simulação'},
        ],
    },
    {
        id: "GargoylesRemastered",
        name: "Gargoyles Remastered",
        description: `Gargoyles Remastered é uma deslumbrante restauração do clássico de plataforma de 16 bits dos anos 90. Vivencie mais uma vez a jornada épica de Golias e os Gárgulas com melhorias nos visuais, nas animações e nos efeitos sonoros, tudo inspirado no aclamado desenho animado. O mundo dos Gárgulas vem à vida com um nível de detalhes que vai emocionar não só os fãs da animação como os amantes de jogos retrô também. Curta mecânicas clássicas autênticas ao original, mas com a inclusão de novas funcionalidades, como conquistas, a opção de rebobinar o jogo e mais!

        Atrativos principais
        • Jogue como Golias, o líder dos Gárgulas: use uma força de partir qualquer pedra, escale torres e estruturas com suas garras afiadas e plane pelo ar dominando técnicas aéreas e combate corpo a corpo numa jornada frenética para salvar o mundo da destruição.
        • Experiência gráfica imersiva: alterne sem pausas entre gráficos inspirados no desenho ou um modo 16 bits fiel ao jogo original.
        • A experiência oficial de Gárgulas: viva mais uma vez a história de Golias e os Gárgulas em seu embate contra o maligno Olho de Odin, com novas animações e efeitos sonoros inéditos, tudo inspirado no desenho animado Os Gárgulas.
        • Personalize a experiência: refine o seu estilo de jogo com funcionalidades modernas, como a opção de rebobinar o jogo instantaneamente, imagem para telas modernas e conquistas!
        • Trilha sonora remasterizada: deleite-se com a trilha sonora original, remasterizada e otimizada para uma aventura mais imersiva.`,
        image: "https://store-images.s-microsoft.com/image/apps.37672.14021890227648603.7650c3f5-9380-472b-aed4-4c2e79fadcb2.4888a7e2-aaa4-4ccb-a58e-8c1cf67d0353?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.44968.14021890227648603.7650c3f5-9380-472b-aed4-4c2e79fadcb2.a918092c-4cc8-4369-a0a2-de7f3f8f016f'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.35288.14021890227648603.7650c3f5-9380-472b-aed4-4c2e79fadcb2.bb799108-9ecc-4318-90d1-68c04c3db5a2'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.61029.14021890227648603.7650c3f5-9380-472b-aed4-4c2e79fadcb2.4016e136-ec1d-41d0-96d1-7c422ebeb257'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.9469.14021890227648603.7650c3f5-9380-472b-aed4-4c2e79fadcb2.9e3f5922-be4f-4528-935e-2af8944b89e4'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.59706.14021890227648603.7650c3f5-9380-472b-aed4-4c2e79fadcb2.fc6ec88b-04fc-4259-875b-b659663bccd0'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.32871.14021890227648603.7650c3f5-9380-472b-aed4-4c2e79fadcb2.daf8266f-caaa-4065-99b9-5625d39b093e'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.6966.14021890227648603.7650c3f5-9380-472b-aed4-4c2e79fadcb2.d1faa964-30ed-4770-8d8d-ad139f15b77e'},
        ],
        developer: "Disney",
        platforms: ['PS5', 'Xbox One', 'Xbox Series X/S'],
        releaseDate: new Date(2023, 10-1, 19),
        category: [
            {id: '', name: 'Ação'},
            {id: '', name: 'Aventura'},
            {id: '', name: 'Plataforma'},
        ],
    },
    {
        id: "ENDLESSDungeon",
        name: "ENDLESS Dungeon",
        description: `ENDLESS™ Dungeon é uma mistura única de roguelite, ação tática e defesa de torres que se passa no premiado universo ENDLESS™. Entre em uma estação espacial abandonada há muito tempo, solo ou com amigos, recrute uma equipe de náufragos especiais e proteja seu cristal contra levas intermináveis de monstros... ou morra, recarregue e tente novamente.`,
        image: "https://store-images.s-microsoft.com/image/apps.46858.13846905625722373.58f8b13f-c3ae-4dab-a125-65cee4aa0536.1b77c3f4-7866-4d72-ba59-3f95dcbb3d00?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.18863.13846905625722373.58f8b13f-c3ae-4dab-a125-65cee4aa0536.ff2c252c-0f26-47a1-8932-037cc3c1a62a'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.65073.13846905625722373.58f8b13f-c3ae-4dab-a125-65cee4aa0536.451482e1-bd0f-423d-8c40-4bc811ef40d8'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.17522.13846905625722373.58f8b13f-c3ae-4dab-a125-65cee4aa0536.5e10b6c7-42a5-44c5-8bb1-7e7c72fa28cc'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.52458.13846905625722373.58f8b13f-c3ae-4dab-a125-65cee4aa0536.3525755b-66ef-4087-b64f-39a1ec05d612'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.45456.13846905625722373.58f8b13f-c3ae-4dab-a125-65cee4aa0536.ca81e1a0-6854-4dce-b608-5d2200d8cd89'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.63851.13846905625722373.58f8b13f-c3ae-4dab-a125-65cee4aa0536.f1ad426d-9c3e-472f-9ee1-7b78070572b3'},
        ],
        developer: "Amplitude",
        platforms: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X/S', 'Switch'],
        releaseDate: new Date(2023, 10-1, 19),
        category: [
            {id: '', name: 'Ação'},
            {id: '', name: 'Aventura'},
        ],
    },
    {
        id: "SONICSUPERSTARS",
        name: "SONIC SUPERSTARS",
        description: `Aventure-se pelas místicas Northstar Islands nesta releitura inédita da clássica jogabilidade de ação e plataforma em 2D. Jogue com Sonic, Tails, Knuckles e Amy, e use os novos poderes Esmeralda para realizar movimentos e ataques dinâmicos. Explore os novos e belos cenários no modo solo ou com até 3 outros jogadores e impeça que Dr. Eggman, Fang e um novo adversário misterioso convertam os animais gigantes das ilhas em Badniks antes que seja tarde demais!`,
        image: "https://store-images.s-microsoft.com/image/apps.42049.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.67c11f35-5d35-419c-b1a6-74bee245bffc?q=90&w=177&h=265",
        price: 100,
        media: [
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.61373.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.2eb1c2cf-a994-44da-8787-1ac711007507'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.56030.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.39c29c61-bb75-4488-996f-ecdaf0fbff6b'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.15706.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.99756647-c7b7-4074-8e38-d7cd984019f1'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.22881.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.433e44c0-2c44-439c-9500-f2a99b51b9c8'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.11925.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.cb7deee2-7b49-464c-86b0-a2e930b0d20a'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.55528.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.cd20c424-b0dc-4e72-a7b8-cd3a32b3bc08'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.19249.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.ff42fcb0-7792-4ba3-9123-496a04934f49'},
            {type: 'image', image: 'https://store-images.s-microsoft.com/image/apps.56063.14070850807053246.6ded2b2a-e1a4-4608-ab70-77c24c7c93a0.45497eb7-8ad5-4d25-9b3e-cd895cc12ef0'},
        ],
        developer: "SEGA",
        platforms: ['PC', 'PS4', 'PS5', 'Switch', 'Xbox One', 'Xbox Series X/S'],
        releaseDate: new Date(2023, 10-1, 16),
        category: [
            {id: '', name: 'Ação'},
            {id: '', name: 'Aventura'},
        ],
    },
    {
        id: "",
        name: "",
        description: ``,
        image: "",
        price: 100,
        media: [
            {type: 'video', image: '', link: ''},
            {type: 'video', image: '', link: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''}
        ],
        developer: "",
        platforms: ['', '', ''],
        releaseDate: new Date(2023, 8-1, 10),
        category: [
            {id: '', name: ''},
            {id: '', name: ''},
        ],
    },
    {
        id: "",
        name: "",
        description: ``,
        image: "",
        price: 100,
        media: [
            {type: 'video', image: '', link: ''},
            {type: 'video', image: '', link: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''}
        ],
        developer: "",
        platforms: ['', '', ''],
        releaseDate: new Date(2023, 8-1, 10),
        category: [
            {id: '', name: ''},
            {id: '', name: ''},
        ],
    },
    {
        id: "",
        name: "",
        description: ``,
        image: "",
        price: 100,
        media: [
            {type: 'video', image: '', link: ''},
            {type: 'video', image: '', link: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''}
        ],
        developer: "",
        platforms: ['', '', ''],
        releaseDate: new Date(2023, 8-1, 10),
        category: [
            {id: '', name: ''},
            {id: '', name: ''},
        ],
    },
    {
        id: "",
        name: "",
        description: ``,
        image: "",
        price: 100,
        media: [
            {type: 'video', image: '', link: ''},
            {type: 'video', image: '', link: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''},
            {type: 'image', image: ''}
        ],
        developer: "",
        platforms: ['', '', ''],
        releaseDate: new Date(2023, 8-1, 10),
        category: [
            {id: '', name: ''},
            {id: '', name: ''},
        ],
    },




















    // {
    //     id: "2#rCpbW!5Ap7",
    //     name: "Quake II",
    //     description: "You are humanity's last hope to stop the Strogg, a hostile alien race waging war against Earth. Play this military sci-fi FPS, now upgraded for modern platforms with improved visuals, new campaign content, online multiplayer/co-op, and more.",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6x5r.png",
    //     price: 100,
    //     media: [
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnvhl.jpg'},
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnvhm.jpg'},
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnvhn.jpg'},
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnvho.jpg'}
    //     ],
    //     developer: "Nightdive Studios",
    //     platforms: ['PC'],
    //     releaseDate: new Date(2023, 8-1, 10),
    //     category: [
    //         {id: category[0].id, name: category[0].name},
    //         {id: category[2].id, name: category[2].name},
    //     ],
    // },
    // {
    //     id: "DO03659zYIH*",
    //     name: "Stray Gods: The Roleplaying Musical",
    //     description: "Murder. Gods. Romance. Band practice? Unravel the mystery of the Last Muse’s death in an interactive roleplaying musical where Greek gods live hidden among us. Use your newfound powers of musical persuasion to choose how this wry and moving saga will unfold. How will the curtain fall?",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4kld.png",
    //     price: 100,
    //     media: [
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/HOWN60CXOFQ'}, 
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/coQQ-K8Iwi8'}, 
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/UquMI3WkLKk'}, 
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/O8Aqw--qwAE'}, 
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/sci28j.jpg'}, 
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/sci28k.jpg'}
    //     ],
    //     developer: "Summerfall Studios",
    //     platforms: [' Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
    //     releaseDate: new Date(2023, 8-1, 10),
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Music, Role-playing (RPG)
    //         {id: category[2].id, name: category[2].name},
    //     ],
    // },
    // {
    //     id: "KLlR!N076600",
    //     name: "Sengoku Dynasty",
    //     description: "Experience an epic adventure in Feudal Japan and build your own village in a beautiful ocean-side valley in this cross-genre game. Protect your settlement from the dangers of war-torn Japan and rise from simple peasant to man of legend.",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5kww.png",
    //     price: 100,
    //     media: [
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/LH35u7T4Q3k'},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scfz4c.jpg'},
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/N_ZuqNl8YDw'},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scfz4d.jpg'},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scfz4e.jpg'},
    //     ],
    //     developer: "Superkami",
    //     platforms: ['PC (Microsoft Windows)'],
    //     releaseDate: new Date(2023, 8-1, 10),
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Simulator
    //         {id: category[2].id, name: category[2].name},
    //     ],
    // },
    // {
    //     id: "7LoRA4R1R%5K",
    //     name: "Atlas Fallen",
    //     description: "Rise from the dust and glide the sands of a timeless land, filled with ancient dangers, mysteries and fragments of the past. Hunt legendary monsters with powerful sand-infused weapons and abilities in spectacular, super-powered combat.",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co546f.png",
    //     price: 100,
    //     media: [
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/_hFePdmcci0'},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scii4f.jpg'},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scii4g.jpg'},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scii4i.jpg'},
    //     ],
    //     developer: "Deck13 Interactive",
    //     platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     releaseDate: new Date(2023, 8-1, 10),
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG)
    //         {id: category[2].id, name: category[2].name},
    //     ],
    // },
    // {
    //     id: "lO47T*w1aMRv",
    //     name: "Shadow Gambit: The Cursed Crew",
    //     description: "Welcome to the Lost Caribbean! In this stealth strategy game, join a ghost ship with a living soul and assemble a cursed pirate crew. Embrace magical powers to defy the menacing army of the Inquisition, who stands between you and the mysterious treasure of the legendary Captain Mordechai.",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co67is.png",
    //     price: 100,
    //     media: [
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/Nu8WlgBnJ8s', },
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/3bElxNMHgoo', },
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/BykuAlQlSIw', },
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/BykuAlQlSIw', },
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/sckpi6.jpg'},
    //     ],
    //     developer: "Mimimi Games",
    //     platforms: [' PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     releaseDate: new Date(2023, 8-1, 17),
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Indie, Role-playing (RPG), Strategy, Tactical
    //         {id: category[2].id, name: category[2].name},
    //     ],
    // },
    // {
    //     id: "17bPc!1Ar2n4",
    //     name: "Ride 5",
    //     description: "Rev up your engine and get ready to hit the track with RIDE 5. An adrenaline-filled gaming experience that is so authentic it will make you feel like you're truly racing at break-neck speed. Find your favorite bikes and check out new ones in the ultimate motorcycle game! Race on over 35 tracks and collect more than 200 motorcycles from world-renowned manufacturers, each element is designed to feel like you're riding a real bike.",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6e0o.png",
    //     price: 100,
    //     media: [
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/0kuZ93yzyO0', },
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/-yqY6jTmw0g', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scm45p.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scm45r.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scm45t.jpg'},
    //     ],
    //     developer: "Milestone",
    //     platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     releaseDate: new Date(2023, 8-1, 24),
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Racing, Simulator, Sport
    //         {id: category[2].id, name: category[2].name},
    //     ],
    // },
    // {
    //     id: "0ye9&FgB568E",
    //     name: "Red Dead Redemption",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6wrn.png",
    //     releaseDate: new Date(2023, 8-1, 17),
    //     developer: "Double Eleven",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG), Shooter
    //         {id: category[2].id, name: category[2].name},
    //     ],
    //     platforms: ['PlayStation 4', 'Nintendo Switch'],
    //     description: "A bundle containing ports of Red Dead Redemption and the Undead Nightmare expansion missing multiplayer components and including some parts of the GOTY release.",
    //     price: 100,
    //     media: [
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/t5Nwgd_T1-4', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnuf2.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnuf3.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnuf4.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnuf5.jpg'},
    //     ],
    // },
    // {
    //     id: "tC96mKVDO*3B",
    //     name: "En Garde!",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6slv.png",
    //     releaseDate: new Date(2023, 4-1, 5),
    //     developer: "Fireplace Games",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Hack and slash/Beat 'em up, Indie
    //     ],
    //     platforms: [' PC (Microsoft Windows)'],
    //     description: "En Garde! is a swashbuckler action game! Battle graceless guards and nefarious noblemen in fast-paced fights full of spectacle. Use the environment, your wit and your blade to teach them all a lesson!",
    //     price: 100,
    //     media: [
    //         {type: 'video', image: 'https://i.ytimg.com/vi/_Es06tQ67Pw/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGhACGAYgATgB&rs=AOn4CLD4WyuuHYJPmIKRfvl-jUbmI-_8UQ', link: 'https://youtu.be/r9uhIcMsIPk', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnebb.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnebc.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnebd.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnebe.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/ar2ecu.jpg'},
    //     ],
    // },
    // {
    //     id: "aWQ&1H^63*vl",
    //     name: "Dungeons & Dragons Online: Vecna Unleashed",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6vrx.png",
    //     releaseDate: new Date(2023, 8-1, 17),
    //     developer: "Standing Stone Games",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //PC (Microsoft Windows)
    //     ],
    //     platforms: [''],
    //     description: `The mini-expansion introduces a climax to The Codex of the Infinite Planes Saga, where players must face the sinister presence of Vecna and his cult in Morgrave University.

    //     Vecna Unleashed offers new adventures in various locations, including Sharn, the Plane of Water, the Abyss, and the Astral Plane. Players will battle against new monsters such as humanoid rodent Wererats and abyssal demonic Vrocks, while also unlocking a new Epic Destiny called the Machrotechnic.`,
    //     price: 100,
    //     media: [
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/j1pON9gdtjg'}],
    // },
    // {
    //     id: "Y3TDz5$z3j9s",
    //     name: "Dark Tree",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co660r.png",
    //     releaseDate: new Date(2023, 9-1, 30),
    //     developer: "A17 Studio",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Indie, Role-playing (RPG)
    //     ],
    //     platforms: [''], //PC (Microsoft Windows)
    //     description: "In a world where virtue considered a relic of the past, something is changing. Tormented by omen-dreams six heroes going to the distant kingdom of Hevalos. Fight hordes of enemies and the machinations of fate to uncover the secret of the Dark Tree.",
    //     price: 100,
    //     media: [
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/dtQGuiBVVkU',},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scjyv1.jpg',},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scjyv3.jpg',},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scjyv4.jpg',},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scjyv5.jpg',},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scjyv6.jpg',},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scjyv1.jpg'},
    //     ],
    // },
    // {
    //     id: "P03Kx*1#uhEt",
    //     name: "EA Sports FC 24",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6qqa.png",
    //     releaseDate: new Date(2023, 9-1, 29),
    //     developer: "EA Canada",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Simulator, Sport
    //     ],
    //     platforms: ['Xbox One, PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
    //     description: "EA SPORTS FC 24 is the ultimate football simulation game that lets you play as your favourite stars and teams in the most authentic and immersive way possible. With EA SPORTS FC, you can experience the thrill of the world's biggest competitions, such as the Premier League, UEFA Champions League, UEFA Women's Champions League, La Liga Santander, Bundesliga, Ligue 1, Serie A, CONMEBOL Libertadores, Barclays Women's Super League, NWSL and many more. EA SPORTS FC 24 also features a new brand identity inspired by the triangles that have been part of EA SPORTS football for the past 30 years, from the isometric polygons that make up the game to the chemistry triangles that exist in Ultimate Team to the player indicator across every match. Join the Club and be part of a new Football Club for the future of football we want to build together.",
    //     price: 100,
    //     media: [
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/-vL01jbgENE', },
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/XhP3Xh4LMA8', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnbfr.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnbfs.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scnbft.jpg'},
    //     ],
    // },
    // {
    //     id: "bT1FXe@s2a5^",
    //     name: "Cyberpunk 2077: Phantom Liberty",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m1m.png",
    //     releaseDate: new Date(2023, 9-1, 26),
    //     developer: "CD Projekt RED",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG), Shooter
    //     ],
    //     platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     description: `Phantom Liberty is a spy-thriller expansion for the open-world action-adventure RPG Cyberpunk 2077. When the orbital shuttle of the President of the New United States of America is shot down over the deadliest district of Night City, there’s only one person who can save her — you. Become V, a cyberpunk for hire, and dive deep into a tangled web of espionage and political intrigue, unraveling a story that connects the highest echelons of power with the brutal world of black-market mercenaries.

    //     Infiltrate Dogtown, a city-within-a-city run by a trigger-happy militia and ruled by a leader with an iron fist. With the help of NUSA sleeper agent Solomon Reed (Idris Elba) and the support of Johnny Silverhand (Keanu Reeves), unravel a web of shattered loyalties and use your every skill to survive in a fractured world of desperate hustlers, shadowy netrunners, and ruthless mercenaries. Built with the power of next-gen hardware in mind, Phantom Liberty offers brand-new gameplay mechanics, nail-biting courier jobs, gigs, and missions — and a thrilling main quest where freedom and loyalty always come at a price.`,
    //     price: 100,
    //     media: [
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/PbVKBoDuhZ0', },
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/gdvPG4sUbr8', },
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/0vO3yJGATP4', },
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/EfyQo9PJd9c', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scin4p.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/ar2cnt.jpg'},
    //     ],
    // },
    // {
    //     id: "jqy*6!KK422F",
    //     name: "Payday 3",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m2i.png",
    //     releaseDate: new Date(2023, 9-1, 21),
    //     developer: "Starbreeze Studios",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Role-playing (RPG), Shooter
    //     ],
    //     platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     description: "Payday 3 is the much anticipated sequel to one of the most popular co-op shooters ever. Since its release, Payday-players have been reveling in the thrill of a perfectly planned and executed heist. That’s what makes Payday a high-octane, co-op FPS experience without equal. Step out of retirement back into the life of crime in the shoes of the Payday Gang, the envy of their peers and the nightmare of law-enforcement wherever they go. Several years after the crew’s reign of terror over Washington DC has ended, they assemble once again to deal with the threat that roused them out of early retirement.",
    //     price: 100,
    //     media: [
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/15PGyhJIvB4', },
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/_p5mip1Msbk', },
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/UIZGW3mty8I', },
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/NA_tSDsKe-k', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scked8.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scked9.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/sckeda.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/sckedc.jpg'},
    //     ],
    // },
    // {
    //     id: "55vh4&Rgpj7E",
    //     name: "Combat Spec Ops",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6rf0.png",
    //     releaseDate: new Date(2023, 9-1, 15),
    //     developer: "Megacrush Interactive Inc",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Shooter, Tactical
    //     ],
    //     platforms: ['PC (Microsoft Windows)'],
    //     description: "Combat Spec Ops is a team-based, tactical TPS (Third Person Shooter) based on close quarters combat and objective-oriented multiplayer gameplay. Bring back retro multiplayer gameplay where skill is rewarded, and teamwork matters!",
    //     price: 100,
    //     media: [
    //         {type: 'video', image: trailerCover, link: 'https://youtu.be/480qPyxykwY', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scncos.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scncot.jpg', },
    //         {type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/ar2f0b.jpg'},
    //     ],
    // },
    // {
    //     id: "3%WkXC4yT2g8",
    //     name: "Mortal Kombat 1",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6i4r.png",
    //     releaseDate: new Date(2023, 9-1, 14),
    //     developer: "NetherRealm Studios",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Fighting
    //     ],
    //     platforms: [ 'PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
    //     description: `A new era has begun.
    //     It's In Our Blood. Discover a reborn Mortal Kombat Universe created by Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and Fatalities!`,
    //     price: 100,
    //     media: [
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/UZ6eFEjFfJ0', },
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/_sLJ-xyjMQo', },
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/eT-3vhCl6N4', },
    //         { type: 'video', image: trailerCover, link: 'https://youtu.be/M39CVZt6uu0', },
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scmlie.jpg', },
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/scmlid.jpg', },
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/ar2bhx.jpg',},
    //         { type: 'image', image: 'https://images.igdb.com/igdb/image/upload/t_original/ar2bhv.jpg'},
    //     ],
    // },
    // {
    //     id: "#aR$Y6Qq2m06",
    //     name: "The Crew: Motorfest",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6pe2.png",
    //     releaseDate: new Date(2023, 7-1, 21),
    //     developer: "Ivory Tower",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Racing
    //     ],
    //     platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     description: "Welcome to Motorfest! Join a one-of-a-kind festival and enjoy the best experiences car culture has to offer in a beautiful Hawaiian open world.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "1*HxByTl07&p",
    //     name: "Harvest Moon: The Winds of Anthos",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6vi3.png",
    //     releaseDate: new Date(2023, 9-1, 12),
    //     developer: "Natsume",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG), Simulator
    //     ],
    //     platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'Nintendo Switch', 'Xbox Series X|S'],
    //     description: `In celebration of the 25th Anniversary of the Harvest Moon franchise, Harvest Moon: The Winds of Anthos will offer new functions while keeping the core fundamentals that has made the series so popular. The land players will explore is known as Anthos, and is home to the Harvest Sprites, spirits that protect people and nature, as well as the goddess of nature known as the Harvest Goddess.

    //     However, about 20 years ago, an unprecedented eruption in Anthos's volcanic region forced the Harvest Goddess and her Harvest Sprites to use all of their powers to protect the people. The people were saved, but the eruption left the villages cut off from each other... Believing that the separated villages and people would one day be reconnected, the Harvest Goddess sent a bottle into the ocean with a letter and a magic key, then fell into a deep sleep...`,
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "Lb$PJ74j1#qP",
    //     name: "Blood Red",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ru3.png",
    //     releaseDate: new Date(2023, 9-1, 12),
    //     developer: "Reptilian Games",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Indie
    //     ],
    //     platforms: ['PC (Microsoft Windows)'],
    //     description: "Blood Red is a co-op survival horror game that can be played with 1-4 players. Hunt down demons by forming rituals, find out the demon type and banish the demon forever!",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "&$127Bz0%6l$",
    //     name: "Fae Farm",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6qig.png",
    //     releaseDate: new Date(2023, 9-1, 8),
    //     developer: "Phoenix Labs",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG), Simulator
    //     ],
    //     platforms: ['PC (Microsoft Windows)', 'Nintendo Switch'],
    //     description: "Escape to the fairytale life of your dreams in Fae Farm, a cozy farm-sim RPG for 1-4 players. Craft, cultivate, and decorate to grow your shared homestead—and use spellbinding magic to explore the enchanted island of Azoria.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "80!!8@FU4$l#",
    //     name: "NBA 2K24",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6pzf.png",
    //     releaseDate: new Date(2023, 9-1, 8),
    //     developer: "Visual Concepts",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Simulator, Sport
    //     ],
    //     platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
    //     description: "Grab your squad and experience the past, present, and future of hoops culture in NBA 2K24. Enjoy pure, authentic action and limitless personalized MyPLAYER options in MyCAREER. Collect an impressive array of legends and build your perfect lineup in MyTEAM. Relive your favorite eras as a GM or Commissioner in MyNBA. Experience next-level gameplay and lifelike visuals with your favorite NBA and WNBA teams in play now.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "P75*$70@kSy2",
    //     name: "Final Fantasy VII: Ever Crisis",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6x3j.png",
    //     releaseDate: new Date(2023, 9-1, 7),
    //     developer: "Square Enix",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG)
    //     ],
    //     platforms: ['Android', 'iOS'],
    //     description: `Final Fantasy VII: Ever Crisis is a mobile game covering the whole FFVII timeline by splitting each story into short chapters focused on important moments using animated cutscenes, some with conversation options, followed by a battle.

    //     Relive the most memorable moments from FFVII and experience the journey of a young hero Sephiroth.
        
    //     Experience both classic and new stories within the FFVII universe presented in a retro-style look combined with modern, beautifully rendered graphics, that’s easily accessible on the go. Team up your favorite characters and customize each one with iconic gear and weapons to defeat powerful opponents in Solo or Co-op battle mode.`,
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "04ob8CS#o8WC",
    //     name: "Tenebris Pictura",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6rzj.png",
    //     releaseDate: new Date(2023, 8-1, 31),
    //     developer: "Pentadimensional Games, SL",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Hack and slash/Beat 'em up
    //     ],
    //     platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     description: "Exploration, ghost hunting and puzzles in the Victorian era.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "*0drD9P@127F",
    //     name: "Armored Core VI: Fires of Rubicon",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ffo.png",
    //     releaseDate: new Date(2023, 8-1, 25),
    //     developer: "FromSoftware",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure
    //     ],
    //     platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     description: "By combining FromSoftware’s longstanding expertise in mech games and their signature robust gameplay, Armored Core VI: Fires of Rubicon will be a new action experience.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "Iy7l1pBrf3V*",
    //     name: "Blasphemous II",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ej3.png",
    //     releaseDate: new Date(2023, 8-1, 24),
    //     developer: "The Game Kitchen",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Hack and slash/Beat 'em up, Indie, Platform, Role-playing (RPG)
    //     ],
    //     platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
    //     description: "The Penitent One awakens as Blasphemous 2 joins him once again in an endless struggle against The Miracle. Dive into a perilous new world filled with mysteries and secrets to discover, and tear your way through monstrous foes that stand between you and your quest to end the cycle one and for all.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "DT#309SXX1qj",
    //     name: "Immortals of Aveum",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6dtk.png",
    //     releaseDate: new Date(2023, 8-1, 22),
    //     developer: "Ascendant Studios",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Shooter
    //     ],
    //     platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     description: "From the creative director of Dead Space and multiple Call of Duty campaigns comes Immortals of Aveum, a single-player first-person magic shooter set in an original fantasy universe engulfed in magic, rife with conflict, and on the verge of oblivion.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "hD#J5l6S65Js",
    //     name: "Quasimorph",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6rg8.png",
    //     releaseDate: new Date(2023, 8-1, 17),
    //     developer: "MgnmScrptmDvs",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Indie, Role-playing (RPG), Simulator, Strategy
    //     ],
    //     platforms: ['PC (Microsoft Windows)'],
    //     description: "Take on a role of a hardened PMC fighter in a dark turn-based extraction RPG. Engage in unforgiving combat, manage your ship and pile up the bodies of your clones to unravel the dark mystery behind threat to all life.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
    // {
    //     id: "Ge69*wUur*e2",
    //     name: "Gord",
    //     image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ygw.png",
    //     releaseDate: new Date(2023, 8-1, 17),
    //     developer: "Covenant.dev",
    //     category: [
    //         {id: category[0].id, name: category[0].name}, //Adventure, Indie, Role-playing (RPG), Simulator, Strategy
    //     ],
    //     platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
    //     description: "Gord is a single-player, adventure-strategy game featuring developing societies, eerie forbidden lands, and remarkable mythical creatures. Complete quests and manage a populace whose personal stories and well-being impact the fate of the settlement.",
    //     price: 100,
    //     media: [
    //         { type: 'image', image: ''},
    //     ],
    // },
]

// {
//     name: "",
//     image: "",
//     releaseDate: new Date(2023, 8, 17),
//     developer: "",
//     category: [
//         {id: category[0].id, name: category[0].name}, //
//     ],
//     platforms: [''],
//     description: "",
//     price: 100,
//     images: ['', '', '', '', ''],
// },