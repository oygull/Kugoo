import React from "react";
import styles from "./hero.module.scss";
import heroBg from "../../app/assets/images/heroBg.png";
import lighting from "../../app/assets/icons/lighting.png";
import yandex from "../../app/assets/icons/yandex.png";
import star from "../../app/assets/icons/star.png"

function Hero () {
  return(
    <div className={styles.hero}>
      <div className={styles.heroTop}>
        <img className={styles.heroBg} alt="herobg" src={heroBg}/>
        <div className="container">
          <div className={styles.heroTopWrap}>
          <p className={styles.heroNewPar}>Новинка</p>
          <h2 className={styles.heroTitle}>Электросамокаты Kugoo Kirin от официального дилера</h2>
          <p className={styles.heroText}>с бесплатной доставкой по РФ от 1 дня</p>
          <div className={styles.heroBtnBox}>
            <button className={styles.catalogBtn}>Перейти в католог</button>
            <button className={styles.testBtn}>
              <img alt="lighting" src={lighting}/>
              <p>Тест-драйв и обучение</p>
            </button>
          </div>
          </div>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className="container">
          <div className={styles.headerBottomWrap}>
            <div className={styles.headerBottomItem}>
              <h3>Гарантия 1 год</h3>
              <p>на весь ассортимент</p>
            </div>
            <div className={styles.headerBottomItem}>
              <h3>Грассрочка</h3>
              <p>от 6 месяцев</p>
            </div>
            <div className={styles.headerBottomItem}>
              <h3>Подарки</h3>
              <p>и бонусам к покупкам </p>
            </div>
            <div className={styles.headerBottomRatings}>
              <div className={styles.ratinsWrap}> 
                  <div className={styles.yandexWrap}>
                    <img alt="yandex" src={yandex}/>
                  </div>
                  <div className={styles.yandexPar}>
                    <p className={styles.yandexParText}>Яндекс отзывы</p>
                    <div className={styles.yandexParBox}>
                        <img alt="star" src={star}/>
                        <p className={styles.ratingPar}>4,9</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;