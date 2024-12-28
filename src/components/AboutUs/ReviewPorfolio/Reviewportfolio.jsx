"use client"
import styles from './reviewPortfolio.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookCallModal } from '@/store/slices/modalSlice';

const ReviewPortfolio=()=>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleBookCallModal());
  };

    return(
        <div className={styles.reviewPortfolioContanier}>
            <div className={styles.reviewPortfolioinfoHeader}>
                <p className={styles.reviewPortfolioinfoHeadertext}>
                Ready to review your portfolio?
                </p>
            </div>
           
            <div className={styles.reviewPortfolioButtonbox}>
              <button onClick={openModal}  className={styles.reviewPortfolioButton} >
               <span> Book a free call</span>
              </button>
            </div>
            
         </div> 
    )
}
export default ReviewPortfolio;