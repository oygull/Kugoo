import React, {useState} from "react";
import styles from "./faq.module.scss";
import faqArr from "../../app/assets/data/faqArr";
import plusIcon from "../../app/assets/icons/plus.png";
import closeIcon from "../../app/assets/icons/close.png";

function Faq() {

   const [activeFaq, setActiveFaq] =  useState<number | null>(null);
   const toggleFaq = (index: number) => {
    setActiveFaq(prev => (prev === index ? null : index));
  }

  return(
      <div className={styles.faq}>
          <h3 className={styles.faqTitle}>Отвечаем на вопросы покупателей</h3>
          <div className={styles.faqSection}>
             {
               faqArr.map((faq, index) => (
                <div key={index}>
                  <button className={styles.faqButton} onClick={() => toggleFaq(index)}>
                    <p>{faq.question}</p>
                    {
                      activeFaq === index ? <img src={closeIcon} alt="faqIcon"/> :  <img src={plusIcon} alt="faqIcon"/>
                    }
                  </button>
                  {
                    activeFaq === index && (
                      <div className={styles.answerWrap}>
                        <p>{faq.answer}</p>
                      </div>
                    )
                  }
                </div>
               ))
             }
          </div>
        </div>
  )
};

export default Faq;