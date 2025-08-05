import React from "react";
import styles from "./test.module.scss";
import { Link } from "react-router-dom";
import home from "../../app/assets/icons/home.svg";
import pinWhite from "../../app/assets/icons/pinWhite.svg";
import energyIcon from "../../app/assets/icons/energy-svgrepo.svg";
import scooterIcon from "../../app/assets/icons/scooter-svgrepo.svg";
import tick from "../../app/assets/icons/checkCircle.png";
import testImg1 from "../../app/assets/images/testImg1.png";
import testImg2 from "../../app/assets/images/testImg2.png";
import popularProductsArr from "../../app/assets/data/popularProductsArr";
import Product from "../../components/Product";
import portrait from "../../app/assets/images/portrait.png";

type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const Test: React.FC<AlertProps> = ({setShowAlert}) => {
  return(
    <div className={styles.test}>
      <div className="container">
        <div className={styles.breadcrump}>
          <Link className={styles.breadcrumpLink} to="/">
          <img src={home} alt="home"/>
           <p>Главная</p> 
           </Link>
          <p>/</p>
          <Link className={styles.breadcrumpLink} to="/testDrive"> Тест-драйв</Link>
        </div>
      </div>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroTop}>
              <img src={pinWhite} alt="pinWhite"/>
              <p className={styles.heroParTop}>Восточно-Кругликовская улица, 86</p>
              <p className={styles.heroDate}>Вт - Сб 10:00 - 20:00</p>
            </div>
            <h2 className={styles.heroTitle}>Запишитесь на бесплатный тест-драйв электросамокатов</h2>
            <p className={styles.heroPar}>в Москве без ограничения по времени</p>
            <div className={styles.innerWrap}>
              <div className={styles.innerItem}>
                <div className={styles.heroImgBox}>
                  <img src={scooterIcon} alt="scooterIcon"/>
                </div>
                <p>Поймете, какая модель вам подходит</p>
              </div>
               <div className={styles.innerItem}>
                <div className={styles.heroImgBox}>
                  <img src={energyIcon} alt="scooterIcon"/>
                </div>
                <p>Проверите лучшие самокаты в деле</p>
              </div>
            </div>
            <Link className={styles.heroLink} to="/">Записаться</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.product}>
          <div className={styles.productContent}>
            <h3 className={styles.productTitle}>Определите максимально подходящую вам модель не теоретически, а на практике</h3>
            <h4 className={styles.productSubTitle}>Тест-драйв поможет:</h4>
            <div className={styles.productPoints}>
              <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Понять подходит ли вам конкретная модель;</p>
              </div>
              <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Испытать самокат в «реальной жизни»;</p>
              </div>
              <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Оценить удобство хранения и эксплуатации;</p>
              </div>
              <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Узнать реальные характеристики и возможности модели.</p>
              </div>
            </div>
          </div>
          <div className={styles.productImg}>
            <img src={testImg1} alt="testImg"/>
          </div>
        </div>
         <div className={styles.product}>
          <div className={styles.productImg}>
            <img src={testImg2} alt="testImg"/>
          </div>
           <div className={styles.productContent}>
            <h3 className={styles.productTitle}>Научим правильнойи безопасной езде в городе вас или вашего ребенка</h3>
            <h4 className={styles.productSubTitle}>На обучении специалист расскажет:</h4>
            <div className={styles.productPoints}>
              <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Как подготовить самокат к поездке;</p>
              </div>
              <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Как «завести» самокат;</p>
              </div>
              <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Как вести себя во время поездки и обезопасить себя и окружающих;</p>
              </div>
              <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Как складывать и раскладывать электросамокат;</p>
              </div>
               <div className={styles.pointsItem}>
                <img src={tick} alt="tick"/>
                <p>Как ухаживать за своим девайсом.</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className={styles.testTitle}>Сейчас для тест-драйва и обучения доступны следующие модели</h2>
        <div className={styles.productList}>
          {
            popularProductsArr.map((item) => (
              <Product setShowAlert={setShowAlert} item={item}/>
            ))
          }
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

export default Test;