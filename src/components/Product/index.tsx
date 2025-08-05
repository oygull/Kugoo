import React, { useState } from "react";
import styles from "./product.module.scss";
import productProps from "../../app/assets/types/types";
import { useProductStore } from "../../store/useProductStore";
import product from "../../app/assets/icons/product.png";
import accumulator from "../../app/assets/icons/accumulator.png";
import lighting from "../../app/assets/icons/power.png";
import speedometr from "../../app/assets/icons/speedometer.png";
import timer from "../../app/assets/icons/timer.png";
import basket from "../../app/assets/icons/basket.png"
import heart from "../../app/assets/icons/heart.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

type dataArrProps  = { 
  item : productProps;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const Product: React.FC<dataArrProps> = ({item , setShowAlert}) => {

  const handleAddToBasket = () => {
    addProductToBasket(item);
    setShowAlert(true);
    console.log("Added")

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  }
  const addProductToBasket = useProductStore((state) => state.addproductsToBasket);
  
  return(
    <Link to={`/:${item.productCategory}/${item.productId}`} className={styles.product} key={item.productId}>
      <div className={styles.productImgBox}>
        <p style={{
          backgroundColor: item.productBadge === "Новинка" ? "#75D14A" : "#EE685F"
        }} className={styles.productBadge}>{item.productBadge}</p>
        <img className={styles.productImg} src={item.productImgsArr?.[0]} alt="product"/>
        <button className={styles.productBtn}>
          <img src={product} alt="product"/>
        </button>
      </div>
      <div className={styles.productContent}>
        <h3 className={styles.productTitle}>{item.productName}</h3>
        <div className={styles.productBox}>
          <div className={styles.productBoxInner}>
              <img src={accumulator} alt="accumulator"/>
              <p>{item.productElectricalCharge} mAh</p>
           </div>
           <div className={styles.productBoxInner}>
              <img src={lighting} alt="lighting"/>
              <p>{item.productKilovat} л.с.</p>
           </div>
        </div>
        <div className={styles.productBox}>
          <div className={styles.productBoxInner}>
              <img src={speedometr} alt="speedometr"/>
              <p>{item.productSpeed} км/ч</p>
           </div>
           <div className={styles.productBoxInner}>
              <img src={timer} alt="timer"/>
              <p>{item.productDuration} часов</p>
           </div>
        </div>
        <div className={styles.optionsBox}>
          <div className={styles.priceBox}>
            <p className={styles.oldPrice}>{(item.productOldPrice).toLocaleString("ru-RU").replace(/,/g,"")} ₽</p>
            <p className={styles.price}>{(item.productPrice).toLocaleString("ru-RU").replace(/,/g,"")} ₽</p>
          </div>
          <div className={styles.btnBox}>
            <button>
              <img src={basket} alt="basket"/>
            </button>
            <button>
              <img src={heart} alt="heart"/>
            </button>
          </div>
        </div>
        <button 
          onClick={handleAddToBasket}
        className={styles.buyBtn}>Купить в 1 клик</button>
      </div>
      
    </Link>
  )
}

export default Product;