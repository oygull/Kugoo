import React, { useState } from "react";
import styles from "./deliveryPayment.module.scss";
import { Link } from "react-router-dom";
import home from "../../app/assets/icons/home.svg";
import dron from "../../app/assets/images/dronSmall.png";
import deliveryInfoArr from "../../app/assets/data/deliveryInfoArr";
import paymentMethod1 from "../../app/assets/images/paymentMethod1.png";
import paymentMethod2 from "../../app/assets/images/paymentMethod2.png";
import paymentMethod3 from "../../app/assets/images/paymentMethod3.png";
import paymentMethod4 from "../../app/assets/images/paymentMethod4.png";
import paymentMethod5 from "../../app/assets/images/paymentMethod5.png";
import paymentMethod6 from "../../app/assets/images/paymentMethod6.png";
import iPhone from "../../app/assets/images/iPhone.png";
import tick from "../../app/assets/icons/checkCircleWhite.png";
import appStore from "../../app/assets/images/appStore.png";
import playMarket from "../../app/assets/images/googlePlay.png";
import portrait from "../../app/assets/images/portrait.png";

function DeliveryPayment() {

  const [activeTab, setActiveTab] = useState(0);

  return(
    <div className={styles.deliveryPayment}>
       <div className="container">
        <div className={styles.breadcrump}>
          <Link className={styles.breadcrumpLink} to="/">
          <img src={home} alt="home"/>
           <p>Главная</p> 
           </Link>
          <p>/</p>
          <Link className={styles.breadcrumpLink} to="/about"> Доставка и оплата</Link>
        </div>
      </div>
      <div className={styles.hero}> 
        <div className="container">
          <div className={styles.heroInner}>
            <h3 className={styles.heroTitle}>Оплата и доставка любыми удобными способами</h3>
            <img className={styles.dron} alt="dron" src={dron}/>
          </div>
        </div>
      </div>
      <div className={styles.delivery}>
        <div className="container">
          <h2 className={styles.deliveryTitle}>Отправляем по России в день заказа</h2>
          <div className={styles.deliveryInner}>
            <h4 className={styles.deliverySubTitle}>Выберите свой регион</h4>
            <div className={styles.deliveryWrap}>
              {
                deliveryInfoArr.map((item, index) => (
                  <button  className={activeTab === index ? styles.activeFaqBtn : styles.faqBtn}
                   onClick={() => setActiveTab(index)} key={index}> {item.place} </button>
                ))
              }
            </div>    
            <div className={styles.deliveryContent}>
              <div className={styles.deliveryItem}>
                <h4 className={styles.delioverySubTitle}>Способ доставки</h4>
                <h4 className={styles.delioverySubTitle}>Время доставки</h4>
                <h4 className={styles.delioverySubTitle}>Стоимость</h4>
              </div>
              <div className={styles.deliveryItemContent}>
                <p className={styles.deliveryText}>Курьером</p>
                <p className={styles.deliveryText}>{deliveryInfoArr[activeTab].deliveryTime}</p>
                <p className={styles.deliveryText}>Бесплатная доставка</p>
              </div>
              <div className={styles.deliveryItemContent}>
                <p className={styles.deliveryText}>Срочная доставка</p>
                <div className={styles.deliveryParBox}>
                  <p className={styles.deliveryText}>{deliveryInfoArr[activeTab].deliverySpeedUp}</p>
                  <p className={styles.deliveryText}>{deliveryInfoArr[activeTab].deliverySpeedUp}</p>
                </div>
                <div className={styles.deliveryParBox}>
                   <p className={styles.deliveryText}>Стоимость срочной доставки</p>
                  <Link to="/" className={styles.deliveryText}></Link>
                </div>
              </div>
              <div className={styles.deliveryAdress}>
                  <p className={styles.deliveryAdressText}>Самовывоз из магазина <span>{deliveryInfoArr[activeTab].deliveryAdress}</span></p>
                  <p className={styles.deliveryAdressText}>Перед посещением магазина уточняйте  наличие рассматриваемой вами модели по телефону <Link className={styles.numLink} to="">{deliveryInfoArr[activeTab].deliveryPhoneNum}</Link> </p>
              </div>
              <div className={styles.payment}>
                <h4 className={styles.paymentSubTitle}>Выбирайте подходящий способ оплаты</h4>
                <div className={styles.paymentInner}>
                  <p className={styles.paymentText}>Наличными в магазине или курьеру</p>
                  <div className={styles.paymentMethods}>
                    <p className={styles.paymentText}>Картой в магазине</p>
                    <div className={styles.paymentMethodsList}>
                      <Link className={styles.paymentMrthodLink} to="">
                        <img src={paymentMethod1} alt="payment"/>
                      </Link>
                      <Link className={styles.paymentMrthodLink} to="">
                        <img src={paymentMethod2} alt="payment"/>
                      </Link>
                      <Link className={styles.paymentMrthodLink} to="">
                        <img src={paymentMethod3} alt="payment"/>
                      </Link>
                      <Link className={styles.paymentMrthodLink} to="">
                        <img src={paymentMethod4} alt="payment"/>
                      </Link>
                      <Link className={styles.paymentMrthodLink} to="">
                        <img src={paymentMethod5} alt="payment"/>
                      </Link>
                      <Link className={styles.paymentMrthodLink} to="">
                        <img src={paymentMethod6} alt="payment"/>
                      </Link>
                    </div>
                  </div>
                  <p className={styles.paymentText}>Онлайн на сайте через корзину</p>
                </div>
                 <div className={styles.paymentInner}>
                  <p className={styles.paymentText}>Через интернет-банкинг по счету, который вам выставит менеджер</p>
                  <p className={styles.paymentText}>В рассрочку от Сбербанка, Тинькофф банка  или по карте "Халва" от Совкомбанка</p>
                  <p className={styles.paymentText}>В рассрочку — толькодля электрсоамокатов версии MAX <Link className={styles.numLink} to="/">Узнать подробнее</Link> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.track}>
        <div className="container">
          <div className={styles.trackInner}>
            <div className={styles.trackContent}>
              <h3 className={styles.trackTitle}>Отслеживайте свои заказы в фирменном приложении Kugoo-Russia</h3>
              <div className={styles.trackItemList}>
                <div className={styles.trackItem}>
                  <img alt="tick" src={tick}/>
                  <p>Узнавайте первыми об акциях и спецпредложениях</p>
                </div>
                <div className={styles.trackItem}>
                  <img alt="tick" src={tick}/>
                  <p>Получите доступ к секретным распродажам и полезной информации</p>
                </div>
                <div className={styles.trackItem}>
                  <img alt="tick" src={tick}/>
                  <p>УДержите наши контакты всегда под рукой</p>
                </div>
              </div>
              <div className={styles.trackApp}>
                <Link className={styles.trackAppLink} to="">
                  <img alt="trackApp" src={appStore}/>
                </Link>
                <Link className={styles.trackAppLink} to="">
                  <img alt="playMarket" src={playMarket}/>
                </Link>
              </div>
            </div>
            <img className={styles.trackImg} alt="iPhone" src={iPhone}/>
          </div>
        </div>     
      </div>
      <div className={styles.model}>
        <div className="container">
          <div className={styles.modelInner}>
            <div className={styles.modelInnerContent}>
               <h3>Нет нужной модели, которую хотите протестировать?</h3>
               <p className={styles.modelPar}>Оставьте заявку, и менеджер подберет нужный самокат</p>
               <form className={styles.formWrap}>
                  <div className={styles.formTop}>
                    <input className={styles.modelInput} type="text" placeholder="+7 (___) __ - __ - __"/>
                    <button className={styles.modelBtn}>Оставить заявку на тест-драйв</button>
                  </div>
                  <label className={styles.modelLabel}>
                    <input type="checkbox"/>
                    <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <Link className={styles.confidentialsLink} to="/">политикой конфиденциальности</Link></p>
                  </label>
               </form>
            </div>
            <img className={styles.modelImg} src={portrait} alt="portrait"/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DeliveryPayment;