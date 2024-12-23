"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import styles from './mediaCards.module.css';
import { useIsMobile } from './useIsMobile';
import Link from "next/link";
import FormateDate from "../FormateDate";
const BlogMediaCards = ({ filteredData = [], activeTab, searchQuery }) => {
    const [visibleCount, setVisibleCount] = useState(3);

    console.log("the medddddiaaa", filteredData)
    const isMobile = useIsMobile();

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };


    const filteredCards = filteredData.filter((card) => {
        const cardText = [
            // card.subheading,
            card?.title,
            // card.date,
            // card.description,
            // card.category,
        ].join(' ').toLowerCase();

        return cardText.includes("".toLowerCase());
    });
    const date = new Date('2024-12-22T09:08:22.263Z');

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    console.log(formattedDate);

    useEffect(() => {
        setVisibleCount(3);
    }, [filteredData, searchQuery]);


    const visibleData = isMobile ? filteredCards.slice(0, visibleCount) : filteredCards;

    if (filteredCards.length === 0) {
        return <p className={styles.noDataMessage}>No items to display.</p>;
    }
    
    return (
        <>
            {filteredData.map((cardData, index) => (
                <div className={styles.cardfullContainer} key={index}>
                    <div className={styles.cardContainer}>
                        <div className={styles.imgContainer}>
                            <img src={cardData?.BlogImage} alt={"CoverImage"} className={styles.cardImg} />
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.heading}>{cardData?.title}</p>
                            <p className={styles.description}>{cardData?.BlogPitchLine}</p>


                            <p className={styles.cardDate}>{FormateDate(cardData?.createdAt)}</p>
                        </div>

                        {cardData?.Tags && (
                            <div className={styles.blogCardButtonsContainer}>{
                                cardData?.Tags.map((tags, index) => (
                                    <button className={styles.blogCardButton} key={index}>{tags}</button>
                                ))
                            }
                            </div>
                        )}
                    </div>
                    <Link
                        href={`/blog/${cardData?.Slug}`}
                    >
                        <ReadMore text={"Read More"} />
                    </Link>
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

export default BlogMediaCards;