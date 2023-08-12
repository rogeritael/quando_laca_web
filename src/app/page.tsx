'use client'
import { Header } from '@/components/Header'
import { ImageList } from '@/components/ImageList'
import { PageContainer } from './page_styles'
import { SideMenu } from '@/components/SideMenu'
import { SmallGameCard } from '@/components/ui/SmallGameCard'
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

export default function Home() {
  return (
    <PageContainer>
      <ConfirmModal />
      <Toast isVisible={false} />
      <div className="main_content">
        <SideMenu />

        <div className="main">
          <Header />
          <div className="featured">
            <TrailersContainer />
            <PopularGames />
          </div>
          <GameList title='Adicionados recentemente' >
            {games.map((game) => (
              <Game key={game.id} id={game.id} name={game.name} image={game.image} isPopular={false} platforms={game.platforms} />
            ))}
          </GameList>
          <GameList title='Chegando e Breve'>
            {games.map((game) => (
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
}
