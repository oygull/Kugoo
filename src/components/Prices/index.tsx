import React, { useState } from "react";
import styles from "./prices.module.scss";
import shoppingCart from "../../app/assets/icons/shopping-cart.png"
import { Link } from "react-router-dom";
import tick from "../../app/assets/icons/tick.png";
import location from "../../app/assets/icons/location.png";
import billfold from "../../app/assets/icons/billfold.png";
import percentage from "../../app/assets/icons/percentage.png";
import bicycle from "../../app/assets/images/bicycle.png";
import arrowRight from "../../app/assets/icons/rightArrow.png";
import videoCoverImg from "../../app/assets/images/videoCoverImg.png";
import playIcon from "../../app/assets/icons/play.png";

function Prices () {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.prices}>
      <div className="container">
        <div className={styles.pricesTop}>
          <h3 className={styles.pricesTitle}>Предлагаем самые выгодные цены
          на продукты Kugoo за счет прямых поставок</h3>
          <p className={styles.pricesPar}>и заботимся об удобстве покупателей</p>
          <div className={styles.btnBox}>
            <button className={styles.internetBtn}>Интернет-магазин</button>
            <button className={styles.servicesBtn}>Сервисный центр</button>
          </div>
          <div className={styles.pricesBox}>
            <div className={styles.priceTypes}>
              <img className={styles.priceBoxIcon} src={shoppingCart} alt="shoppingCart"/>
              <h4>Х товаров в каталоге</h4>
              <p>Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении. </p>
            </div>
            <div className={styles.priceTypes}>
              <img className={styles.priceBoxIcon} src={billfold} alt="billfold"/>
              <h4>5 способов оплаты</h4>
              <p>Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка». </p>
            </div>
            <div className={styles.priceTypes}>
              <img className={styles.priceBoxIcon} src={tick} alt="tick"/>
              <h4>Полная документация и гарантия 1 год</h4>
              <p>При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</p>
            </div>
            <div className={styles.priceTypes}>
              <img className={styles.priceBoxIcon} src={location} alt="location"/>
              <h4>Отправка заказа день в день</h4>
              <p>Отправляем заказы по всей России день в день или забирайте товар самостоятельно в магазинах в Москве, Санкт-Петербурге и Краснодаре</p>
            </div>
            <div className={styles.priceTypes}>
              <img className={styles.priceBoxIcon} src={percentage} alt="percentage"/>
              <h4>Рассрочка без переплат</h4>
              <p>В нашем магазине можно приобрести любой товар в рассрочку.</p>
              <Link className={styles.priceTypesLink} to="/">Подробнее про условия рассрочки</Link>
            </div>
            <div className={styles.moreInfoBox}>
              <img className={styles.bicycle} src={bicycle} alt="bicycle"/>
              <h4>Больше в каталоге</h4>
              <Link className={styles.moreInfoLink} to="/">
                Перейти <img alt="arrowRight" src={arrowRight}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {
        !isPlaying ? (
          <div onClick={handlePlay} className={styles.videoWrap}>
            <img  src={videoCoverImg} alt="videoCoverImg"/>
            <button className={styles.playBtn}>
              <img src={playIcon} alt="playIcon"/>
            </button>
          </div>
        ) : (
          <div className={styles.videoWrap}>
          <iframe width="100%"
           height="630"
            src="https://www.youtube.com/embed/6XgjJEVLCiU?autoplay=1&mute=0" 
            title="You Tube video" 
            allow="accelerometer; autoplay;"
            allowFullScreen>
          </iframe>
      </div>
        )
      }
   
    </div>
  )
};

export default Prices;