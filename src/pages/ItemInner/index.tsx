import React, { useState } from "react";
import styles from "./itemInner.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import home from "../../app/assets/icons/home.svg";
import questionCircle from "../../app/assets/icons/questionCircle.png";
import { useProductStore } from "../../store/useProductStore";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import {Thumbs} from "swiper/modules";
import balance from "../../app/assets/icons/balance.png";
import share from "../../app/assets/icons/share.png";
import paymentCard from "../../app/assets/icons/paymentCard.png";
import giftImg1 from "../../app/assets/images/giftImg1.png";
import giftImg2 from "../../app/assets/images/giftImg2.png";
import heart from "../../app/assets/icons/heart.png";
import deliveryTruck from "../../app/assets/icons/delivery-truck.png";
import file from "../../app/assets/icons/file.svg";
import charger from "../../app/assets/icons/charger.svg";
import scooter from "../../app/assets/icons/scooter.svg";
import guarantee from "../../app/assets/icons/guarantee.svg";
import iconRed from "../../app/assets/icons/iconRed.png";
import registerImg from "../../app/assets/images/peopleImg.jpg";
import Reviews from "../../components/Reviews";
import arrowRight from "../../app/assets/icons/rightArrow.png";
import Product from "../../components/Product";
import doc from "../../app/assets/images/doc.png";
import notebook from "../../app/assets/images/notebook.png";

