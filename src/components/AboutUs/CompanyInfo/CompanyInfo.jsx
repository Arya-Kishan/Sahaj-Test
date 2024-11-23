"use client"
import React from "react";
import Image from "next/image";
import companyInfoImg from '../../../assests/AboutUs/companyInfoImg.webp';
import ReadMore from "../../ReadMoreButton/ReadMoreButton";
import styles from './companyInfo.module.css'

const SectionOne=()=>{
    return (
        <div className={styles.sectionOneContainer}>
            <div className={styles.informationtextContainer}>
                <div className={styles.infotext}>
                    <p className={styles.infotextheading}>Our investment philosopy</p>
                        <p className={styles.infotextbody}>
                        Sahaj Money was founded in 2015 with a  mission to provide transparent 
                        and unbaised financial adivce.Our team of experienced advisiors helps clients acieve their financial goals through 
                        personalised plans and exoert guidance. We believe in putting clients's
                        interests first and offering transparent pricing .
                        </p>

                        <ReadMore  text={"Read More"}/>
 
                </div>

                <div className={styles.infoimgBox}>
                    <Image  src={companyInfoImg} className={styles.infoimg} alt="CompanyInfoImage"/>
                </div>
            </div>
           
        </div>
    )
}

export default SectionOne;