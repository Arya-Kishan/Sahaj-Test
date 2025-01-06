"use client"
import styles from './Testimonials.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";
import profile from '../../../assests/AboutUs/founderimg.webp'
import LinkedIn from '../../../assests/AboutUs/LinkedinIcon.webp'
import mintLogo from "../../../assests/Blog/image.webp";
import { getClientReviewData, getAllReviewData, getFeatureListData } from '@/services/home';


const Testimonials = ({ref}) => {

    const [reviewData, setData] = useState([]);
    const [reviewAllData, setAllData] = useState([]);
    const [testimonials, setFeatureData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rightTestimonials, setRight] = useState([])
    const [leftTestimonials, setLeft] = useState([])

    const getData = async () => {
        try {
            const { res, err } = await getClientReviewData()
            if (res?.data) {
                // console.log(res.data);
                setData(res?.data)
            }
            else {
                setData([]);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getReviewData = async () => {
        try {
            const { res, err } = await getAllReviewData()
            if (res?.data) {
                // console.log(res.data);
                setAllData(res?.data)
            }
            else {
                setAllData([]);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getFeatureData = async () => {
        try {
            const { res, err } = await getFeatureListData()
            if (res) {
                console.log(res.data);
                setFeatureData(res?.data)
            }
            else {
                setFeatureData([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
        getReviewData()
        getFeatureData()
    }, [])
    useEffect(() => {
        if (testimonials) {
            const halfIndex = Math.ceil(testimonials.length / 2);
            const left = testimonials.slice(0, halfIndex);
            const right = testimonials.slice(halfIndex);
            setRight(right);
            setLeft(left);
        }
    }, [testimonials])
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex + 1 === reviewAllData.length ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [reviewAllData]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };


    return (
        <div ref={ref} className={styles.mainContainer}>
            <div className={styles.leftBox}>
                <h2 className={styles.heading}>What our clients say?</h2>
                <div className={styles.reviews}>
                    {reviewData &&
                        reviewData[0]?.ratings?.map((item, index) => 
                        (
                            <div key={index} className={styles.reviewCard}>
                                <div className={styles.logoBox} >
                                    <img
                                        src={item?.CompanyLogo}
                                        alt="LinkedIn"
                                        className={styles.icon}
                                    />
                                    <p className={styles.reviewCount}>{item?.Content}</p>
                                </div>
                                <p className={styles.rating}>{item?.Rating} <span>★★★★★</span></p>
                            </div>
                        ))
                    }

                </div>
                <div className={styles.sliderContainer}>
                    {reviewAllData.length > 0 && (
                        <>
                            <div className={styles.slider}>
                                {reviewAllData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}
                                        style={{
                                            display: index === currentIndex ? 'block' : 'none',
                                        }}
                                    >
                                        <p className={styles.comment}>
                                            {item?.TestimonialContent}
                                            <br />
                                            Thank you
                                        </p>
                                        <div className={styles.clientInfo}>
                                            <div className={styles.clientDetails}>
                                                <img
                                                    src={item?.PersonImage}
                                                    alt="Client"
                                                    className={styles.clientImage}
                                                />
                                                {item?.PersonFromCompanyName &&  <img
                                                    src={item?.PersonFromCompanyName}
                                                    alt="Company"
                                                    className={styles.companyLogo}
                                                />}
                                               
                                            </div>
                                            <p className={styles.name}>{item?.PersonName}</p>
                                            <p className={styles.designation}>{item?.PersonDesignation}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className={styles.pagination}>
                                {reviewAllData.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''
                                            }`}
                                        onClick={() => handleDotClick(index)}
                                    ></span>
                                ))}
                            </div>


                        </>
                    )}
                </div>

            </div>
            <div className={styles.rightBoxContainer} >
                <div className={styles.rightBox}>
                    {leftTestimonials &&
                        leftTestimonials.map((testimonial, index) => (
                            <div key={index} className={styles.card}>
                                <p className={styles.text}>{testimonial.TestimonialContent}</p>
                                <div className={styles.profile}>
                                    <img src={testimonial?.PersonImage} alt="Profile" className={styles.avatar} />
                                    <div>
                                        <h4 className={styles.name}>{testimonial?.PersonName}</h4>
                                        <p className={styles.occupation}>{testimonial?.PersonDesignation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className={styles.rightBox}>
                    {rightTestimonials &&
                        rightTestimonials?.map((testimonial, index) => (
                            <div key={index} className={styles.card}>
                                <p className={styles.text}>{testimonial.TestimonialContent}</p>
                                <div className={styles.profile}>
                                    <img src={testimonial?.PersonImage} alt="Profile" className={styles.avatar} />
                                    <div>
                                        <h4 className={styles.name}>{testimonial?.PersonName}</h4>
                                        <p className={styles.occupation}>{testimonial?.PersonDesignation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
