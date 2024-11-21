"use client"
import styles from './guidance.module.css';

const Guidance=()=>{
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
              <button   className={styles.reviewPortfolioButton} >
                Review your portfolio
              </button>
            </div>
         </div> 
    )
}
export default Guidance;