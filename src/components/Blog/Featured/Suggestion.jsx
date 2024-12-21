"use client"
import Card from './SuggestionCard'
import cardlogo from '../../../assests/Blog/image.webp';
import styles from './suggestion.module.css';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import { useRouter } from 'next/navigation';

const SuggestionCardList = ({data={}}) => {

  let sortedItems = data
  .map(item => ({ ...item, createdAt: new Date(item?.createdAt) }))
  .sort((a, b) => b.createdAt - a.createdAt); 
 

 let recentItems = sortedItems.slice(0, 3)|| data;
 
 console.log("rrr",recentItems);
  console.log("section the data in main",data)
  const router = useRouter(); 

 
  const handleViewAllClick = () => {
    router.push('/media/blogs'); 
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>You may also like</h2>
         <ReadMore  text={"View all"} onClick={handleViewAllClick} />
      </div>
      <div className={styles.cardContainer}>
        {recentItems?.map((item, index) => (
          <Card key={index} title={item?.title} logo={item?.CompanyLogo || cardlogo} description={item?.Content} />
        ))}
      </div>
    </div>
  );
};

export default SuggestionCardList;
