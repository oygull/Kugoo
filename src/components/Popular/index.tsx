import React from "react";
import styles from "./popular.module.scss";
import popularProductsArr from "../../app/assets/data/popularProductsArr";
import Product from "../Product";

function Popular() {
  
  const visibleItems =  popularProductsArr.slice(0, 4);

  return(
    <div className={styles.popular}>
      <div className="container">
        <h3 className={styles.popularTitle}>часто покупают</h3>
      <div className={styles.productsWrap}>
        {
          visibleItems.map((item, index) => (
            <Product key={index} item={item}/>
          ))
        }
      </div>
      </div>
    </div>
  )
};

export default Popular;