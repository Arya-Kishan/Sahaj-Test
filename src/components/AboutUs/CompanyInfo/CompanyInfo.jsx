"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import companyInfoImg from "../../../assests/AboutUs/companyInfoImg.webp";
import ReadMore from "../../ReadMoreButton/ReadMoreButton";
import styles from "./companyInfo.module.css";
import { getInvestmentData } from "@/services/aboutus";

const SectionOne = () => {
    const [Data, setData] = useState([]);
    const getData = async () => {
        try {
            const { res, err } = await getInvestmentData();
            if (res) {
                console.log(res.data);
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
        <div className={styles.sectionOneContainer}>
            {Data &&
                Data?.map((item, index) => 
                   (
                    <div key={index} className={styles.informationtextContainer}>
                        <div className={styles.infotext}>
                            <p className={styles.infotextheading}>{item?.Title}</p>
                            <p className={styles.infotextbody}>{item?.Content[index]?.SmallMainDescription}</p>
                            <Link href="/about/investmentphilosophy" ><ReadMore text={"Read More"} /></Link>
                            
                        </div>

                        <div className={styles.infoimgBox}>
                            <iframe
                                width={300}
                                height={300}
                                className={styles.infoimg}
                                src={item?.VideoLink}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>

                            {/* <Image src={companyInfoImg} className={styles.infoimg} alt="CompanyInfoImage" /> */}
                        </div>
                    </div>
              
                   )
                )

            }
        </div>
    );
};

export default SectionOne;
