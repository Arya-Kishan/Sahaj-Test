"use client";
import styles from './reviewsContainer.module.css';
import Image from 'next/image';
import starIcon from '../../assests/Blog/starIcon.webp';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { toggleBookCallModal } from '@/store/slices/modalSlice';
import { getReviewFooterData } from "../../services/reviews";



const ReviewsContainer = () => {
  const dispatch = useDispatch();
  const [reviewsFooterData, setReviewsFooterData] = useState({})

  const openModal = () => {
    console.log('Book a call clicked');
    dispatch(toggleBookCallModal());

  };
  const getReviewData = async () => {

    try {
      const { res, err } = await getReviewFooterData()
      if (res) {
        setReviewsFooterData(res.data)
      }
      else {
        console.log(err)
      }
    }
    catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getReviewData()
  }, [])

  return (
    <div className={styles.container}>
      {reviewsFooterData?.rating?.length > 0 &&
        <div className={styles.reviewSection}>

          {reviewsFooterData?.rating[0]?.ratings?.map((rateing, index) => (
            <div className={styles.review} key={index}>
              <div className={styles.iconText}>
                <Image src={rateing?.CompanyLogo} alt="Google" className={styles.logo} width={50} height={50} />
                <span>200+ Reviews</span>
              </div>
              <div className={styles.rating}>
                <span className={styles.ratingNumber}>{rateing?.Rating}</span>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src={starIcon}
                      alt="star"
                      className={styles.star}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
       }

      <div className={styles.separator}></div>
      <div className={styles.companyInfoSection}>

        <div className={styles.financialGuidanceContanier}>
          <div className={styles.financialGuidanceinfo}>
            <p className={styles.financialGuidanceHeading}>
              {reviewsFooterData?.title || ""}
            </p>
            <p className={styles.financialGuidancedescription}>
              {reviewsFooterData?.description || ""}
            </p>
          </div>

          <div className={styles.reviewPortfolioButtonbox}>
            {reviewsFooterData?.buttonText &&
              <button className={styles.reviewPortfolioButton} onClick={openModal} >
                {reviewsFooterData?.buttonText}
              </button>
            }
          </div>
        </div>
      </div>
    </div>
    // <></>
  );
};

export default ReviewsContainer;
