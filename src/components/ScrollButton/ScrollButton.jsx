"use client"

import { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.css"; 
import { useDispatch, useSelector } from "react-redux";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const [isScrolledUp, setIsScrolledUp] = useState(true); 
  const isBookCallModalOpen = useSelector((state) => state.modal.isBookCallModalOpen);


  
  

  let lastScrollPosition = 0; 

  

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }



    setIsScrolledUp(currentScroll < lastScrollPosition);
    lastScrollPosition = currentScroll;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      
    };
  }, []);

  return (
   <>
   
    {
      isBookCallModalOpen? " " : 
      <button
    className={`${styles.scrollButton} ${isVisible ? styles.visible : ""}`}
    onClick={scrollToTop}
    title="Scroll to top"
  >
     
    <span
      className={`${styles.arrow} ${
        isScrolledUp ? "" : ""
      }`}
    >
      ↑
    </span>
    
  </button>
    }
   
   </>
  );
};

export default ScrollToTopButton;
