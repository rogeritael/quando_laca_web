'use client'
import { Header } from '@/components/Header'
import { PageContainer } from './page_styles'
import { SideMenu } from '@/components/SideMenu'
import { MyLibrary } from '@/components/MyLibrary'
import { Logo } from '@/components/ui/Logo'
import Image from 'next/image'
import bell from '@/assets/icons/bell.svg';
import { TrailersContainer } from '@/components/TrailersContainer'
import { PopularGames } from '@/components/PopularGames'
import { GameList } from '@/components/GameList'
import { Game } from '@/components/Game'
import { ConfirmModal } from '@/components/ui/ConfirmModal'
import { Toast } from '@/components/ui/Toast'
import { gameList as games } from '@/mocks/games'
import { useEffect, useState } from 'react'
import { gamesService } from '@/services/gameService'
import { GameProps } from './../mocks/games';
import { TrailerModal } from '@/components/ui/TrailerModal'

export default function Home() {
  const [popularGames, setPopularGames] = useState<GameProps[]>([])
  const [upcomingGames, setUpcomingGames] = useState<GameProps[]>([])
  const [isTrailerModalOpen, setIstrailerModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('')


  useEffect(() => {
      
    (async() => {
    
      const games = await gamesService().findAll();
      setPopularGames(games.popular)
      setUpcomingGames(games.upcomingGames)
    
    })()

  },[])

  return (
    popularGames && (
    <PageContainer>
      <TrailerModal videoUrl={trailerUrl} isOpen={isTrailerModalOpen} setIsOpen={setIstrailerModalOpen} />
      {/* <ConfirmModal /> */}
      <Toast isVisible={true} />
      <div className="main_content">
        <SideMenu />

        <div className="main">
          <Header />
          <div className="featured">
            <TrailersContainer setIsModalOpen={setIstrailerModalOpen} setTrailerUrl={setTrailerUrl}/>
            <PopularGames games={popularGames}/>
          </div>
          <GameList title='Próximos Lançamentos' >
            {games.map((game) => (
              <Game key={game.id} id={game.id} name={game.name} image={game.image} isPopular={false} platforms={game.platforms} />
            ))}
          </GameList>
          <GameList title='Adicionados recentemente' >
            {games.map((game) => (
              <Game key={game.id} id={game.id} name={game.name} image={game.image} isPopular={false} platforms={game.platforms} />
            ))}
          </GameList>
          <GameList title='Chegando e Breve'>
            {upcomingGames.map((game) => (
              <Game key={game.id} id={game.id} name={game.name} image={game.image} isPopular={false} platforms={game.platforms} />
            ))}
          </GameList>
          <GameList title='Recém Lançados'>
            {upcomingGames.map((game) => (
              <Game key={game.id} id={game.id} name={game.name} image={game.image} isPopular={false} platforms={game.platforms} />
            ))}
          </GameList>
        </div>
        
        <div className="library">
          <div className="logo_container">
                <Logo />
                <Image src={bell} alt="notificações" />
          </div>
          <MyLibrary />
        </div>
      </div>
    </PageContainer>
    )
  )
}
