import React, {useState} from "react";
import styles from "./workingOrocess.module.scss"
import settings from "../../app/assets/icons/settings.png";
import galleryImg1 from '../../app/assets/images/galleryImg1.png';
import galleryImg2 from '../../app/assets/images/galleryImg2.png';
import galleryImg3 from '../../app/assets/images/galleryImg3.png';
import galleryImg4 from '../../app/assets/images/galleryImg4.png';
import galleryImg5 from '../../app/assets/images/galleryImg5.png';
import galleryImg6 from '../../app/assets/images/galleryImg6.png';
import { Link } from "react-router-dom";
import pin from "../../app/assets/icons/pin.svg";
import call from "../../app/assets/icons/call.svg";
import warning from "../../app/assets/icons/warning.svg";
import Faq from "../Faq";

const gallery = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6]

function WorkingProcess(){

  return(
    <div className={styles.workingProcess}>
      <div className="container">
        <div className={styles.processTop}>
            <h2 className={styles.processTitle}>Посмотритена процесс работы</h2>
            <div className={styles.processBox}>
              <img src={settings} alt="settings"/>
              <div className={styles.processBoxContent}>
                <p className={styles.textTop}>В среднем</p>
                <p className={styles.textMiddle}>350 доработок</p>
                <p className={styles.textBottom}>специалисты выполняют за 1 месяц</p>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.gallery}>
        {
          gallery.map((img, index) => (
            <div key={index} className={styles.galleryImgBox}>
              <img src={img} alt="img"/>
            </div>
          ))
        }
      </div>
      <Faq/>
      <div className={styles.adressWrap}>
        <h2 className={styles.adresstitle}>Адреса сервисных центров</h2>
          <div className={styles.adress}>
          <div className="container">
             <div className={styles.adressInner}>
                <div className={styles.adressInnerItem}>
                  <h4>Москва</h4>
                    <div className={styles.adressBox}>
                    <img src={pin} alt="pin"/>
                    <div className={styles.asressContent}>
                      <h5>Ткацкая улица, 5с16</h5>
                      <p>Пн - Вс 10:00 - 19:00</p>
                      <Link className={styles.adressLink} to="/">Смотреть на карте</Link>
                    </div>
                  </div>
                  <div className={styles.adressBox}>
                    <img src={call} alt="call"/>
                    <div className={styles.asressContent}>
                      <h5 className={styles.adressNum}>+7 (499) 350-76-92</h5>
                    </div>
                  </div>
                  <div className={styles.adressBox}>
                    <img src={warning} alt="warning"/>
                    <div className={styles.asressContent}>
                      <h5>При себе иметь паспорт для прохождения через пропускной пункт</h5>
                    </div>
                  </div>
                </div>
                 <div className={styles.adressInnerItem}>
                  <h4>Санкт-Петербург</h4>
                    <div className={styles.adressBox}>
                    <img src={pin} alt="pin"/>
                    <div className={styles.asressContent}>
                      <h5>Фрунзе улица, 2</h5>
                      <p>Пн - Вс 10:00 - 19:00</p>
                      <Link className={styles.adressLink} to="/">Смотреть на карте</Link>
                    </div>
                  </div>
                  <div className={styles.adressBox}>
                    <img src={call} alt="call"/>
                    <div className={styles.asressContent}>
                      <h5 className={styles.adressNum}>+7 (499) 350-76-92</h5>
                    </div>
                  </div>
                </div>
                 <div className={styles.adressInnerItem}>
                  <h4>Краснодар</h4>
                    <div className={styles.adressBox}>
                    <img src={pin} alt="pin"/>
                    <div className={styles.asressContent}>
                      <h5>Восточно-Кругликовская улица, 86</h5>
                      <p>Вт - Сб 10:00 - 20:00</p>
                      <Link className={styles.adressLink} to="/">Смотреть на карте</Link>
                    </div>
                  </div>
                  <div className={styles.adressBox}>
                    <img src={call} alt="call"/>
                    <div className={styles.asressContent}>
                      <h5 className={styles.adressNum}>+7 (499) 350-76-92</h5>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WorkingProcess;