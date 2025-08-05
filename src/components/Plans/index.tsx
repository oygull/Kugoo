import React from "react";
import styles from "./plans.module.scss";
import tick from "../../app/assets/icons/checkCircleWhite.png";
import brandImg from "../../app/assets/images/brandImg.png";

function Plans() {
  return(
    <>
      <div className={styles.plans}>
      <div className="container">
        <div className={styles.plansInner}>
          <div className={styles.innerWrap}>
            <p className={styles.innerBadge}>Бесплатно</p>
            <h2 className={styles.innerTitle}>Получите готовый план развития бизнесапо продаже товаров Kugoo</h2>
            <p className={styles.innerText}>Подготовим для вас бизнес-план, который включает:</p>
            <div className={styles.innerWrapItem}>
              <img src={tick} alt="tick"/>
              <p>индивидуальный прайс-лист</p>
            </div>
             <div className={styles.innerWrapItem}>
              <img src={tick} alt="tick"/>
              <p>расчет прогнозируемой прибыли и сроков окупаемости</p>
            </div>
             <div className={styles.innerWrapItem}>
              <img src={tick} alt="tick"/>
              <p>бренд-зону Kugoo</p>
            </div>
             <div className={styles.innerWrapItem}>
              <img src={tick} alt="tick"/>
              <p>разработку сайта</p>
            </div>
             <div className={styles.innerWrapItem}>
              <img src={tick} alt="tick"/>
              <p>и еще +15 услуг под ключ</p>
            </div>
          </div>
          <div className={styles.price}>
            <h3 className={styles.priceTitle}>Получите прайс-лист с оптовыми ценами</h3>
            <p className={styles.priceText}>а также рассчитаем вашу прибыльот продажи товаров Kugoo</p>
            <input className={styles.priceInput} type="text" placeholder="+7 (___) __ - __ - __"/>
            <button className={styles.priceBtn}>Скачать прайс-лист</button>
            <label className={styles.priceLabel}>
              <input type="checkbox"/>
              <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <span>политикой конфиденциальности</span> </p>
            </label>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.brand}>
        <div className="container">
          <div className={styles.brandInner}>
            <div className={styles.brandContent}>
              <h3 className={styles.brandTitle}>Kugoo — самый популярный бренд электротранспортав России</h3>
              <p className={styles.brandPar}>Количество поисковых запросов от потенциальных клиентов в 2020 г. по сравнению с 2019 г. выросло в 2 раза согласно сервису оценки спроса и популярности.</p>
              <p className={styles.brandPar}>Kugoo имеет лидирующие позиции среди конкурирующих брендов: спрос на продукцию от завода Jilong выше в несколько раз.</p>
            </div>
            <img className={styles.brandImg} src={brandImg}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plans;