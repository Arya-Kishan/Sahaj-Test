import React from "react";
import companyInfoImg from '../../assests/AboutUs/companyInfoImg.webp';
import arrowUpRight from '../../assests/AboutUs/arrowUpRight.svg'
import styles from './sectionone.module.css';

const SectionOne=()=>{
    return (
        <div className={styles.sectionOneContainer}>
            <div className={styles.informationtextContainer}>
                <div className={styles.infotext}>
                    <p class={styles.infotextheading}>Our investment philosopy</p>
                        <p class={styles.infotextbody}>
                        Sahaj Money was founded in 2015 with a  mission to provide transparent 
                        and unbaised financial adivce.Our team of experienced advisiors helps clients acieve their financial goals through 
                        personalised plans and exoert guidance. We believe in putting clients's
                        interests first and offering transparent pricing .
                        </p>

                        <button class={styles.readMoreButton}>
                            <span>Read More</span>
                            <img src={arrowUpRight} alt="icon" class="icon" />
                        </button>

                
                </div>

                <div className={styles.infoimgBox}>
                    <img  src={companyInfoImg} className={styles.infoimg} alt="CompanyInfoImage"/>
                </div>
            </div>
           
        </div>
    )
}

export default SectionOne;