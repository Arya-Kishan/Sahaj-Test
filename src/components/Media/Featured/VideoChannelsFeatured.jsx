"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from './featured.module.css';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import { FaShareAlt } from 'react-icons/fa';
import FormateDate from "../FormateDate"

const VideochannelsFeatured = ({ data }) => {
  const [mounted, setMounted] = useState(false); 


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const singlefeaturedData = data?.slice(0, 1);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {singlefeaturedData[0]?.CoverImage && <img src={singlefeaturedData[0]?.CoverImage} alt="Video channels featured"  className={styles.videoimg}/>}
        {singlefeaturedData[0]?.VideoLink ? (
          <Link href={singlefeaturedData[0]?.VideoLink} passHref>
         
              <svg width="80" height="80" className={styles.videoIcon} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.2" />
                <circle cx="40" cy="40" r="30" fill="white" fillOpacity="0.8" />
                <path
                  d="M40.0007 56.6654C49.2054 56.6654 56.6673 49.2034 56.6673 39.9987C56.6673 30.794 49.2054 23.332 40.0007 23.332C30.7959 23.332 23.334 30.794 23.334 39.9987C23.334 49.2034 30.7959 56.6654 40.0007 56.6654Z"
                  stroke="#C18823"
                  strokeOpacity="0.75"
                  strokeWidth="3.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.666 33.332L46.666 39.9987L36.666 46.6654V33.332Z"
                  stroke="#C18823"
                  strokeOpacity="0.75"
                  strokeWidth="3.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          
          </Link>
        ) : (
         
          <svg width="80" height="80" className={styles.videoIcon} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.2" />
            <circle cx="40" cy="40" r="30" fill="white" fillOpacity="0.8" />
            <path
              d="M40.0007 56.6654C49.2054 56.6654 56.6673 49.2034 56.6673 39.9987C56.6673 30.794 49.2054 23.332 40.0007 23.332C30.7959 23.332 23.334 30.794 23.334 39.9987C23.334 49.2034 30.7959 56.6654 40.0007 56.6654Z"
              stroke="#C18823"
              strokeOpacity="0.75"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.666 33.332L46.666 39.9987L36.666 46.6654V33.332Z"
              stroke="#C18823"
              strokeOpacity="0.75"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <div className={styles.videotextContainer}>
        <div className={styles.subHeadingContainer}>
          <p className={styles.VCdateContainer}>{FormateDate(singlefeaturedData[0]?.createdAt)}</p>
          <div className={styles.shareIcon}>
            <FaShareAlt size={24} />
          </div>
        </div>
        <p className={styles.subHeading}>{singlefeaturedData[0]?.VideoCompanyFrom}</p>
        <div className={styles.headingContainer}>
          <p className={styles.heading}>{singlefeaturedData[0]?.VideoTitle}</p>
          <p className={styles.descriptioncontainer}>{singlefeaturedData[0]?.VideoDescription}</p>
        </div>
      
      </div>
    </div>
  );
};

export default VideochannelsFeatured;
