"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
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
    };

    useEffect(() => {
        getData();
    }, []);

    //const item = Data[1];
    function transformYouTubeLink(link) {
        if (link.includes("watch?v=")) {
            console.log(link.replace("watch?v=", "embed/"))
            return link.replace("watch?v=", "embed/");
        }
        return link;
    }
    return (
        <div className={styles.sectionOneContainer}>
          
            {Data &&
                Data?.map((item, index) => (
                    <div className={styles.informationtextContainer} key={index}>
                    <div className={styles.infotext}>
                        <p className={styles.infotextheading}>{item?.Title}</p>
                        <p className={styles.infotextbody}>
                            {item?.Content?.[0]?.SmallMainDescription}
                        </p>
                        <Link href="/about/investmentphilosophy">
                            <ReadMore text={"Read More"} />
                        </Link>
                    </div>

                    <div className={styles.infoimgBox}>
                        {item?.VideoLink &&
                            <iframe
                                className={styles.infoimg}
                                src={transformYouTubeLink(item?.VideoLink)}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        }
                    </div>
                </div>
                )
                  
                
            )}
        </div>
    );
};

export default SectionOne;
