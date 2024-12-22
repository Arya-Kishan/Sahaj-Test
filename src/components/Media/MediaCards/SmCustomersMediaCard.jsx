"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import styles from './mediaCards.module.css';
import { useIsMobile } from './useIsMobile';
import Link from "next/link";

const SmCustomerMediaCards = ({ filteredData = [], activeTab, searchQuery }) => {
  const [visibleCount, setVisibleCount] = useState(3); 

console.log("the medddddiaaa",filteredData)
  const isMobile = useIsMobile();

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); 
  };
  

  const filteredCards = filteredData.filter((card) => {
    const cardText = [
      // card.subheading,
      card.Title,
      card.date,
      card.description,
      card.category,
    ].join(' ').toLowerCase();

    return cardText.includes("".toLowerCase());
  });
  
  useEffect(() => {
    setVisibleCount(3);
  }, [filteredData, searchQuery]);

  
  const visibleData = isMobile ? filteredCards.slice(0, visibleCount) : filteredCards;

  if (filteredCards.length === 0) {
    return <p className={styles.noDataMessage}>No items to display.</p>;
  }

  return (
    <>
      {visibleData.map((cardData,index) => (
        <div className={styles.cardfullContainer} key={index}>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <img src={cardData.CoverImage} alt={"CoverImage"} className={styles.cardImg} />
            </div>
            <div className={styles.textContainer}>
              {cardData.MediaCompanyFrom && <p className={styles.subheading}>{cardData.MediaCompanyFrom}</p>}
              <p className={styles.heading}>{cardData.MediaTitle}</p>
              {/* <p className={styles.description}>{cardData.MediaDescription}</p> */}
              <p className={styles.cardDate}>{cardData.createdAt}</p>
            </div>
          
            {cardData.Tags && (
              <div className={styles.blogCardButtonsContainer}>{
                cardData.Tags.map((tags,index)=>(
                  <button className={styles.blogCardButton} key={index}>{tags}</button>
                ))
              }
              </div>
            )} 
          </div>
          

            
          </div>
      ))}

        {isMobile && visibleCount < filteredCards.length && (
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            Load More
          </button>
        )}
    </>
  );
};

export default SmCustomerMediaCards;