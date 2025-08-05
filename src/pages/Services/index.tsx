import React , {useState} from "react";
import styles from "./services.module.scss";
import location from "../../app/assets/icons/location.svg";
import shield from "../../app/assets/icons/shield.png";
import gear from "../../app/assets/icons/gear.png";
import { Link } from "react-router-dom";
import playIcon from "../../app/assets/icons/play.png"
import servicesVideoThumbnail from "../../app/assets/images/servicesVideoThumbnail.jpg"
import tabsArr from "../../app/assets/data/tabsArr";
import Diagnostics from "../../components/Diagnostics";
import dataArr from "../../app/assets/data/dataArr";
import Settings from "../../components/Settings";
import WorkingProcess from "../../components/WorkingProcess";

function Services() {

    const [isPlaying, setIsPlaying] = useState(false);
    const handlePlay = () => {
      setIsPlaying(true);
    };
    const [activetab, setActiveTab] = useState(0);
    const categories = ['Электросамокаты', 'Электровелосипеды', 'Робот-пылесосы', 'Электровелосипеды']

  return(
    <div className={styles.services}>
      <div className={styles.servicesHero}>
        <div className="container">
          <div className={styles.servicesHeroInner}> 
            <h2 className={styles.heroTitle}>Ремонт и обслуживание товаров Kugoo Kirin</h2>
            <p className={styles.heroText}>в фирменных сервисых центрах</p>
            <div className={styles.heroWrap}> 
              <div className={styles.heroWrapItem}>
                <div className={styles.iconBox}>
                  <img alt="location" src={location}/>
                </div>
                <p>Сервисные центры в Москве, Санкт-Петербурге и Краснодаре</p>
              </div>
              <div className={styles.heroWrapItem}>
                <div className={styles.iconBox}>
                  <img alt="shield" src={shield}/>
                </div>
                <p>Гарантия 14 дней
                на ремонт</p>
              </div>
              <div className={styles.heroWrapItem}>
                <div className={styles.iconBox}>
                  <img alt="gear" src={gear}/>
                </div>
                <p>Всегда в наличии оригинальные запчасти
                от производителя</p>
              </div>
            </div>
            <Link className={styles.appointmentLink} to="/">Записаться</Link>
          </div>
        </div>
      </div>
      <div className={styles.diagnostics}>
        <div className="container">
          <h3 className={styles.diagnosticsTitle}>Проведем диагностику
          и отремонтируем любую неисправность</h3>
          <div className={styles.diagnosticsWrap}>
            <div className={styles.diagnosticsTextContent}>
              <div className={styles.innerItem}>
                <h4>Ремонт от 1 дня</h4>
                <p>Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.</p>
              </div>
              <div className={styles.innerItem}>
                <h4>Ремонтируем только то, что сломалось</h4>
                <p>Не навязываем услуги, диагностируем
                и заранее обговариваем стоимость ремонта.</p>
              </div>
              <div className={styles.innerItem}>
                <h4>Оригинальные запчасти</h4>
                <p>Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.</p>
              </div>
            </div>
            <div className={styles.diagnosticsVideo}>

              {
                !isPlaying ? (
                  <div onClick={handlePlay} className={styles.videoWrap}>
                    <img className={styles.servicesVideoThumbnail}  src={servicesVideoThumbnail} alt="videoCoverImg"/>
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
            <div className={styles.diagnosticsContent}>
              <div className={styles.innerItem}>
                <h4>гарантия</h4>
                <p>14 дней на ремонт</p>
              </div>
              <div className={styles.innerItem}>
                <h4>беслптный ремонт</h4>
                <p>в течение 1 года после покупки</p>
              </div>
              <div className={styles.innerItem}>
                <h4>расширенная гарантия</h4>
                <p>до 36 месяцев</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fix}>
        <div className="container">
          <div className={styles.fixInner}>
            <h3 className={styles.fixTitle}>Стоимость ремонта</h3>
            <p className={styles.fixPar}>Точную стоимость работ вам озвучит специалист сервисного центра после диагностики. Примерные цены на ремонт без учета запчастей смотрите ниже.</p>
            <div className={styles.categoriesWrap}>
              {
                categories.map((item, index) =>(
                  <button key={index}>{item}</button>
                ))
              }
            </div>
            <div className={styles.tabContainer}>
                <div className={styles.tabsWrap}>
                  {
                    tabsArr.map((tab, index) => (
                      <button
                      className={activetab === index ? styles.activeTabBtn : styles.tabBtn}
                       onClick={()=> setActiveTab(index)} key={index}>
                        {tab.tabsTitle}
                      </button>
                    ))
                  }
                </div>
                <div className={styles.tabContent}>
                  {
                    tabsArr[activetab].tabsContent.map((item, index) => (
                      <div className={styles.tabContentItem} key={index}>
                        <p className={styles.tabOption}>{item.option}</p>
                        <p className={styles.tabOptionprice}>от {item.optionPrice} руб.</p>
                      </div>
                    ))
                  }
                </div>
              </div>
          </div>
        </div>
      </div>
      <Diagnostics/>
      <Settings/>
      <WorkingProcess/>
    </div>
  )
};

export default Services;