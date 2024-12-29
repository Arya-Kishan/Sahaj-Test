"use client"
import styles from './Footer.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sahajLogo from '../../assests/Logo/sahajlogo.webp'
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { getFooterData } from '@/services/footer';
const Footer = () => {

  const [footerData, setFooterData] = useState([])

  const getData = async () => {
    try {
      const { res, err } = await getFooterData();
      if (res?.data) {
        console.log("this is footer",res.data);
        setFooterData(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brands}>
          <img src={footerData?.FooterLogo} alt="Sahaj money logo" />
          <p className={styles.kk} >{footerData?.FooterDescription}</p>
          <div className={styles.subLogoBox}>
            <img src={footerData?.FooterLogo} className={styles.subLogo} alt="Sahaj money logo" />
            <p>2024</p>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4>Company</h4>
          <Link className={styles.linkText} href="/about">About us</Link>
          <Link className={styles.linkText} href="/sebidisclosure">Sebi Disclosure</Link>
        </div>
        <div className={styles.footerSection}>
          <h4>Resources</h4>
          <Link className={styles.linkText} href="/services">Services</Link>
          <Link className={styles.linkText} href="/media">Media</Link>
          <Link className={styles.linkText} href="/faqs">FAQs</Link>
        </div>
        <div className={styles.footerSection}>
          <h4>Get in touch</h4>
          <p>{footerData?.GetIntouch?.Address}</p>
          <p>{footerData?.GetIntouch?.PhoneNumber}</p>
          <p>{footerData?.GetIntouch?.Websiteurl}</p>
          <p>{footerData?.GetIntouch?.Email}</p>
        </div>
        <div className={styles.footerSection}>
          <h4>SEBI Regional Office</h4>
          <p>{footerData?.SEBI_Regional_Office?.Address}</p>
          <p>{footerData?.SEBI_Regional_Office?.PhoneNumber}</p>
          <p>{footerData?.SEBI_Regional_Office?.Websiteurl}</p>
        </div>
        <div className={`${styles.footerSection} ${styles.socialMedia}`}>
          <h4>Follow us</h4>
          {footerData?.FollowUs?.length>0&&
            footerData?.FollowUs.map((foll)=>(
              <Link href={foll?.link}>
                <img src={foll?.image}  className={`${styles.follows_logo}`}/> 
              </Link>
            ))
       
          }


        </div>
      </div>
      <p className={`${styles.footer_content}`}>{footerData?.FooterContent}</p>
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
