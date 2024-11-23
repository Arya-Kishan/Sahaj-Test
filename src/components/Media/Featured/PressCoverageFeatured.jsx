"use client"
import React from 'react';
import Image from "next/image";
import styles from './pressCoverage.module.css'
function PressCoverageFeatured({data}) {
  
 
  return (
 
      
  <div className={styles.cardContainer}>
    {data.cards.map((card, index) => (
     
      <div   key={index} className={styles.card}>
          <div className={styles.logo}>
             <Image src={card.logo} alt="cardlogo" />
          
              </div>
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
          <button className={styles.viewMore}>
              View more
          </button>
          </div>       
  
    ))}
  </div>

 
  )
}

export default PressCoverageFeatured
