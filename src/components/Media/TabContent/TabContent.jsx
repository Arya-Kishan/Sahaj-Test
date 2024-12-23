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
import { setCombinedData } from "../../../store/slices/mediaSlice";
import { useDispatch, useSelector } from "react-redux";

const TabContent = ({ data, activeTab, isSearching, searchQuery, setSearchQuery, filtersData }) => {
  const dispatch = useDispatch();
  const combinedData = useSelector((state) => state.media.combinedData);

  const [filteredData, setFilteredData] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All");


  useEffect(() => {
    console.log("Combined Data Updated:", combinedData, activeTab);
  }, [combinedData, activeTab]);


  useEffect(() => {
    setFilteredData(data);
    if (activeTab === "All") {
      dispatch(setCombinedData(data));
    }
  }, [activeTab, data]);


  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredData(data);
      dispatch(setCombinedData(data));
    } else {
      const filtered = data?.filter((item) => item.Topic === filter);
      setFilteredData(filtered);
      dispatch(setCombinedData(filtered));
    }
  };


  function getFeaturedItem(data) {
    const featuredItems = data?.filter((item) => item.isFeature === true);
    return featuredItems || null;
  }

  const featuredItems = getFeaturedItem(data);


  const componentMap = {
    pressCoverage: [PressCoverageFeatured, PressCoverageMediaCards],
    podcast: [PodcastFeatured, PodcastMediaCards],
    videoChannel: [VideoChannelsFeatured, VideoChanelMediaCards],
    blogs: [BlogFeatured, BlogMediaCards],
    customersInMedia: [SmCustomersFeatured, SmCustomerMediaCards],
  };

  const ActiveMediaComponent = componentMap[activeTab];

  return (
    <div className={styles.tabContentContainer}>

      {!isSearching && (
        <div className={styles.featuredContainer} id="featuredContainer">
          <p className={styles.mainheading}>Featured</p>
          {featuredItems && ActiveMediaComponent && ActiveMediaComponent[0] && (
            React.createElement(ActiveMediaComponent[0], { data: featuredItems })
          )}
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

        {filteredData?.length > 0 && ActiveMediaComponent && ActiveMediaComponent[1] ? (
          React.createElement(ActiveMediaComponent[1], { filteredData })
        ) : null}


        {activeTab === "All" ? (
          combinedData?.length > 0 ? (

            <MediaCards filteredData={combinedData} />
          ) : (
            <p>No data available for the "All" tab.</p>
          )
        ) : null}
      </div>
    </div>
  );
};

export default TabContent;

