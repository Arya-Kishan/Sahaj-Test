"use client"
import styles from './reviewPortfolio.module.css';
import { useState } from 'react';
import BookCallModal from '@/components/BookCall/BookCall';

const ReviewPortfolio=()=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <div className={styles.reviewPortfolioContanier}>
            <div className={styles.reviewPortfolioinfoHeader}>
                <p className={styles.reviewPortfolioinfoHeadertext}>
                Ready to review your portfolio?
                </p>
            </div>
           
            <div className={styles.reviewPortfolioButtonbox}>
              <button onClick={()=>setIsModalOpen(true)}  className={styles.reviewPortfolioButton} >
                Book a free call
              </button>
            </div>
            <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
         </div> 
    )
}
export default ReviewPortfolio;