import React from "react";
import styles from "./productCatalog.module.scss";
import { Link } from "react-router-dom";
import home from "../../app/assets/icons/home.svg";
import Categories from "../../components/Categories";
import Russia from "../../components/Russia";
import Blog from "../../components/Blog";
import Popular from "../../components/Popular";
import Videos from "../../components/Videos";


type AlertProps = {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductCatalog: React.FC<AlertProps> = ({setShowAlert}) => {

  return(
    <div className={styles.catalog}>
      <div className="container">
        <div className={styles.breadcrump}>
          <Link className={styles.breadcrumpLink} to="/">
          <img src={home} alt="home"/>
           <p>Главная</p> 
           </Link>
          <p>/</p>
          <Link className={styles.breadcrumpLink} to="/catalog"> Каталог</Link>
        </div>
      </div>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h2 className={styles.heroTitle}>Каталог товаров</h2>
          </div>
        </div>
      </div>
      <Categories/>
      <Russia/>
      <Videos/>
      <Blog/>
       <Popular setShowAlert={setShowAlert}/>
    </div>
  )
};

export default ProductCatalog;