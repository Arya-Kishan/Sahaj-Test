"use client"

import styles from './support.module.css';

function Support({ ProcessContent }) {
  const { ProcessPoints = [], ProcessImage } = ProcessContent?.[0] || {};

  const imageSrc = ProcessImage;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <p className={styles.textheading}>Ongoing Support</p>
          <ul className={styles.textdescription}>
            {ProcessPoints.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
        <div className={styles.imageSection}>
         <img
            src={imageSrc}
            alt="Ongoing Support"
            className={styles.image}
            width={611}
            height={249}
          />
        </div>
      </div>
    </div>
  );
}

export default Support;
