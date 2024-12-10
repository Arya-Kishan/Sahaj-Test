"use client"
import Image from 'next/image';
import arrowUpRight from '../../../assests/AboutUs/arrowUpRight.svg';
import Link from 'next/link';
import styles from './sebiheader.module.css';

const SebiHeader = () => {
  return (
    <>
         <div className={styles.sebiHeader}>
             <p className={styles.heading}>SEBI <span className={styles.sebiHeaderSpan}>Disclosure</span></p>
         </div>
         <section className={styles.complaintsContainer}>
            <div className={styles.complaintsHeader}>
              <p className={styles.complaintsheading}>Regulatory Complaints Disclosure</p>
              <p className={styles.smallScreenheading}>Our Story</p>
            </div>
            <div className={styles.description}>
              <p>
                  SEBI mandates all RIA's to display the complaint status
                  on the website as shown below. Investors can first contact the intermediary in case of complaints,
                  in our case through the contact us page. The SEBI 'SCORES' website that facilitates 
                  investors in logging any complaints against listed companies or intermediaries can be accessed here :
                  <span className={styles.sebiLinkSpan}><Link href={"https://scores.gov.in/scores/Welcome.html"}>https://scores.gov.in/scores/Welcome.html</Link></span>
              </p>
            </div>
            <button className={styles.viewPdfButton}>
                 <span>View PDF</span>
                <Image src={arrowUpRight} alt="icon" className="icon" /> 
            </button>
         </section>
    </>
  )
}

export default SebiHeader;
