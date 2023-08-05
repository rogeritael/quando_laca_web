'use client'
import { Header } from '@/components/Header'
import { ImageList } from '@/components/ImageList'
import { PageContainer } from './page_styles'
import { SideMenu } from '@/components/SideMenu'

export default function Home() {
  return (
    <PageContainer>
      <Header className="header"/>
      <div className="main_content ">
        <SideMenu className="sidemenu" />
        <div className="main">main</div>
        <div className="library">lib</div>
      </div>
    </PageContainer>
  )
}
