import React from "react";
import styles from "./headerTop.module.scss";
import { Link } from "react-router-dom";
import viber from "../../app/assets/icons/viber.png";
import telegram from "../../app/assets/icons/telegram.png";
import whatsapp from "../../app/assets/icons/whatsapp.png";

function HeaderTop(){
  return(
    <div className={styles.headerTop}>
      <div className="container">
        <div className={styles.headerTopWrap}>
            <div className={styles.headerNavList}>
              <Link className={styles.headerNavLinks} to="/">Сервис</Link>
              <Link className={styles.headerNavLinks} to="/">Сотрудничество</Link>
              <Link className={styles.headerNavLinks} to="/">Заказать звонок</Link>
              <div className={styles.socialsLink}>
                <Link className={styles.headerSocialsLinks} to="/">
                  <img src={viber} alt="socials"/>
                </Link>
                <Link className={styles.headerSocialsLinks} to="/">
                  <img src={whatsapp} alt="socials"/>
                </Link>
                <Link className={styles.headerSocialsLinks} to="/">
                  <img src={telegram} alt="socials"/>
                </Link>
              </div>
            </div>
            <div className={styles.headerContacts}>
                <Link className={styles.phoneLink} to="">+7 (800) 505-54-61</Link>
                <button className={styles.plusButton}>+</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;