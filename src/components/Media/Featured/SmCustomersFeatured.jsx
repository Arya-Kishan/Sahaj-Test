"use client"
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from './featured.module.css';
import ReadMore from '@/components/ReadMoreButton/ReadMoreButton';
import { FaShareAlt } from 'react-icons/fa';
import FormateDate from "../FormateDate";
import Link from 'next/link';
import arrowUpRight from '@/assests/AboutUs/arrowUpRight.svg';


const SmCustomersFeatured = ({ data }) => {

  const singlefeaturedData = data?.slice(0, 1);
  const videoLink = singlefeaturedData[0]?.PostCastLink;
  const router = useRouter();

  const handleReadMoreClick = () => {


    if (videoLink) {
      window.open(videoLink, '_blank');
    } else {

      router.push('/invalid-link');
    }
  };

  const handleShareClick = () => {
    const message = "Check this out!";  // it can be customized later
    const shareLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(shareLink, '_blank');
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {singlefeaturedData[0]?.CoverImage && (
          <Image src={singlefeaturedData[0]?.CoverImage} alt="customermedia featured" width={600} height={350} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.subHeadingContainer}>
          <p className={styles.VCdateContainer}>
            {FormateDate(singlefeaturedData[0]?.createdAt)}
          </p>
          <div className={styles.shareIcon} onClick={handleShareClick}>
            <FaShareAlt size={24} />
          </div>
        </div>
        {singlefeaturedData[0]?.MediaCompanyFrom && (
          <p className={styles.subHeading}>{singlefeaturedData[0]?.MediaCompanyFrom}</p>
        )}
        <div className={styles.headingContainer}>
          {singlefeaturedData[0]?.MediaTitle && (
            <p className={styles.heading}>{singlefeaturedData[0]?.MediaTitle}</p>
          )}
          <p className={styles.descriptioncontainer}>
            {singlefeaturedData[0]?.MediaDescription && singlefeaturedData[0]?.MediaDescription}
          </p>
        </div>

        {/* <ReadMore text={"Learn More"} onClick={handleReadMoreClick} /> */}
        <Link href={{
          pathname: "/pdfViewer",
          query: {
            title: singlefeaturedData[0]?.MediaTitle ?? "",
            coverImage: singlefeaturedData[0]?.CoverImage ?? "",
            pdfLink: videoLink
          }
        }}
          style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
          <span style={{ fontWeight: "bold" }}>Learn More</span>
          <Image src={arrowUpRight} alt="icon" className={""} />
        </Link>

      </div>
    </div>
  );
};

export default SmCustomersFeatured;
