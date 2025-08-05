import React, {useState, useRef} from "react";
import styles from "./settings.module.scss";
import settingsTabArr from "../../app/assets/data/settingsTabArr";
import dron from "../../app/assets/images/dron.png";
import tick from "../../app/assets/icons/checkCircle.png"
import { Link } from "react-router-dom";
import samokat from "../../app/assets/icons/samokat.png";
import man from "../../app/assets/icons/man.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper/types";
import teamMember1 from "../../app/assets/images/team1.png";
import teamMember2 from "../../app/assets/images/team2.png";
import teamMember3 from "../../app/assets/images/team3.png";
import teamMember4 from "../../app/assets/images/team4.png";
import teamMember5 from "../../app/assets/images/team5.png";
import {Navigation} from "swiper/modules";
import nextArrow from "../../app/assets/icons/next.png";
import 'swiper/css';

 const teamMembersArr = [
    {
      memberImg: teamMember1,
      memberName: 'Дмитрий Никитенко',
      memberRole: 'Руководитель сервисного центра'
    },
    {
      memberImg: teamMember2,
      memberName: 'Анастасия Горина',
      memberRole: 'Заместитель директора'
    },
    {
      memberImg: teamMember3,
      memberName: 'Юлия Кортич',
      memberRole: 'Менеджер по продажам'
    },
    {
      memberImg: teamMember4,
      memberName: 'Сергей Бойко',
      memberRole: 'Мастер по ремонту самокатов'
    },
    {
      memberImg: teamMember5,
      memberName: 'Дмитрий Никитенко',
      memberRole: 'Руководитель сервисного центра'
    }
  ]

function Settings() {

  const [activetab, setActiveTab] = useState(0);
  const midpoint = Math.ceil(settingsTabArr[activetab].tabContent.length/2);
  const leftColumn = settingsTabArr[activetab].tabContent.slice(0, midpoint);
  const rightColumn = settingsTabArr[activetab].tabContent.slice(midpoint);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return(
    <div className={styles.settings}>
      <div className={styles.settingsInner}>
         <div className="container">
          <h2 className={styles.settingsTitle}>Стоимость гидроизоляции и настройки</h2>
          <p className={styles.settingsPar}>Для версии MAX и VIP гидроизоляция и настройка — бесплатно</p>
          <div className={styles.tabContainer}>
            <div className={styles.tabWrap}>
              {
                settingsTabArr.map((item, index) => (
                  <button 
                    className={activetab === index ? styles.activeTabBtn : styles.tabBtn}
                    onClick={()=> setActiveTab(index)} key={index}>
                    {item.tabTitle}
                  </button>
                ))
              }
            </div>
             <div className={styles.tabContent}>
              {
                [leftColumn, rightColumn].map((column, colIdx) => (
                  <div className={styles.tabContentInner} key={colIdx}>
                    {
                     
                    column.map((item, index) => (
                      <div className={styles.tabContentItem} key={index}>
                        <p className={styles.tabOption}>{item.option}</p>
                        <p className={styles.tabOptionprice}>от {item.price} руб.</p>
                      </div>
                      ))
                  }
                  </div>
                ))
              }
             </div>
          </div>
        </div>
      </div>
      <div className={styles.settingsMiddle}>
        <div className="container">
          <div className={styles.middleInner}>
            <div className={styles.middleInneContent}>
                <h3 className={styles.middleTitle}>Заберем ваш самокат для ремонта и вернем обратно</h3>
                <p className={styles.middlePar}>Доставка электросамокатов в/из сервисного центра курьером в Москве.Доставка электросамокатов в/из сервисного центра курьером в Москве.</p>
                <h4 className={styles.middleSubTitle}>Что дает гидроизоляция:</h4>
                <div className={styles.middleItemBox}>
                   <div className={styles.middleItem}>
                  <img src={tick} alt="tick"/>
                  <p>600 руб. в одну сторону</p>
                </div>
                 <div className={styles.middleItem}>
                  <img src={tick} alt="tick"/>
                  <p>1000 руб. туда-обратно</p>
                </div>
                </div>
                <Link to="/" className={styles.middleBtn}>Заказать доставку</Link>
            </div>
            <img src={dron} className={styles.dron} alt="dron"/>
          </div>
        </div>
      </div>
      <div className={styles.team}> 
        <div className="container">
          <h2 className={styles.teamTitle}>Команда сервисного центра</h2>
          <div className={styles.teamWrap}>
            <div className={styles.teamWrapItem}>
              <img src={samokat} alt="samokat"/>
              <p>Специалисты сервисного центра подготавливают самокаты к отправке вам, проводят техническое обслуживание, тюнингуют и при необходимости ремонтируют их</p>
            </div>
            <div className={styles.teamWrapItem}>
              <img src={man} alt="man"/>
              <p>Консультант сервисного центра сопровождает васна протяжении всего времени эксплуатации и помогает решить возникающие вопросы.</p>
            </div>
          </div>
          <div className={styles.sliderBox}>
            <Swiper
              loop={true}
              autoplay={true}
              spaceBetween={30}
              slidesPerView={4}
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
             {
              teamMembersArr.map((member, index) => (
                 <SwiperSlide key={index}>
                  <div className={styles.memberWrap}>
                    <div className={styles.memberImg}>
                      <img src={member.memberImg} alt="img"/>
                    </div>
                    <h5>{member.memberName}</h5>
                    <p>{member.memberRole}</p>
                  </div>
                 </SwiperSlide>
              ))
             }
            </Swiper>
            <div className={styles.prevBtn} ref={prevRef}></div>
            <div className={styles.nextBtn} ref={nextRef}>
              <img alt="nextArrow" src={nextArrow}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Settings;