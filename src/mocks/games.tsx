interface Category {
    id: string;
    name: string;
}

export interface GameProps {
    name: string;
    releaseDate: Date;
    description: string;
    developer?: string;
    price: number;
    images: string[];
    platforms: string[];
    image: string;
    category: Category[];
    id: string
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
        id: "2#rCpbW!5Ap7",
        name: "Quake II",
        description: "You are humanity's last hope to stop the Strogg, a hostile alien race waging war against Earth. Play this military sci-fi FPS, now upgraded for modern platforms with improved visuals, new campaign content, online multiplayer/co-op, and more.",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6x5r.png",
        price: 100,
        images: ['https://images.igdb.com/igdb/image/upload/t_original/scnvhl.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnvhm.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnvhn.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnvho.jpg'],
        developer: "Nightdive Studios",
        platforms: ['PC'],
        releaseDate: new Date(2023, 8, 10),
        category: [
            {id: category[0].id, name: category[0].name},
            {id: category[2].id, name: category[2].name},
        ],
    },
    {
        id: "DO03659zYIH*",
        name: "Stray Gods: The Roleplaying Musical",
        description: "Murder. Gods. Romance. Band practice? Unravel the mystery of the Last Muse’s death in an interactive roleplaying musical where Greek gods live hidden among us. Use your newfound powers of musical persuasion to choose how this wry and moving saga will unfold. How will the curtain fall?",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4kld.png",
        price: 100,
        images: ['https://youtu.be/HOWN60CXOFQ', 'https://youtu.be/coQQ-K8Iwi8', 'https://youtu.be/UquMI3WkLKk', 'https://youtu.be/O8Aqw--qwAE', 'https://images.igdb.com/igdb/image/upload/t_original/sci28j.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/sci28k.jpg' ],
        developer: "Summerfall Studios",
        platforms: [' Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
        releaseDate: new Date(2023, 8, 10),
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Music, Role-playing (RPG)
            {id: category[2].id, name: category[2].name},
        ],
    },
    {
        id: "KLlR!N076600",
        name: "Sengoku Dynasty",
        description: "Experience an epic adventure in Feudal Japan and build your own village in a beautiful ocean-side valley in this cross-genre game. Protect your settlement from the dangers of war-torn Japan and rise from simple peasant to man of legend.",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5kww.png",
        price: 100,
        images: ['https://youtu.be/LH35u7T4Q3k', 'https://images.igdb.com/igdb/image/upload/t_original/scfz4c.jpg', 'https://youtu.be/N_ZuqNl8YDw', 'https://images.igdb.com/igdb/image/upload/t_original/scfz4d.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scfz4e.jpg'],
        developer: "Superkami",
        platforms: ['PC (Microsoft Windows)'],
        releaseDate: new Date(2023, 8, 10),
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Simulator
            {id: category[2].id, name: category[2].name},
        ],
    },
    {
        id: "7LoRA4R1R%5K",
        name: "Atlas Fallen",
        description: "Rise from the dust and glide the sands of a timeless land, filled with ancient dangers, mysteries and fragments of the past. Hunt legendary monsters with powerful sand-infused weapons and abilities in spectacular, super-powered combat.",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co546f.png",
        price: 100,
        images: ['https://youtu.be/_hFePdmcci0', 'https://youtu.be/_hFePdmcci0', 'https://images.igdb.com/igdb/image/upload/t_original/scii4f.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scii4g.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scii4i.jpg'],
        developer: "Deck13 Interactive",
        platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        releaseDate: new Date(2023, 8, 10),
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG)
            {id: category[2].id, name: category[2].name},
        ],
    },
    {
        id: "lO47T*w1aMRv",
        name: "Shadow Gambit: The Cursed Crew",
        description: "Welcome to the Lost Caribbean! In this stealth strategy game, join a ghost ship with a living soul and assemble a cursed pirate crew. Embrace magical powers to defy the menacing army of the Inquisition, who stands between you and the mysterious treasure of the legendary Captain Mordechai.",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co67is.png",
        price: 100,
        images: ['https://youtu.be/Nu8WlgBnJ8s', 'https://youtu.be/3bElxNMHgoo', 'https://youtu.be/BykuAlQlSIw', 'https://youtu.be/BykuAlQlSIw', 'https://images.igdb.com/igdb/image/upload/t_original/sckpi6.jpg'],
        developer: "Mimimi Games",
        platforms: [' PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        releaseDate: new Date(2023, 8, 17),
        category: [
            {id: category[0].id, name: category[0].name}, //Indie, Role-playing (RPG), Strategy, Tactical
            {id: category[2].id, name: category[2].name},
        ],
    },
    {
        id: "17bPc!1Ar2n4",
        name: "Ride 5",
        description: "Rev up your engine and get ready to hit the track with RIDE 5. An adrenaline-filled gaming experience that is so authentic it will make you feel like you're truly racing at break-neck speed. Find your favorite bikes and check out new ones in the ultimate motorcycle game! Race on over 35 tracks and collect more than 200 motorcycles from world-renowned manufacturers, each element is designed to feel like you're riding a real bike.",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6e0o.png",
        price: 100,
        images: ['https://youtu.be/0kuZ93yzyO0', 'https://youtu.be/-yqY6jTmw0g', 'https://images.igdb.com/igdb/image/upload/t_original/scm45p.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scm45r.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scm45t.jpg'],
        developer: "Milestone",
        platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        releaseDate: new Date(2023, 8, 24),
        category: [
            {id: category[0].id, name: category[0].name}, //Racing, Simulator, Sport
            {id: category[2].id, name: category[2].name},
        ],
    },
    {
        id: "0ye9&FgB568E",
        name: "Red Dead Redemption",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6wrn.png",
        releaseDate: new Date(2023, 8, 17),
        developer: "Double Eleven",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG), Shooter
            {id: category[2].id, name: category[2].name},
        ],
        platforms: ['PlayStation 4', 'Nintendo Switch'],
        description: "A bundle containing ports of Red Dead Redemption and the Undead Nightmare expansion missing multiplayer components and including some parts of the GOTY release.",
        price: 100,
        images: ['https://youtu.be/t5Nwgd_T1-4', 'https://images.igdb.com/igdb/image/upload/t_original/scnuf2.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnuf3.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnuf4.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnuf5.jpg'],
    },
    {
        id: "tC96mKVDO*3B",
        name: "En Garde!",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6slv.png",
        releaseDate: new Date(2023, 8, 16),
        developer: "Fireplace Games",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Hack and slash/Beat 'em up, Indie
        ],
        platforms: [' PC (Microsoft Windows)'],
        description: "En Garde! is a swashbuckler action game! Battle graceless guards and nefarious noblemen in fast-paced fights full of spectacle. Use the environment, your wit and your blade to teach them all a lesson!",
        price: 100,
        images: ['https://youtu.be/r9uhIcMsIPk', 'https://images.igdb.com/igdb/image/upload/t_original/scnebb.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnebc.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnebd.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnebe.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/ar2ecu.jpg'],
    },
    {
        id: "aWQ&1H^63*vl",
        name: "Dungeons & Dragons Online: Vecna Unleashed",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6vrx.png",
        releaseDate: new Date(2023, 8, 17),
        developer: "Standing Stone Games",
        category: [
            {id: category[0].id, name: category[0].name}, //PC (Microsoft Windows)
        ],
        platforms: [''],
        description: `The mini-expansion introduces a climax to The Codex of the Infinite Planes Saga, where players must face the sinister presence of Vecna and his cult in Morgrave University.

        Vecna Unleashed offers new adventures in various locations, including Sharn, the Plane of Water, the Abyss, and the Astral Plane. Players will battle against new monsters such as humanoid rodent Wererats and abyssal demonic Vrocks, while also unlocking a new Epic Destiny called the Machrotechnic.`,
        price: 100,
        images: ['https://youtu.be/j1pON9gdtjg'],
    },
    {
        id: "Y3TDz5$z3j9s",
        name: "Dark Tree",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co660r.png",
        releaseDate: new Date(2023, 9, 30),
        developer: "A17 Studio",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Indie, Role-playing (RPG)
        ],
        platforms: [''], //PC (Microsoft Windows)
        description: "In a world where virtue considered a relic of the past, something is changing. Tormented by omen-dreams six heroes going to the distant kingdom of Hevalos. Fight hordes of enemies and the machinations of fate to uncover the secret of the Dark Tree.",
        price: 100,
        images: ['https://youtu.be/dtQGuiBVVkU', 'https://images.igdb.com/igdb/image/upload/t_original/scjyv1.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scjyv3.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scjyv4.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scjyv5.jpg','https://images.igdb.com/igdb/image/upload/t_original/scjyv6.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scjyv1.jpg'],
    },
    {
        id: "P03Kx*1#uhEt",
        name: "EA Sports FC 24",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6qqa.png",
        releaseDate: new Date(2023, 9, 29),
        developer: "EA Canada",
        category: [
            {id: category[0].id, name: category[0].name}, //Simulator, Sport
        ],
        platforms: ['Xbox One, PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
        description: "EA SPORTS FC 24 is the ultimate football simulation game that lets you play as your favourite stars and teams in the most authentic and immersive way possible. With EA SPORTS FC, you can experience the thrill of the world's biggest competitions, such as the Premier League, UEFA Champions League, UEFA Women's Champions League, La Liga Santander, Bundesliga, Ligue 1, Serie A, CONMEBOL Libertadores, Barclays Women's Super League, NWSL and many more. EA SPORTS FC 24 also features a new brand identity inspired by the triangles that have been part of EA SPORTS football for the past 30 years, from the isometric polygons that make up the game to the chemistry triangles that exist in Ultimate Team to the player indicator across every match. Join the Club and be part of a new Football Club for the future of football we want to build together.",
        price: 100,
        images: ['https://youtu.be/-vL01jbgENE', 'https://youtu.be/XhP3Xh4LMA8', 'https://images.igdb.com/igdb/image/upload/t_original/scnbfr.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnbfs.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scnbft.jpg'],
    },
    {
        id: "bT1FXe@s2a5^",
        name: "Cyberpunk 2077: Phantom Liberty",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m1m.png",
        releaseDate: new Date(2023, 9, 26),
        developer: "CD Projekt RED",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG), Shooter
        ],
        platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        description: `Phantom Liberty is a spy-thriller expansion for the open-world action-adventure RPG Cyberpunk 2077. When the orbital shuttle of the President of the New United States of America is shot down over the deadliest district of Night City, there’s only one person who can save her — you. Become V, a cyberpunk for hire, and dive deep into a tangled web of espionage and political intrigue, unraveling a story that connects the highest echelons of power with the brutal world of black-market mercenaries.

        Infiltrate Dogtown, a city-within-a-city run by a trigger-happy militia and ruled by a leader with an iron fist. With the help of NUSA sleeper agent Solomon Reed (Idris Elba) and the support of Johnny Silverhand (Keanu Reeves), unravel a web of shattered loyalties and use your every skill to survive in a fractured world of desperate hustlers, shadowy netrunners, and ruthless mercenaries. Built with the power of next-gen hardware in mind, Phantom Liberty offers brand-new gameplay mechanics, nail-biting courier jobs, gigs, and missions — and a thrilling main quest where freedom and loyalty always come at a price.`,
        price: 100,
        images: ['https://youtu.be/PbVKBoDuhZ0', 'https://youtu.be/gdvPG4sUbr8', 'https://youtu.be/0vO3yJGATP4', 'https://youtu.be/EfyQo9PJd9c', 'https://images.igdb.com/igdb/image/upload/t_original/scin4p.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/ar2cnt.jpg'],
    },
    {
        id: "jqy*6!KK422F",
        name: "Payday 3",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6m2i.png",
        releaseDate: new Date(2023, 9, 21),
        developer: "Starbreeze Studios",
        category: [
            {id: category[0].id, name: category[0].name}, //Role-playing (RPG), Shooter
        ],
        platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        description: "Payday 3 is the much anticipated sequel to one of the most popular co-op shooters ever. Since its release, Payday-players have been reveling in the thrill of a perfectly planned and executed heist. That’s what makes Payday a high-octane, co-op FPS experience without equal. Step out of retirement back into the life of crime in the shoes of the Payday Gang, the envy of their peers and the nightmare of law-enforcement wherever they go. Several years after the crew’s reign of terror over Washington DC has ended, they assemble once again to deal with the threat that roused them out of early retirement.",
        price: 100,
        images: ['https://youtu.be/15PGyhJIvB4', 'https://youtu.be/_p5mip1Msbk', 'https://youtu.be/UIZGW3mty8I', 'https://youtu.be/NA_tSDsKe-k', 'https://images.igdb.com/igdb/image/upload/t_original/scked8.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scked9.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/sckeda.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/sckedc.jpg'],
    },
    {
        id: "55vh4&Rgpj7E",
        name: "Combat Spec Ops",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6rf0.png",
        releaseDate: new Date(2023, 9, 15),
        developer: "Megacrush Interactive Inc",
        category: [
            {id: category[0].id, name: category[0].name}, //Shooter, Tactical
        ],
        platforms: ['PC (Microsoft Windows)'],
        description: "Combat Spec Ops is a team-based, tactical TPS (Third Person Shooter) based on close quarters combat and objective-oriented multiplayer gameplay. Bring back retro multiplayer gameplay where skill is rewarded, and teamwork matters!",
        price: 100,
        images: ['https://youtu.be/480qPyxykwY', 'https://images.igdb.com/igdb/image/upload/t_original/scncos.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scncot.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/ar2f0b.jpg'],
    },
    {
        id: "3%WkXC4yT2g8",
        name: "Mortal Kombat 1",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6i4r.png",
        releaseDate: new Date(2023, 9, 19),
        developer: "NetherRealm Studios",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Fighting
        ],
        platforms: [ 'PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
        description: `A new era has begun.
        It's In Our Blood. Discover a reborn Mortal Kombat Universe created by Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and Fatalities!`,
        price: 100,
        images: ['https://youtu.be/UZ6eFEjFfJ0', 'https://youtu.be/_sLJ-xyjMQo', 'https://youtu.be/eT-3vhCl6N4', 'https://youtu.be/M39CVZt6uu0', 'https://images.igdb.com/igdb/image/upload/t_original/scmlie.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/scmlid.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/ar2bhx.jpg','https://images.igdb.com/igdb/image/upload/t_original/ar2bhv.jpg'],
    },
    {
        id: "$s26seOcN75C",
        name: "Lies of P",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6lxr.png",
        releaseDate: new Date(2023, 9, 19),
        developer: "Round8 Studio",
        category: [
            {id: category[0].id, name: category[0].name}, //Role-playing (RPG)
        ],
        platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        description: "Inspired by the familiar story of Pinocchio, Lies of P is an action souls-like game set in a dark Belle Époque world. Guide Pinocchio on his unrelenting journey to become human.",
        price: 100,
        images: ['https://youtu.be/qKceAv6N8iE', 'https://youtu.be/qKceAv6N8iE', 'https://youtu.be/BID72hSKasc', 'https://youtu.be/PKP18vFW83A', 'https://youtu.be/7mru_M370uU', 'https://youtu.be/6yDx7Px6yMU','https://youtu.be/cK1zg_yGlOA','https://images.igdb.com/igdb/image/upload/t_original/sc9oaa.jpg', 'https://images.igdb.com/igdb/image/upload/t_original/sc9oa8.jpg','https://images.igdb.com/igdb/image/upload/t_original/sc9oa9.jpg','https://images.igdb.com/igdb/image/upload/t_original/sc9oab.jpg'],
    },
    {
        id: "#aR$Y6Qq2m06",
        name: "The Crew: Motorfest",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6pe2.png",
        releaseDate: new Date(2023, 7, 21),
        developer: "Ivory Tower",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Racing
        ],
        platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        description: "Welcome to Motorfest! Join a one-of-a-kind festival and enjoy the best experiences car culture has to offer in a beautiful Hawaiian open world.",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "1*HxByTl07&p",
        name: "Harvest Moon: The Winds of Anthos",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6vi3.png",
        releaseDate: new Date(2023, 9, 12),
        developer: "Natsume",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG), Simulator
        ],
        platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'Nintendo Switch', 'Xbox Series X|S'],
        description: `In celebration of the 25th Anniversary of the Harvest Moon franchise, Harvest Moon: The Winds of Anthos will offer new functions while keeping the core fundamentals that has made the series so popular. The land players will explore is known as Anthos, and is home to the Harvest Sprites, spirits that protect people and nature, as well as the goddess of nature known as the Harvest Goddess.

        However, about 20 years ago, an unprecedented eruption in Anthos's volcanic region forced the Harvest Goddess and her Harvest Sprites to use all of their powers to protect the people. The people were saved, but the eruption left the villages cut off from each other... Believing that the separated villages and people would one day be reconnected, the Harvest Goddess sent a bottle into the ocean with a letter and a magic key, then fell into a deep sleep...`,
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "Lb$PJ74j1#qP",
        name: "Blood Red",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ru3.png",
        releaseDate: new Date(2023, 9, 12),
        developer: "Reptilian Games",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Indie
        ],
        platforms: ['PC (Microsoft Windows)'],
        description: "Blood Red is a co-op survival horror game that can be played with 1-4 players. Hunt down demons by forming rituals, find out the demon type and banish the demon forever!",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "&$127Bz0%6l$",
        name: "Fae Farm",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6qig.png",
        releaseDate: new Date(2023, 9, 8),
        developer: "Phoenix Labs",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG), Simulator
        ],
        platforms: ['PC (Microsoft Windows)', 'Nintendo Switch'],
        description: "Escape to the fairytale life of your dreams in Fae Farm, a cozy farm-sim RPG for 1-4 players. Craft, cultivate, and decorate to grow your shared homestead—and use spellbinding magic to explore the enchanted island of Azoria.",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "80!!8@FU4$l#",
        name: "NBA 2K24",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6pzf.png",
        releaseDate: new Date(2023, 9, 8),
        developer: "Visual Concepts",
        category: [
            {id: category[0].id, name: category[0].name}, //Simulator, Sport
        ],
        platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
        description: "Grab your squad and experience the past, present, and future of hoops culture in NBA 2K24. Enjoy pure, authentic action and limitless personalized MyPLAYER options in MyCAREER. Collect an impressive array of legends and build your perfect lineup in MyTEAM. Relive your favorite eras as a GM or Commissioner in MyNBA. Experience next-level gameplay and lifelike visuals with your favorite NBA and WNBA teams in play now.",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "P75*$70@kSy2",
        name: "Final Fantasy VII: Ever Crisis",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6x3j.png",
        releaseDate: new Date(2023, 9, 7),
        developer: "Square Enix",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Role-playing (RPG)
        ],
        platforms: ['Android', 'iOS'],
        description: `Final Fantasy VII: Ever Crisis is a mobile game covering the whole FFVII timeline by splitting each story into short chapters focused on important moments using animated cutscenes, some with conversation options, followed by a battle.

        Relive the most memorable moments from FFVII and experience the journey of a young hero Sephiroth.
        
        Experience both classic and new stories within the FFVII universe presented in a retro-style look combined with modern, beautifully rendered graphics, that’s easily accessible on the go. Team up your favorite characters and customize each one with iconic gear and weapons to defeat powerful opponents in Solo or Co-op battle mode.`,
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "04ob8CS#o8WC",
        name: "Tenebris Pictura",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6rzj.png",
        releaseDate: new Date(2023, 8, 31),
        developer: "Pentadimensional Games, SL",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Hack and slash/Beat 'em up
        ],
        platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        description: "Exploration, ghost hunting and puzzles in the Victorian era.",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "*0drD9P@127F",
        name: "Armored Core VI: Fires of Rubicon",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ffo.png",
        releaseDate: new Date(2023, 8, 25),
        developer: "FromSoftware",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure
        ],
        platforms: ['Xbox One', 'PlayStation 4', 'PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        description: "By combining FromSoftware’s longstanding expertise in mech games and their signature robust gameplay, Armored Core VI: Fires of Rubicon will be a new action experience.",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "Iy7l1pBrf3V*",
        name: "Blasphemous II",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6ej3.png",
        releaseDate: new Date(2023, 8, 24),
        developer: "The Game Kitchen",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Hack and slash/Beat 'em up, Indie, Platform, Role-playing (RPG)
        ],
        platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Nintendo Switch', 'Xbox Series X|S'],
        description: "The Penitent One awakens as Blasphemous 2 joins him once again in an endless struggle against The Miracle. Dive into a perilous new world filled with mysteries and secrets to discover, and tear your way through monstrous foes that stand between you and your quest to end the cycle one and for all.",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "DT#309SXX1qj",
        name: "Immortals of Aveum",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6dtk.png",
        releaseDate: new Date(2023, 8, 22),
        developer: "Ascendant Studios",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Shooter
        ],
        platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        description: "From the creative director of Dead Space and multiple Call of Duty campaigns comes Immortals of Aveum, a single-player first-person magic shooter set in an original fantasy universe engulfed in magic, rife with conflict, and on the verge of oblivion.",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "hD#J5l6S65Js",
        name: "Quasimorph",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6rg8.png",
        releaseDate: new Date(2023, 8, 17),
        developer: "MgnmScrptmDvs",
        category: [
            {id: category[0].id, name: category[0].name}, //Indie, Role-playing (RPG), Simulator, Strategy
        ],
        platforms: ['PC (Microsoft Windows)'],
        description: "Take on a role of a hardened PMC fighter in a dark turn-based extraction RPG. Engage in unforgiving combat, manage your ship and pile up the bodies of your clones to unravel the dark mystery behind threat to all life.",
        price: 100,
        images: ['', '', '', '', ''],
    },
    {
        id: "Ge69*wUur*e2",
        name: "Gord",
        image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2ygw.png",
        releaseDate: new Date(2023, 8, 17),
        developer: "Covenant.dev",
        category: [
            {id: category[0].id, name: category[0].name}, //Adventure, Indie, Role-playing (RPG), Simulator, Strategy
        ],
        platforms: ['PlayStation 5', 'PC (Microsoft Windows)', 'Xbox Series X|S'],
        description: "Gord is a single-player, adventure-strategy game featuring developing societies, eerie forbidden lands, and remarkable mythical creatures. Complete quests and manage a populace whose personal stories and well-being impact the fate of the settlement.",
        price: 100,
        images: ['', '', '', '', ''],
    },
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