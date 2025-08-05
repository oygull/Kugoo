import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../app/assets/images/logo.png";
import polygon from "../../app/assets/icons/polygon.png";
import search from "../../app/assets/icons/search.png";
import balance from "../../app/assets/icons/balance.png";
import heart from "../../app/assets/icons/heart-black.png";
import shoppingCart from "../../app/assets/icons/shopping-cart.png";
import Basket from "../Basket";
import Catalog from "../Catalog";


function Header() {

  const basketBtnRef = useRef<HTMLButtonElement>(null);
  const basketRef = useRef<HTMLDivElement>(null);
  const catalogBtnRef = useRef<HTMLAnchorElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const[isOpen, setIsOpen] = useState(false);
  const[isCatalogOpen, setIsCatalogOpen] = useState(false);

  const toggleBasket = () => {
    setIsOpen(!isOpen)
  }

  const toggleCatalog = () => {
    setIsCatalogOpen(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.screenY > 100) {
        setIsSticky(true);
      } else{
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll );
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(
        basketRef.current &&
        !basketRef.current.contains(event.target as Node) &&
        basketBtnRef.current &&
        !basketBtnRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(
        catalogRef.current &&
        !catalogRef.current.contains(event.target as Node) &&
        catalogBtnRef.current &&
        !catalogBtnRef.current.contains(event.target as Node)
      ) {
        setIsCatalogOpen(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);
  return(
    <div className={`${styles.header} ${isSticky ? styles.stickyheader : ""}`}>
      <div className="container">
        <div className={styles.headerWrap}>
          <div className={styles.headerBox}>
          <Link className={styles.headerLogoLink} to="/">
            <img src={logo} alt="logo"/>
          </Link>
          <Link to="/category" ref={catalogBtnRef} 
          onMouseEnter={toggleCatalog}
           className={styles.headerBtn}>
            <div className={styles.navCat}>
              <div className={styles.navLine}></div>
              <div className={styles.navLine}></div>
              <div className={styles.navLineHalf}></div>
            </div>
            <p>Каталог</p> 
          </Link>
          {
            isCatalogOpen && <div ref={catalogRef}>
              <Catalog/>
            </div>
          }
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
            <button ref={basketBtnRef} onClick={toggleBasket} className={styles.headerCartBtn}>
              <img alt="shoppingCart" src={shoppingCart}/>
              <p>Корзина</p>
            </button>
            {
              isOpen && (
                <div className={styles.basketWrap} ref={basketRef}>
                  <Basket/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;