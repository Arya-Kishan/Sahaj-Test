"use client"
import Link from 'next/link';
import styles from './faq.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookCallModal } from '@/store/slices/modalSlice';

function FAQ({ heading, buttonText,path,onClick }) {
  const dispatch = useDispatch();

  const openModal = () => {
    console.log('Book a call clicked');
    dispatch(toggleBookCallModal());
  };

  return (
    <div className={styles.faqContainer}>

      <div className={styles.svgtopWave}>
        <svg width="1440" height="221" className={styles.topsvg} viewBox="0 0 1440 221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M0 1.94354L39.6 24.1149C80.4 46.2863 159.6 90.629 240 75.8481C320.4 61.0672 399.6 -12.8374 480 1.94354C560.4 16.7245 639.6 120.191 720 127.581C800.4 134.972 879.6 46.2863 960 31.5054C1040.4 16.7245 1119.6 75.8481 1200 105.41C1280.4 134.972 1359.6 134.972 1400.4 134.972H1440V268H1400.4C1359.6 268 1280.4 268 1200 268C1119.6 268 1040.4 268 960 268C879.6 268 800.4 268 720 268C639.6 268 560.4 268 480 268C399.6 268 320.4 268 240 268C159.6 268 80.4 268 39.6 268H0L0 1.94354Z" fill="#C18823" fillOpacity="0.15" />
        </svg>
      </div>
      <div className={styles.svgbottomWave}>
        <svg width="1440" height="221" className={styles.bottomsvg} viewBox="0 0 1440 221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M0 160.546L48 136.809C96 113.072 192 65.5981 288 65.5981C384 65.5981 480 113.072 576 132.062C672 151.052 768 141.557 864 108.325C960 75.0929 1056 18.1239 1152 3.88162C1248 -10.3606 1344 18.1239 1392 32.3661L1440 46.6084V246H1392C1344 246 1248 246 1152 246C1056 246 960 246 864 246C768 246 672 246 576 246C480 246 384 246 288 246C192 246 96 246 48 246H0L0 160.546Z" fill="url(#paint0_linear_1338_16680)" />
          <defs>
            <linearGradient id="paint0_linear_1338_16680" x1="1079.16" y1="50.4818" x2="1049.12" y2="293.361" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F8DB75" />
              <stop offset="1" stopColor="#A4730F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.faqtextContainer}>
        <p className={styles.faqtext}>
          {heading}
        </p>
         {path ? (
          <Link href={path} className={styles.link}>
            <button className={styles.faqButton}>{buttonText}</button>
          </Link>
        ) : onClick ? (
          <button className={styles.faqButton} onClick={onClick}>
            {buttonText}
          </button>
        ) : (
          <button className={styles.faqButton} onClick={openModal} >
            {buttonText}
          </button>
        )}
        </div>
      


    </div>
  )
}

export default FAQ
