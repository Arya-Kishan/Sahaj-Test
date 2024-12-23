"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import founderimg from '../../../assests/AboutUs/founderimg.webp';
import linkdinicon from '../../../assests/AboutUs/LinkedinIcon.webp';
import ReadMore from "@/components/ReadMoreButton/ReadMoreButton";
import styles from './founderInfo.module.css';
import { getFounderData } from "@/services/aboutus";

const FounderInfo = () => {
    const [founderData, setData] = useState([]);
    const getData = async () => {
        try {
            const { res, err } = await getFounderData();
            if (res) {
                // console.log(res.data);
                setData(res?.data);
            } else {
                setData([]);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={styles.founderInfoContanier}>
            <div className={styles.infoHeader}>
                <p className={styles.infoHeadertext}>Meet Our Founder</p>
            </div>
            <div className={styles.founderinformationtext}>
               {founderData &&
               founderData?.map((item, index)=>{
                return <>
                 <div className={styles.founderinformationtextContainer}>
                    <div className={styles.founderinfotext}>
                        <p className={styles.founderinfotextHeading}>{item?.Title}</p>
                        <p className={styles.founderinfotextBody}>{item?.Content}</p>
                        <Link href='/about/financialfuture'><ReadMore text={"Read Our Story"} /></Link>


                    </div>

                    <div className={styles.founderinfoimg}>
                        <div className={styles.founderimg}>
                            <Image src={founderimg} alt="FounderImage" />
                        </div>
                        <div className={styles.founderSocials}>
                            <p className={styles.founderSocialsName}>{item?.FounderName}</p>
                            <p className={styles.founderSocialsInfo}>{item?.FounderDesignation}</p>
                            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Image src={linkdinicon} alt="linkdinIcon" /> </Link>
                        </div>

                    </div>
                </div>
                </>
               })

               }

            </div>
        </div>
    )
}

export default FounderInfo;