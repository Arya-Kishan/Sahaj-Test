"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import styles from './mediaCards.module.css';
import { useIsMobile } from './useIsMobile';
import Link from "next/link";

const MediaCards = ({ filteredData = [], activeTab, searchQuery }) => {
  const [visibleCount, setVisibleCount] = useState(3); 


  const isMobile = useIsMobile();

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); 
  };
  

  const filteredCards = filteredData.filter((card) => {
    const cardText = [
      card.subheading,
      card.heading,
      card.date,
      card.description,
      card.category,
    ].join(' ').toLowerCase();

    return cardText.includes(searchQuery.toLowerCase());
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
      {visibleData.map(({ id, img, subheading, heading, date, description }) => (
        <div className={styles.cardfullContainer} key={id}>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <Image src={img} alt={heading} className={styles.cardImg} />
              {activeTab === "podcast" && (
                <svg
                  width="80"
                  height="80"
                  className={styles.podcastIcon}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.2" />
                  <circle cx="40" cy="40" r="30" fill="white" fillOpacity="0.8" />
                  <path
                    d="M28 48V40C28 36.8174 29.2643 33.7652 31.5147 31.5147C33.7652 29.2643 36.8174 28 40 28C43.1826 28 46.2348 29.2643 48.4853 31.5147C50.7357 33.7652 52 36.8174 52 40V48"
                    stroke="#C18823"
                    strokeOpacity="0.75"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52 49.3346C52 50.0419 51.719 50.7202 51.219 51.2203C50.7189 51.7204 50.0406 52.0013 49.3333 52.0013H48C47.2928 52.0013 46.6145 51.7204 46.1144 51.2203C45.6143 50.7202 45.3333 50.0419 45.3333 49.3346V45.3346C45.3333 44.6274 45.6143 43.9491 46.1144 43.449C46.6145 42.9489 47.2928 42.668 48 42.668H52V49.3346ZM28 49.3346C28 50.0419 28.281 50.7202 28.781 51.2203C29.2811 51.7204 29.9594 52.0013 30.6667 52.0013H32C32.7072 52.0013 33.3855 51.7204 33.8856 51.2203C34.3857 50.7202 34.6667 50.0419 34.6667 49.3346V45.3346C34.6667 44.6274 34.3857 43.9491 33.8856 43.449C33.3855 42.9489 32.7072 42.668 32 42.668H28V49.3346Z"
                    stroke="#C18823"
                    strokeOpacity="0.75"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {activeTab === "video" && (
                <svg
                  width="80"
                  height="80"
                  className={styles.videoIcon}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
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
            <div className={styles.textContainer}>
              {subheading && <p className={styles.subheading}>{subheading}</p>}
              <p className={styles.heading}>{heading}</p>
              {description && <p className={styles.description}>{description}</p>}
              <p className={styles.cardDate}>{date}</p>
            </div>
            {activeTab === "blogs" && (
              <div className={styles.blogCardButtonsContainer}>
                <button className={styles.blogCardButton}>Budgeting</button>
                <button className={styles.blogCardButton}>Saving</button>
              </div>
            )}
          </div>
          { activeTab === "blogs" && 
             
             <Link
             className={styles.readMore}
             href="/blog/individual"
            >
              <ReadMore text={"Read More"} />
           </Link>
           }

            { activeTab === "press-coverage" &&
           
               <ReadMore text={"Read More"} />
          
            }
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

export default MediaCards;