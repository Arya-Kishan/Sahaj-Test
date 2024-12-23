"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReadMore from "@/components/ReadMoreButton/ReadMoreButton";
import styles from "./mediaCards.module.css";
import { useIsMobile } from "./useIsMobile";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  setActiveTab,
  setSearchQuery,
  setFilteredData,
  setIsSearching,
  setMediaData,
  setCombinedData,
} from "../../../store/slices/mediaSlice";
import FormateDate from "../FormateDate";

const MediaCards = ({ filteredData = [], activeTab }) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredDataRedux = useSelector((state) => state.media.filteredData);
  const isSearching = useSelector((state) => state.media.isSearching);
  const combinedData = useSelector((state) => state.media.combinedData);
  const searchQuery = useSelector((state) => state.media.searchQuery);
  const isMobile = useIsMobile();
  const dispatch = useDispatch();

  console.log("Redux Data:", isSearching, combinedData, filteredDataRedux, filteredData);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };


  const filteredCards = filteredData.filter((card) => {
    const cardText = [
      card.Title || card.PodcastTitle || card.title || card.VideoTitle || card.MediaTitle,
    ]
      .join(" ")
      .toLowerCase();

    return cardText.includes(searchQuery?.toLowerCase());
  });

  useEffect(() => {

    setVisibleCount(3);

  }, [filteredData, searchQuery, dispatch]);

  const visibleData = isMobile ? filteredCards.slice(0, visibleCount) : filteredCards;

  if (filteredCards.length === 0) {
    return <p className={styles.noDataMessage}>No items to display.</p>;
  }

  return (
    <>
      {visibleData.map((cardData, index) => (
        <div className={styles.cardfullContainer} key={index}>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <img
                src={
                  cardData?.CoverageImage ||
                  cardData.CoverImage ||
                  cardData?.BlogImage
                }
                alt={"CoverImage"}
                className={styles.cardImg}
              />
              {activeTab === "podcast" && (
                <svg
                  width="80"
                  height="80"
                  className={styles.podcastIcon}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="40"
                    fill="white"
                    fillOpacity="0.2"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    fill="white"
                    fillOpacity="0.8"
                  />
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
            </div>
            <div className={styles.textContainer}>
              {(cardData?.BrandName ||
                cardData?.PodcastCompanyFrom ||
                cardData.VideoCompanyFrom ||
                cardData.MediaCompanyFrom) && (
                  <p className={styles.subheading}>
                    {cardData?.BrandName ||
                      cardData?.PodcastCompanyFrom ||
                      cardData.VideoCompanyFrom ||
                      cardData.MediaCompanyFrom}
                  </p>
                )}
              <p className={styles.heading}>
                {cardData?.Title ||
                  cardData.PodcastTitle ||
                  cardData.title ||
                  cardData.VideoTitle ||
                  cardData.MediaTitle}
              </p>

              <p className={styles.cardDate}>{FormateDate(cardData?.createdAt)}</p>
            </div>

            {cardData.Tags && (
              <div className={styles.blogCardButtonsContainer}>
                {cardData.Tags.map((tags, index) => (
                  <button className={styles.blogCardButton} key={index}>
                    {tags}
                  </button>
                ))}
              </div>
            )}
          </div>
          {activeTab === "blogs" && (
              <Link
              href={`/blog/${cardData?.Slug}`}
             >
              <ReadMore text={"Read More"} />
             </Link>
          )}

          {activeTab === "press-coverage" && <ReadMore text={"Read More"} />}
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
