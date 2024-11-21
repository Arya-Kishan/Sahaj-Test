"use client"
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const slides = [
  {
    title: "Affordable Expertise at Your Fingertips",
    subtitle: "Get Your Personalized Financial Plan in Just 2 Weeks for ₹15,000 for 1st year",
    buttonText: "Take the first step",
    features: ["No hidden cost", "Expert financial advisors", "Fully online"],
  },
  {
    title: "70+ press coverage",
    subtitle: "6+ lead publications | 2 podcasts",
    buttonText: "Read press coverage",
    logos: [
      "/assets/logos/mint-logo.png",
      "/assets/logos/times-logo.png",
      "/assets/logos/ft-logo.png",
      "/assets/logos/fn-logo.png",
    ], 
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
      </div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}
        >
          <h1 className={styles.title}>{slide.title}</h1>
          <p className={styles.subtitle}>{slide.subtitle}</p>
          <button className={styles.ctaButton}>{slide.buttonText}</button>

          {slide.features && (
            <div className={styles.features}>
              {slide.features.map((feature, idx) => (
                <div key={idx}>🟡 {feature}</div>
              ))}
            </div>
          )}

          {slide.logos && (
            <div className={styles.pressLogos}>
              {slide.logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Logo ${idx + 1}`}
                  className={styles.logoImage}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
