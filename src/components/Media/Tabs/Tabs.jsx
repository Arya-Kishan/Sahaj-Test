"use client";
import { useState } from "react";
import TabContent from "../TabContent/TabContent";
import { mediaData } from "../data";
import { FaSearch } from "react-icons/fa";
import styles from "./tabs.module.css";

const tabs = [
  { id: "Press coverage", label: "Press coverage" },
  { id: "Podcast", label: "Podcast" },
  { id: "Video channels", label: "Video channels" },
  { id: "Blogs", label: "Blogs" },
  { id: "SM's Customers in Media", label: "SM's Customers in Media" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabChange = (tabId) => setActiveTab(tabId);

  const handleSearchToggle = () => {
    if (isSearching) {
      setSearchQuery("");
    }
    setIsSearching(!isSearching);
  };

  const filteredContent = mediaData;

  const displayContent = filteredContent.length > 0
    ? filteredContent
    : [{ message: "No content found" }];

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          <p className={styles.Heading}>
            {(isSearching && searchQuery) ?`Search results for "${searchQuery}"`:"Media"}
          </p>
              <div className={styles.searchBox}>
              {isSearching && (
                <input
                type="text"
                placeholder="Type something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              )}

          <div
            onClick={handleSearchToggle}
            role="button"
          >
            <FaSearch size={24} />
          </div>
          </div>
        </div>
        {!isSearching && (
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={
                  activeTab === tab.id
                    ? styles.activetabButton
                    : styles.tabButton
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {displayContent[0]?.message ? (
        <div>{displayContent[0]?.message}</div>
      ) : (
        <div className={styles.tabsContentContainer}>
          <TabContent
            data={filteredContent}
            activeTab={activeTab}
            isSearching={isSearching}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      )}
    </div>
  );
};

export default Tabs;
