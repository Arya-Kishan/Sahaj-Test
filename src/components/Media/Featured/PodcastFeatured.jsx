"use client";
import Image from "next/image";
import styles from './featured.module.css';
import FormateDate from "../FormateDate";
import Link from "next/link"; 

const PodcastFeatured = ({ data }) => {
  const singlefeaturedData = data?.slice(0, 1);


  const podcastLink = singlefeaturedData[0]?.PodcastLink || "#";

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={singlefeaturedData[0]?.CoverImage} alt="Podcast featured" />
  
        {podcastLink ? (
          <Link href={podcastLink||"#"} passHref>
            <svg width="80" height="80" className={styles.podcastIcon} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.2"/>
              <circle cx="40" cy="40" r="30" fill="white" fillOpacity="0.8"/>
              <path d="M28 48V40C28 36.8174 29.2643 33.7652 31.5147 31.5147C33.7652 29.2643 36.8174 28 40 28C43.1826 28 46.2348 29.2643 48.4853 31.5147C50.7357 33.7652 52 36.8174 52 40V48" stroke="#C18823" strokeOpacity="0.75" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M52 49.3346C52 50.0419 51.719 50.7202 51.219 51.2203C50.7189 51.7204 50.0406 52.0013 49.3333 52.0013H48C47.2928 52.0013 46.6145 51.7204 46.1144 51.2203C45.6143 50.7202 45.3333 50.0419 45.3333 49.3346V45.3346C45.3333 44.6274 45.6143 43.9491 46.1144 43.449C46.6145 42.9489 47.2928 42.668 48 42.668H52V49.3346ZM28 49.3346C28 50.0419 28.281 50.7202 28.781 51.2203C29.2811 51.7204 29.9594 52.0013 30.6667 52.0013H32C32.7072 52.0013 33.3855 51.7204 33.8856 51.2203C34.3857 50.7202 34.6667 50.0419 34.6667 49.3346V45.3346C34.6667 44.6274 34.3857 43.9491 33.8856 43.449C33.3855 42.9489 32.7072 42.668 32 42.668H28V49.3346Z" stroke="#C18823" strokeOpacity="0.75" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        ) : (
          <svg width="80" height="80" className={styles.podcastIcon} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.2"/>
            <circle cx="40" cy="40" r="30" fill="white" fillOpacity="0.8"/>
            <path d="M28 48V40C28 36.8174 29.2643 33.7652 31.5147 31.5147C33.7652 29.2643 36.8174 28 40 28C43.1826 28 46.2348 29.2643 48.4853 31.5147C50.7357 33.7652 52 36.8174 52 40V48" stroke="#C18823" strokeOpacity="0.75" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M52 49.3346C52 50.0419 51.719 50.7202 51.219 51.2203C50.7189 51.7204 50.0406 52.0013 49.3333 52.0013H48C47.2928 52.0013 46.6145 51.7204 46.1144 51.2203C45.6143 50.7202 45.3333 50.0419 45.3333 49.3346V45.3346C45.3333 44.6274 45.6143 43.9491 46.1144 43.449C46.6145 42.9489 47.2928 42.668 48 42.668H52V49.3346ZM28 49.3346C28 50.0419 28.281 50.7202 28.781 51.2203C29.2811 51.7204 29.9594 52.0013 30.6667 52.0013H32C32.7072 52.0013 33.3855 51.7204 33.8856 51.2203C34.3857 50.7202 34.6667 50.0419 34.6667 49.3346V45.3346C34.6667 44.6274 34.3857 43.9491 33.8856 43.449C33.3855 42.9489 32.7072 42.668 32 42.668H28V49.3346Z" stroke="#C18823" strokeOpacity="0.75" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.subHeadingContainer}>
          <p className={styles.subHeading}>{singlefeaturedData[0]?.PodcastCompanyFrom}</p>
          <button className={styles.time}>10 mins</button>
        </div>
        <div className={styles.headingContainer}>
          <p className={styles.heading}>{singlefeaturedData[0]?.PodcastTitle}</p>
          <p className={styles.descriptioncontainer}>
            {singlefeaturedData[0]?.PodcastDescription}
          </p>
        </div>
        
        <p className={styles.podcastdateContainer}>
          {FormateDate(singlefeaturedData[0]?.createdAt)}
        </p>
      </div>
    </div>
  );
};

export default PodcastFeatured;
