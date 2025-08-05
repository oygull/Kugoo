import React, { useState } from "react";
import styles from "./customSelect.module.scss";
import arrow from "../../app/assets/icons/arrow.svg";

type Option = {
  label: string,
  value: string
}

type Props = {
  options: Option[],
  onChange: (value: string) => void;
  placeholder: string;
}

const CustomSelect: React.FC<Props> = ({options, onChange, placeholder}) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');

  const handleSelect = (value: string ) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  }

  return(
    <div className={styles.selectContainer}>
      <div onClick={() => setIsOpen((prev) => !prev)} className={styles.selectBox}>
        <p>{ selected || placeholder}</p>
        <img alt="arrow" src={arrow}/>
      </div>
      {
        isOpen && (
          <ul className={styles.optionsList}>
            {
              options.map((option, index) => (
                <li onClick={() => handleSelect(option.value)} key={index} className={styles.option}>
                  {option.label}
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
};

export default CustomSelect;