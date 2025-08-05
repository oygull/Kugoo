import React, { useState, useRef, useEffect } from "react";
import styles from "./headerTop.module.scss";
import { Link } from "react-router-dom";
import viber from "../../app/assets/icons/viber.png";
import telegram from "../../app/assets/icons/telegram.png";
import whatsapp from "../../app/assets/icons/whatsapp.png";

function HeaderTop(){

  const [isOpen, setIsOpen] = useState(false);
  const phoneBtnRef = useRef<HTMLButtonElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if(
          phoneRef.current &&
          !phoneRef.current.contains(event.target as Node) &&
          phoneBtnRef.current &&
          !phoneBtnRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false)
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }, []);

  return(
    <div className={styles.headerTop}>
      <div className="container">
        <div className={styles.headerTopWrap}>
            <div className={styles.headerNavList}>
              <Link className={styles.headerNavLinks} to="/services">Сервис</Link>
              <Link className={styles.headerNavLinks} to="/cooperation">Сотрудничество</Link>
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
            <button ref={phoneBtnRef} onClick={handleOpen} className={styles.headerContacts}>
                <p className={styles.phoneLink}>+7 (800) 505-54-61</p>
                <p className={styles.plusButton}>+</p>
            </button>
            {
              isOpen && (
                <div ref={phoneRef} className={styles.phoneNumbers}>
                  <Link to="/" className={styles.phoneNumbersInner}>
                    <p className={styles.numDesc}>Сервисный центр</p>
                    <p className={styles.phoneNum}>+ 7 (499) 350 76 92</p>
                  </Link>
                  <Link to="/" className={styles.phoneNumbersInner}>
                    <p className={styles.numDesc}>Оптовый отдел</p>
                    <p className={styles.phoneNum}>+7 (499) 281-64-52
                    </p>
                    <p className={styles.workingHours}>пн-сб 10:00 - 19:00</p>
                  </Link>
                  <Link to="/" className={styles.phoneNumbersInner}>
                    <p className={styles.numDesc}>Отдел рекламаций и претензий</p>
                    <p className={styles.phoneNum}>+7 (499) 350-76-92</p>
                    <p className={styles.workingHours}>ср-вс с 10:00 до 19:00</p>
                  </Link>
                </div>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;