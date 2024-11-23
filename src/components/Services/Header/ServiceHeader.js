"use client"
import styles from './header.module.css';

function ServiceHeader() {
    return (
        <>
            <div className={styles.expertBox}>
                <h3>Financial plan creation</h3>
            </div>
            <section className={styles.Section}>
                <h3 className={styles.subHeading}>Get a customized financial plan in <span>2 weeks</span>, at flat <span>₹15,000/year.</span></h3>
                <p className={styles.para}>See how Sahaj<span>Money</span> simplifies financial planning </p>
                <button className={styles.downloadButton} >Download free sample plan</button>
            </section>

        </>
    )
}

export default ServiceHeader