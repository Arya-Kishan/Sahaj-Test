"use client"
import { useState } from 'react';
import styles from './header.module.css';
import DownloadModal from '@/components/DownloadModal/Download';

function ServiceHeader({title, type}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className={styles.expertBox}>
                <h3>{title}</h3>
            </div>
            <section className={styles.Section}>
                {type ? <h3 className={styles.subHeading}>Get your plan renewed at flat <span>₹6,000/year</span> from 2nd year.</h3>:<h3 className={styles.subHeading}>Get a customized financial plan in <span>2 weeks</span>, at flat <span>₹15,000/year.</span></h3>}
                <p className={styles.para}>See how Sahaj<span>Money</span> simplifies financial planning </p>
                <button className={styles.downloadButton} onClick={() => setIsModalOpen(true)} >Download free sample plan</button>
            </section>
            <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </>
    )
}

export default ServiceHeader