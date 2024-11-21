import React, { useState } from "react";
import styles from './VissionMission.module.css';

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("mission"); 

  return (
    <div className={styles.missionVisionContainer}>
      {/* For Large Screens */}
      <div className={`${styles.tabs} ${styles.largeScreen}`}>
        <button
          className={`${styles.tabButton} ${activeTab === "mission" ? styles.tabButtonActive : ""}`}
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
      </div>

      {/* Content for Large Screens */}
      <div className={`${styles.content} ${styles.largeScreen}`}>
        {activeTab === "mission" && (
          <div className={styles.tabContent}>
            <ul>
              <li>To provide innovative financial solutions that are accessible, affordable, and tailored to the needs of our customers.</li>
              <li>To educate and empower individuals to make informed financial decisions and achieve their long-term goals.</li>
              <li>To deliver exceptional customer service and support.</li>
              <li>To build a sustainable and profitable business that benefits our customers, employees, and shareholders.</li>
            </ul>
          </div>
        )}
        {activeTab === "vision" && (
          <div className={styles.tabContent}>
            <ul>
              <li>To be the leading financial platform that empowers individuals to achieve their financial goals with ease and confidence.</li>
              <li>To create a world where everyone has the tools and knowledge to build a prosperous financial future.</li>
              <li>To revolutionize the way people manage their finances by providing innovative, user-friendly, and affordable solutions.</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* For Small Screens */}
      <div className={`${styles.content} ${styles.smallScreen}`}>
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
                <li>To provide innovative financial solutions that are accessible, affordable, and tailored to the needs of our customers.</li>
                <li>To educate and empower individuals to make informed financial decisions and achieve their long-term goals.</li>
                <li>To deliver exceptional customer service and support.</li>
                <li>To build a sustainable and profitable business that benefits our customers, employees, and shareholders.</li>
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
                <li>To be the leading financial platform that empowers individuals to achieve their financial goals with ease and confidence.</li>
                <li>To create a world where everyone has the tools and knowledge to build a prosperous financial future.</li>
                <li>To revolutionize the way people manage their finances by providing innovative, user-friendly, and affordable solutions.</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MissionVision;
