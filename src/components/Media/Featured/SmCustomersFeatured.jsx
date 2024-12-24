"use client"
import Image from "next/image";
import styles from './featured.module.css';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import { FaShareAlt } from 'react-icons/fa';
import FormateDate from "../FormateDate";

const SmCustomersFeatured = ({ data }) => {

  const singlefeaturedData = data?.slice(0, 1);
  const videoLink = singlefeaturedData[0]?.PostCastLink ;

  const handleReadMoreClick = () => {
    if (videoLink) {
      window.open(videoLink, '_blank'); 
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {singlefeaturedData[0]?.CoverImage && (
          <img src={singlefeaturedData[0]?.CoverImage} alt="customermedia featured" />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.subHeadingContainer}>
          <p className={styles.VCdateContainer}>
            {FormateDate(singlefeaturedData[0]?.createdAt)}
          </p>
          <div className={styles.shareIcon}>
            <FaShareAlt size={24} />
          </div>
        </div>
        {singlefeaturedData[0]?.MediaCompanyFrom && (
          <p className={styles.subHeading}>{singlefeaturedData[0]?.MediaCompanyFrom}</p>
        )}
        <div className={styles.headingContainer}>
          {singlefeaturedData[0]?.MediaTitle && (
            <p className={styles.heading}>{singlefeaturedData[0]?.MediaTitle}</p>
          )}
          <p className={styles.descriptioncontainer}>
            {singlefeaturedData[0]?.MediaDescription && singlefeaturedData[0]?.MediaDescription}
          </p>
        </div>

        <ReadMore text={"Learn More"} onClick={handleReadMoreClick} />  
      </div>
    </div>
  );
};

export default SmCustomersFeatured;
