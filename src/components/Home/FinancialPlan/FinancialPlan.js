"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './FinancialPlan.module.css';
import Image from 'next/image';
import image from '../../../assests/Home/FinancialPlan.avif';
import DownloadModal from '@/components/DownloadModal/Download';
import logo from "@/assests/Home/logo.webp"
import { getDownloadData } from '@/services/faq';
import ReactPlayer from 'react-player';

const FinancialPlan = ({ financePlanData, scrollToTestimonials }) => {
    const [companyGrowth, setGrowthData] = useState([]);
    const [howWeDoData, setHowDo] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [downloadData, setDownloadData] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (financePlanData) {
            setGrowthData(financePlanData[0]?.WebsiteGrowth);
            setHowDo(financePlanData[0]?.HowWeDoIt);
        }
    }, [financePlanData]);

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
    };

    const getData = async () => {
        try {
            const { res, err } = await getDownloadData();
            if (res?.data) {
                setDownloadData(res?.data?.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleStepClick = (index) => {
        if (index === 0) {
            scrollToTestimonials();
        } else if (index === 1) {
            window.location.href = '/media';
        } else if (index === 2) {
            window.location.href = '/services';
        }
    };

    function transformYouTubeLink(link) {
        if (link.includes("watch?v=")) {
            return link.replace("watch?v=", "embed/");
        }
        return link;
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setIsPlaying(false);
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTitle}>
                    <h1 className={styles.title}>{downloadData?.title}</h1>
                    <p className={styles.subtitle}>
                        {downloadData?.description.split('SahajMoney')[0]}
                        <Image src={logo} className={styles.highlight} alt="logo" />
                        {downloadData?.description.split('SahajMoney')[1]}
                    </p>
                </div>
                <button className={styles.downloadButton} onClick={() => setIsModalOpen(true)}>{downloadData?.buttonText}</button>
            </header>
            <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className={styles.mainContent} ref={videoRef}>
                <div className={styles.videoContainer}>
                    {howWeDoData && (
                        <>
                            {isPlaying ? (
                                <ReactPlayer
                                    url={transformYouTubeLink(howWeDoData?.VideoLink)}
                                    className={styles.videoPlayer}
                                    playing={true}
                                    controls={true}
                                    width="100%"
                                    height="100%"
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
                            )}
                        </>
                    )}
                </div>

                <div className={styles.stepsContainer}>
                    <p className={styles.stepHeading}>How we do it?</p>
                    {howWeDoData &&
                        howWeDoData?.Content?.map((item, index) => (
                            <div key={index}>
                                <button className={styles.stepTitle}><p>{`Step 0${index + 1}`}</p></button>
                                <h4 className={styles.stepSubtitle}>{item.title}</h4>
                                <ul className={styles.stepText}>
                                    {item?.Points &&
                                        item?.Points?.map((ele, ind) => <li key={ind} className={styles.serviceDescription}>{ele.point}</li>)}
                                </ul>
                            </div>
                        ))}
                    <Link href='/processflow'><button className={styles.learnMoreButton}>Learn more</button></Link>
                </div>
            </div>

            <div className={styles.footer}>
                {companyGrowth &&
                    companyGrowth?.map((item, index) => (
                        <div className={styles.stat} key={index}>
                            <p className={styles.statTitle}>{item?.GrowthTitle}</p>
                            <h3 className={styles.statNumber}>{item?.Achievement}</h3>
                            <p className={styles.statDescription} onClick={() => handleStepClick(index)}>{item?.Description}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default FinancialPlan;
