"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./FinanceQuestions.module.css";
import checkLogo from '../../../../public/logos/tick.png';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import BookCallModal from "@/components/BookCall/BookCall";
import ReactPlayer from "react-player";

const FinanceQuestions = ({ financeData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [financeInfo, setFinanceData] = useState([]);
    const [overwhelmed, setOverwhelmed] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isManualChange, setIsManualChange] = useState(false);

    useEffect(() => {
        if (financeData) {
            setFinanceData(financeData[0]?.WhatWeDoForYou);
            setOverwhelmed(financeData[0]?.HomeScreenFinanceLits?.list || []);
        }
    }, [financeData]);

    useEffect(() => {
        if (!overwhelmed?.length) return;

        const interval = setInterval(() => {
            if (!isManualChange) {
                setCurrentSlide((prev) => (prev + 1) % overwhelmed.length);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [overwhelmed, isManualChange]);

    const handleManualSlideChange = (direction) => {
        setIsManualChange(true);

        setCurrentSlide((prev) => {
            if (direction === "prev") {
                return prev === 0 ? overwhelmed.length - 1 : prev - 1;
            }
            if (direction === "next") {
                return (prev + 1) % overwhelmed.length;
            }
            return prev;
        });

        setTimeout(() => setIsManualChange(false), 6000);
    };

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Feeling Overwhelmed by Your Finances?</h2>
                <div className={styles.mobileCarouselBox}>
                    {Array.isArray(overwhelmed) && overwhelmed.map((question, index) => (
                        <div
                            key={index}
                            className={`${styles.slide} ${index === currentSlide ? styles.active : ""}`}>
                            <img className={styles.slideLogo} src={question?.Image} alt="logos" />
                            <p className={styles.slidequestion}>{question?.title}</p>
                        </div>
                    ))}
                    <div className={styles.dotsContainer}>
                        <MdArrowBackIos
                            className={styles.slideChange}
                            onClick={() => handleManualSlideChange("prev")}
                        />
                        {Array.isArray(overwhelmed) &&
                            overwhelmed.map((_, index) => (
                                <div
                                    key={index}
                                    className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
                                    onClick={() => setCurrentSlide(index)}
                                ></div>
                            ))}
                        <MdArrowForwardIos
                            className={styles.slideChange}
                            onClick={() => handleManualSlideChange("next")}
                        />
                    </div>
                </div>

                <div className={styles.cardsContainer}>
                    {Array.isArray(overwhelmed) &&
                        overwhelmed.map((question, index) => (
                            <div key={index} className={styles.card}>
                                <img className={styles.cardLogo} src={question?.Image} alt='logos' />
                                <p className={styles.question}>{question.title}</p>
                            </div>
                        ))}
                </div>
            </div>

            <div className={styles.container2}>
                <div className={styles.textSection}>
                    <div className={styles.headsection}>
                        <h2 className={styles.title2}>{financeInfo?.MainTitle}</h2>
                        <p className={styles.description}>{financeInfo?.SmallMainTitle}</p>
                    </div>
                    <div className={styles.servicesList}>
                        {financeInfo?.WhatWeDoPoints?.map((item, index) => (
                            <div className={styles.service} key={index}>
                                <Image className={styles.icons} src={checkLogo} alt="check icon" />
                                <div>
                                    <h3 className={styles.serviceTitle}>{item?.title}</h3>
                                    {item?.points?.map((ele, ind) => (
                                        <p key={ind} className={styles.serviceDescription}>{ele.point}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <a href="/services" className={styles.viewServicesButton}>View services</a>
                        <button
                            className={styles.bookCallButton}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <span>Book a call</span>
                        </button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    {financeInfo?.isVideo ? <>
                        <ReactPlayer className={styles.image} url={financeInfo?.Video} />
                    </> : <>
                        <img
                            src={financeInfo?.Image}
                            alt="What we do illustration"
                            className={styles.image}
                        /></>}

                </div>
                <div className={styles.headsection2}>
                    <h2 className={styles.title2}>{financeInfo?.MainTitle}</h2>
                    <p className={styles.description}>
                        {financeInfo?.SmallMainTitle}
                    </p>
                </div>
            </div>

            <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default FinanceQuestions;
