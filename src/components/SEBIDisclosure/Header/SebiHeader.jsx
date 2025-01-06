"use client"
import Image from 'next/image';
import arrowUpRight from '../../../assests/AboutUs/arrowUpRight.svg';
import Link from 'next/link';
import styles from './sebiheader.module.css';

const SebiHeader = ({ contentData = {} }) => {

  const { title = "Default Title", description = "Default Description", link = "#", PDFlink = '#' } = contentData || {};

  return (
    <>
      <div className={styles.sebiHeader}>
        <p className={styles.heading}>SEBI <span className={styles.sebiHeaderSpan}>Disclosure</span></p>
      </div>
      <section className={styles.complaintsContainer}>
        <div className={styles.complaintsHeader}>
          <p className={styles.complaintsheading}>{title}</p>
          <p className={styles.smallScreenheading}>Our Story</p>
        </div>
        <div className={styles.description}>
          <p> {description}
            <a href={link} className={styles.link}>
              {link}
            </a>
          </p>
        </div>
        <button className={styles.viewPdfButton}>
          <Link href={PDFlink} className={styles.viewPdflink}>View PDF</Link>
          <Image src={arrowUpRight} alt="icon" className="icon" />
        </button>
      </section>
    </>
  )
}

export default SebiHeader;
