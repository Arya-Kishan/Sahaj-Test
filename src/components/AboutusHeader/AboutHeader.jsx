
import styles from "./style.module.css";
import Link from "next/link";

function AboutHeader({ heading, subHeading }) {
  return (
    <div className={styles.header}>
      <Link href="/about" >
        <div className={styles.backLink}>
          <span>&lt; About us</span>
        </div></Link>

      <div className={styles.textContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subHeading}>{subHeading}</p>
      </div>
    </div>
  );
}

export default AboutHeader;
