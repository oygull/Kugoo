import React from "react";
import styles from "./russia.module.scss";
import peopleImg from "../../app/assets/images/peopleImg.jpg"
import miniArrow from "../../app/assets/icons/miniArrow.png";
import { Link } from "react-router-dom";

function Russia (){
  return(
    <div className={styles.russia}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.russiaWrap}>
            <img className={styles.peopleImg} src={peopleImg} alt="people"/>
          </div>
          <div className={styles.innerContent}>
              <h3 className={styles.innerTitle}>Kugoo-Russia — первый официальный дилер Kugoo Kirin в России</h3>
              <p className={styles.innerText}>Наша цель предоставить полный ассортимент современной продукции Kugoo Kirin, которая улучшает и упрощает жизнь. Стремимся подарить комфорт и эмоции, поэтому помогаем с выбором и внимательно относимся к сервисному обслуживанию.</p>
              <div className={styles.innerWrap}>
                  <h4 className={styles.innerWrapTitle}>Специализируемся исключительно на бренде Kugoo, поэтому вы получите:</h4>
                  <ul className={styles.innerList}>
                    <li className={styles.innrListItem}>
                      <img src={miniArrow} alt="arrow"/>
                      <p>цены от завода-изготовителя Jilong ;</p>
                    </li>
                    <li className={styles.innrListItem}>
                      <img src={miniArrow} alt="arrow"/>
                      <p>бесплатный тест-драйв самокатов;</p>
                    </li>
                    <li className={styles.innrListItem}>
                      <img src={miniArrow} alt="arrow"/>
                      <p>фирменную гарантию 1 год;</p>
                    </li>
                    <li className={styles.innrListItem}>
                      <img src={miniArrow} alt="arrow"/>
                      <p>ремонт и обслуживание от 1 дня в собственном сервисном центре;</p>
                    </li>
                    <li className={styles.innrListItem}>
                      <img src={miniArrow} alt="arrow"/>
                      <p>более 1 000 запчастей и аксессуаров в наличии</p>
                    </li>
                  </ul>
                  <Link className={styles.innerLink} to="">Смотреть сертификат</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Russia