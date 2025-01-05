import { useState, useEffect } from 'react';
import styles from './filters.module.css';

const Filters = ({ onFilterChange, activeTab, filtersData }) => {

  const [activeFilter, setActiveFilter] = useState("All");


  const filters = ["All", ...filtersData]||[]
 
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