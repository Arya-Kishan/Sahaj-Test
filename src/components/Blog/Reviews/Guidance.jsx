"use client"
import styles from './guidance.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookCallModal } from '@/store/slices/modalSlice';

const Guidance=()=>{ 

const dispatch = useDispatch();

  const openModal = () => {
    console.log('Book a call clicked');
    dispatch(toggleBookCallModal());

  };

    return(
        <div className={styles.financialGuidanceContanier}>
            <div className={styles.financialGuidanceinfo}>
                <p className={styles.financialGuidanceHeading}>
                Expert Financial Guidance, Affordable Prices
                </p>
                <p className={styles.financialGuidancedescription}>
                Get personalized advice and comprehensive planning 
                from our<span>
                certified experts.
                </span>
                </p>
            </div>
           
            <div className={styles.reviewPortfolioButtonbox}>
              <button   className={styles.reviewPortfolioButton} onClick={openModal} >
                Review your portfolio
              </button>
            </div>
         </div> 
    )
}
export default Guidance;