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

export default function Home() {
  return (
    <PageContainer>
      <ConfirmModal />
      <Toast />
      <div className="main_content">
        <SideMenu />

        <div className="main">
          <Header />
          <div className="featured">
            <TrailersContainer />
            <PopularGames />
          </div>
          <GameList title='Adicionados recentemente' >
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={true} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
          </GameList>
          <GameList title='Chegando e Breve'>
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={false} platforms={['PS4', 'PS5']} />
            <Game name='Resident Evil 4 Remake' image='' isPopular={true} platforms={['PS4', 'PS5']} />
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
