"use client"
import React from 'react';
import Image from "next/image";
import styles from './suggestion.module.css';


const Card = ({ title, logo,description }) => {
  const handleViewMore = () => {
   
    console.log(`Viewing more about: ${title}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <Image src={logo} alt="cardlogo"  />
       
        </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.viewMore} onClick={handleViewMore}>
        View more
      </button>
    </div>
  );
};

export default Card;
