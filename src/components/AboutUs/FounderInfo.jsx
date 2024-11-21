import React from "react";
import founderimg from '../../assests/AboutUs/founderimg.webp'; 
import linkdinicon from '../../assests/AboutUs/LinkedinIcon.webp';
import arrowUpRight from '../../assests/AboutUs/arrowUpRight.svg';
import styles from './founder.module.css';

const FounderInfo=()=>{
    return (
        <div className={styles.founderInfoContanier}>
            <div className={styles.infoHeader}>
                <p className={styles.infoHeadertext}>Meet Our Founder</p>
            </div>
            <div className={styles.founderinformationtext}>
                <div className={styles.founderinformationtextContainer}>
                <div className={styles.founderinfotext}>
                    <p className={styles.founderinfotextHeading}>Building Strong Financial Futures</p>
                        <p className={styles.founderinfotextBody}>
                        At Sahaj Money, we understand the unique challenges and aspirations you
                         face in your financial journey. Our team of dedicated financial experts
                          approaches every client with the same passion and personalized attention 
                          as if it were our own
                        </p>

                        <button class={styles.readMoreButton}>
                            <span>Read Our Story</span>
                            <img src={arrowUpRight} alt="icon" class="icon" />
                        </button>
                
                </div>

                <div className={styles.founderinfoimg}>
                    <div className={styles.founderimg}>
                        <img  src={founderimg} alt="FounderImage"/>
                    </div>
                    <div className={styles.founderSocials}>
                       <p className={styles.founderSocialsName}>Abhishek</p>
                       <p className={styles.founderSocialsInfo}>Founder of</p>
                       <p className={styles.founderSocialsCompany}>SahajMoney&reg;</p>
                       <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                       <img  src={linkdinicon} alt="linkdinIcon"/> </a>
                    </div>
                    
                </div>
                </div>
                
            </div>
           </div>
    )
}

export default FounderInfo;