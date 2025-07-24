import React from "react";
import styles from "./headerBottom.module.scss";
import { Link } from "react-router-dom";

function HeaderBottom (){
  return(
    <div className={styles.headerBottom}>
      <div className="container">
        <div className={styles.headerBottomWrap}>
          <Link className={styles.headerBottomLink} to="/">О магазине</Link>
          <Link className={styles.headerBottomLink} to="/">Доставка и оплата <span>Доступна рассрочка</span> </Link>
          <Link className={styles.headerBottomLink} to="/">Тест-драйв</Link>
          <Link className={styles.headerBottomLink} to="/">Блог</Link>
          <Link className={styles.headerBottomLink} to="/">Контакты</Link>
          <Link className={styles.headerBottomLink} to="/">Акции <span>%</span></Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom;