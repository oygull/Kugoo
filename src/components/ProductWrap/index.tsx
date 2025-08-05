import React, { useState } from "react";
import styles from "./productWrap.module.scss";
import dataArr from "../../app/assets/data/dataArr";
import Product from "../Product";
import { useProductStore } from "../../store/useProductStore";

const productTypes = ['Хиты продаж', 'Для города', 'Для взрослых', 'Для детей'];

type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}


const ProductWrap: React.FC<AlertProps> = ({setShowAlert}) => {

  const products = useProductStore((state) => state.products);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? dataArr : products.slice(0,8);

  return(
    <div className={styles.productWrap}>
      <div className="container">
        <div className={styles.productWrapInner}>
          <h2 className={styles.productWrapTitle}>Электросамокаты</h2>
          <div className={styles.productTypesWrap}>
              {
                productTypes.map((productType , index) => (
                  <div className={styles.productType} key={index}>
                    <p>{productType}</p>
                  </div>
                ))
              }
          </div>
        </div>  
        <div className={styles.productBox}>
           {
             visibleItems.map((item)=> (
              <Product setShowAlert={setShowAlert} item={item} />
             ))
           }  
        </div>

        {
          products.length > 8 && (
            <div className={styles.showBtnBox}>
              <button onClick={() => setShowAll(!showAll)}>
               {showAll ?  "Завернуть" : "Смотреть все"} 
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default ProductWrap;