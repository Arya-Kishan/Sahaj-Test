"use client"
import Image from 'next/image';
import styles from './FeaturedIn.module.css';
import featured from '../../../assests/Logo/featured.webp';
import { useState, useEffect } from 'react';

const FeaturedIn = ({ featuredData }) => {

  const [getData, setData] = useState([]);

  useEffect(() => {
    if (featuredData) {
      setData(featuredData[0]?.HomeScreenFeatureList)
    }
  }, [featuredData])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <hr className={styles.line1} />
        <span>Featured in</span>
        <hr className={styles.line} />
      </div>
      <div className={styles.logos}>
        {getData &&
          getData.map((item, index) => (
            <img
              key={index}
              src={item?.fileUrl}
              alt="International Finance Logo"
              className={styles.logo}
            />
          ))}
      </div>
    </div>
  );
};

export default FeaturedIn;
