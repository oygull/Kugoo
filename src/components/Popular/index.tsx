import React from "react";
import styles from "./popular.module.scss";
import popularProductsArr from "../../app/assets/data/popularProductsArr";
import Product from "../Product";

type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popular: React.FC<AlertProps> = ({setShowAlert}) => {
  
  const visibleItems =  popularProductsArr.slice(0, 4);

  return(
    <div className={styles.popular}>
      <div className="container">
        <h3 className={styles.popularTitle}>часто покупают</h3>
      <div className={styles.productsWrap}>
        {
          visibleItems.map((item, index) => (
            <Product setShowAlert={setShowAlert} key={index} item={item}/>
          ))
        }
      </div>
      </div>
    </div>
  )
};

export default Popular;