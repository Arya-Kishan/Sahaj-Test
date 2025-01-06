"use client"
import { useState } from 'react';
import Image from 'next/image';
import styles from './suggestion.module.css';


const Card = ({ title, logo,description }) => {
  const handleViewMore = () => setIsExpanded((prev) => !prev);
  

  const Item = ({ content }) => {
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    );
  };
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        {  logo? <Image src={logo} alt="cardlogo" width={100} height={100}/> : <h1>logo</h1>  }
        
        </div>
      <h3 className={styles.title}>{title}</h3>
     
      <div className={styles.description}  style={{
          height: isExpanded ? 'auto' : '100px', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
        }}><Item content={description} /></div>
    
      <button className={styles.viewMore} onClick={handleViewMore}>
        {isExpanded ? 'Show Less' : 'View More'}
      </button>
    </div>
  );
};

export default Card;
