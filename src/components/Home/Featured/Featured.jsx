"use client"
import Image from 'next/image';
import styles from './FeaturedIn.module.css';
import featured from '../../../assests/Logo/featured.webp'; 

const FeaturedIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <hr className={styles.line1} />
        <span>Featured in</span>
        <hr className={styles.line} />
      </div>
      <div className={styles.logos}>
        {[...Array(6)].map((_, index) => (
          <Image key={index} src={featured} alt="International Finance Logo" className={styles.logo} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;
