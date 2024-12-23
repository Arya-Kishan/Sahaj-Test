"use client";

import React, { useState, useEffect } from 'react';
import BlogFeatured from '../Featured/BlogFeatured';
import PressCoverageFeatured from '../Featured/PressCoverageFeatured';
import PodcastFeatured from '../Featured/PodcastFeatured';
import VideoChannelsFeatured from '../Featured/VideoChannelsFeatured';
import SmCustomersFeatured from '../Featured/SmCustomersFeatured';
import PodcastMediaCards from '../MediaCards/PodcastMedia';
import BlogMediaCards from '../MediaCards/BlogMediaCard';
import PressCoverageMediaCards from '../MediaCards/PressCoverage';
import SmCustomerMediaCards from '../MediaCards/SmCustomersMediaCard';
import VideoChanelMediaCards from '../MediaCards/VideoChannel';
import Filters from '../Filters/Filters';
import MediaCards from '../MediaCards/MediaCards';
import styles from './tabContent.module.css';

const TabContent = ({ data, activeTab, isSearching, searchQuery, setSearchQuery, filtersData }) => {



  const [filteredData, setFilteredData] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All");
 
  useEffect(() => {
    setFilteredData(data);
  }, [activeTab,data]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredData(data);
    } else {
      const filtered = data?.filter((item) => item.Topic === filter);
      setFilteredData(filtered);
    }
  };

  function getFeaturedItem(data) {
  
    const featuredItems = data?.filter(item => item.isFeature === true);
    
    
    return featuredItems || null;
  }
  
  const featuredItems = getFeaturedItem(data);
  

  const componentMap = {
    "pressCoverage": [PressCoverageFeatured,PressCoverageMediaCards],
    "podcast": [PodcastFeatured,PodcastMediaCards],
    "videoChannel": [VideoChannelsFeatured,VideoChanelMediaCards],
    "blogs": [BlogFeatured,BlogMediaCards],
    "customersInMedia": [SmCustomersFeatured,SmCustomerMediaCards],
  };
  const ActiveMediaComponent = componentMap[activeTab];
 
console.log("the fillllleters",filtersData)
  return (
    <div className={styles.tabContentContainer}>
      {!isSearching && (
        <div className={styles.featuredContainer} id="featuredContainer">
          <p className={styles.mainheading}>Featured</p>
          {
        featuredItems && ActiveMediaComponent && ActiveMediaComponent[0] && (
          React.createElement(ActiveMediaComponent[0], { data: featuredItems })
        )
      }  
        </div>
      )}

      <div className={styles.filtersFullContainer}>
        {!isSearching && (
          <Filters
            onFilterChange={handleFilterChange}
            activeTab={activeTab}
            filtersData={filtersData}
          />
        )}
      </div>

      <div className={styles.mediaCardContainer}>
            {
        featuredItems && ActiveMediaComponent && ActiveMediaComponent[1] && (
          React.createElement(ActiveMediaComponent[1], { filteredData:filteredData })
        )
      } 
      </div>
    </div>
  );
};

export default TabContent;
