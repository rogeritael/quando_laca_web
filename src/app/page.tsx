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

export default function Home() {
  return (
    <PageContainer>
      {/* <Header className="header"/> */}
      <div className="main_content ">
        <SideMenu className="sidemenu" />
        <div className="main">
          <Header />
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
