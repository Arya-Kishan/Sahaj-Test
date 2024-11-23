"use client"
import React from "react";
import styles from './reviewPortfolio.module.css';

const ReviewPortfolio=()=>{
    return(
        <div className={styles.reviewPortfolioContanier}>
            <div className={styles.reviewPortfolioinfoHeader}>
                <p className={styles.reviewPortfolioinfoHeadertext}>
                Ready to review your portfolio?
                </p>
            </div>
           
            <div className={styles.reviewPortfolioButtonbox}>
              <button   className={styles.reviewPortfolioButton} >
                Book a free call
              </button>
            </div>
         </div> 
    )
}
export default ReviewPortfolio;