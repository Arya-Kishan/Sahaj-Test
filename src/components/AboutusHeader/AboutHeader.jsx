
import styles from "./style.module.css";
import Image from "next/image";
import backIcon from '../../assests/Blog/backIcon.svg';
import Link from "next/link";

function AboutHeader({ heading, subHeading }) {
  return (
    <div className={styles.header}>
      <div className={styles.gobackContainer}>
        <div className={styles.gobackIconBox}>
          <Image src={backIcon} alt="backIcon" className={styles.gobackIcon} />
        </div>
        <Link href="/about" className={styles.gobackLinkText}> About us</Link>
      </div>


      <div className={styles.textContainer}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subHeading}>{subHeading}</p>
      </div>
    </div>
  );
}

export default AboutHeader;
