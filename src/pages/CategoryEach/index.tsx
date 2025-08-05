import React, {useState} from "react";
import styles from "./categoryEach.module.scss";
import { Link } from "react-router-dom";
import home from "../../app/assets/icons/home.svg";
import { useParams } from "react-router-dom";
import categoriesArr from "../../app/assets/data/categoriesArr";
import dron from "../../app/assets/images/dron.png";
import CustomSelect from "../../widgets/CustomSelect";
import Filter from "../../components/Filter";
import Product from "../../components/Product";
import { useProductStore } from "../../store/useProductStore";

const priceOptions = [
   {
    label: '19 900 +',
    value: '19 900 +'
   },
   {
    label: '29 900 +',
    value: '29 900 +'
   },
   {
    label: '39 900 +',
    value: '39 900 +'
   },
   {
    label: '49 900 +',
    value: '49 900 +'
   }
]

const distanceOptions = [
   {
    label: '19 900 km',
    value: '19 900 km'
   },
   {
    label: '29 900 km',
    value: '29 900 km'
   },
   {
    label: '39 900 km',
    value: '39 900 km'
   },
   {
    label: '49 900 km',
    value: '49 900 km'
   }
]

type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryEach: React.FC<AlertProps> = ({setShowAlert}) => {

  const { catId} = useParams<{ catId: string}> ();
  const category = categoriesArr.find((cat) => cat.catId === Number(catId));
  const handleSortChange = (value:string) =>{}
  const products = useProductStore((state) => state.products);
  const filteredProducts = products.slice(0,12);
  

  return(
    <div className={styles.category}>
       <div className="container">
        <div className={styles.breadcrump}>
          <Link className={styles.breadcrumpLink} to="/">
          <img src={home} alt="home"/>
           <p>Главная</p> 
           </Link>
          <p>/</p>
          <Link className={styles.breadcrumpLink} to="/category"> Каталог</Link>
          <p>/</p>
          <Link className={styles.breadcrumpLink} to="/:catId"> {category?.catName}</Link>
        </div>
      </div>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h2 className={styles.heroTitle}>{category?.catName} Kugoo Kirin</h2>
          </div>
        </div>
      </div>
      <div className={styles.deliveryBottom}>
          <div className="container">
            <div className={styles.deliveryBottomInner}>
                <div className={styles.dronImg}>
                    <img src={dron} alt="dron"/>
                </div>
                <div className={styles.deliveryContent}>
                    <p className={styles.deliveryBadge}>Акция</p>
                    <h3 className={styles.deliveryTitle}>Бесплатная доставка электросамокатов по России до 01.09</h3>
                    <Link className={styles.moreInfoBtn} to="/">Подробнее</Link>
                </div>
            </div>
          </div>
      </div>
      <div className={styles.filter}>
        <div className="container">
          <div className={styles.filterTop}>
            <h3 className={styles.filterTitle}>Фильтр</h3>
            <div className={styles.filterTopWrap}>
              <p className={styles.filterTopPar}>Сортировать:</p>
              <CustomSelect options={priceOptions} onChange={handleSortChange} placeholder="По цене"/>
               <CustomSelect options={distanceOptions} onChange={handleSortChange} placeholder="По дальности хода"/>
            </div>
          </div>
          <div className={styles.filterMain}>
            <Filter setShowAlert={setShowAlert}/>
            <div className={styles.filteredProductsWrap}>
              {
                filteredProducts.map((item) => (
                  <Product setShowAlert={setShowAlert}  item={item}/>
                ))
              }
           </div>
          </div>
   
        </div>
      </div>
    </div>
  )
};

export default CategoryEach;