"use client"
import styles from './reviews.module.css';
import Image from 'next/image';
import GoogleIcon from '../../../assests/Blog/GoogleIcon.webp';
import LinkdinIcon from '../../../assests/Blog/LinkedinIcon.webp';
import starIcon from '../../../assests/Blog/starIcon.webp';
const Reviews = () => {
  return (
  
      <div className={styles.reviewSection}>
        <div className={styles.review}>
          <div className={styles.iconText}>
            <Image src={GoogleIcon} alt="Google" className={styles.logo} />
            <span>200+ Reviews</span>
          </div>
          <div className={styles.rating}>
            <span className={styles.ratingNumber}>4.8</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={starIcon} 
                  alt="star"
                  className={styles.star}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.review}>
          <div className={styles.iconText}>
            <Image src={LinkdinIcon} alt="LinkedIn" className={styles.logo} />
            <span>200+ reviews</span>
          </div>
          <div className={styles.rating}>
            <span className={styles.ratingNumber}>4.8</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={starIcon}
                  alt="star"
                  className={styles.star}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      
  );
};

export default Reviews;
