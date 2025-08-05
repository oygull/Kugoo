import React from "react";
import styles from "./buyItem.module.scss";
import billfold from "../../app/assets/icons/billfoldMini.png";
import picture from "../../app/assets/icons/insert-picture.png";
import box from "../../app/assets/icons/box.png";
import updata from "../../app/assets/icons/update-arrow.png"

function BuyItem() {
  return(
    <div className={styles.buyItem}>
      <div className="container">
        <div className={styles.buyItemInner}>
          <div className={styles.buyContent}> 
            <h2 className={styles.buytitle}>Покупайте товары Kugoo по оптовым ценамот официального дилера</h2>
            <p className={styles.buyText}>Ваша прибыль — до 25% от закупочной стоимости 1 единицы товара</p>
            <div className={styles.buyWrap}>
              <div className={styles.buyWrapInner}>
                <div className={styles.imgBox}>
                  <img src={billfold} alt="billfold"/>
                </div>
                <p>Отсутствие демпинга — контроль цен и МРЦ</p>
              </div>
              <div className={styles.buyWrapInner}>
                <div className={styles.imgBox}>
                  <img src={box} alt="billfold"/>
                </div>
                <p>Бесплатная доставка до любой ТК</p>
              </div>
                <div className={styles.buyWrapInner}>
                <div className={styles.imgBox}>
                  <img src={updata} alt="updata"/>
                </div>
                <p>Беспроблемный возврат и замена брака</p>
              </div>
                <div className={styles.buyWrapInner}>
                  <div className={styles.imgBox}>
                    <img src={picture} alt="picture"/>
                  </div>
                  <p>Готовый медиаконтент для вашего сайта и соцсетей</p>
                </div>
            </div>
          </div>
          <div className={styles.priceBox}>
            <h3>Получите прайс-лист с оптовыми ценами</h3>
            <p className={styles.priceBoxText}>а также рассчитаем вашу прибыльот продажи товаров Kugoo</p>
            <input className={styles.priceInput} type="text" placeholder="+7 (___) __ - __ - __"/>
            <button className={styles.priceBtn}>Скачать прайс-лист</button>
            <label className={styles.checkBox}>
              <input type="checkbox"/>
              <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <span>политикой конфиденциальности</span> </p>
            </label>
          </div>  
        </div>
      </div>
    </div>
  )
};

export default BuyItem;