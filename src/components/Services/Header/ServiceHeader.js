"use client";
import { useState, useEffect, useRef } from 'react';
import styles from './header.module.css';
import DownloadModal from '@/components/DownloadModal/Download';
import ReactPlayer from 'react-player';

function ServiceHeader({ title, banner = {}, type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);

    useEffect(() => {
        console.log(banner);
    }, [banner]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsPlaying(entry.isIntersecting); 
            },
            { threshold: 0.5 } 
        );

        if (playerRef.current) {
            observer.observe(playerRef.current.wrapper); 
        }

        return () => {
            if (playerRef.current) {
                observer.unobserve(playerRef.current.wrapper);
            }
        };
    }, []);

    return (
        <>
            <div className={styles.expertBox}>
                <h3>{title}</h3>
            </div>
            <section className={styles.Section}>
                <div className={styles.leftBox}>
                    <div className={styles.textContainer}>
                        <h3 className={styles.subHeading}>{banner?.title}</h3>
                        <p className={styles.para}>{banner?.description}</p>
                    </div>
                    <button
                        className={styles.downloadButton}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Download free sample plan
                    </button>
                </div>
                <div className={styles.rightBox}>
                    <ReactPlayer
                        className={styles.player}
                        url={banner?.VideoLink}
                        playing={isPlaying}
                        ref={playerRef}
                        controls
                    />
                </div>
            </section>
            <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default ServiceHeader;
