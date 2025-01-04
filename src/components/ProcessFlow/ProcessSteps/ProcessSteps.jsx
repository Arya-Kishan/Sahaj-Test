"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from './processSteps.module.css';
import process from '../../../assests/ProcessFlow/process.webp'


const ProcessStepsContainer = ({ ProcessTopBanner,ProcessVideo, ProcessSteps }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseClick = () => {
    setIsVideoPlaying(false);
  };

  return (
  <>
  <div className={styles.processFlowHeading}>
    <p>{ProcessTopBanner?.MainTitle|| "Title"}</p>
  </div>
    <div className={styles.processContainer}>
      <div className={styles.processContents} >
        <p className={styles.processHeading}>{ProcessTopBanner?.Title|| "Heading"}</p>
        <div className={styles.videoContainer}>
          {isVideoPlaying ? (
            <div className={styles.videoPlayerControls}>
              <video
                className={styles.videoPlayer}
                src={ProcessTopBanner?.Video}
                controls
                autoPlay
              />
              <button className={styles.closeButton} onClick={handleCloseClick}>
                ✕
              </button>
            </div>

          ) : (
            <div className={styles.imgSection}>

              <Image src={process} alt="ProcessImage" />
              <svg width="80" height="80"
                onClick={handlePlayClick}
                className={styles.playIcon} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.2" />
                <circle cx="40" cy="40" r="30" fill="white" fillOpacity="0.4" />
                <path d="M39.9997 56.6673C49.2044 56.6673 56.6663 49.2054 56.6663 40.0007C56.6663 30.7959 49.2044 23.334 39.9997 23.334C30.7949 23.334 23.333 30.7959 23.333 40.0007C23.333 49.2054 30.7949 56.6673 39.9997 56.6673Z" stroke="#C18823" strokeOpacity="0.75" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36.667 33.334L46.667 40.0007L36.667 46.6673V33.334Z" stroke="#C18823" strokeOpacity="0.75" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
          )}
        </div>
        <div className={styles.processSteps}>
          <div className={styles.stepHeader}>
            {ProcessSteps?.map((step, index) => (
              <React.Fragment key={index} >
                <div className={styles.circle} >{index + 1}</div>
                {step.Processname && (
                  <div className={styles.line}>
                    <div className={styles.responseTime}>{step.Processname}</div>
                  </div>
                )}
              </React.Fragment>
            ))}

          </div>
          <div className={styles.stepDesccriptionContainer}>
            {ProcessSteps?.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.description}>
                  <p className={styles.descriptionTitle}>{step.MainTitle}</p>
                  <ul className={styles.descriptionbody}>
                    {step?.ProcessPoints?.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  </>
  );
};

export default ProcessStepsContainer;

