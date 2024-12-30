"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from './mediaCards.module.css';
import { useIsMobile } from './useIsMobile';
import Link from "next/link";
import FormateDate from "../FormateDate";

const VideoChanelMediaCards = ({ filteredData = [], activeTab, searchQuery }) => {
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

    return (
        <>
            {visibleData.map((cardData, index) => (
                <div className={styles.cardfullContainer} key={index}>
                    <div className={styles.cardContainer}>
                        <div className={styles.imgContainer}>
                        {cardData.CoverImage &&    <Image src={cardData.CoverImage} alt={"CoverImage"} className={styles.cardImg} width={350} height={238}/> } 

                            {cardData.VideoLink ? (
                                <Link href={cardData?.VideoLink} passHref>

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

                                </Link>
                            ) : (

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
                            {cardData.VideoCompanyFrom && <p className={styles.subheading}>{cardData.VideoCompanyFrom}</p>}
                            <p className={styles.heading}>{cardData.VideoTitle}</p>
                            {/* <p className={styles.description}>{cardData.VideoDescription}</p> */}
                            <p className={styles.cardDateVideo}>{FormateDate(cardData.createdAt)}</p>
                        </div>

                        {/* {cardData.Tags && (
                            <div className={styles.blogCardButtonsContainer}>{
                                cardData.Tags.map((tags, index) => (
                                    <button className={styles.blogCardButton} key={index}>{tags}</button>
                                ))
                            }
                            </div>
                        )} */}
                    </div>
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

export default VideoChanelMediaCards;