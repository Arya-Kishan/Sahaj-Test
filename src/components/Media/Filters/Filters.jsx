
        
"use client"
import React, { useState,useEffect } from 'react';
import styles from './filters.module.css';

const filters = ["All", "Fee and Timeline","Clients", "Process FAQs", "Meetings",  "Others"];

const Filters = ({ onFilterChange,activeTab}) => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  
   useEffect(() => {
     
    setActiveFilter("All"); 
  }, [activeTab]); 

   const handleActiveFilter = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter); 
  };


  
  return (
    <div className={styles.filters}>
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`${styles.filterButton} ${activeFilter === filter ? styles.filterButtonActive : ''}`}
          onClick={() => handleActiveFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;