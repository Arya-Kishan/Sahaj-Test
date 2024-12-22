"use client";

import { useState, useEffect } from 'react';
import BlogFeatured from '../Featured/BlogFeatured';
import PressCoverageFeatured from '../Featured/PressCoverageFeatured';
import PodcastFeatured from '../Featured/PodcastFeatured';
import VideoChannelsFeatured from '../Featured/VideoChannelsFeatured';
import SmCustomersFeatured from '../Featured/SmCustomersFeatured';
import Filters from '../Filters/Filters';
import MediaCards from '../MediaCards/MediaCards';
import styles from './tabContent.module.css';

const TabContent = ({ data, activeTab, isSearching, searchQuery, setSearchQuery, filtersData }) => {

  const MediaData = data.find((item) => item.id === activeTab)?.mediaCard || data[0]?.mediaCard;

  const [filteredData, setFilteredData] = useState(MediaData);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setFilteredData(MediaData);
  }, [activeTab, MediaData, data]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredData(MediaData);
    } else {
      const filtered = MediaData.filter((item) => item.category === filter);
      setFilteredData(filtered);
    }
  };

  function getFeaturedItem(data) {
  
    const featuredItems = data.filter(item => item.isFeature === true);
    
    
    return featuredItems || null;
  }
  
  const featuredItems = getFeaturedItem(data);
  

  const componentMap = {
    "pressCoverage": PressCoverageFeatured,
    "podcast": PodcastFeatured,
    "videoChannel": VideoChannelsFeatured,
    "blogs": BlogFeatured,
    "customersInMedia": SmCustomersFeatured,
  };
  const FeaturedComponent = componentMap[activeTab];
 
console.log("the fillllleters",filtersData)
  return (
    <div className={styles.tabContentContainer}>
      {!isSearching && (
        <div className={styles.featuredContainer} id="featuredContainer">
          <p className={styles.mainheading}>Featured</p>
         {
            featuredItems &&  <FeaturedComponent data={featuredItems} />
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
        <MediaCards
          // filteredData={filteredData}
          filteredData={data}
          activeTab={activeTab}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default TabContent;
