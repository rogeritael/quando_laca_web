'use client'
import { SideMenu } from "@/components/SideMenu";
import { Logo } from "@/components/ui/Logo";
import Image from "next/image";
import bell from '@/assets/icons/bell.svg';
import { Search } from './../../components/ui/Search/index';
import { PageContainer } from "./styles";
import { GameHeader } from './../../components/GameHeader/index';
import { Galery } from "@/components/Galery";
import { Title } from "@/components/ui/Title";

import { description } from "./description";
import { GaleryModal } from "@/components/GaleryModal";


interface AboutProps {

}
export default function About(props : AboutProps){
    return(
        <PageContainer>
            <GaleryModal />
            <SideMenu />
            <div className="game_section">
                <div className="header">
                    <Search />
                    <div className="logo_container">
                        <Logo />
                        <Image src={bell} alt="notificações" />
                    </div>
                </div>
                <GameHeader />
                <Galery />
                
                <div className="info_section">
                    <div className="left">
                        <div className="description">
                            <Title content="Resumo" disableLink/>
                            <p>
                                <span>{description[0]}</span>
                                <br/><br/>
                                <span>{description[0]}</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className="info">
                        <Title content="Informações" disableLink/>
                        <ul className="info_box">
                            <li>
                                <p>Plataformas</p>
                                <span>Xbox Series S/X • PS5</span>
                            </li>
                            <li>
                                <p>Data de lançamento</p>
                                <span>05 de Maio de 2023</span>
                            </li>
                            <li>
                                <p>Desenvolvedora</p>
                                <span>Avalanche Software</span>
                            </li>
                            <li>
                                <p>Gêneros</p>
                                <span>Esporte • Survivor-Horror • aventura</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </PageContainer>
    )
}