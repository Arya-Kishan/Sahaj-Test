"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './FinancialPlan.module.css';
import Image from 'next/image';
import image from '../../../assests/Home/FinancialPlan.webp';
import DownloadModal from '@/components/DownloadModal/Download';

const FinancialPlan = ({ financePlanData, scrollToTestimonials }) => {
    const [companyGrowth, setGrowthData] = useState([])
    const [howWeDoData, setHowDo] = useState([])
    const [isPlaying, setIsPlaying] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (financePlanData) {
            setGrowthData(financePlanData[0]?.WebsiteGrowth)
            setHowDo(financePlanData[0]?.HowWeDoIt)
            // console.log(financePlanData[0]?.HowWeDoIt)
        }
    }, [financePlanData]);

    const handlePlayButtonClick = () => {
        setIsPlaying(true); 
    };
   

    const handleStepClick = (index) => {
        if (index === 0) {
            scrollToTestimonials();
        } else if (index === 1) {
            window.location.href = '/media';
        } else if (index === 2) {
            window.location.href = '/services';
        }
    };

    return (
        <div className={styles.container}>

            <header className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1 className={styles.title}>Download Your Free Financial Plan</h1>
                    <p className={styles.subtitle}>
                        See how <span className={styles.highlight}>SahajMoney</span> simplifies financial planning
                    </p>
                </div>
                <button className={styles.downloadButton} onClick={() => setIsModalOpen(true)}>Download Now</button>
            </header>
            <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className={styles.mainContent}>
                <div className={styles.videoContainer}>
                    {/* <Image src={image} alt="Video Thumbnail" className={styles.videoImage} /> */}
                    {howWeDoData &&
                    <>
                    {isPlaying ? (
                        <video
                            className={styles.videoPlayer}
                            src={howWeDoData?.VideoLink}
                            controls
                            autoPlay
                        />
                    ) : (
                        <>
                            <Image
                                src={image}
                                alt="Video Thumbnail"
                                className={styles.videoImage}
                            />
                            <div
                                className={styles.playButton}
                                onClick={handlePlayButtonClick}
                            >
                                ▶
                            </div>
                        </>
                    )}</>
                    }
                    
                </div>

                <div className={styles.stepsContainer}>
                    <h2>How we do it?</h2>

                    {howWeDoData &&
                        howWeDoData?.Content?.map((item, index) => {
                            return <>
                                <div key={index}>
                                    <button className={styles.stepTitle}><p>Step 01</p></button>
                                    <h4 className={styles.stepSubtitle}>{item.title}ss</h4>
                                    <ul className={styles.stepText}>
                                        {item?.Points &&
                                            item?.Points?.map((ele, ind) => <li key={ind} className={styles.serviceDescription}>{ele.point}</li>)
                                        }
                                    </ul>
                                </div>
                            </>
                        })
                    }


                    <Link href='/processflow' ><button className={styles.learnMoreButton}>Learn more</button></Link>
                </div>
            </div>

            <div className={styles.footer}>
                {companyGrowth &&
                    companyGrowth?.map((item, index) => {
                        return <>
                            <div className={styles.stat} key={index}>
                                <p className={styles.statTitle}>{item?.GrowthTitle}</p>
                                <h3 className={styles.statNumber}>{item?.Achievement}</h3>
                                <p className={styles.statDescription} onClick={()=>handleStepClick(index)} >{item?.Description}</p>
                            </div>
                        </>
                    })
                }

            </div>
        </div>
    );
};

export default FinancialPlan;
