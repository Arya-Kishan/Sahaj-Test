"use client"
import Image from 'next/image';
import styles from './FinanceQuestions.module.css';
import { BsFillPatchCheckFill } from "react-icons/bs";
import imageSrc from '../../../assests/Home/whatdo.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const questions = [
    "Will I ever be able to save enough?",
    "How can I ensure a comfortable retirement with limited savings?",
    "Am I on the right track to achieve my financial goals?",
    "How can I simplify my finances and reduce stress?"
];

const FinanceQuestions = () => {
    return (
        <><div className={styles.container}>
            <h2 className={styles.title}>Feeling Overwhelmed by Your Finances?</h2>
           
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    className={styles.mobileCarousel}
                >
                    {questions.map((question, index) => (
                        <SwiperSlide key={index} className={styles.card}>
                            <p className={styles.question}>{question}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
           
            <div className={styles.cardsContainer}>
                {questions.map((question, index) => (
                    <div key={index} className={styles.card}>
                        <p className={styles.question}>{question}</p>
                    </div>
                ))}
            </div>
        </div>
            <div className={styles.container2}>
                <div className={styles.textSection}>
                    <div className={styles.headsection} >
                        <h2 className={styles.title2}>What we do for you?</h2>
                        <p className={styles.description}>
                            Fixed Fee ₹15,000 for the first year, ₹5,000 renewal annually thereafter
                        </p>
                    </div>
                    <div className={styles.servicesList}>
                        <div className={styles.service}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M11.0248 0C11.8825 9.375e-05 12.7107 0.312469 13.3547 0.878813L13.5245 1.03866L14.2941 1.80834C14.5053 2.01816 14.7811 2.15062 15.077 2.18428L15.2259 2.19309H16.3285C18.1993 2.193 19.745 3.65306 19.8514 5.52084L19.8568 5.72156V6.82416C19.8568 7.12191 19.9583 7.41187 20.1414 7.64344L20.2406 7.75369L21.0091 8.52328C22.3314 9.83803 22.4023 11.9546 21.1712 13.3551L21.0114 13.5248L20.2417 14.2944C20.0319 14.5057 19.8994 14.7815 19.8657 15.0773L19.8568 15.2262V16.3288C19.857 18.1996 18.397 19.7453 16.5292 19.8517L16.3285 19.8572H15.2259C14.9286 19.8573 14.6399 19.9575 14.4066 20.1417L14.2963 20.2409L13.5267 21.0095C12.212 22.3317 10.0954 22.4027 8.69496 21.1716L8.52518 21.0116L7.75559 20.242C7.54437 20.0322 7.26856 19.8997 6.97268 19.866L6.82381 19.8572H5.72121C3.85043 19.8573 2.30468 18.3972 2.19828 16.5294L2.19284 16.3288V15.2261C2.19274 14.9288 2.09253 14.6403 1.90831 14.4069L1.80912 14.2967L1.04056 13.527C-0.281694 12.2123 -0.352662 10.0957 0.878463 8.69531L1.03831 8.52553L1.80799 7.75584C2.01781 7.54462 2.15027 7.26881 2.18393 6.97303L2.19284 6.82416V5.72156L2.19828 5.52084C2.30028 3.72994 3.72959 2.30053 5.52049 2.19863L5.72121 2.19309H6.82381C7.12109 2.193 7.40974 2.09278 7.64309 1.90866L7.75334 1.80938L8.52293 1.04091C9.18518 0.374719 10.0856 0.0001875 11.0248 0ZM15.1013 8.02931C14.6707 7.59891 13.9727 7.59891 13.5421 8.02931L9.91118 11.6592L8.48553 10.2346L8.38184 10.1431C7.71031 9.62391 6.72865 10.0264 6.61474 10.8675C6.56871 11.2079 6.68393 11.5504 6.92637 11.7937L9.13165 13.9989L9.23524 14.0904C9.67418 14.4309 10.2979 14.3918 10.6907 13.9989L15.1013 9.58847L15.1928 9.48478C15.5333 9.04584 15.4941 8.42212 15.1013 8.02931Z" fill="url(#paint0_linear_922_24726)" />
                                <defs>
                                    <linearGradient id="paint0_linear_922_24726" x1="16.5244" y1="4.5249" x2="6.02441" y2="19.0249" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F8DB75" />
                                        <stop offset="1" stop-color="#A4730F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div>
                                <h3 className={styles.serviceTitle}>Personalized Financial Planning</h3>
                                <p className={styles.serviceDescription}>
                                    We create tailored financial plan to help you achieve your unique goals, from saving for education to retirement planning.
                                </p>
                            </div>
                        </div>
                        <div className={styles.service}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M11.0248 0C11.8825 9.375e-05 12.7107 0.312469 13.3547 0.878813L13.5245 1.03866L14.2941 1.80834C14.5053 2.01816 14.7811 2.15062 15.077 2.18428L15.2259 2.19309H16.3285C18.1993 2.193 19.745 3.65306 19.8514 5.52084L19.8568 5.72156V6.82416C19.8568 7.12191 19.9583 7.41187 20.1414 7.64344L20.2406 7.75369L21.0091 8.52328C22.3314 9.83803 22.4023 11.9546 21.1712 13.3551L21.0114 13.5248L20.2417 14.2944C20.0319 14.5057 19.8994 14.7815 19.8657 15.0773L19.8568 15.2262V16.3288C19.857 18.1996 18.397 19.7453 16.5292 19.8517L16.3285 19.8572H15.2259C14.9286 19.8573 14.6399 19.9575 14.4066 20.1417L14.2963 20.2409L13.5267 21.0095C12.212 22.3317 10.0954 22.4027 8.69496 21.1716L8.52518 21.0116L7.75559 20.242C7.54437 20.0322 7.26856 19.8997 6.97268 19.866L6.82381 19.8572H5.72121C3.85043 19.8573 2.30468 18.3972 2.19828 16.5294L2.19284 16.3288V15.2261C2.19274 14.9288 2.09253 14.6403 1.90831 14.4069L1.80912 14.2967L1.04056 13.527C-0.281694 12.2123 -0.352662 10.0957 0.878463 8.69531L1.03831 8.52553L1.80799 7.75584C2.01781 7.54462 2.15027 7.26881 2.18393 6.97303L2.19284 6.82416V5.72156L2.19828 5.52084C2.30028 3.72994 3.72959 2.30053 5.52049 2.19863L5.72121 2.19309H6.82381C7.12109 2.193 7.40974 2.09278 7.64309 1.90866L7.75334 1.80938L8.52293 1.04091C9.18518 0.374719 10.0856 0.0001875 11.0248 0ZM15.1013 8.02931C14.6707 7.59891 13.9727 7.59891 13.5421 8.02931L9.91118 11.6592L8.48553 10.2346L8.38184 10.1431C7.71031 9.62391 6.72865 10.0264 6.61474 10.8675C6.56871 11.2079 6.68393 11.5504 6.92637 11.7937L9.13165 13.9989L9.23524 14.0904C9.67418 14.4309 10.2979 14.3918 10.6907 13.9989L15.1013 9.58847L15.1928 9.48478C15.5333 9.04584 15.4941 8.42212 15.1013 8.02931Z" fill="url(#paint0_linear_922_24726)" />
                                <defs>
                                    <linearGradient id="paint0_linear_922_24726" x1="16.5244" y1="4.5249" x2="6.02441" y2="19.0249" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F8DB75" />
                                        <stop offset="1" stop-color="#A4730F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div>
                                <h3 className={styles.serviceTitle}>Flat Fee Support</h3>
                                <p className={styles.serviceDescription}>
                                    Enjoy transparent pricing with a ₹15,000 flat fee for your plan and 12 months of support, followed by just ₹5,000 annually for continued guidance.
                                </p>
                            </div>
                        </div>
                        <div className={styles.service}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path d="M11.0248 0C11.8825 9.375e-05 12.7107 0.312469 13.3547 0.878813L13.5245 1.03866L14.2941 1.80834C14.5053 2.01816 14.7811 2.15062 15.077 2.18428L15.2259 2.19309H16.3285C18.1993 2.193 19.745 3.65306 19.8514 5.52084L19.8568 5.72156V6.82416C19.8568 7.12191 19.9583 7.41187 20.1414 7.64344L20.2406 7.75369L21.0091 8.52328C22.3314 9.83803 22.4023 11.9546 21.1712 13.3551L21.0114 13.5248L20.2417 14.2944C20.0319 14.5057 19.8994 14.7815 19.8657 15.0773L19.8568 15.2262V16.3288C19.857 18.1996 18.397 19.7453 16.5292 19.8517L16.3285 19.8572H15.2259C14.9286 19.8573 14.6399 19.9575 14.4066 20.1417L14.2963 20.2409L13.5267 21.0095C12.212 22.3317 10.0954 22.4027 8.69496 21.1716L8.52518 21.0116L7.75559 20.242C7.54437 20.0322 7.26856 19.8997 6.97268 19.866L6.82381 19.8572H5.72121C3.85043 19.8573 2.30468 18.3972 2.19828 16.5294L2.19284 16.3288V15.2261C2.19274 14.9288 2.09253 14.6403 1.90831 14.4069L1.80912 14.2967L1.04056 13.527C-0.281694 12.2123 -0.352662 10.0957 0.878463 8.69531L1.03831 8.52553L1.80799 7.75584C2.01781 7.54462 2.15027 7.26881 2.18393 6.97303L2.19284 6.82416V5.72156L2.19828 5.52084C2.30028 3.72994 3.72959 2.30053 5.52049 2.19863L5.72121 2.19309H6.82381C7.12109 2.193 7.40974 2.09278 7.64309 1.90866L7.75334 1.80938L8.52293 1.04091C9.18518 0.374719 10.0856 0.0001875 11.0248 0ZM15.1013 8.02931C14.6707 7.59891 13.9727 7.59891 13.5421 8.02931L9.91118 11.6592L8.48553 10.2346L8.38184 10.1431C7.71031 9.62391 6.72865 10.0264 6.61474 10.8675C6.56871 11.2079 6.68393 11.5504 6.92637 11.7937L9.13165 13.9989L9.23524 14.0904C9.67418 14.4309 10.2979 14.3918 10.6907 13.9989L15.1013 9.58847L15.1928 9.48478C15.5333 9.04584 15.4941 8.42212 15.1013 8.02931Z" fill="url(#paint0_linear_922_24726)" />
                                <defs>
                                    <linearGradient id="paint0_linear_922_24726" x1="16.5244" y1="4.5249" x2="6.02441" y2="19.0249" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F8DB75" />
                                        <stop offset="1" stop-color="#A4730F" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div>
                                <h3 className={styles.serviceTitle}>Quarterly Check-Ins</h3>
                                <p className={styles.serviceDescription}>
                                    We offer quarterly meetings to monitor your progress and ensure your plan adapts to life’s changes, keeping you on track.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.viewServicesButton}>View services</button>
                        <button className={styles.bookCallButton}>Book a call</button>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <Image src={imageSrc} alt="What we do illustration" className={styles.image} />
                </div>
            </div>
        </>
    );
};

export default FinanceQuestions;
