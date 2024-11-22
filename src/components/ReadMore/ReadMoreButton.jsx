"use client"
import React from 'react';
import Image from 'next/image';
import arrowUpRight from '../../assests/AboutUs/arrowUpRight.svg';
import styles from "./readMore.module.css"

const ReadMore=({text ,onClick})=> {
  return (
        <>
         <button 
         onClick={onClick}
         className={styles.readMoreButton}
        
         >
             <span>{text}</span>
             <Image src={arrowUpRight} alt="icon" className="icon" />
         </button>
        </>
      
    
  )
}

export default ReadMore