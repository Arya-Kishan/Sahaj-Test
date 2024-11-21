import React from "react";
import styles from './processSteps.module.css';
import process from '../../assests/ProcessFlow/process.webp'

const ProcessSteps = () => {
  const steps = [
    {
      title: "Book a free call",
      description: [
        "Tell us about your financial objectives (e.g., retirement planning, debt reduction, investment growth).",
        "Provide basic information about your financial situation.",
      ],
    },
    {
      title: "Complete formalities",
      description: [
        "Our experts will analyze your information and create a customized financial plan.",
        "We'll provide tailored advice and recommendations based on your goals.",
      ],
    },
    {
      title: "Financial Plan",
      description: [
        "Review your financial plan and ask any questions.",
        "Implement the recommended strategies with our guidance.",
      ],
    },
  ];

  return (
  <div className={styles.processContainer}>
    <div className={styles.processContents} >
    <p className={styles.processHeading}>Our Process</p>
    <div className={styles.imgSection}>
      <img  src={process} alt="ProcessImage"/>
      <svg width="80" height="80" className={styles.playIcon} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="white" fill-opacity="0.2"/>
      <circle cx="40" cy="40" r="30" fill="white" fill-opacity="0.4"/>
      <path d="M39.9997 56.6673C49.2044 56.6673 56.6663 49.2054 56.6663 40.0007C56.6663 30.7959 49.2044 23.334 39.9997 23.334C30.7949 23.334 23.333 30.7959 23.333 40.0007C23.333 49.2054 30.7949 56.6673 39.9997 56.6673Z" stroke="#C18823" stroke-opacity="0.75" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M36.667 33.334L46.667 40.0007L36.667 46.6673V33.334Z" stroke="#C18823" stroke-opacity="0.75" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </div>
    <div className={styles.processSteps}>
      <div>
      <div className={styles.stepHeader}>
             <div className={styles.circle}>1</div>

                <div className={styles.line}>
                <div className={styles.responseTime}>Response within a day</div>
                </div>
            <div className={styles.circle}>2</div>
           
              <div className={styles.line}>
              <div className={styles.responseTime}>Response within a day</div>
              </div>

            <div className={styles.circle}>3</div>
      </div>
      </div>
     
     <div className={styles.stepDesccriptionContainer}>
     {steps.map((step, index) => (
          <div key={index} className={styles.step}>
          
          <div className={styles.description}>
          <p className={styles.descriptionTitle}>{step.title}</p>
          <ul className={styles.descriptionbody}>
            {step.description.map((desc, i) => (
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
    
  );
};

export default ProcessSteps;

