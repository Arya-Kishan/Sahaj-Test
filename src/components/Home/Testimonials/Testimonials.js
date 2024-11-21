"use client"
import styles from './Testimonials.module.css';
import Image from 'next/image';
import profileImage from '../../../assests/Logo/featured.webp';
import { FcGoogle } from "react-icons/fc";

const Testimonials = () => {
    const testimonials = [
        {
            text: "Crypto ing TRON kam harmony XRP kava BitTorrent BitTorrent neo. Celsius siacoin hedera polygon solana.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Polymath shiba-inu loopring TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ing TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Polymath shiba-inu loopring TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ing TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Polymath shiba-inu loopring TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ing TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Polymath shiba-inu loopring TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ing TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Polymath shiba-inu loopring TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ing TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
        {
            text: "Crypto ipsum bitcoin ethereum dogecoin litecoin. Polymath shiba-inu loopring TRON horizen USD secret cardano cardano binance.",
            name: "Name",
            occupation: "Age/occupation",
        },
    ];

    const halfIndex = Math.ceil(testimonials.length / 2);
    const leftTestimonials = testimonials.slice(0, halfIndex);
    const rightTestimonials = testimonials.slice(halfIndex);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftBox}>
                <h2 className={styles.heading}>What our clients say?</h2>
                <div className={styles.reviews}>
                    <div className={styles.reviewCard}>
                        <div className={styles.logoBox} >
                            <FcGoogle className={styles.icon} />
                            <p className={styles.reviewCount}>200+ Reviews</p>
                        </div>
                        <p className={styles.rating}>4.8 <span>★★★★★</span></p>
                    </div>
                    <div className={styles.reviewCard}>
                        <div className={styles.logoBox} >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                                alt="LinkedIn"
                                className={styles.icon}
                            />
                            <p className={styles.reviewCount}>200+ Reviews</p>
                        </div>
                        <p className={styles.rating}>4.8 <span>★★★★★</span></p>
                    </div>
                </div>
                <p className={styles.comment}>
                    Started working on my financial goals with the help of Abhishek couple
                    of months back and got so much clarity after every step of the process.
                    <br />
                    Thank you
                </p>
                <div className={styles.clientInfo}>

                    <div className={styles.clientDetails}>
                        <img
                            src=""
                            alt="Client"
                            className={styles.clientImage}
                        />
                        <img
                            src=""
                            alt="Mint"
                            className={styles.companyLogo}
                        />

                    </div>
                    <p className={styles.name}>Name Surname</p>
                    <p className={styles.designation}>Director</p>
                </div>
                <div className={styles.pagination}>
                    <span className={`${styles.dot} ${styles.active}`}></span>
                    <span className={styles.dot}></span>
                </div>

            </div>
            <div className={styles.rightBoxContainer} >
                <div className={styles.rightBox}>
                    {leftTestimonials.map((testimonial, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.text}>{testimonial.text}</p>
                            <div className={styles.profile}>
                                <img src={profileImage} alt="Profile" className={styles.avatar} />
                                <div>
                                    <h4 className={styles.name}>{testimonial.name}</h4>
                                    <p className={styles.occupation}>{testimonial.occupation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.rightBox}>
                    {rightTestimonials.map((testimonial, index) => (
                        <div key={index} className={styles.card}>
                            <p className={styles.text}>{testimonial.text}</p>
                            <div className={styles.profile}>
                                <img src={profileImage} alt="Profile" className={styles.avatar} />
                                <div>
                                    <h4 className={styles.name}>{testimonial.name}</h4>
                                    <p className={styles.occupation}>{testimonial.occupation}</p>
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
