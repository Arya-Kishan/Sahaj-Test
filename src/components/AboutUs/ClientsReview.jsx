import React from "react";
import clientsReview from '../../assests/AboutUs/clientsReview.webp'; 
import styles from './clientsReview.module.css';
import logo from '../../assests/AboutUs/logo.webp'
const ClientsReview=()=>{
    return (
        <div className={styles.clientsReviewContanier}>
            <div className={styles.clientsReviewinfoHeader}>
                <div className={styles.clientsReviewinfoHeadeContainer}>
                    <div className={styles.clientsReviewinfoLogo}>
                    <img  src={logo} className={styles.clientsReviewinfoLogoimg}></img>
                    
                    </div>
                    <div className={styles.clientsReviewinfoHeadertext}>
                    : Trusted by Clients Worldwide
                    </div>
                </div>
                
            </div>
           
            <div className={styles.clientsReviewImgbox}>
              <img  src={clientsReview} className={styles.clientsReviewImg} alt="clientsReviewImg"/>
            </div>
         </div> 
    )
} 

export default ClientsReview;