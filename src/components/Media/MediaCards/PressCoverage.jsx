"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import mediaCard from "../../../assests/Media/mediaCard.webp"
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import styles from './mediaCards.module.css';
import { useIsMobile } from './useIsMobile';
//import Link from "next/link";
import FormateDate from "../FormateDate";

const PressCoverageMediaCards = ({ filteredData = [], activeTab, searchQuery }) => {
  const [visibleCount, setVisibleCount] = useState(3); 
  const isMobile = useIsMobile();

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); 
  };
  
 

  useEffect(() => {
    setVisibleCount(3);
  }, [filteredData, searchQuery]);

 
  const visibleData = isMobile ? filteredData.slice(0, visibleCount) : filteredData;

  if (visibleData.length === 0) {
    return <p className={styles.noDataMessage}>No items to display.</p>;
}


  const handleReadMoreClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <>
      {visibleData.map((cardData, index) => (
        <div className={styles.cardfullContainer} key={index}>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
             <Image src={cardData.CoverageImage || mediaCard} alt={"CoverImage"} className={styles.cardImg} width={350} height={238}/>
     
            </div>
            <div className={styles.textContainer}>
              {cardData.BrandName && <p className={styles.subheading}>{cardData?.BrandName}</p>}
              <p className={styles.heading}>{cardData?.Title}</p>
              <p className={styles.cardDate}>{FormateDate(cardData?.createdAt)}</p>
            </div>

            {cardData.Tags && (
              <div className={styles.blogCardButtonsContainer}>
                {cardData.Tags.map((tags, index) => (
                  <button className={styles.blogCardButton} key={index}>{tags}</button>
                ))}
              </div>
            )}
          </div>
          <ReadMore text={"Read More"} onClick={() => handleReadMoreClick(cardData?.Link)} />
        </div>
      ))}

       {isMobile && visibleCount < filteredData.length && (
                <button onClick={handleLoadMore} className={styles.loadMoreButton}>
                    Load More
                </button>
        )}
    </>
  );
};

export default PressCoverageMediaCards;
