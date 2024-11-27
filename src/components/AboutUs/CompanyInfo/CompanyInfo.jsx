"use client";
import Image from "next/image";
import companyInfoImg from "../../../assests/AboutUs/companyInfoImg.webp";
import ReadMore from "../../ReadMoreButton/ReadMoreButton";
import styles from "./companyInfo.module.css";

const SectionOne = () => {
    return (
        <div className={styles.sectionOneContainer}>
            <div className={styles.informationtextContainer}>
                <div className={styles.infotext}>
                    <p className={styles.infotextheading}>Our investment philosophy</p>
                    <p className={styles.infotextbody}>
                        Sahaj Money was founded in 2015 with a mission to provide transparent 
                        and unbiased financial advice. Our team of experienced advisors helps clients achieve their financial goals through 
                        personalized plans and expert guidance. We believe in putting clients&#39; 
                        interests first and offering transparent pricing.
                    </p>

                    <ReadMore text={"Read More"} />
                </div>

                <div className={styles.infoimgBox}>
                    <Image src={companyInfoImg} className={styles.infoimg} alt="CompanyInfoImage" />
                </div>
            </div>
        </div>
    );
};

export default SectionOne;
