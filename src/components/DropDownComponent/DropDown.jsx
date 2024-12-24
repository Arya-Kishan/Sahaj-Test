"use client";

import React, { useState } from "react";
import styles from './dropDown.module.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ value, onChange, options,title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  const handleOptionClick = (index) => {
    onChange(index); 
    setIsOpen(false); 
    setIsInitial(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.buttons}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{isInitial ? title : options[value]?.option}</p>
        <span className={styles.icon}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {options &&
          options?.map((option, index) => (
            <button
              key={option.id}
              className={`${styles.menuItem} ${
                value === index ? styles.active : ""
              }`}
              onClick={() => handleOptionClick(index)}
            >
              {option?.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
