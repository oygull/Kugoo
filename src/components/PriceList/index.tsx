import React from "react";
import styles from "./priceList.module.scss";

function PriceList() {
  return(
    <div className={styles.priceList}>
      <div className="container">
        <h2 className={styles.priceListTitle}>Стоимость гидроизоляции и настройки</h2>
        <p className={styles.pricesPar}>Для версии MAX и VIP гидроизоляция и настройка — бесплатно</p>
        <div>
          
        </div>
      </div>
    </div>
  )
};

export default PriceList;