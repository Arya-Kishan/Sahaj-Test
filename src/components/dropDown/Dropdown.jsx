"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import styles from "./Dropdown.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); 

  const handleOptionClick = (path) => {
    router.push(path); 
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.buttons}
      >
        {title}{" "}
        <span className={styles.icon}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.path)}
              className={styles.menuItem}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
