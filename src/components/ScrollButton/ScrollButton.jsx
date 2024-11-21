import React, { useState, useEffect } from "react";
import styles from "./ScrollToTopButton.module.css"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const [isScrolledUp, setIsScrolledUp] = useState(true); 

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
    <button
      className={`${styles.scrollButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      title="Scroll to top"
    >
      <span
        className={`${styles.arrow} ${
          isScrolledUp ? styles.up : styles.down
        }`}
      >
        ↑
      </span>
    </button>
  );
};

export default ScrollToTopButton;
