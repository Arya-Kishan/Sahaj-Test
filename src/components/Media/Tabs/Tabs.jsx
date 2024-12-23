"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, setSearchQuery, setFilteredData, setIsSearching, setMediaData,setCombinedData } from "../../../store/slices/mediaSlice";
import { FaSearch, FaTimes } from "react-icons/fa";
import styles from "./tabs.module.css";
import TabContent from "../TabContent/TabContent";

const tabs = [
  { id: "pressCoverage", label: "Press Coverage" },
  { id: "podcast", label: "Podcast" },
  { id: "videoChannel", label: "Video Channels" },
  { id: "blogs", label: "Blogs" },
  { id: "customersInMedia", label: "SM's Customers in Media" },
];

const Tabs = ({ filtersData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { path } = useParams();
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.media.activeTab);
  const searchQuery = useSelector((state) => state.media.searchQuery);
  const mediaData = useSelector((state) => state.media.mediaData);
  const filteredData = useSelector((state) => state.media.filteredData);
  const isSearching = useSelector((state) => state.media.isSearching);
  const combinedData= useSelector((state) => state.media.combinedData);
 
  const titleFieldMapping = {
    pressCoverage: "Title",
    podcast: "PodcastTitle",
    videoChannel: "VideoTitle",
    blogs: "title",
    customersInMedia: "MediaTitle",
  };

  useEffect(() => {
    if (path && tabs.some((tab) => tab.id === path)) {
      dispatch(setActiveTab(path));
    } else if (!path && !pathname.includes(tabs[0].id)) {
      router.push(`/media/${tabs[0].id}`);
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("search") || "";
    dispatch(setSearchQuery(query)); 
  }, [path, router, pathname, dispatch]);

  useEffect(() => {
    if (searchQuery) {
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("search", searchQuery);
      router.push(`${pathname}?${urlParams.toString()}`, undefined, { shallow: true });
    }
    dispatch(setSearchQuery(searchQuery)); 
  }, [searchQuery, pathname, router, dispatch]);

  useEffect(() => {
    const filtered = mediaData[activeTab]?.filter((item) => {
      const titleField = titleFieldMapping[activeTab];
      return item?.[titleField]?.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (searchQuery) {
      dispatch(setFilteredData(filtered)); 
    } else {
      dispatch(setFilteredData([]));
    }
  }, [searchQuery, activeTab, mediaData, dispatch]);
  const combinedResults = [];
  const handleTabChange = (tabId) => {
    if (tabId !== activeTab) {
      dispatch(setActiveTab(tabId));
      router.push(`/media/${tabId}`);
      
     
      if (tabId === "All") {
      
        for (const key of Object.keys(mediaData)) {
          combinedResults.push(...mediaData[key]);
        }
      
      
        dispatch(setFilteredData(combinedResults));
        dispatch(setCombinedData(combinedResults));
        
      } else {
        const titleField = titleFieldMapping[tabId];
        const filtered = mediaData[tabId]?.filter((item) =>
          item?.[titleField]?.toLowerCase().includes(searchQuery.toLowerCase())
        );
  
        if (searchQuery) {
          dispatch(setFilteredData(filtered || [])); 
        } else {
          dispatch(setFilteredData(filtered || [])); 
        }
      }
    }
  };
  
  const handleSearchToggle = () => {
    dispatch(setIsSearching(!isSearching));
  };

  const handleClearSearch = () => {
    dispatch(setSearchQuery("")); 
    dispatch(setIsSearching(false)); 
  };

  const activeTabData = mediaData[activeTab] || [];
  let displayContent;

  if (isSearching) {
    displayContent = filteredData;
  } else {
    displayContent = activeTabData;
  }

  
  const dynamicTabs = isSearching ? [{ id: "All", label: "All" }, ...tabs] : tabs;

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.tabsHeader}>
          <p className={styles.Heading}>
            {isSearching && searchQuery ? `Search results for "${searchQuery}"` : "Media"}
          </p>
          <div className={styles.searchBox}>
            {isSearching && (
              <input
                type="text"
                placeholder="Type something..."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className={styles.searchInput}
              />
            )}
            <div onClick={handleSearchToggle} role="button">
              <FaSearch size={24} />
            </div>
            {isSearching && searchQuery && (
              <div onClick={handleClearSearch} role="button" className={styles.clearSearch}>
                <FaTimes size={20} />
              </div>
            )}
          </div>
        </div>

        <div className={styles.tabs}>
          {dynamicTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={activeTab === tab.id ? styles.activetabButton : styles.tabButton}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.tabsContentContainer}>
        {
          (isSearching && activeTab==="All") ? <TabContent
          activeTab={activeTab}
          isSearching={isSearching}
          searchQuery={searchQuery}
          setSearchQuery={dispatch(() => setSearchQuery())} 
          data={combinedData}  
          filtersData={filtersData}
        />:  <TabContent
        activeTab={activeTab}
        isSearching={isSearching}
        searchQuery={searchQuery}
        setSearchQuery={dispatch(() => setSearchQuery())} 
        data={displayContent}  
        filtersData={filtersData}
      />
        }
      </div>
    </div>
  );
};

export default Tabs;

