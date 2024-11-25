import Image from "next/image";
import clientsReviewImg from '../../../assests/AboutUs/clientsReview.webp'; 
import styles from './clientsReview.module.css';
import logo from '../../../assests/AboutUs/logo.webp';

const ClientsReview=()=>{
    return (
        <div className={styles.clientsReviewContanier}>
            <div className={styles.clientsReviewinfoHeader}>
                <div className={styles.clientsReviewinfoHeadeContainer}>
                    <div className={styles.clientsReviewinfoLogo}>
                    <Image src={logo} className={styles.clientsReviewinfoLogoimg} alt="Company logo"></Image>
                    
                    </div>
                    <div className={styles.clientsReviewinfoHeadertext}>
                    : Trusted by Clients Worldwide
                    </div>
                </div>
                
            </div>
           
            <div className={styles.clientsReviewImgbox}>
              <Image  src={clientsReviewImg} className={styles.clientsReviewImg} alt="clientsReviewImg"/>
            </div>
         </div> 
    )
} 

export default ClientsReview;