import Image from "next/image";
import { GaleryModalContainer } from "./styles";
import arrow from '@/assets/icons/arrow.svg'

import img1 from '@/assets/galery(exc)/a1.jpg';
import img2 from '@/assets/galery(exc)/a2.webp';
import img3 from '@/assets/galery(exc)/a3.jpg';
import img4 from '@/assets/galery(exc)/a4.jpg';
import img5 from '@/assets/galery(exc)/a5.jpg';
import img6 from '@/assets/galery(exc)/a6.jpg';
import img7 from '@/assets/galery(exc)/a7.jpg';
import img8 from '@/assets/galery(exc)/a8.jpg';
import img9 from '@/assets/galery(exc)/a9.jpg';

interface GaleryModalProps {

}
export function GaleryModal(props : GaleryModalProps){
    return(
        <GaleryModalContainer>
            <span className="background" />
            <div className="galery_container">
                <div className="title">
                    <h2>Galeria</h2>
                    <span>(7 de 10)</span>
                </div>
                <div className="display">
                    <div className="display_rail">
                        <Image src={img1} alt="" />
                        <Image src={img2} alt="" />
                        <Image src={img3} alt="" />
                        <Image src={img4} alt="" />
                        <Image src={img5} alt="" />
                        <Image src={img6} alt="" />
                        <Image src={img7} alt="" />
                        <Image src={img8} alt="" />
                        <Image src={img9} alt="" />
                    </div>
                </div>
                <div className="galery_carousel">
                    
                    <figure><Image className="arrow" src={arrow} alt="voltar slider"/></figure>
                    <figure><Image className="arrow" src={arrow} alt="avançar slider"/></figure>
                    <div className="mini_rail">
                        <Image src={img1} alt="" />
                        <Image src={img2} alt="" />
                        <Image src={img3} alt="" />
                        <Image src={img4} alt="" />
                        <Image src={img5} alt="" />
                        <Image src={img6} alt="" />
                        <Image src={img7} alt="" />
                        <Image src={img8} alt="" />
                        <Image src={img9} alt="" />
                    </div>
                </div>
            </div>
        </GaleryModalContainer>
    )
}