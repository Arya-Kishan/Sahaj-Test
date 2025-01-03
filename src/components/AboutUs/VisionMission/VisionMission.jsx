"use client";
import { useEffect, useState } from "react";
import styles from './VissionMission.module.css';

const MissionVision = ({ allData }) => {
  const missions = allData?.OurMission?.content || []; 
  const [activeTab, setActiveTab] = useState(missions?.[0]?.title || "Our Vision");

  useEffect(() => {
    console.log(allData);
  }, [allData]);

  return (
    <div className={styles.missionVisionContainer}>
      <div className={styles.missionVisioninnerContainer}>
      
        <div className={`${styles.tabs} ${styles.largeScreen}`}>
          {missions.map((data, idx) => (
            <button
              key={data._id || idx}
              className={`${styles.tabButton} ${activeTab === data.title ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab(data.title)}
            >
              {data.title}
            </button>
          ))}
        </div>

        <div className={styles.largeScreen}>
          {missions.map((data) => (
            activeTab === data.title && (
              <div className={styles.tabContent} key={data._id}>
                <p>{data.content}</p>
              </div>
            )
          ))}
        </div>

        <div className={styles.smallScreen}>
          {missions.map((data) => (
            activeTab === data.title && (
              <div key={data._id}>
                <button
                  className={`${styles.tabButton} ${activeTab === data.title ? styles.tabButtonActive : ""}`}
                  onClick={() => setActiveTab(data.title)}
                >
                  {data.title}
                </button>
                <div className={styles.tabContent}>
                  <p>{data.content}</p>
                </div>
                {missions.findIndex((item) => item.title === activeTab) <
                  missions.length - 1 ? (
                  <button
                    className={styles.tabButton}
                    onClick={() =>
                      setActiveTab(
                        missions[
                          missions.findIndex((item) => item.title === activeTab) + 1
                        ].title
                      )
                    }
                  >
                    Next: {missions[
                      missions.findIndex((item) => item.title === activeTab) + 1
                    ].title}
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
