"use client"
import React from "react";
import Image from "next/image";
import DeatilsCards from "./DetailsCards";
import mainImage from '../../../assests/Blog/mainImage.webp';
import EllipseIcon from '../../../assests/Blog/EllipseIcon.webp';
import lindinimg from '../../../assests/Blog/linkdinimg.webp';
import instagramIcon  from '../../../assests/Blog/instagramIcon.webp';
import { FaShareAlt } from 'react-icons/fa';
import styles from './mainSection.module.css'


const MainSection=()=>{
  
    return(
        <div className={styles.mainSectionContainer}>
            <div className={styles.maininfoContainer}>
                        <div className={styles.dateContainer}>
                            Date
                        </div>
                        <div className={styles.blogHeadingContainer}>
                                <div className={styles.MainHeading}>
                                Crypto ipsum bitcoin ethereum dogecoin litecoin.
                                </div>
                                <div className={styles.subHeading}>
                                Crypto ipsum bitcoin ethereum dogecoin litecoin.
                                </div>
                                <button className={styles.textButton}>Lorem ipsum</button>
                               

                        </div>
                        <div className={styles.imgBox}>
                                <Image  src={mainImage} alt="MainBlogImage" className={styles.mainImg}/>
                        </div>
                        <div className={styles.descriptionContainer}>
                            
                                <div className={styles.detailsCards}>
                                    <DeatilsCards/>
                                </div>
                        
                                <div className={styles.socials}>
                                    <div className={styles.followIcons}>
                                        <div className={styles.followText} >Follow Us</div>
                                        <Image  src={lindinimg} alt="LinkedinIconImage"/>
                                        <Image  src={instagramIcon} alt="instagramIconImage"/>
                                        <Image  src={EllipseIcon} alt="EllipseIconImage"/>
                                    </div>
                                    <div className={styles.shareIcons}>
                                     <FaShareAlt  size={24}/>
                                    </div>
                                </div>
                        </div>
                 
               
             </div>
        </div>
    )
}
export default MainSection;