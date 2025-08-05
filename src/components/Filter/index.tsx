import React, { useState } from "react";
import styles from "./filter.module.scss";
import { getTrackBackground, Range } from "react-range";
import filterDataArr from "../../app/assets/data/filterDataArr";
import fire from "../../app/assets/icons/fire.png";
import productImg from "../../app/assets/images/productImg.png";
import woman from "../../app/assets/images/women.png";

const MIN = 0;
const MAX = 55000;

type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<AlertProps> = ({setShowAlert}) => {

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 55000]);


  return(
    <div className={styles.filter}>
       <div className={styles.filterBox}>
      <h4 className={styles.filterBoxTitle}>Цена</h4>
      <div className={styles.range}>
          <Range 
        values={priceRange}
        step={1000}
        min={MIN}
        max={MAX}
        onChange={(values) => setPriceRange(values as [number, number])}
        renderTrack={({props, children}) => (
          <div 
          {...props}
          style={
            {
              ...props.style,
              height: '2px',
              background: getTrackBackground({
                values: priceRange,
                colors: ['#ccc','#6F73EE','#ccc'],
                min: MIN,
                max: MAX
              }),
              marginTop: '10px'
            }
          }
          >
            {children}
          </div>
        )}
        renderThumb={({props}) => (
          <div 
            {...props}
            className={styles.thumb}
          />
        )}
      />
      <div className={styles.rangeBox}>
        <input className={styles.priceRangeInput} type="number" value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
        />
        <span>-</span>
         <input className={styles.priceRangeInput} type="number" value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
        />
      </div>
      </div>
      {
        filterDataArr.map((item,index) => (
          <div className={styles.filterItem} key={index}>
            <p className={styles.filtertext}>{item.filterTitle}</p>
          <div className={styles.type}>
            {
              item.filterOptions.map((option, index) =>(
                   <label key={index} className={styles.typeLabel}>
                    <input type="checkbox"/>
                    <p>{option.optionName}</p>
                  </label>
              ))
            }
          </div>
          </div>
        ))
      }
      
       </div>
       <div className={styles.filterAdvert}>
          <div className={styles.advertTop}>
            <img alt="fire" src={fire}/>
            <p>Товар месяца</p>
          </div>
          <div className={styles.advertBottom}>
            <div className={styles.advertBottomImg}>
              <img src={productImg}/>
            </div>
            <div className={styles.advertBottomContent}>
              <p className={styles.advertBottomContentText}>Kugoo Kirin M4</p>
              <p className={styles.advertBottomContentNum}>29 900 ₽</p>
            </div>
          </div>
       </div>
       <div className={styles.filterQuestion}>
          <img alt="woman" src={woman}/>
            <p>Задать вопрос менеджеру</p>
       </div>
    </div>
  )
};

export default Filter;