"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReadMore from "../../ReadMoreButton/ReadMoreButton";
import styles from "./companyInfo.module.css";

const CompanyInfo = ({ allData }) => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        if (allData?.OurInvestmentPhilosophy) {
            const investmentData = [
                {
                    Title: allData.OurInvestmentPhilosophy.title,
                    Content: [{ SmallMainDescription: allData.OurInvestmentPhilosophy.content }],
                    VideoLink: allData.OurInvestmentPhilosophy.videoLink,
                },
            ];
            setData(investmentData); 
        }
    }, [allData]);

    function transformYouTubeLink(link) {
        if (link.includes("watch?v=")) {
            return link.replace("watch?v=", "embed/");
        }
        return link;
    }

    return (
        <div className={styles.sectionOneContainer}>
            {Data &&
                Data.map((item, index) => (
                    <div className={styles.informationtextContainer} key={index}>
                        <div className={styles.infotext}>
                            <p className={styles.infotextheading}>{item.Title}</p>
                            <p className={styles.infotextbody}>
                                {item.Content?.[0]?.SmallMainDescription}
                            </p>
                            <Link href="/about/investmentphilosophy">
                                <ReadMore text={"Read More"} />
                            </Link>
                        </div>

                        <div className={styles.infoimgBox}>
                            {item.VideoLink && (
                                <iframe
                                    className={styles.infoimg}
                                    src={transformYouTubeLink(item.VideoLink)}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CompanyInfo;
