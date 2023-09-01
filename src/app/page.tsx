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
import { useEffect, useState, useContext } from 'react'
import { gamesService } from '@/services/gameService'
import { GameProps } from './../mocks/games';
import { TrailerModal } from '@/components/ui/TrailerModal'
import { Context } from '@/context/UserContext'
import { Bell } from '@/components/ui/bell'
import { MobileHeader } from '@/components/MobileHeader'
import { CategoryList } from '@/components/CategoryList/CategoryList'

export default function Home() {
  const [popularGames, setPopularGames] = useState<GameProps[]>([])
  const [comingSoonGames, setComingSoonGames] = useState<GameProps[]>([])
  const [justReleasedGames, setJustReleasedGames] = useState<GameProps[]>([])
  const [nextReleases, setNextReleases] = useState<GameProps[]>([])
  const [isTrailerModalOpen, setIstrailerModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { findAllNotifications, isNotificationsVisible, setIsNotificationsVisible, areThereUnread, generateNotifications } = useContext(Context)



  useEffect(() => {
      
    const fetchData = async () => {
      const games = await gamesService().findAll();

      setPopularGames(games.popular)
      setJustReleasedGames(games.justReleased)
      setNextReleases(games.nextReleases)
      setComingSoonGames(games.upcomingGames)

      //notifications
      await generateNotifications();
      await findAllNotifications();
    }
    fetchData()

    setIsLoading(false)

  },[])

  return (
    !isLoading && (
    <PageContainer>
      <TrailerModal videoUrl={trailerUrl} isOpen={isTrailerModalOpen} setIsOpen={setIstrailerModalOpen} />
      <ConfirmModal />
      <Toast />
      <div className="main_content">
        <SideMenu />

        <div className="main">
          <Header />
          <MobileHeader />
          <CategoryList className='category_list_mobile'/>

          <div className="featured">
            <TrailersContainer setIsModalOpen={setIstrailerModalOpen} setTrailerUrl={setTrailerUrl}/>
            <PopularGames games={popularGames} url="/Search?term=populares"/>
          </div>

          <GameList title='Próximos Lançamentos' url="/Search?term=proximos_lancamentos">
            {nextReleases.map((game) => (
              <Game key={game.id} id={game.id} name={game.name} image={game.image} isPopular={false} platforms={game.platforms} />
            ))}
          </GameList>

          <GameList title='Chegando e Breve' url="/Search?term=chegando_em_breve">
            {comingSoonGames.map((game) => (
              <Game key={game.id} id={game.id} name={game.name} image={game.image} isPopular={false} platforms={game.platforms} />
            ))}
          </GameList>
          
          <GameList title='Recém Lançados' url="/Search?term=recem_lancados">
            {justReleasedGames.map((game) => (
              <Game key={game.id} id={game.id} name={game.name} image={game.image} isPopular={false} platforms={game.platforms} />
            ))}
          </GameList>

          <span className="phantom_space" />
        </div>
        
        <div className="library">
          <div className="logo_container">
                <Logo />
                <Bell />
          </div>
          <MyLibrary  />
        </div>
      </div>
    </PageContainer>
    )
  )
}
