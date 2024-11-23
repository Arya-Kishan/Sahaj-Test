"use client"
import React from 'react';
import Image from "next/image";
import styles from './featured.module.css';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';


const VideochannelsFeatured=({data}) => {
    console.log("vv",data);
    const {image,text}=data;
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
           <Image src={image} alt="Video channels featured" />
            <svg width="80" height="80" className={styles.videoIcon} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.2"/>
              <circle cx="40" cy="40" r="30" fill="white" fillOpacity="0.8"/>
              <path d="M40.0007 56.6654C49.2054 56.6654 56.6673 49.2034 56.6673 39.9987C56.6673 30.794 49.2054 23.332 40.0007 23.332C30.7959 23.332 23.334 30.794 23.334 39.9987C23.334 49.2034 30.7959 56.6654 40.0007 56.6654Z" stroke="#C18823" strokeOpacity="0.75" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36.666 33.332L46.666 39.9987L36.666 46.6654V33.332Z" stroke="#C18823" strokeOpacity="0.75" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

        </div>
        <div className={styles.textContainer}>
            <div className={styles.subHeadingContainer}>
            <p className={styles.VCdateContainer}>
                {text.date}
            </p>
            <p>icon</p>
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

export default VideochannelsFeatured;