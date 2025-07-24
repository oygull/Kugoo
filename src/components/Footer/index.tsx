import React from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../../app/assets/images/logo.png";
import appStore from "../../app/assets/images/appStore.png";
import googlePlay from "../../app/assets/images/googlePlay.png";
import vk from "../../app/assets/icons/vk.png";
import youtube from "../../app/assets/icons/youtube.png";
import instagram from "../../app/assets/icons/instagram.png";
import telegramApp from "../../app/assets/icons/telegramApp.png";
import paymentMethod1 from "../../app/assets/images/paymentMethod1.png";
import paymentMethod2 from "../../app/assets/images/paymentMethod2.png";
import paymentMethod3 from "../../app/assets/images/paymentMethod3.png";
import paymentMethod4 from "../../app/assets/images/paymentMethod4.png";
import paymentMethod5 from "../../app/assets/images/paymentMethod5.png";
import paymentMethod6 from "../../app/assets/images/paymentMethod6.png";
import telegram from "../../app/assets/icons/telegram.png";
import whatsapp from "../../app/assets/icons/whatsapp.png";
import viber from "../../app/assets/icons/viber.png";

function Footer() {
  return(
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerTopInner}>
            <h3>Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты</h3>
            <form className={styles.footerForm}>
              <input type="text" placeholder="Введите Ваш email"/>
              <button type="submit">Подписаться</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.footerWrap}>
        <div className="container">
         <div className={styles.wrapInner}>
          <div className={styles.catalog}>
            <h4>Каталог товаров</h4>
            <div className={styles.cataloglist}>
              <Link className={styles.catalogListLink} to="/">Электросамокаты</Link>
              <Link className={styles.catalogListLink} to="/">Электроскутеры</Link>
              <Link className={styles.catalogListLink} to="/">Электровелосипеды</Link>
              <Link className={styles.catalogListLink} to="/">Электровелосипеды</Link>
            </div>
          </div>
          <div className={styles.buyers}>
            <h4>Покупателям</h4>
            <div className={styles.buyersMain}>
              <div className={styles.cataloglist}>
                <Link className={styles.catalogListLink} to="/">Сервисный центр</Link>
                <Link className={styles.catalogListLink} to="/">Доставка и оплата</Link>
                <Link className={styles.catalogListLink} to="/">Рассрочка</Link>
                <Link className={styles.catalogListLink} to="/">Тест-драйв</Link>
              </div>
              <div className={styles.cataloglist}>
                <Link className={styles.catalogListLink} to="/">Блог</Link>
                <Link className={styles.catalogListLink} to="/">Сотрудничество</Link>
                <Link className={styles.catalogListLink} to="/">Контакты</Link>
                <Link className={styles.catalogListLink} to="/">Акции</Link>
              </div>
            </div>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactsTop}>
              <h4>Контакты</h4>
              <Link className={styles.phoneCall} to="/">Заказать звонок</Link>
            </div>
            <div className={styles.contactsMain}>
              <div className={styles.contactsMainItem}>
                <div className={styles.mainItem}>
                  <p className={styles.mainItemPar}>Call-центр</p>
                  <p className={styles.mainItemNum}>+7 (800) 505-54-61</p>
                  <p className={styles.mainItemText}>Пн-Вс 10:00 - 20:00</p>
                </div>
                <div className={styles.mainItem}>
                  <p className={styles.mainItemPar}>Магазин в Москве ул. Ткацкая, 5 стр. 16</p>
                  <p className={styles.mainItemText}>+7 (499) 406 15 87</p>
                </div>
              </div>
              <div className={styles.contactsMainItem}>
                <div className={styles.mainItem}>
                  <p className={styles.mainItemPar}>Сервисный центр</p>
                  <p className={styles.mainItemNum}>+7 (499) 350-76-92</p>
                  <p className={styles.mainItemText}>Пн-Вс 10:00 - 20:00</p>
                </div>
                <div className={styles.mainItem}>
                  <p className={styles.mainItemPar}>Магазин в Санкт-Петербургеул. Фрунзе, 2</p>
                  <p className={styles.mainItemText}>+7 (499) 406 15 87</p>
                </div>
              </div>
              <div className={styles.contactsMainItem}>
                <div className={styles.mainItem}>
                  <p className={styles.mainItemPar}>Магазин в Краснодаре 
                  ул. Восточно-Кругликовская, 86</p>
                  <p className={styles.mainItemText}>+ 7 (800) 505 54 61</p>
              </div>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.middleWrap}>
          <div className={styles.middleWrapInner}>
            <Link className={styles.footerLogo} to="/">
              <img alt="logo" src={logo}/>
            </Link>
            <div className={styles.appStore}>
              <Link className={styles.appStoreLink} to="/">
                <img alt="appStore" src={appStore}/>
              </Link>
              <Link className={styles.appStoreLink} to="/">
                 <img alt="googlePlay" src={googlePlay}/>
              </Link>
            </div>
          </div>
          <div className={styles.socialsList}>
            <Link className={styles.socialsLink} to="/">
               <img alt="vk" src={vk}/>
               <div className={styles.socialsDiv}>
                  <h5>Вконтакте</h5>
                  <p>3 300</p>
               </div>
            </Link>
            <Link className={styles.socialsLink} to="/">
               <img alt="instagram" src={instagram}/>
               <div className={styles.socialsDiv}>
                  <h5>Instagram</h5>
                  <p>10 602</p>
               </div>
            </Link>
            <Link className={styles.socialsLink} to="/">
               <img alt="youtube" src={youtube}/>
               <div className={styles.socialsDiv}>
                  <h5>YouTube</h5>
                  <p>3 603</p>
               </div>
            </Link>
            <Link className={styles.socialsLink} to="/">
               <img alt="telegram" src={telegramApp}/>
               <div className={styles.socialsDiv}>
                  <h5>Telegram</h5>
                  <p>432</p>
               </div>
            </Link>
          </div>
        </div>
        <div className={styles.bottomWrap}>
          <div className={styles.bottomInner}>
            <Link className={styles.bottomInnerLink} to="">Реквизиты</Link>
            <Link className={styles.bottomInnerLink} to="">Политика конфиденциальности</Link>
          </div>
          <div className={styles.bottomMainWrap}>
            <div className={styles.paymentWrap}>
              <Link className={styles.paymentWrapLink} to="/">
                <img src={paymentMethod1} alt="payment"/>
              </Link>
              <Link className={styles.paymentWrapLink} to="/">
                <img src={paymentMethod2} alt="payment"/>
              </Link>
              <Link className={styles.paymentWrapLink} to="/">
                <img src={paymentMethod3} alt="payment"/>
              </Link>
              <Link className={styles.paymentWrapLink} to="/">
                <img src={paymentMethod4} alt="payment"/>
              </Link>
              <Link className={styles.paymentWrapLink} to="/">
                <img src={paymentMethod5} alt="payment"/>
              </Link>
              <Link className={styles.paymentWrapLink} to="/">
                <img src={paymentMethod6} alt="payment"/>
              </Link>
            </div>
            <div className={styles.chat}>
              <p>Online чат:</p>
              <Link className={styles.chatLink} to="/">
                <img src={viber} alt="viber"/>
              </Link>
              <Link className={styles.chatLink} to="/">
                <img src={whatsapp} alt="whatsapp"/>
              </Link>
              <Link className={styles.chatLink} to="/">
                <img src={telegram} alt="telegram"/>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;