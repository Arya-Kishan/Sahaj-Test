"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dropdown.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({ title, options, closeMenu = () => { }, activeLink = "", setActiveLink = () => { } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);

  console.log("activeLink !!!!!!! ", activeLink);

  const handleOptionClick = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button onClick={toggleDropdown} className={styles.buttons}>
        <p style={activeLink == title ? { fontWeight: "bold" } : { fontWeight: "300" }} >{title}</p>
        <IoIosArrowDown
          className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
        />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                handleOptionClick(option.path)
                closeMenu();
                setActiveLink(title);
              }}
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
