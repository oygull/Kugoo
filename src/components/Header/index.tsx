import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../app/assets/images/logo.png";
import polygon from "../../app/assets/icons/polygon.png";
import search from "../../app/assets/icons/search.png";
import balance from "../../app/assets/icons/balance.png";
import heart from "../../app/assets/icons/heart-black.png";
import shoppingCart from "../../app/assets/icons/shopping-cart.png";
import Basket from "../Basket";


function Header() {

  const[isOpen, setIsOpen] = useState(false);

  const toggleBasket = () => {
    setIsOpen(!isOpen)
  }

  return(
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrap}>
          <div className={styles.headerBox}>
          <Link className={styles.headerLogoLink} to="/">
            <img src={logo} alt="logo"/>
          </Link>
          <button className={styles.headerBtn}>
            <div className={styles.navCat}>
              <div className={styles.navLine}></div>
              <div className={styles.navLine}></div>
              <div className={styles.navLineHalf}></div>
            </div>
            <p>Каталог</p> 
          </button>
          <div className={styles.headerSearch}>
            <div className={styles.headerSearchPart}>
                <p>Везде</p>
                <img src={polygon} alt="polygon"/>
            </div>
            <input placeholder="Искать самокат KUGO" className={styles.searchInput} type="text"/>
            <button className={styles.searchBtn}>
              <img alt="search" src={search}/>
            </button>
          </div>
          </div>
          <div className={styles.headerBtnBox}>
            <button className={styles.headerWrapBtn}>
              <img alt="balance" src={balance}/>
            </button>
            <button className={styles.headerWrapBtn}>
              <img alt="heart" src={heart}/>
            </button>
            <button onClick={toggleBasket} className={styles.headerCartBtn}>
              <img alt="shoppingCart" src={shoppingCart}/>
              <p>Корзина</p>
            </button>
            {
              isOpen && (
                <Basket/>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;