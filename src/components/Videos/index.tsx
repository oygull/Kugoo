import React, { useRef, useState } from "react";
import styles from "./videos.module.scss"
import arrowRight from "../../app/assets/icons/rightArrow.png";
import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import playIcon from "../../app/assets/icons/play.png";
import {Navigation} from "swiper/modules";
import videosArr from "../../app/assets/data/videosArr";
import nextArrow from "../../app/assets/icons/next.png";
import { Link } from "react-router-dom";

function Videos(){


  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  return(
    <div>
         <div className="container">
          <div className={styles.reviewsTop}>
            <div className={styles.reviewsBox}>
              <h3>Видеообзоры</h3>
              <p>Узнайте больше о самокатах Kugoo и посмотрите сравнительные обзоры разных моделей на нашем YouTube-канале.</p>
            </div>
            <Link className={styles.reviewsWrapLink} to="/">Смотреть все видеообзоры <img src={arrowRight} alt="arrowRight"/></Link>
          </div>
          <div className={styles.sliderContainer}>
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={'auto'}
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
            onSlideChange={(swiper: SwiperType) => {
              setActiveIndex(swiper.realIndex);
              swiper.slideToLoop(swiper.realIndex, 300);
            }}
        >
          {
            videosArr.map((item, index) => (
              <SwiperSlide 
                key={item.youtubeId}
                style={{
                  width: activeIndex === index ? "500px" : "320px",
                  transition: "width 0.3s"
                }}
              >
                {activeIndex === index ? (
                  <div className={styles.videoBoxMain}>
                    <iframe 
                      allowFullScreen
                      style={{ width: "100%", height: "100%" }}
                      src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                    />
                  </div>
                ) : (
                  <div 
                    onClick={() => setActiveIndex(index)}
                    className={styles.itemsWrap}
                  >
                    <img className={styles.coverImg} src={item.thumbnail} alt="cover" />
                    <button className={styles.playBtn}>
                      <img alt="play" src={playIcon} />
                    </button>
                  </div>
                )}
                <p className={styles.videoTitle}>{item.title}</p>
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
  )
};

export default Videos;