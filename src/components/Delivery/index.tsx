import React from "react";
import styles from "./delivery.module.scss"
import deliveryImg1 from "../../app/assets/images/deliveryImg1.png";
import deliveryImg2 from "../../app/assets/images/deliveryImg2.png";
import { Link } from "react-router-dom";
import rightArrow from "../../app/assets/icons/rightArrow.png";
import dron from "../../app/assets/images/dron.png";

function Delivery () {
  return(
    <div className={styles.delivery}>
      <div className="container">
        <div className={styles.deliveryTop}>
          <div className={styles.deliveryBlock}>
            <img className={styles.deliveryImg} src={deliveryImg1} alt="delivery"/>
            <h3>Подбор модели электросамоката</h3>
            <p className={styles.deliveryPar}>Пройдите тест и выберите электросамокат по своим критериям</p>
            <Link className={styles.deliveryBtn} to="/">
              <p>Подобрать модель</p>
              <img className={styles.arrow} src={rightArrow} alt="rightArrow"/>
            </Link>
          </div>
          <div className={styles.deliveryBlock}>
            <img className={styles.deliveryImg} src={deliveryImg2} alt="delivery"/>
            <h3>Сервисное  обслуживание</h3>
            <p className={styles.deliveryPar}>Крупнейший сервисный центр в России для продуктов Kugoo</p>
            <Link className={styles.deliveryBtn} to="/">
              <p>Подобрать модель</p>
              <img className={styles.arrow} src={rightArrow} alt="rightArrow"/>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.deliveryBottom}>
          <div className="container">
            <div className={styles.deliveryBottomInner}>
                <div className={styles.dronImg}>
                    <img src={dron} alt="dron"/>
                </div>
                <div className={styles.deliveryContent}>
                    <p className={styles.deliveryBadge}>Акция</p>
                    <h3 className={styles.deliveryTitle}>Бесплатная доставка электросамокатов по России до 01.09</h3>
                    <Link className={styles.moreInfoBtn} to="/">Подробнее</Link>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Delivery;