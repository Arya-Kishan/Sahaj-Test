"use client"
import Image from 'next/image';
import arrowUpRight from '../../assests/AboutUs/arrowUpRight.svg';
import styles from "./readMore.module.css"

const ReadMore=({text ,onClick,className})=> {
  return (
        <>
         <button 
         onClick={onClick}
         className={`${styles.readMoreButton} ${className || ""}`}
        
         >
             <span>{text}</span>
             <Image src={arrowUpRight} alt="icon" className={className} />
         </button>
        </>
      
    
  )
}

export default ReadMore