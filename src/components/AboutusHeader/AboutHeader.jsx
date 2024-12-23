
import styles from "./style.module.css";

function AboutHeader({ heading, subHeading }) {
  return (
    <div className={styles.header}>
      <div className={styles.backLink}>
        <span>&lt; About us</span>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subHeading}>{subHeading}</p>
      </div>
    </div>
  );
}

export default AboutHeader;
