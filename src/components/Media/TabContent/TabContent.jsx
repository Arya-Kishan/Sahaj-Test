"use client"
import React, { useState, useEffect } from 'react';
import BlogFeatured from '../Featured/BlogFeatured';
import PressCoverageFeatured from '../Featured/PressCoverageFeatured';
import PodcastFeatured from '../Featured/PodcastFeatured';
import VideoChannelsFeatured from '../Featured/VideoChannelsFeatured';
import SmCustomersFeatured from '../Featured/SmCustomersFeatured';
import Filters from '../Filters/Filters';
import MediaCards from '../MediaCards/MediaCards';
import styles from './tabContent.module.css';

const TabContent = ({ data,activeTab,isSearching,searchQuery,setSearchQuery }) => {

  const MediaData = data.find((item) => item.id === activeTab)?.mediaCard || data[0]?.mediaCard;

  const [filteredData, setFilteredData] = useState(MediaData);
   
  

  useEffect(() => {
    setFilteredData(MediaData);

  }, [activeTab, MediaData,data]); 

  const handleFilterChange = (filter) => {
    if (filter === "All") {
      setFilteredData(MediaData); 
    } else {
     
      const filtered = MediaData.filter(item => item.category === filter);
      setFilteredData(filtered);
    }
  };

  const componentMap = {
    "Press coverage": PressCoverageFeatured,
    "Podcast": PodcastFeatured,
    "Video channels": VideoChannelsFeatured,
    "Blogs": BlogFeatured,
    "SM's Customers in Media": SmCustomersFeatured,
  };

    function renderFeaturedComponent() {
    const activeData = data.find((item) => item.id === activeTab);
    if (!activeData) {
      return <div>No content available for this tab.</div>;
    }

    const FeaturedComponent = componentMap[activeTab] || componentMap[PressCoverageFeatured];
    return <FeaturedComponent data={activeData.featured} />;
  };

  return (
    <div className={styles.tabContentContainer}>

      {
        !isSearching && <div className={styles.featuredContainer} id="featuredContainer">
        <p className={styles.mainheading}>Featured</p>
        {renderFeaturedComponent()}
      </div>
      }
      
       <div className={styles.filtersFullContainer} >
        <Filters onFilterChange={handleFilterChange} activeTab={activeTab} />
      </div>
      
      <div className={styles.mediaCardContainer}>
        <MediaCards filteredData={filteredData} activeTab={activeTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
       
      </div>
    </div>
  );
};

export default TabContent;