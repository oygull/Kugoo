import React, { useState, useRef } from "react";
import styles from "./about.module.scss";
import { Link } from "react-router-dom";
import home from "../../app/assets/icons/home.svg";
import play from "../../app/assets/icons/play.png";
import tick from "../../app/assets/icons/checkCircle.png"
import certificate1 from "../../app/assets/images/certificate1.png";
import certificate2 from "../../app/assets/images/certificate2.webp";
import certificate3 from "../../app/assets/images/certificate3.webp";
import {Navigation} from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import nextArrow from "../../app/assets/icons/next.png";
import purpleArrow from "../../app/assets/icons/purpleArrow.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Prices from "../../components/Prices";
import Reviews from "../../components/Reviews";
import Videos from "../../components/Videos";
import Blog from "../../components/Blog";

function About() {

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

  return(
    <div className={styles.about}>
      <div className="container">
        <div className={styles.breadcrump}>
          <Link className={styles.breadcrumpLink} to="/">
          <img src={home} alt="home"/>
           <p>Главная</p> 
           </Link>
          <p>/</p>
          <Link className={styles.breadcrumpLink} to="/about"> О магазине</Link>
        </div>
      </div>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h2 className={styles.heroTitle}>Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</h2>
            <div className={styles.heroWrap}>
              <div className={styles.heroWrapItem}>
                <p className={styles.itemPar}>Работаем с</p>
                 <p className={styles.itemDate}>2017 г</p>
              </div>
              <div className={styles.heroWrapItem}>
                <p className={styles.itemPar}>Специалистов в штате</p>
                 <p className={styles.itemDate}>35</p>
              </div>
              <div className={styles.heroWrapItem}>
                <p className={styles.itemPar}>Клиентов по России и странам СНГ</p>
                 <p className={styles.itemDate}>2 000</p>
              </div>
            </div>
          </div>
        </div>
        {
        isVideoOpen && (
          <div className={styles.videoWrap}>
            <iframe
             width="100%" height="450"
              src="https://www.youtube.com/embed/cSvKUOXoqTs" 
              title="S4 - Button function introduction (with English subtitles)"  
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen></iframe>
          </div>
        )
      }
         <button onClick={() => setIsVideoOpen(true)} className={styles.heroPlaybtn}>
            <img alt="play" src={play}/>
          </button>
      </div>
      <div className="container">
        <div className={styles.certificate}>
          <div className={styles.content}>
            <h3 className={styles.contentTitle}>С 2017 г. развиваем тему электротранспорта и освещаем его ценность в современном мире</h3>
            <h4 className={styles.contentSubTitle}>Наша цель</h4>
            <p className={styles.contentText}>Предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Cтремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
            <h4 className={styles.contentSubTitle}>Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h4>
            <div className={styles.contentList}>
              <div className={styles.contentPoints}>
                <img alt="tick" src={tick}/>
                <p><span> Цены</span> от завода-изготовителя Jilong ;</p>
              </div>
              <div className={styles.contentPoints}>
                <img alt="tick" src={tick}/>
                <p><span> Бесплатный тест-драйв</span> самокатов;</p>
              </div>
              <div className={styles.contentPoints}>
                <img alt="tick" src={tick}/>
                <p>Фирменную <span>гарантию 1 год</span>;</p>
              </div>
              <div className={styles.contentPoints}>
                <img alt="tick" src={tick}/>
                <p><span>Ремонт и обслуживание</span> от 1 дня в собственном сервисном центре</p>
              </div>
              <div className={styles.contentPoints}>
                <img alt="tick" src={tick}/>
                <p><span>Более 1 000 запчастей</span> и аксессуаров в наличии.</p>
              </div>
            </div>
          </div>
          <div className={styles.swiperBox}>
             <Swiper
                  slidesPerView={1}
                  autoplay={true}
                  loop={true}
                   modules={[Navigation]}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onBeforeInit={(swiper: SwiperType) => {
                    if (typeof swiper.params.navigation !== 'boolean') {
                      if(swiper.params.navigation){
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                      }
                    }
                  }}
                >
                  <SwiperSlide>
                    <img src={certificate1} alt="certificate"/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={certificate2} alt="certificate"/>
                  </SwiperSlide>
                   <SwiperSlide>
                    <img src={certificate3} alt="certificate"/>
                  </SwiperSlide>
                </Swiper>

             <div className={styles.prevBtn} ref={prevRef}>
                <img alt="prevArrow" src={purpleArrow}/>
             </div>
            <div className={styles.nextBtn} ref={nextRef}>
              <img alt="nextArrow" src={nextArrow}/>
            </div>
          </div>
        </div>
      </div>
      <Prices/>
      <Reviews/>
      <Videos/>
      <Blog/>
    </div>
  )
}

export default About;