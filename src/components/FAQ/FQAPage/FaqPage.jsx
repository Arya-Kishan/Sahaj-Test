"use client";
import { useState, useEffect } from "react";
import styles from "./faqPage.module.css";
import Image from "next/image";
import faq1 from "../../../assests/FAQ/faq1.webp";
import { FaSearch } from "react-icons/fa";
import plusCircle from "../../../assests/FAQ/plusCircle.svg";
import minusCircle from "../../../assests/FAQ/minusCircle.svg";

const FaqPage = ({ faqData = [], topic = [] }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState({});
  const [displayedData, setDisplayedData] = useState(faqData);

  const enrichedTopics = [{ id: 0, topic: "All" }, ...topic];

  useEffect(() => {
    if (!faqData) return;

    let filteredData =
      activeFilter === "All"
        ? faqData
        : faqData.filter((data) => data.Topic === activeFilter);

    if (searchQuery.trim()) {
      filteredData = filteredData
        .map((faq) => {
          const matchingQuestions = faq.FaqQuestionWithAnswer.filter((q) =>
            q?.questions?.toLowerCase().includes(searchQuery.toLowerCase())
          );
          if (
            faq.Topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
            matchingQuestions.length > 0
          ) {
            return { ...faq, FaqQuestionWithAnswer: matchingQuestions };
          }
          return null;
        })
        .filter((faq) => faq !== null);
    }

    setDisplayedData((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(filteredData)) {
        return filteredData;
      }
      return prev;
    });
  }, [activeFilter, searchQuery, faqData]);

  
  const handleTabChange = (filter) => {
    setActiveFilter(filter);
    setOpenQuestions({}); 
  };

  const toggleAccordion = (sectionId, qNumber) => {
    const tabSpecificKey = `${activeFilter}-${sectionId}-${qNumber}`; 
    setOpenQuestions((prev) => ({
      ...prev,
      [tabSpecificKey]: !prev[tabSpecificKey],
    }));
  };

  const handleToggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.filterHeader}>
        <div className={styles.searchContainer}>
          <p className={styles.faqText}>
            {isSearching && searchQuery
              ? `Search results for "${searchQuery}"`
              : "FAQs"}
          </p>
          <div className={styles.searchBox}>
            {isSearching && (
              <input
                type="text"
                placeholder="Type something..."
                value={searchQuery}
                className={styles.searchInput}
                onChange={handleSearch}
              />
            )}
            <div role="button" tabIndex={1} onClick={handleToggleSearch}>
              <FaSearch size={24} />
            </div>
          </div>
        </div>
        <hr className={styles.line} />

        <div className={styles.filters}>
          {enrichedTopics.map((filter, index) => (
            <button
              key={filter.id || index}
              className={
                activeFilter === filter.topic
                  ? `${styles.filterButton} ${styles.activeButton}`
                  : styles.filterButton
              }
              onClick={() => handleTabChange(filter.topic)} 
            >
              {filter.topic}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterContent}>
        {displayedData.length > 0 ? (
          displayedData.map((faq) => (
            <div className={styles.infoContainer} key={faq._id}>
              <div className={styles.textBox}>
                <div className={styles.filterName}>
                  <p>{faq.Topic}</p>
                </div>
                {faq.FaqQuestionWithAnswer.map((q) => {
                  const tabSpecificKey = `${activeFilter}-${faq._id}-${q._id}`;
                  return (
                    <div className={styles.accordionContainer} key={tabSpecificKey}>
                      <div
                        className={styles.questionContainer}
                        role="button"
                        tabIndex="0"
                        onClick={() => toggleAccordion(faq._id, q._id)}
                      >
                        <div className={styles.faqBox}>
                          <p className={styles.question}>{q.questions}</p>
                          {openQuestions[tabSpecificKey] && <p>{q.answers}</p>}
                        </div>
                        <Image
                          src={
                            openQuestions[tabSpecificKey]
                              ? minusCircle
                              : plusCircle
                          }
                          alt="plus-minus-icon"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.imageBox}>
                <Image src={faq1} alt="FAQ Image" className={styles.Img} />
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
               </div>
            </div>
          ))
        ) : (
          <div className={styles.noData}>No content available</div>
        )}
      </div>
    </div>
  );
};

export default FaqPage;
