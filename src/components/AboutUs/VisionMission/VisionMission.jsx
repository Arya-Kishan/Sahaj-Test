"use client";
import { useState } from "react";
import styles from './VissionMission.module.css';

const MissionVision = ({ allData }) => {
  const [activeTab, setActiveTab] = useState(
    allData?.OurMission?.[0]?.Title1 || "mission"
  );

  return (
    <div className={styles.missionVisionContainer}>
      <div className={styles.missionVisioninnerContainer}>
        
        <div className={`${styles.tabs} ${styles.largeScreen}`}>
          {allData?.OurMission?.map((data, idx) => (
            <button
              key={idx}
              className={`${styles.tabButton} ${activeTab === data.Title1 ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab(data.Title1)}
            >
              {data.Title2}
            </button>
          ))}
        </div>

        <div className={styles.largeScreen}>
          {allData?.OurMission?.map((data) => (
            activeTab === data.Title1 && (
              <div className={styles.tabContent} key={data._id}>
                <ul>
                  {data.Points.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>

        <div className={styles.smallScreen}>
          {allData?.OurMission?.map((data) => (
            activeTab === data.Title1 && (

              <div key={data._id}>
                  {activeTab===data.Title1 && data.Title1==="vision" && 
                  
                <button
                className={`${styles.tabButton} }`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
              }
                <button
                  className={`${styles.tabButton} ${activeTab === data.Title1 ? styles.tabButtonActive : ""}`}
                  onClick={() => setActiveTab(data.Title1)}
                >
                  {data.Title2}
                </button>
                <div className={styles.tabContent}>
                  <ul>
                    {data.Points.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                {allData.OurMission.findIndex((item) => item.Title1 === activeTab) <
                allData.OurMission.length - 1 ? (
                  <button
                    className={styles.tabButton}
                    onClick={() =>
                      setActiveTab(
                        allData.OurMission[
                          allData.OurMission.findIndex((item) => item.Title1 === activeTab) + 1
                        ].Title1
                      )
                    }
                  >
                    {allData.OurMission[
                      allData.OurMission.findIndex((item) => item.Title1 === activeTab) + 1
                    ].Title2}
                  </button>
                ) : null}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
