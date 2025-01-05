"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import styles from './mediaCards.module.css';
import { useIsMobile } from './useIsMobile';
import Link from "next/link";
import blogCard from "../../../assests/Media/blogCard.webp"

import FormateDate from "../FormateDate";
const BlogMediaCards = ({ filteredData = [], activeTab, searchQuery }) => {
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
                              <Image src={cardData?.BlogImage || blogCard} alt={"CoverImage"} className={styles.cardImg} width={350} height={238}/>
                           
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

            {isMobile && visibleCount < filteredData.length && (
                <button onClick={handleLoadMore} className={styles.loadMoreButton}>
                    Load More
                </button>
            )}
        </>
    );
};

export default BlogMediaCards;