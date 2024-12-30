"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './FinanceQuestions.module.css';
import imageSrc from '../../../assests/Home/whatdo.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookCallModal from '@/components/BookCall/BookCall';

const questions = [
    "Will I ever be able to save enough?",
    "How can I ensure a comfortable retirement with limited savings?",
    "Am I on the right track to achieve my financial goals?",
    "How can I simplify my finances and reduce stress?"
];

const FinanceQuestions = ({ financeData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [financeInfo, setFinanceData] = useState([])
    const [overwhelmed, setOverwhelmed] = useState([])


    useEffect(() => {
        if (financeData) {
            setFinanceData(financeData[0]?.WhatWeDoForYou);
            setOverwhelmed(financeData[0]?.HomeScreenFinanceLits);
            console.log(financeData[0]?.WhatWeDoForYou)
        }
    }, [financeData])

    return (
        <><div className={styles.container}>
            <h2 className={styles.title}>Feeling Overwhelmed by Your Finances?</h2>
            <div className={styles.mobileCarouselBox} >
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    className={styles.mobileCarousel}
                >
                    {Array.isArray(overwhelmed) && overwhelmed.map((question, index) => (
                        <SwiperSlide key={index} className={styles.card}>
                            <img className={styles.cardLogo} src={question?.Image} alt="logos" />
                            <p className={styles.question}>{question?.title}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.cardsContainer}>
                {Array.isArray(overwhelmed) &&
                    overwhelmed?.map((question, index) => (
                        <div key={index} className={styles.card}>
                            <img className={styles.cardLogo} src={question?.Image} alt='logos' />
                            <p className={styles.question}>{question.title}</p>
                        </div>
                    ))}
            </div>
        </div>
            <div className={styles.container2}>
                <div className={styles.textSection}>
                    <div className={styles.headsection} >
                        <h2 className={styles.title2}>{financeInfo?.MainTitle}</h2>
                        <p className={styles.description}>
                            {financeInfo?.SmallMainTitle}
                        </p>
                    </div>
                    <div className={styles.servicesList}>
                        {financeInfo &&
                            financeInfo?.WhatWeDoPoints?.map((item, index) => {
                                return <>
                                    <div className={styles.service} key={index}>
                                        <svg className={styles.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" fill="none">
                                            <path d="M11.0248 0.129883C11.8825 0.129977 12.7107 0.442352 13.3547 1.0087L13.5245 1.16854L14.2941 1.93823C14.5053 2.14804 14.7811 2.28051 15.077 2.31416L15.2259 2.32298H16.3285C18.1993 2.32288 19.745 3.78295 19.8514 5.65073L19.8568 5.85145V6.95404C19.8568 7.25179 19.9583 7.54176 20.1414 7.77332L20.2406 7.88357L21.0091 8.65316C22.3314 9.96791 22.4023 12.0845 21.1712 13.4849L21.0114 13.6547L20.2417 14.4243C20.0319 14.6355 19.8994 14.9114 19.8657 15.2072L19.8568 15.3561V16.4587C19.857 18.3295 18.397 19.8752 16.5292 19.9815L16.3285 19.9871H15.2259C14.9286 19.9872 14.6399 20.0874 14.4066 20.2716L14.2963 20.3708L13.5267 21.1394C12.212 22.4616 10.0954 22.5326 8.69496 21.3014L8.52518 21.1415L7.75559 20.3719C7.54437 20.1621 7.26856 20.0296 6.97268 19.9959L6.82381 19.9871H5.72121C3.85043 19.9872 2.30468 18.5271 2.19828 16.6593L2.19284 16.4587V15.356C2.19274 15.0587 2.09253 14.7702 1.90831 14.5368L1.80912 14.4266L1.04056 13.6569C-0.281694 12.3421 -0.352662 10.2256 0.878463 8.8252L1.03831 8.65541L1.80799 7.88573C2.01781 7.67451 2.15027 7.39869 2.18393 7.10291L2.19284 6.95404V5.85145L2.19828 5.65073C2.30028 3.85982 3.72959 2.43041 5.52049 2.32851L5.72121 2.32298H6.82381C7.12109 2.32288 7.40974 2.22266 7.64309 2.03854L7.75334 1.93926L8.52293 1.17079C9.18518 0.504602 10.0856 0.13007 11.0248 0.129883ZM15.1013 8.15919C14.6707 7.72879 13.9727 7.72879 13.5421 8.15919L9.91118 11.7891L8.48553 10.3645L8.38184 10.273C7.71031 9.75379 6.72865 10.1563 6.61474 10.9974C6.56871 11.3378 6.68393 11.6803 6.92637 11.9235L9.13165 14.1288L9.23524 14.2203C9.67418 14.5608 10.2979 14.5216 10.6907 14.1288L15.1013 9.71835L15.1928 9.61466C15.5333 9.17573 15.4941 8.55201 15.1013 8.15919Z" fill="url(#paint0_linear_922_24732)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_922_24732" x1="16.5244" y1="4.65479" x2="6.02441" y2="19.1548" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#F8DB75" />
                                                    <stop offset="1" stop-color="#A4730F" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <div>
                                            <h3 className={styles.serviceTitle}>{item?.title}</h3>
                                            {item?.points &&
                                                item?.points?.map((ele, ind) => <p key={ind} className={styles.serviceDescription}>{ele.point}</p>)
                                            }
                                        </div>
                                    </div>

                                </>
                            })
                        }

                    </div>
                    <div className={styles.buttons}>
                        <Link href="/services"><button className={styles.viewServicesButton}>View services</button></Link>
                        <button className={styles.bookCallButton} onClick={() => setIsModalOpen(true)} ><span>Book a call</span></button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <img src={financeInfo?.Image} alt="What we do illustration" className={styles.image} />
                </div>
                <div className={styles.headsection2} >
                    <h2 className={styles.title2}>What we do for you?</h2>
                    <p className={styles.description}>
                        Fixed Fee ₹15,000 for the first year, ₹5,000 renewal annually thereafter
                    </p>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default FinanceQuestions;
