import React , {useState} from "react";
import styles from "./socials.module.scss";
import { Link } from "react-router-dom";
import rightArrow from "../../app/assets/icons/rightArrow.png";
import vk from "../../app/assets/icons/vkWhite.png";
import instagram from "../../app/assets/icons/instagramWhite.png";
import youtube from "../../app/assets/icons/youtubeWhite.png";
import telegram from "../../app/assets/icons/telegramWhite.png";
import tick from "../../app/assets/icons/checkCircle.png";
import Faq from "../Faq";

function Socials(){

  return(
    <div className={styles.socials}>
      <div className="container">
        <div className={styles.socialsTop}>
          <div className={styles.socialsContent}>
            <h3 className={styles.socialsTitle}>Общаемся с клиентами, чтобы знать пожелания и предлагать лучший ассортимент и сервис</h3>
            <p className={styles.socialsPar}>И еще приняли активное участие в выставке «Велокульт 2021»</p>
            <Link className={styles.socialsLink} to="/">
              Смотреть как это было <img src={rightArrow} alt="rightArrow"/>
            </Link>
          </div>
          <div className={styles.socialsBox}>
            <Link className={styles.socialsItemLink} to="/">
              <img alt="vk" src={vk}/>
              <p className={styles.socialsName}>Вконтакте</p>
              <p className={styles.socialsNum}>3 300</p>
            </Link>
             <Link className={styles.socialsItemLink} to="/">
              <img alt="instagram" src={instagram}/>
              <p className={styles.socialsName}>Instagram</p>
              <p className={styles.socialsNum}>10 602</p>
            </Link>
             <Link className={styles.socialsItemLink} to="/">
              <img alt="youtube" src={youtube}/>
              <p className={styles.socialsName}>YouTube</p>
              <p className={styles.socialsNum}>3 603</p>
            </Link>
             <Link className={styles.socialsItemLink} to="/">
              <img alt="telegram" src={telegram}/>
              <p className={styles.socialsName}>Telegram</p>
              <p className={styles.socialsNum}>432</p>
            </Link>
          </div>
        </div>
        <Faq/>
      </div>
       <div className={styles.bottom}>
          <div className="container">
            <div className={styles.bottomInner}>
              <div className={styles.bottomContent}>
                <h3 className={styles.bottomTitle}>Обсудите индивидуальное коммерческое предложение с личным менеджером</h3>
                <div className={styles.bottomItem}>
                  <img src={tick} alt="tick"/>
                  <p>Ознакомитесь с актуальным каталогом;</p>
                </div>
                 <div className={styles.bottomItem}>
                  <img src={tick} alt="tick"/>
                  <p>Узнаете, какие категории товаров пользуются наибольшим спросом;</p>
                </div>
                 <div className={styles.bottomItem}>
                  <img src={tick} alt="tick"/>
                  <p>Получите доступ к выгодным ценам на закупку оптом.</p>
                </div>
              </div>
              <div className={styles.bottomWrap}>
                <h4>Получите персональное коммерческоепредложение</h4>
                <p className={styles.bottomText}>с учетом ваших условий работы</p>
                <input className={styles.bottomInput} type="text" placeholder="+7 (___) __ - __ - __"/>
                <button className={styles.bottomButton}>Скачать прайс-лист</button>
                <label className={styles.bottomLabel}>
                  <input type="checkbox"/>
                  <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <span>политикой конфиденциальности</span></p>
                </label>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};

export default Socials;