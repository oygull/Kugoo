import React, { use } from "react";
import styles from "./basket.module.scss";
import { useProductStore } from "../../store/useProductStore";
import deleteicon from "../../app/assets/icons/delete.png";

function Basket() {

  const basketProducts = useProductStore((state) => state.basketProducts);
  const removeProductFromBasket = useProductStore((state) => state.removeproductFromBasket);

  return(
    <div className={styles.basket}>
      <div className={styles.basketTop}>
        <p className={styles.basketText}>В вашей корзине</p>
        <p className={styles.basketNum}>{basketProducts.length} товара</p>
      </div>
      
      <div className={styles.basketMain}>
      {
        basketProducts.length === 0 ? (
          <p className={styles.emptyBasket}>Basket is empty</p>
        ) :
        (
          <div className={styles.basketMainInner}>
             {
          basketProducts.map((item) => (
            <div className={styles.basketItem}>
              <img className={styles.basketItemImg} alt="productImg" src={item.productImg}/>
              <div className={styles.basketContent}>
                <h4>{item.productName}</h4>
                <p>{(item.productPrice).toLocaleString("ru-RU").replace(/,/g,"")} ₽</p>
              </div>
              <button onClick={() => removeProductFromBasket(item.productId)} className={styles.deleteBtn}>
                <img alt="deleteBtn" src={deleteicon}/>
              </button>
            </div>
          ))
        }
          </div>
        )
      }
       
      </div>
      <div className={styles.basketFooter}>
        <div className={styles.priceBox}>
          <p className={styles.priceBoxText}>Сумма: </p>
          <p className={styles.priceNum}>59 800 ₽</p>
        </div>
        <button className={styles.basketBtn}>Оформить заказ</button>
      </div>
    </div>
  )
}

export default Basket;