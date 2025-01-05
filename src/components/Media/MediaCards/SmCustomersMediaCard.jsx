"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import styles from './mediaCards.module.css';
import { useIsMobile } from './useIsMobile';
import Link from "next/link";
import FormateDate from "../FormateDate";
import blogCard from "../../../assests/Media/blogCard.webp"
const SmCustomerMediaCards = ({ filteredData = [], activeTab, searchQuery }) => {
  const [visibleCount, setVisibleCount] = useState(3); 

  const isMobile = useIsMobile();

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); 
  };
  

  
  useEffect(() => {
    setVisibleCount(3);
  }, [filteredData, searchQuery]);

  
  const visibleData = isMobile ? filteredData.slice(0, visibleCount) :  filteredData;

  if (visibleData.length === 0) {
    return <p className={styles.noDataMessage}>No items to display.</p>;
}

  return (
    <>
     <div className={styles.mediaCardContainer}>
     {visibleData.map((cardData,index) => (
        <div className={styles.cardfullContainer} key={index}>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
            {<Image src={cardData.CoverImage || blogCard} alt={"CoverImage"} className={styles.cardImg} width={350} height={238}/> }
             
            </div>
            <div className={styles.textContainer}>
              {cardData.MediaCompanyFrom && <p className={styles.subheading}>{cardData.MediaCompanyFrom}</p>}
              <p className={styles.heading}>{cardData.MediaTitle||"Practical Money Guidance for Financial Well-being"}</p>
              {/* <p className={styles.description}>{cardData.MediaDescription}</p> */}
              <p className={styles.cardDate}>{FormateDate(cardData.createdAt)}</p>
            </div>
          
            {/* {cardData.Tags && (
              <div className={styles.blogCardButtonsContainer}>{
                cardData.Tags.map((tags,index)=>(
                  <button className={styles.blogCardButton} key={index}>{tags}</button>
                ))
              }
              </div>
            )}  */}
          </div>
          

            
          </div>
      ))}

     </div>
      <div>
      {isMobile && visibleCount < filteredData.length && (
          <button onClick={handleLoadMore} className={styles.loadMoreButton}>
            Load More
          </button>
        )}
      </div>
       
    </>
  );
};

export default SmCustomerMediaCards;