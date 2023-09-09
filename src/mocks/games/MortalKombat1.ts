import { GameProps, category } from "../games"

export const MortalKombat1: GameProps = {

    id: "mortal_kombat_1",
    name: "Mortal Kombat 1",
    description: `A NetherRealm Studios traz uma nova era a esta emblemática franquia de jogos de luta, com um reinício completo que muda todo o mundo que conhecemos.

    Após o emocionante clímax de Mortal Kombat 11, o todo-poderoso Deus do Fogo Liu Kang criou uma nova era na esperança de trazer paz ao Plano Terreno e além. O elenco de guerreiros lendários será apresentado outra vez, de uma forma jamais vista, por meio do modo de história mais cinematográfico de toda a série. Aguarde reviravoltas nas amizades e rivalidades clássicas da franquia, assim como novas histórias que vão mudar tudo que você sabe sobre os seus Kombatentes preferidos.
    
    Descubra uma série de novos modos de jogo offline e online enquanto domina um sistema de luta revitalizado que conta com golpes fatais de fraturar ossos, interrupções defensivas e os fatalities mais brutalmente criativos apresentados até hoje.`,
    image: "https://store-images.s-microsoft.com/image/apps.15385.14079345186518183.475cb589-fa73-4d29-80af-98caf262de83.f06956de-442d-42dc-ba52-067407bc399d?q=90&w=177&h=265",
    price: 100,
    media: [
        {type: 'video', image: 'https://img.youtube.com/vi/7zkHyCh0pjE/hqdefault.jpg', link: 'https://youtu.be/7zkHyCh0pjE'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/mortal-kombat-1-screenshot-01-en-12jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/mortal-kombat-1-screenshot-07-en-12jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/mortal-kombat-1-screenshot-09-en-12jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/mortal-kombat-1-screenshot-02-en-12jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/mortal-kombat-1-screenshot-03-en-12jun23?$1600px$'},
        {type: 'image', image: 'https://gmedia.playstation.com/is/image/SIEPDC/mortal-kombat-1-screenshot-10-en-12jun23?$1600px$'},
    ],
    developer: "Warner Bros",
    platforms: ["PS5", "Xbox Series X/S", "PC", "Nintendo Switch"],
    releaseDate: new Date(2023, 9-1, 19),
    category: [
        {id: '0', name: 'Luta'},
    ],

}