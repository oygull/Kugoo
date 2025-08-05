import React, {useRef} from "react";
import styles from "./certificate.module.scss";
import tick from "../../app/assets/icons/tick.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import certificate1 from "../../app/assets/images/certificate1.png";
import certificate2 from "../../app/assets/images/certificate2.webp";
import certificate3 from "../../app/assets/images/certificate3.webp";
import {Navigation} from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import nextArrow from "../../app/assets/icons/next.png";
import purpleArrow from "../../app/assets/icons/purpleArrow.png";
import map from "../../app/assets/images/map.png";
import man from "../../app/assets/icons/man.png";
import workingMan from "../../app/assets/icons/workingMan.png";
import noutbook from "../../app/assets/icons/noutbook.png";
import money from "../../app/assets/icons/money.png";
import recycle from "../../app/assets/icons/recycle.png";
import boxWrap from "../../app/assets/icons/boxWrap.png";
import mail from "../../app/assets/icons/mail.png";
import samokat from "../../app/assets/icons/samokat.png";
import longArrowLeft from "../../app/assets/icons/longArrowLeft.png";
import longArrowRight from "../../app/assets/icons/longArrowRight.png";
import longTopArrow from "../../app/assets/icons/longTopArrow.png";
import longBottomArrow from "../../app/assets/icons/longBottomArrow.png";

function Certificate() {

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return(
    <div className={styles.certificates}>
      <div className="container">
        <div className={styles.certificatesInner}>
          <div className={styles.innerContent}>
            <h3 className={styles.innderTitle}>Выбирайте популярные товары без наценок посредников</h3>
            <p className={styles.innerText}>являясь официальным дилером Kugoo в России</p>
            <h4 className={styles.innerSubtitle}>Сотрудничая с нами, вы получите:</h4>
            <div className={styles.innerDiv}>
              <img src={tick} alt="tick"/>
              <p> <span> Гарантию на товары 1 месяц</span> и возможность приобрести годовую гарантию</p>
            </div>
             <div className={styles.innerDiv}>
              <img src={tick} alt="tick"/>
              <p> <span> Медиаконтент,</span> который можно разместить на своем сайте и соцсетях</p>
            </div>
             <div className={styles.innerDiv}>
              <img src={tick} alt="tick"/>
              <p><span>Удобные способы оплаты</span>  — наличный и безналичный расчет</p>
            </div>
             <div className={styles.innerDiv}>
              <img src={tick} alt="tick"/>
              <p><span>Отсутствие демпинга</span>  на рынке за счет контролируемой МРЦ</p>
            </div>
            <div className={styles.innerBox}>
              <div className={styles.boxWrap}>
                <p className={styles.boxNum}>До <span>25%</span></p>
                <p className={styles.boxPar}>ваша прибыль с продажи единицы товара Kugoo</p>
              </div>
               <div className={styles.boxWrap}>
                <p className={styles.boxNum}> от<span>3 шт.</span></p>
                <p className={styles.boxPar}>минимальная оптовая партия</p>
              </div>
            </div>
          </div>
          <div className={styles.innerWrap}>
            <div className={styles.wrapItem}>
                <p className={styles.itemNum}>93%</p>
                <p className={styles.itemPar}>партнеров  становятся постоянными, благодаря нашему подходу</p>
            </div>
            <div className={styles.sliderBox}>
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
      </div>
      <div className={styles.conditions}>
        <div className="container">
          <div className={styles.conditionsInner}>
            <p className={styles.innerPar}>Давайте обсудим условия сотрудничества, которые подходят именно для вашей компании</p>   
            <div className={styles.btnBox}>
              <input className={styles.innerInput} placeholder="+7 (___) __ - __ - __" type="text"/>
              <button className={styles.innerBtn}>Скачать прайс-лист</button>
            </div>    
          </div>
        </div>             
      </div>
      <div className={styles.map}>
        <div className="container">
          <h2 className={styles.mapTitle}>Доставляем со складов по <span>Москве, Краснодару и минску бесплатно,</span>  по России — любой транспортной компанией на ваш выбор</h2>
          <p className={styles.maptext}>Ежегодно оформляем и доставляем более 1 000 оптовых и розничных заказов. Всегда в наличии на складах весь ассортимент, представленный в каталоге.</p>
          <img className={styles.mapImg} src={map} alt="map"/>
          <h2 className={styles.mapTitle}>Покупайте товар тогда, когда получите на него заказ и оплату от своего клиента</h2>
          <p className={styles.maptext}>За 4 года разработали удобную схему дропшипинга</p>
          <div className={styles.order}>
            <div className={styles.orderTop}>
              <div className={styles.orderItem}>
                <div>
                  <img src={man} alt="map"/>
                </div>
                <p>Покупатель</p>
              </div>
              <img className={styles.orderArrow} alt="longArrowRight" src={longArrowRight}/>
               <div className={styles.orderItem}>
                <div>
                  <img src={noutbook} alt="noutbook"/>
                </div>
                <p>Делает заказ</p>
              </div>
               <img className={styles.orderArrow} alt="longArrowRight" src={longArrowRight}/>
               <div className={styles.orderItem}>
                <div>
                  <img src={money} alt="money"/>
                </div>
                <p>Оплачивает вам</p>
              </div>
               <img className={styles.orderArrow} alt="longArrowRight" src={longArrowRight}/>
               <div className={styles.orderItem}>
                <div>
                  <img src={workingMan} alt="workingMan"/>
                </div>
                <p>Продавец (Вы)</p>
              </div>
            </div>
            <div className={styles.orderMiddle}>
              <img src={longTopArrow} alt="longTopArrow"/>
              <img src={longBottomArrow} alt="longBottomArrow"/>
            </div>
             <div className={styles.orderTop}>
              <div className={styles.orderItem}>
                <div>
                  <img src={boxWrap} alt="boxWrap"/>
                </div>
                <p>Отправка покупателю</p>
              </div>
              <img className={styles.orderArrow} alt="longArrowLeft" src={longArrowLeft}/>
               <div className={styles.orderItem}>
                <div>
                  <img src={samokat} alt="samokat"/>
                </div>
                <p>Товар</p>
              </div>
               <img className={styles.orderArrow} alt="longArrowLeft" src={longArrowLeft}/>
               <div className={styles.orderItem}>
                <div>
                  <img src={recycle} alt="recycle"/>
                </div>
                <p>Поставщик (Мы) обрабатывает заказ</p>
              </div>
               <img className={styles.orderArrow} alt="longArrowLeft" src={longArrowLeft}/>
               <div className={styles.orderItem}>
                <div>
                  <img src={mail} alt="mail"/>
                </div>
                <p>Заказывает товарnна адрес покупателя</p>
              </div>
            </div>
          </div>
        </div>            
      </div>
    </div>
  )
};

export default Certificate;