"use client"

import  { useState } from "react";
import styles from './VissionMission.module.css';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("mission"); 

  const missionVisionData=[
    {
      title:"mission",
      heading:"Our Mission",
      content:[
       "To provide innovative financial solutions that are accessible, affordable, and tailored to the needs of our customers.",
       "To educate and empower individuals to make informed financial decisions and achieve their long-term goals.",
       "To deliver exceptional customer service and support.",
       "To build a sustainable and profitable business that benefits our customers, employees, and shareholders"
     ]

    },
    {
      title:"vision",
      heading:"Our Vision",
      content:[
        "To be the leading financial platform that empowers individuals to achieve their financial goals with ease and confidence.",
        "To create a world where everyone has the tools and knowledge to build a prosperous financial future.",
        "To revolutionize the way people manage their finances by providing innovative, user-friendly, and affordable solutions."
        
      ]
    }
  ]

  return (
    <div className={styles.missionVisionContainer}>
      {/* For Large Screens */}
      <div className={`${styles.tabs} ${styles.largeScreen}`}>
     
        {
          missionVisionData.map((data,idx)=>(
            <button
            key={idx}
            className={`${styles.tabButton} ${activeTab === data.title ? styles.tabButtonActive : ""}`}
            onClick={() => setActiveTab(data.title)}
            >
           {
            data.heading
           }
          </button>
          ))
        }
      </div>

      {/* Content for Large Screens */}
      <div className={ styles.largeScreen}>
      {missionVisionData.map(({ title,  content }) => (
        activeTab === title && (
          <div className={styles.tabContent} key={title}>
            
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )
      ))}
      </div>

      {/* For Small Screens */}
      <div className={styles.smallScreen}>
      <>
      {activeTab === "mission" && (
    <>

      <button
        className={`${styles.tabButton} ${activeTab === "mission" ? styles.tabButtonActive : ""}`}
        onClick={() => setActiveTab("mission")}
      >
        Our Mission
      </button>
      <div className={styles.tabContent}>
        <ul>
          {missionVisionData
            .find(tab => tab.title === "mission")
            .content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
      <button
        className={styles.tabButton}
        onClick={() => setActiveTab("vision")}
      >
        Our Vision
      </button>
    </>
  )}
  {activeTab === "vision" && (
    <>

      <button
        className={styles.tabButton}
        onClick={() => setActiveTab("mission")}
      >
        Our Mission
      </button>
      <button
        className={`${styles.tabButton} ${activeTab === "vision" ? styles.tabButtonActive : ""}`}
        onClick={() => setActiveTab("vision")}
      >
        Our Vision
      </button>
      <div className={styles.tabContent}>
        <ul>
          {missionVisionData
            .find(tab => tab.title === "vision")
            .content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    </>
  )}
</>

      </div>
    </div>
  );
};

export default MissionVision;
