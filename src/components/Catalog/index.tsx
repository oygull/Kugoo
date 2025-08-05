import React from "react";
import styles from "./catalog.module.scss"
import electicScooter from "../../app/assets/icons/electric-scooter.svg";
import weightingScale from "../../app/assets/icons/weighing-scale.svg";
import mountainBike from "../../app/assets/icons/mountain-bike.svg";
import vacumCleaner from "../../app/assets/icons/vacuum-cleaner.svg";
import scooter from "../../app/assets/icons/scooter.svg";
import { Link } from "react-router-dom";

function Catalog() {
  return(
    <div className={styles.catalog}>
      <div className={styles.catalogWrap}>
        <Link className={`${styles.catalogWrapLink}  ${styles.catalogWrapLinkLink}`} to="/">
          <img alt="electicScooter" src={electicScooter}/>
          <p>Электросамокаты</p>
        </Link>
        <Link className={styles.catalogWrapLink} to="/">
          <img alt="scooter" src={scooter}/>
          <p>Электроскутеры</p>
        </Link>
        <Link className={styles.catalogWrapLink} to="/">
          <img alt="mountainBike" src={mountainBike}/>
          <p>Электровелосипеды</p>
        </Link>
        <Link className={styles.catalogWrapLink} to="/">
          <img alt="vacumCleaner" src={vacumCleaner}/>
          <p>Робот-пылесосы</p>
        </Link>
        <Link className={styles.catalogWrapLink} to="/">
          <img alt="weightingScale" src={weightingScale}/>
          <p>Весы</p>
        </Link>
      </div>
      <div className={styles.linksWrap}>
        <h4>Особенности</h4>
        <div  className={styles.linksWrapInner}>
          <Link className={styles.wrapInnerLink} to="/">Внедорожный</Link>
          <Link className={styles.wrapInnerLink} to="/">Городской</Link>
          <Link className={styles.wrapInnerLink} to="/">Зимний</Link>
          <Link className={styles.wrapInnerLink} to="/">С сиденьем</Link>
          <Link className={styles.wrapInnerLink} to="/">Без сиденья</Link>
        </div>
      </div>
      <div className={styles.linksWrap}>
        <h4>Для кого</h4>
        <div  className={styles.linksWrapInner}>
          <Link className={styles.wrapInnerLink} to="/">Для детей и подростков</Link>
          <Link className={styles.wrapInnerLink} to="/">Для взрослых</Link>
          <Link className={styles.wrapInnerLink} to="/">Для пенсионеров</Link>
        </div>
      </div>
    </div>
  )
};

export default Catalog;