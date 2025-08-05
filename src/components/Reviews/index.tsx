import React from "react";
import styles from "./reviews.module.scss";
import { Link } from "react-router-dom";
import rightArrow from "../../app/assets/icons/rightArrow.png";
import reviewsArr from "../../app/assets/data/reviewsArr";
import star from "../../app/assets/icons/star.png";
import 'swiper/css';


function Reviews (){


  return(
    <div className={styles.reviews}>
        <h3 className={styles.reviewsTitle}>Отзывы и фото реальных покупателей</h3>
        <Link className={styles.reviewsLink} to="https://yandex.com/maps/org/kugoo_s3_ru/5270200073/reviews/?ll=37.689008%2C55.713101&z=13">
          Читать отзывы на Яндекс <img src={rightArrow} alt="rightArrow"/>
        </Link>
        <div className={styles.reviewsWrap}>
          {
          reviewsArr.map((item) => (
            <Link to="/" className={styles.review} key={item.reviewId}>
              <img className={styles.reviewImg} alt="reviewImg" src={item.reviewImg}/>
               <div className={styles.hoverBox}>
                 <div className={styles.hoverBoxTop}> 
                    <img className={styles.avatar} src={item.reviewPersonImg} alt="avatar"/>
                    <div className={styles.personalInfo}>
                      <h5>{item.reviewPersonName}</h5>
                      <p>Знаток города 2 уровня</p>
                    </div>
                 </div>
                 <div className={styles.optionsBox}>
                  <div className={styles.ratings}>
                  {
                    Array(item.reting).fill(0).map((_, index)=>(
                      <img alt="star" src={star}/>
                    ))
                  }
                  </div>
                    <p className={styles.reviewDate}>{item.reviewDate}</p>
                 </div>
                 <p className={styles.reviewText}>{item.reviewText}</p>
               </div>
            </Link>
          ))
          }
        </div>
    </div>
  )
};

export default Reviews;