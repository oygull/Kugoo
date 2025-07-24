import React, {useRef, useState} from "react";
import styles from "./blog.module.scss";
import blogsArr from "../../app/assets/data/blogsArr";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from "swiper/types";
import calendar from "../../app/assets/icons/calendar.png";
import view from "../../app/assets/icons/view.png"
import {Navigation} from "swiper/modules";
import nextArrow from "../../app/assets/icons/next.png";
import faqArr from "../../app/assets/data/faqArr";
import plusIcon from "../../app/assets/icons/plus.png";
import closeIcon from "../../app/assets/icons/close.png";

function Blog() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] =  useState<number | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(prev => (prev === index ? null : index));
  }

  return(
    <div className={styles.blog}>
      <div className="container">
        <h2 className={styles.blogTitle}>Новые статьи в блоге</h2>
        <div className={styles.sliderContainer}>
        <Swiper
          spaceBetween={50}
          slidesPerView={'auto'}
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
              }
              if(swiper.params.navigation){
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}}
             onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        >
          {
            blogsArr.map((item) => (
              <SwiperSlide style={{maxWidth: "350px"}} key={item.blogId}>
                 <div className={styles.blogEach} >
                  <img src={item.blogImg} className={styles.blogImg} alt="blogImg"/>
                  <div className={styles.blogInner}>
                    <h3 className={styles.blogInnerTitle}>{item.blogTitle}</h3>
                    <p className={styles.blogInnerText}>{item.blogText}</p>
                    <div className={styles.blogWrap}>
                      <div className={styles.blogWrapItem}>
                        <img src={calendar} alt="calendar"/>
                        <p>{item.blogDate}</p>
                      </div>
                      <div className={styles.blogWrapItem}>
                        <img src={view} alt="view"/>
                        <p>{item.blogViews}</p>
                      </div>
                    </div>
                  </div>
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
        <div className={styles.faq}>
          <h3 className={styles.faqTitle}>Отвечаем на вопросы покупателей</h3>
          <div className={styles.faqSection}>
             {
               faqArr.map((faq, index) => (
                <div key={index}>
                  <button className={styles.faqButton} onClick={() => toggleFaq(index)}>
                    <p>{faq.question}</p>
                    {
                      activeFaq === index ? <img src={closeIcon} alt="faqIcon"/> :  <img src={plusIcon} alt="faqIcon"/>
                    }
                  </button>
                  {
                    activeFaq === index && (
                      <div className={styles.answerWrap}>
                        <p>{faq.answer}</p>
                      </div>
                    )
                  }
                </div>
               ))
             }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;