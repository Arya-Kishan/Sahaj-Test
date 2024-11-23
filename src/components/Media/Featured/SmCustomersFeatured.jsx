"use client"
import React from 'react';
import Image from "next/image";
import styles from './featured.module.css';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import { FaShareAlt } from 'react-icons/fa';

const SmCustomersFeatured=({data}) => {
  
    const {image,text}=data;
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
           <Image src={image} alt="Podcast featured" />

        </div>
        <div className={styles.textContainer}>
            <div className={styles.subHeadingContainer}>
            <p className={styles.VCdateContainer}>
                {text.date}
            </p>
            <FaShareAlt  size={24}/>
            </div>
            <p className={styles.subHeading}>{text.subHeading}</p>
            <div className={styles.headingContainer}>
               <p className={styles.heading}>{text.Heading}</p> 
                <p className={styles.descriptioncontainer}>
               {text.description}
            </p>
            </div>
            
            <ReadMore text={"Learn More"} />
          
        </div>
      
    </div>
  )
}

export default SmCustomersFeatured;