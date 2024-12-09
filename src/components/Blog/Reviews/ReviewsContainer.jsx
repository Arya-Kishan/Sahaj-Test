"use client";
import styles from './reviewsContainer.module.css';
import Reviews from './Reviews';
import Guidance from './Guidance';

const ReviewsContainer = () => {
  return (
    <div className={styles.container}>
     <Reviews />
      <div className={styles.separator}></div> 
      <div className={styles.companyInfoSection}>
        <Guidance />
      </div>
    </div>
  );
};

export default ReviewsContainer;
