"use client"
import { useState } from 'react';
import styles from './header.module.css';
import DownloadModal from '@/components/DownloadModal/Download';

function ServiceHeader({title,banner={}, type}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className={styles.expertBox}>
                <h3>{title}</h3>
            </div>
            <section className={styles.Section}>
                <div className={styles.textContainer}>
                <h3 className={styles.subHeading}>{banner?.title}</h3>

                  <p className={styles.para}>{banner?.description}</p>
                </div>
                <button className={styles.downloadButton} onClick={() => setIsModalOpen(true)} >Download free sample plan</button>
            </section>
            <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </>
    )
}

export default ServiceHeader