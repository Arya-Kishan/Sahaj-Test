"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import DownloadModal from "@/components/DownloadModal/Download";
import ReactPlayer from "react-player";

function ServiceHeader({ title, banner = {}, type }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isUserPlayed, setIsUserPlayed] = useState(false);
    const [isManuallyPaused, setIsManuallyPaused] = useState(false); 
    const playerContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (isUserPlayed && !isManuallyPaused) {
                    const isVisible = entry.intersectionRatio >= 0.5;
                    setIsPlaying(isVisible);
                }
            },
            {
                threshold: [0.5], 
            }
        );

        if (playerContainerRef.current) {
            observer.observe(playerContainerRef.current);
        }

        return () => {
            if (playerContainerRef.current) {
                observer.unobserve(playerContainerRef.current);
            }
        };
    }, [isUserPlayed, isManuallyPaused]);

    const handlePlay = () => {
        setIsUserPlayed(true); 
        setIsManuallyPaused(false); 
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsManuallyPaused(true);
        setIsPlaying(false);
    };

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
                <div
                    className={styles.rightBox}
                    ref={playerContainerRef} 
                >
                    <ReactPlayer
                        className={styles.player}
                        url={banner?.VideoLink}
                        playing={isPlaying}
                        controls
                        onPlay={handlePlay} 
                        onPause={handlePause} 
                    />
                </div>
            </section>
            <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default ServiceHeader;
