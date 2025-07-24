import React, { useState } from "react";
import styles from "./categories.module.scss";
import { Link } from "react-router-dom";
import manager from "../../app/assets/images/manager.png";
import categoriesArr from "../../app/assets/data/categoriesArr";

function Categories (){

const [showAll, setShowAll] = useState(false);

const visibleCategories = showAll ? categoriesArr : categoriesArr.slice(0,8)

  return(
    <div className={styles.categories}>
      <div className="container">
        <div className={styles.categoriesTop}>
           <h3 className={styles.categoriesTitle}>Популярные категории</h3>
           <div className={styles.categoriesWrap}>
              <img className={styles.managerImg} src={manager} alt="menager"/>
              <div className={styles.categoriesWrapContent}>
                  <p>Менеджер ответит на любой ваш вопрос о продуктах Kugoo</p>
                  <Link className={styles.managerLink} to="/">Задать вопрос</Link>
              </div>
           </div>
        </div>
        <div className={styles.categoriesItemWrap}>
            {
              visibleCategories.map((item) => (
                <Link to="/" className={styles.category} key={item.catId}>
                    <img className={styles.categoryItemImg} alt="categoryImg" src={item.catImg}/>
                    <div className={styles.categoryItemContent}>
                        <h4>{item.catName}</h4>
                        <p>от {(item.catPrice).toLocaleString("ru-RU").replace(/,/g,"")}  ₽</p>
                    </div>
                </Link>
              ))
            }
        </div>
        {
          categoriesArr.length > 8 && (
            <div className={styles.showBtnBox}>
                <button onClick={() => setShowAll(!showAll)}>
                  { showAll ? "Завернуть" : "Смотреть все"}
                </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Categories;