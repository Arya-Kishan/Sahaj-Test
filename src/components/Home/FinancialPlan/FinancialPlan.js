"use client"
import styles from './FinancialPlan.module.css';
import Image from 'next/image';
import image from '../../../assests/Home/FinancialPlan.webp'

const FinancialPlan = () => {
    return (
        <div className={styles.container}>
            
            <header className={styles.header}>
                <div className={styles.headerTitle}>
                <h1 className={styles.title}>Download Your Free Financial Plan</h1>
                <p className={styles.subtitle}>
                    See how <span className={styles.highlight}>SahajMoney</span> simplifies financial planning
                </p>
                </div>
                <button className={styles.downloadButton}>Download Now</button>
            </header>

            
            <div className={styles.mainContent}>
                <div className={styles.videoContainer}>
                    <Image src={image} alt="Video Thumbnail" className={styles.videoImage} />
                    <div className={styles.playButton}>▶</div>
                </div>

                <div className={styles.stepsContainer}>
                    <h2>How we do it?</h2>

                    <div>
                        <h3 className={styles.stepTitle}>Step 01</h3>
                        <h4 className={styles.stepSubtitle}>Book a free call</h4>
                        <ul className={styles.stepText}>
                            <li>Tell us about your financial objectives (e.g., retirement planning, debt reduction, investment growth).</li>
                            <li>Provide basic information about your financial situation.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.stepTitle}>Step 02</h3>
                        <h4 className={styles.stepSubtitle}>Complete formalities</h4>
                        <ul className={styles.stepText}>
                            <li>Our experts will analyze your information and create a customized financial plan.</li>
                            <li>We’ll provide tailored advice and recommendations based on your goals.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.stepTitle}>Step 03</h3>
                        <h4 className={styles.stepSubtitle}>Financial Plan</h4>
                        <ul className={styles.stepText}>
                            <li>Review your financial plan and ask any questions.</li>
                            <li>Implement the recommended strategies with our guidance.</li>
                        </ul>
                    </div>

                    <button className={styles.learnMoreButton}>Learn more</button>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.stat}>
                    <p className={styles.statTitle}>Happy Clients</p>
                    <h3 className={styles.statNumber}>300+</h3>
                    <p className={styles.statDescription}>Read what our clients say</p>
                </div>
                <div className={styles.stat}>
                    <p className={styles.statTitle}>Media Coverage</p>
                    <h3 className={styles.statNumber}>20+</h3>
                    
                    <p className={styles.statDescription}>See why the media trusts us.</p>
                </div>
                <div className={styles.stat}>
                    <p className={styles.statTitle}>Comprehensive Services</p>
                    <h3 className={styles.statNumber}>10+</h3>
                    
                    <p className={styles.statDescription}>Explore our offerings.</p>
                </div>
            </div>
        </div>
    );
};

export default FinancialPlan;
