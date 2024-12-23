"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import styles from './mediaCards.module.css';
import { useIsMobile } from './useIsMobile';
import Link from "next/link";
import FormateDate from "../FormateDate";

const PressCoverageMediaCards = ({ filteredData = [], activeTab, searchQuery }) => {
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
              <img src={cardData.CoverageImage || cardData.CoverImage} alt={"CoverImage"} className={styles.cardImg} />
            </div>
            <div className={styles.textContainer}>
              {cardData.BrandName && <p className={styles.subheading}>{cardData?.BrandName}</p>}
              <p className={styles.heading}>{cardData?.Title}</p>
               {/* {(cardData.Content && activeTab=="blogs" )&& <p className={styles.description}>{cardData?.Content}</p> 

              }  */}
              <p className={styles.cardDate}>{FormateDate(cardData?.createdAt)}</p>
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
               <ReadMore text={"Read More"} />
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

export default PressCoverageMediaCards;