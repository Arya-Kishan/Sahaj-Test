"use client"
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import sahajLogo from '../../assests/Logo/sahajlogo.webp'
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brands}>
          <Image src={sahajLogo} alt="Sahaj money logo" />
          <p className={styles.kk} >Your Financial Future, Simplified.</p>
          <p>Sahaj Money © 2024</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Company</h4>
          <Link className={styles.linkText} href="/about">About us</Link>
          <Link className={styles.linkText} href="#">Sebi Disclosure</Link>
        </div>
        <div className={styles.footerSection}>
          <h4>Resources</h4>
          <Link className={styles.linkText} href="/services">Services</Link>
          <Link className={styles.linkText} href="/media">Media</Link>
          <Link className={styles.linkText} href="/faq">FAQs</Link>
        </div>
        <div className={styles.footerSection}>
          <h4>Get in touch</h4>
          <p>H-48, Second Floor, Gali No. 7, New Mahavir Nagar, Delhi – 110 018</p>
          <p>+918861764646</p>
          <p>abhishek.kumar13@alumni.iimb.ac.in</p>
          <p>support@sahajmoney.com</p>
        </div>
        <div className={styles.footerSection}>
          <h4>SEBI Regional Office</h4>
          <p>Northern Regional Office,
            NBCC Complex, Office Tower - 1,
            8th Floor, Plate B, East Kidwai Nagar, New Delhi - 110 023</p>
          <p>+91-11-69012998</p>
          <p>sebinro@sebi.gov.in</p>
        </div>
        <div className={`${styles.footerSection} ${styles.socialMedia}`}>
          <h4>Follow us</h4>
          <Link className={styles.linkText} href="#"><FaLinkedin /></Link>
          <Link className={styles.linkText} href="#"><FaInstagram /></Link>
          <Link className={styles.linkText} href="#"><FaYoutube /></Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.termBox}>
          <p>All rights reserved</p>
          <div className={styles.policyBox}  >
            <p>Terms of services</p>
            <p>Privacy policies</p>
            <p>Cookies</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