const garantyArr = [{serviceName: 'Стандартная 1 год', servicePrice: 'Бесплатно'},{serviceName: 'Расширенная 2 года', servicePrice: '2 990 руб.'} ]
const addServicesArr = [{serviceName: 'Нет'},{serviceName: 'Настройка', servicePrice: '1 520 руб.'},{serviceName: 'Гидроизоляция', servicePrice: '3 850 руб.'},{serviceName: 'Гидроизоляция и настройка', servicePrice: '3 409 руб. (-30%)'}]
const packingOptionsArr = [{option: 'Без упаковки'},{option: 'Розовый', optionColor: '#FA6BFD'},{option: 'Синий', optionColor: '#6B7AFD'},{option: 'Красный', optionColor: '#F45A5A'}]
type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemInner: React.FC<AlertProps> = ({setShowAlert}) => {

  const {productId} = useParams<{productId: string}>();
  const productIdNum = Number(productId)
  const products = useProductStore((state) => state.products);
  const product = products.find((item) => item.productId === productIdNum);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const monthlyPrice = product?.productPrice !== undefined ? Number((product.productPrice / 12).toFixed(0)) : null;
  const formatedMonthlyPrice = monthlyPrice ?  monthlyPrice.toLocaleString("ru-RU") : "";
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);
  const [activeGarantyBtnIndex, setActiveGarantyBtnIndex] = useState(0);
  const [activeAddService, setActiveAddService] = useState(0);
  const [activePackingOption, setActivePackingOption] = useState(0);
  const [activeTab, setActiveTab] = useState<"describtion" | "characteristics" | "delivery" | "garanty" | "version">("describtion"); 
  const filteredProducts = products.slice(0,5)

  return(
    <div className={styles.item}>
      <div className="container">
        <div className={styles.breadcrump}>
          <Link className={styles.breadcrumpLink} to="/">
          <img src={home} alt="home"/>
           <p>Главная</p> 
           </Link>
          <p>/</p>
          <Link className={styles.breadcrumpLink} to="/category"> Каталог</Link>
          <p>/</p>
          <Link className={styles.breadcrumpLink} to="/:catId"> {product?.productCategory}</Link>
           <p>/</p>
          <Link className={styles.breadcrumpLink} to="/:catId/:productId"> {product?.productName}</Link>
        </div>
        <div className={styles.itemMain}>
          <div className={styles.itemImgBox}>
              <Swiper
                modules={[Thumbs]}
                spaceBetween={10}
                thumbs={{swiper: thumbsSwiper}}
                slidesPerView={1}
               
              >
                {
                  product?.productImgsArr?.map((img, index) => (
                      <SwiperSlide key={index}>
                        <div className={styles.mainImg}>
                          <img alt="productImg" src={img}/>
                          <div className={styles.productBadge}>{product?.productBadge}</div>
                        </div>
                      </SwiperSlide>
                  ))
                }
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                watchSlidesProgress
                 className="thumbsSwiper"
              >
                {
                  product?.productImgsArr?.map((img, index) => (
                    <SwiperSlide key={index} className={styles.thumbImg}>
                      <img src={img} alt="productImg"/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
          </div>
          <div className={styles.itemContent}>
            <h3 className={styles.productName}>{product?.productName}</h3>
            <div className={styles.productOptions}>
                <p>Просмотров 350</p>
                <p>Купили 196 раз</p>
                <p>Артикул: 2200000000026</p>
            </div>
            <div className={styles.productBtns}>
              <div className={styles.productInStock}>
                <span></span> <p>В наличии</p>
              </div>
              <button className={styles.productBtn}>
                <img src={balance} alt="balance"/>
                Сравнить</button>
              <button className={styles.productBtn}>
                 <img src={share} alt="share"/>
                Поделиться  </button>
            </div>
            <div className={styles.priceBox}>
              <div className={styles.priceWrap}>
                <p className={styles.oldPrice}>{product?.productOldPrice.toLocaleString("ru-RU")}  ₽</p>
                <p className={styles.currentPrice}>{product?.productPrice.toLocaleString("ru-RU")} ₽ </p>
              </div>
              <div className={styles.paymentWrap}>
                <img src={paymentCard} alt="paymmentCard"/>
                <div className={styles.paymentWrapInfo}>
                  <p className={styles.paymentInfoPar}>Рассрочка:</p>
                  <p className={styles.paymentInfoPrice}>{formatedMonthlyPrice} ₽ в месяц / 24 месяца</p>
                </div>
              </div>
            </div>
             <div className={styles.versionsWrap}>
              <div className={styles.versionWrapTop}>
                <h4 className={styles.optionsTitle}>Комплектация</h4>
                <button className={styles.versionInfoBtn}>
                  <img src={questionCircle} alt="questionCircle"/>
                </button>
              </div>
              <div className={styles.optionsBtns}>
                {
                  product?.productVersionsArr?.map((version, index) => (
                    <button
                     onClick={() => setActiveBtnIndex(index)}
                     className={index === activeBtnIndex ? `${styles.optionsBtn} ${styles.optionsActiveBtn}` : `${styles.optionsBtn}`}
                     key={index}>
                      {version}
                    </button>
                  ))
                }
              </div>
            </div>
            <div className={styles.optionsWrap}>
              <p className={styles.pakriwkiText}>Покрышки</p>
              <div className={styles.pakriwkiMain}>
                <div className={styles.pakriwkiContent}>
                  <h4 className={styles.pakriwkiTitle}>Внедорожная шипованная</h4>
                  <p className={styles.pakriwkiPar}>+ установка (с доп.комплектом базовых покрышек)</p>
                  <p className={styles.pakriwkiPrice}> 7600 руб.</p>
                </div>
                <button className={styles.pokriwkiBtn}>Изменить</button>
              </div>
            </div>
            <div className={styles.optionsWrap}>
              <h4 className={styles.optionsTitle}>Гарантия</h4>
              <div className={styles.optionsBtns}>
               {
                  garantyArr.map((version, index) => (
                    <button
                     onClick={() => setActiveGarantyBtnIndex(index)}
                     className={index === activeGarantyBtnIndex ? `${styles.optionsBtn} ${styles.optionsActiveBtn}` : `${styles.optionsBtn}`}
                     key={index}>
                      <p>{version.serviceName}</p>  
                      <p className={styles.versionPrice}>{version.servicePrice}</p>
                    </button>
                  ))
                }
              </div>
            </div>
            <div className={styles.optionsWrap}>
              <h4 className={styles.optionsTitle}>Дополнительные услуги</h4>
              <div className={styles.optionsBtns}>
               {
                  addServicesArr.map((version, index) => (
                    <button
                     onClick={() => setActiveAddService(index)}
                     className={index === activeAddService ? `${styles.optionsBtn} ${styles.optionsActiveBtn}` : `${styles.optionsBtn}`}
                     key={index}>
                      <p>{version.serviceName}</p>  
                      <p className={styles.versionPrice}>{version.servicePrice}</p>
                    </button>
                  ))
                }
              </div>
            </div>
            <div className={styles.optionsWrap}>
              <div className={styles.packingTop}>
                 <h4 className={styles.optionsTitle}>Подарочная упаковка</h4>
                 <div className={styles.packingDateWrap}>
                  <p className={styles.packingPar}>До конца акции</p>
                  <p className={styles.packingDate}>06:34:23:02</p>
                 </div>
              </div>
               <div className={styles.gifts}>
                   <h4 className={styles.giftsTitle}>2 подарка при покупке</h4>
                   <div className={styles.giftsMain}>
                      <div className={styles.giftsMainItem}>
                        <img src={giftImg1} alt="giftImg"/>
                        <p>Книга «6 вопросов об электротранспорте, на которые вы должны знать ответ».</p>
                      </div>
                      <div className={styles.giftsMainItem}>
                        <img src={giftImg2} alt="giftImg"/>
                        <p>Универсальный держатель для телефона </p>
                      </div>
                   </div>
               </div>
                <div className={styles.optionsBtns}>
                {
                    packingOptionsArr.map((version, index) => (
                      <button
                      onClick={() => setActivePackingOption(index)}
                      className={index === activePackingOption ? `${styles.optionsBtn} ${styles.optionsActiveBtn}` : `${styles.optionsBtn}`}
                      key={index}>
                         {version.optionColor && <div className={styles.optionColor} style={{backgroundColor: version.optionColor}}></div>} 
                        <p>{version.option}</p>  
                      </button>
                    ))
                  }
                </div>
                <div className={styles.total}>
                  <div className={styles.totalTop}>
                    <h4>45 900 руб.</h4>
                    <button>
                      <img src={heart} alt="heart"/>
                    </button>
                  </div>
                  <div className={styles.totalWrap}>
                      <img src={deliveryTruck} alt="truck"/>
                      <p>Бесплатная доставка по РФ <br/> <span>от 1 дня при заказе до 01.09</span> </p>
                    </div>
                    <div className={styles.totalMain}>
                      <button>Купить в 1 клик</button>
                      <button>Добавить в корзину</button>
                    </div>
                </div>
                <Link className={styles.laterBuyLink} to="/">Хотите купить позже?</Link>
            </div>
          </div>
        </div>
        <div className={styles.itemTabs}>
          <div className={styles.tabsheader}>
            <button onClick={()=> setActiveTab("describtion")} className={`${styles.tabBtn} ${activeTab === "describtion" ? styles.activeTabBtn : ""}`}>О товаре</button>
            <button onClick={()=> setActiveTab("characteristics")}className={`${styles.tabBtn} ${activeTab === "characteristics" ? styles.activeTabBtn : ""}`}>Характеристики</button>
            <button onClick={()=> setActiveTab("delivery")} className={`${styles.tabBtn} ${activeTab === "delivery" ? styles.activeTabBtn : ""}`}>Доставка и оплата</button>
            <button onClick={()=> setActiveTab("garanty")} className={`${styles.tabBtn} ${activeTab === "garanty" ? styles.activeTabBtn : ""}`}>Гарантии</button>
            <button onClick={()=> setActiveTab("version")}className={`${styles.tabBtn} ${activeTab === "version" ? styles.activeTabBtn : ""}`}>Версия MAX</button>
          </div>    

          {
            activeTab === "describtion" && (
              <div className={styles.char}>
                <div className={styles.charContent}>
                  <h3>Электросамокат Kugoo Kirin M4 c мощными характеристиками и стильным дизайном</h3>
                  <p className={styles.charPar}>Приобретая самокат Kugoo Kirin M4, вы получите  множество положительных эмоций и сможете беспрепятственно передвигаться по городу.</p>
                  <p>Самокат может набирать скорость до 45 км/ч благодаря усиленному мотор-колесу и батарее. Удобный дисплей позволяет легкостью отслеживать и переключать скорости передвижения, контролировать заряд аккумулятора, а также пройденный путь за все время и за текущую поездку в километрах.</p>
                </div>
                <div className={styles.charOtions}>
                  <h5>Что в комплекте</h5>
                  <div className={styles.charOptionsWrap}>
                    <div className={styles.charOptionsItem}>
                      <img src={file} alt="file"/>
                      <div className={styles.charOptionsItemContent}>
                        <p>Инструкция</p>
                        <Link className={styles.chatOptionsLink} to="">Посмотреть</Link>
                      </div>
                    </div>
                      <div className={styles.charOptionsItem}>
                      <img src={charger} alt="charger"/>
                      <div className={styles.charOptionsItemContent}>
                        <p>Зарядное устройство</p>
                      </div>
                    </div>
                      <div className={styles.charOptionsItem}>
                      <img src={scooter} alt="scooter"/>
                      <div className={styles.charOptionsItemContent}>
                        <p>Чехол</p>
                      </div>
                    </div>
                      <div className={styles.charOptionsItem}>
                      <img src={guarantee} alt="guarantee"/>
                      <div className={styles.charOptionsItemContent}>
                        <p>Гарантийный талон</p>
                      </div>
                    </div>
                  </div>
                   <h5>Ключевые особенности Kugoo Kirin M4</h5>
                   <div className={styles.keyPoints}>
                      <p>Для города</p>
                      <p>Быстрый</p>
                      <p>Комфортный</p>
                      <p>Легкий</p>
                   </div>
                </div>
              </div>
            )
          }  
          {activeTab === "characteristics" && (<div className={styles.charWrap}>
            <div className={styles.charCol}>
              {
                product?.productChar?.slice(0,8).map((char,index) => (
                  <div className={styles.charBox} key={index}>
                    <p className={styles.charName}>{char.charName}</p>
                    <p className={styles.charOption}>{char.charOption}</p>
                  </div>
                ))
              }
            </div>
            <div  className={styles.charCol}>
              {
                product?.productChar?.slice(8,16).map((char,index) => (
                  <div className={styles.charBox} key={index}>
                    <p className={styles.charName}>{char.charName}</p>
                    <p className={styles.charOption}>{char.charOption}</p>
                  </div>
                ))
              }
              <Link className={styles.charLink} to="">*указаны максимально возможные характеристики, зависящие от веса райдера, рельефа местности, погодных условий и температуры окружающей среды </Link>
            </div>
          </div>)}    
          {activeTab === "delivery" && (<div className={styles.deliveryWrap}>
            <div className={styles.deliveryWrapItem}>
              <h3>5 способов оплаты</h3>
              <p className={styles.deliverySubTitle}>Вы можете оплатить покупку:</p>
              <ul className={styles.deliveryItemList}>
                <li>
                  <img alt="iconRed" src={iconRed}/>
                  <p>наличными</p>
                </li>
                <li>
                  <img alt="iconRed" src={iconRed}/>
                  <p>картой</p>
                </li>
                <li>
                  <img alt="iconRed" src={iconRed}/>
                  <p>онлайн на сайте через корзину</p>
                </li>
                <li>
                  <img alt="iconRed" src={iconRed}/>
                  <p>через интернет-банкинг по счету</p>
                </li>
                <li>
                  <img alt="iconRed" src={iconRed}/>
                  <p>в кредит от «Сбербанка»</p>
                </li>
              </ul>
            </div>
              <div className={styles.deliveryWrapItem}>
              <h3>Доставка по всей России</h3>
              <ul className={styles.deliveryItemList}>
                <li>
                  <img alt="iconRed" src={iconRed}/>
                  <p>Отправляем заказы по всей России день в день службой доставки товаров CDEK</p>
                </li>
                <li>
                  <img alt="iconRed" src={iconRed}/>
                  <p>Самовывоз из магазинов в Москве, Санкт-Петербурге и Краснодаре</p>
                </li>
              </ul>
            </div>
          </div>)}    
          {activeTab === "garanty" && (<div className={styles.garantyWrap}>
            <div className={styles.garantyItem}>
              <h3>14 дней на обмен и возврат</h3>
              <p>Если вас, что-то не устроит в товаре, мы обменяем его на новый или вернем деньги</p>
            </div>
             <div className={styles.garantyItem}>
              <h3>1 год на <br/> самокаты</h3>
              <p>Обеспечиваем гарантийные обязательства на весь ассортимент самокатов в стандартной комплектации</p>
            </div>
             <div className={styles.garantyItem}>
              <h3>Расширенная гарантия 2 года для версии MAX</h3>
            </div>
             <div className={styles.garantyItem}>
              <h3>Расширенная гарантия 3 года для версии VIP</h3>
            </div>
          </div>)}    
          {activeTab === "version" && (<div className={styles.maxWrap}>
            <h3>Преимущества версии MAX</h3>
            <div className={styles.maxWrapMain}>
              <div className={styles.maxWrapItem}>
                <div className={styles.maxWrapItemInner}>
                  <h4>Бесплатная гидроизоляция</h4>
                  <p>Защитим ваш самокат от попадания влаги.</p>
                </div>
                <div className={styles.maxWrapItemInner}>
                  <h4>Бесплатная настройка</h4>
                  <p>Комплексно подготовим ваш самокат к эксплуатации.</p>
                </div>
                <div className={styles.maxWrapItemInner}>
                  <h4>Гарантия 2 года</h4>
                </div>
                <div className={styles.maxWrapItemInner}>
                  <h4>500 руб. на покупку аксессуаров</h4>
                  <p>При покупке версии MAX вы получаете купон номиналом 500 р. на покупку любых аксессуаров, представленныхв нашем магазине.</p>
                </div>
              </div>
               <div className={styles.maxWrapItem}>
                <div className={styles.maxWrapItemInner}>
                 <h5>Гидроизоляция включает в себя обработку:</h5>
                 <ul className={styles.deliveryItemList}>
                  <li>
                    <img src={iconRed} alt="iconRed"/>
                    <p>бортового компьютера;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>аккумулятора;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>контроллера;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>мотор-колеса.</p>
                  </li> 
                 </ul>
                </div>
                <div className={styles.maxWrapItemInner}>
                  <h5>Сюда входят такие работы как:</h5>
                   <ul className={styles.deliveryItemList}>
                  <li>
                    <img src={iconRed} alt="iconRed"/>
                    <p>устранение люфтов;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>настройка тормозной системы;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>настройка тормозных колодок;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>подкачка шин;</p>
                  </li> 
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>подтяжка болтов.</p>
                  </li> 
                 </ul>
                </div>
                <div className={styles.maxWrapItemInner}>
                  <h5>Предоставим расширенную гарантию на:</h5>
                   <ul className={styles.deliveryItemList}>
                  <li>
                    <img src={iconRed} alt="iconRed"/>
                    <p>электронику;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>контроллер;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>дисплей;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>мотор-колесо;</p>
                  </li> 
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>рычаги управления.</p>
                  </li> 
                 </ul>
                </div>
              </div>
               <div className={styles.maxWrapItem}>
                <div className={styles.maxWrapItemInner}>
                  <h4>Скидка 10%на ремонт и запчасти</h4>
                 <h5>Вы получаете бессрочную скидку 10%:</h5>
                 <ul className={styles.deliveryItemList}>
                  <li>
                    <img src={iconRed} alt="iconRed"/>
                    <p>на платный ремонт любой  </p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>сложности (при</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>негарантийном случае);</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>на все запчасти</p>
                  </li> 
                 </ul>
                </div>
                <div className={styles.maxWrapItemInner}>
                  <h4>Дополнительные услуги</h4>
                  <h5>Дополнительно вы можете заказать:</h5>
                   <ul className={styles.deliveryItemList}>
                  <li>
                    <img src={iconRed} alt="iconRed"/>
                    <p>недорожные покрышки;</p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>страховку (негарантийный </p>
                  </li>
                   <li className={styles.deliveryItemList}>
                    <img src={iconRed} alt="iconRed"/>
                    <p>ремонт).</p>
                  </li>
                 </ul>
                </div>
                <div className={styles.maxWrapItemInner}>
                 <h4>Ремонт в приоритетном порядке</h4>
                 <p>Ваш электросамокат будет ремонтироваться в первую очередь. При наличии нужной запчасти время ремонта может составлять до 3 часов.</p>
                </div>
                <div className={styles.maxWrapItemInner}>
                 <h4>Бесплатное ТО</h4>
                 <p>Ежегодное бесплатное техническое обслуживание вашего транспорта на протяжении 2 лет в наших сервисных центрах в Москве, Санкт-Петербурге и Краснодаре.</p>
                </div>
              </div>
            </div>
          </div>)}    
        </div>
      </div>
       <div className={styles.register}>
          <div className="container">
              <div className={styles.registerInner}>
                <img className={styles.registerImg} src={registerImg} alt="registerImg"/>
                <div className={styles.registerContent}>
                  <h3>Запишитесь на бесплатный тест-драйв Kugoo Kirin M4 в Москве</h3>
                  <p className={styles.registerPar}>Оставьте свой номер, менеджер свяжется с вами в течение 5 минут, чтобы уточнить дату и время</p>
                  <form className={styles.registerForm}>
                    <input type="text" placeholder="+7 (___) __ - __ - __"/>
                    <button>Оставить заявку на тест-драйв</button>
                  </form>
                  <label className={styles.registerLabel}>
                    <input type="checkbox"/>
                    <p>Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и <Link className={styles.registerLink} to="">политикой конфиденциальности</Link></p>
                  </label>
                </div>
              </div> 
          </div>            
      </div>
      <Reviews/>
      <div className="container">
        <div className={styles.questions}>
          <div className={styles.questionItem}> 
             <h4>Хотите проверить товар перед покупкой?</h4>  
             <p>Продемонстрируем нужный товар онлайн или в магазине</p>  
             <Link className={styles.questionLink} to="">Подробнее
                <img src={arrowRight} alt="arrowRight"/>
             </Link>     
          </div> 
          <div className={styles.questionItem}> 
             <h4>Нашли Kugoo Jilong дешевле?</h4>  
             <p>Сообщите нам в каком магазине цена ниже, а мы сделаем вам крутое спецпредложение!</p>  
             <Link className={styles.questionLink} to="">Да, нашли дешевле
                <img src={arrowRight} alt="arrowRight"/>
             </Link>     
          </div>           
        </div>      
        <div className={styles.productsWrap}>
          <h3 className={styles.productWrapTitle}>С этим товаром покупают</h3>
          <div className={styles.productWrapInner}>
            {
              filteredProducts.map((item, index) => (
                <Product key={index} setShowAlert={setShowAlert} item={item}/>
              ))
            }               
          </div>
        </div>  
         <div className={styles.productsWrap}>
          <h3 className={styles.productWrapTitle}>похожие товары</h3>
          <div className={styles.productWrapInner}>
            {
              filteredProducts.map((item, index) => (
                <Product key={index} setShowAlert={setShowAlert} item={item}/>
              ))
            }               
          </div>
        </div>
        <div className={styles.top}>
          <h2 className={styles.topTitle}>Пройдите тест из 5 вопросов и получите подборку ТОП-3 электросамокатапо вашим параметрам</h2>
          <p className={styles.topPar}>Бонусом вы получите</p>
          <div className={styles.topWrap}>
            <div className={styles.topWrapItem}>
              <img src={doc} alt="doc"/>
              <p>Чек-лист «ТОП-5 городских электросамокатов  2021 г.»</p>
            </div>
            <div className={styles.topWrapItem}>
              <img src={notebook} alt="notebook"/>
              <p>Инструкция «Как правильно подготовить самокат к первой поездке. 7 советов эксперта»</p>
            </div>
          </div>
          <div className={styles.topInner}>

          </div>
        </div>        
      </div>
    </div>
  )
};

export default ItemInner;