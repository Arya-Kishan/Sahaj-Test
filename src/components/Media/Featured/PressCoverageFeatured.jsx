"use client"
import Image from "next/image";
import styles from './pressCoverage.module.css';

function PressCoverageFeatured({ data = {} }) {

  return (
    <div className={styles.cardContainer}>
      {data.map((card, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.logo}>
            <img src={card.BrandLogo} alt="cardlogo" />
          </div>
          <h3 className={styles.title}>{card.Title}</h3>
          <p className={styles.description}>{card.Content}</p>
          <button className={styles.viewMore}>
            View more
          </button>
        </div>

      ))}

    </div>

  )
}

export default PressCoverageFeatured
