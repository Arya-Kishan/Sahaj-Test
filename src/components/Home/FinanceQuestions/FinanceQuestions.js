"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./FinanceQuestions.module.css";
import checkLogo from '../../../../public/logos/tick.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookCallModal from "@/components/BookCall/BookCall";

const questions = [
  "Will I ever be able to save enough?",
  "How can I ensure a comfortable retirement with limited savings?",
  "Am I on the right track to achieve my financial goals?",
  "How can I simplify my finances and reduce stress?",
];

const FinanceQuestions = ({ financeData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [financeInfo, setFinanceData] = useState([]);
  const [overwhelmed, setOverwhelmed] = useState([]);

  useEffect(() => {
    if (financeData) {
      setFinanceData(financeData[0]?.WhatWeDoForYou);
      setOverwhelmed(
        financeData[0]?.HomeScreenFinanceLits?.list
          ? financeData[0]?.HomeScreenFinanceLits?.list
          : []
      );
      console.log(financeData[0]?.WhatWeDoForYou);
    }
  }, [financeData]);

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
                                       <Image className={styles.icons} src={checkLogo} />
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
                        Fixed Fee<span className={styles.descriptionSpan}> ₹15,000 for the per year</span>
                         {/* ₹5,000 renewal annually thereafter */}
                    </p>
                </div>
            </div>
            <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default FinanceQuestions;
