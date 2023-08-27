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

export default function Home() {
  const [popularGames, setPopularGames] = useState<GameProps[]>([])
  const [comingSoonGames, setComingSoonGames] = useState<GameProps[]>([])
  const [justReleasedGames, setJustReleasedGames] = useState<GameProps[]>([])
  const [nextReleases, setNextReleases] = useState<GameProps[]>([])
  const [isTrailerModalOpen, setIstrailerModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { isNotificationsVisible, setIsNotificationsVisible, areThereUnread } = useContext(Context)



  useEffect(() => {
      
    const fetchData = async () => {
      const games = await gamesService().findAll();

      setPopularGames(games.popular)
      setJustReleasedGames(games.justReleased)
      setNextReleases(games.nextReleases)
      setComingSoonGames(games.upcomingGames)
    }
    
    fetchData()

    setIsLoading(false)

  },[])

  function handleModal(){
      isNotificationsVisible === true ? setIsNotificationsVisible(false) : setIsNotificationsVisible(true);
  }

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
        </div>
        
        <div className="library">
          <div className="logo_container">
                <Logo />
                  <figure className="bell_container">
                    {areThereUnread &&
                      <>
                        <span className='pulsing_alert' />
                        <span className='pulsing_alert_pulse' />
                      </>
                    }
                    <Image className='bell' src={bell} alt="notificações" onClick={() => handleModal()} />
                  </figure>
          </div>
          <MyLibrary  />
        </div>
      </div>
    </PageContainer>
    )
  )
}
