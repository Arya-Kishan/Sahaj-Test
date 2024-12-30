"use client"
import { useSelector, useDispatch } from "react-redux";
import { toggleBookCallModal } from "@/store/slices/modalSlice";
import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import Image from "next/image";
import playlogo from '../../../public/logos/play.png'



const Carousel = ({ bannerData }) => {
  const dispatch = useDispatch()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideData, SetSlideData] = useState([]);
  const [isPaused, setIsPaused] = useState(false);


  const openModal = () => {
    console.log('Book a call clicked');
    dispatch(toggleBookCallModal());
  };

  const handleStepClick = (index) => {
    if (index === 0) {
      openModal();
    } else if (index === 1) {
      window.location.href = '/media/pressCoverage';
    } else if (index === 2) {
      window.location.href = '/services';
    }
  };

  useEffect(() => {
    if (bannerData) {
      console.log(bannerData[0]?.HomeScreenBanner);
      SetSlideData(bannerData[0]?.HomeScreenBanner);
    }

  }, [bannerData])

  useEffect(() => {
    if (!slideData?.length || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideData, isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={`${styles.carouselContainer} ${currentSlide === 2 ? styles.sideImage : ""}`}

    >
      <div className={styles.svgtopWave}>
        <svg className={styles.topsvg} viewBox="0 0 1440 243" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M0 1.94354L39.6 24.1149C80.4 46.2863 159.6 90.629 240 75.8481C320.4 61.0672 399.6 -12.8374 480 1.94354C560.4 16.7245 639.6 120.191 720 127.581C800.4 134.972 879.6 46.2863 960 31.5054C1040.4 16.7245 1119.6 75.8481 1200 105.41C1280.4 134.972 1359.6 134.972 1400.4 134.972H1440V268H1400.4C1359.6 268 1280.4 268 1200 268C1119.6 268 1040.4 268 960 268C879.6 268 800.4 268 720 268C639.6 268 560.4 268 480 268C399.6 268 320.4 268 240 268C159.6 268 80.4 268 39.6 268H0L0 1.94354Z" fill="#C18823" fillOpacity="0.15" />
        </svg>
      </div>
      <div className={styles.svgbottomWave}>
        <svg className={styles.bottomsvg} viewBox="0 0 1440 221" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M0 160.546L48 136.809C96 113.072 192 65.5981 288 65.5981C384 65.5981 480 113.072 576 132.062C672 151.052 768 141.557 864 108.325C960 75.0929 1056 18.1239 1152 3.88162C1248 -10.3606 1344 18.1239 1392 32.3661L1440 46.6084V246H1392C1344 246 1248 246 1152 246C1056 246 960 246 864 246C768 246 672 246 576 246C480 246 384 246 288 246C192 246 96 246 48 246H0L0 160.546Z" fill="url(#paint0_linear_1338_16680)" />
          <defs>
            <linearGradient id="paint0_linear_1338_16680" x1="1079.16" y1="50.4818" x2="1049.12" y2="293.361" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F8DB75" />
              <stop offset="1" stopColor="#A4730F" />
            </linearGradient>
          </defs>
        </svg>
      </div>


      {slideData &&

        slideData?.map((slide, index) => (
          <div
            key={index}

            className={`${styles.slide} 
          ${index === currentSlide ? styles.active : ""}
          
          `}
          >
            <div className={styles.headerBox}>
              <h1 className={styles.title}>{slide.Title}</h1>
              <p className={styles.subtitle}>{slide.Description}</p>
              <button className={styles.ctaButton} onClick={() => handleStepClick(index)} >{slide.ButtonText}</button>
              {slide.Tags && (
                <div className={styles.features}>
                  {slide?.Tags?.map((feature, idx) => (
                    <div className={styles.iconBox} key={idx}><svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                      <path d="M11.0248 0C11.8825 9.375e-05 12.7107 0.312469 13.3547 0.878813L13.5245 1.03866L14.2941 1.80834C14.5053 2.01816 14.7811 2.15062 15.077 2.18428L15.2259 2.19309H16.3285C18.1993 2.193 19.745 3.65306 19.8514 5.52084L19.8568 5.72156V6.82416C19.8568 7.12191 19.9583 7.41187 20.1414 7.64344L20.2406 7.75369L21.0091 8.52328C22.3314 9.83803 22.4023 11.9546 21.1712 13.3551L21.0114 13.5248L20.2417 14.2944C20.0319 14.5057 19.8994 14.7815 19.8657 15.0773L19.8568 15.2262V16.3288C19.857 18.1996 18.397 19.7453 16.5292 19.8517L16.3285 19.8572H15.2259C14.9286 19.8573 14.6399 19.9575 14.4066 20.1417L14.2963 20.2409L13.5267 21.0095C12.212 22.3317 10.0954 22.4027 8.69496 21.1716L8.52518 21.0116L7.75559 20.242C7.54437 20.0322 7.26856 19.8997 6.97268 19.866L6.82381 19.8572H5.72121C3.85043 19.8573 2.30468 18.3972 2.19828 16.5294L2.19284 16.3288V15.2261C2.19274 14.9288 2.09253 14.6403 1.90831 14.4069L1.80912 14.2967L1.04056 13.527C-0.281694 12.2123 -0.352662 10.0957 0.878463 8.69531L1.03831 8.52553L1.80799 7.75584C2.01781 7.54462 2.15027 7.26881 2.18393 6.97303L2.19284 6.82416V5.72156L2.19828 5.52084C2.30028 3.72994 3.72959 2.30053 5.52049 2.19863L5.72121 2.19309H6.82381C7.12109 2.193 7.40974 2.09278 7.64309 1.90866L7.75334 1.80938L8.52293 1.04091C9.18518 0.374719 10.0856 0.0001875 11.0248 0ZM15.1013 8.02931C14.6707 7.59891 13.9727 7.59891 13.5421 8.02931L9.91118 11.6592L8.48553 10.2346L8.38184 10.1431C7.71031 9.62391 6.72865 10.0264 6.61474 10.8675C6.56871 11.2079 6.68393 11.5504 6.92637 11.7937L9.13165 13.9989L9.23524 14.0904C9.67418 14.4309 10.2979 14.3918 10.6907 13.9989L15.1013 9.58847L15.1928 9.48478C15.5333 9.04584 15.4941 8.42212 15.1013 8.02931Z" fill="url(#paint0_linear_922_24726)" />
                      <defs>
                        <linearGradient id="paint0_linear_922_24726" x1="16.5244" y1="4.5249" x2="6.02441" y2="19.0249" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#F8DB75" />
                          <stop offset="1" stop-color="#A4730F" />
                        </linearGradient>
                      </defs>
                    </svg>
                      <p>{feature.tag}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {slide?.VideoLink ? (
              <div className={styles.videoContainer}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className={styles.videoWrapper}>
                  <iframe
                    id="videoPlayer"
                    className={styles.video}
                    src={slide?.VideoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  {/* <Image
                    src={playlogo}
                    alt="play button"
                    className={styles.playButton}
                    onClick={() => {
                      const iframe = document.getElementById("videoPlayer");
                      const player = new YT.Player(iframe);
                      player.playVideo();
                    }}
                  /> */}
                </div>
              </div>
            ) : (
              ""
            )}

            {currentSlide === 2 ? <>
              <div style={{ border: "1px solid black" }} className={styles.sidesImage}></div></> : ""}
            {slide?.Images.length > 0 ? (
              <div className={styles.pressLogos}>
                {slide?.Images?.map((logo, idx) => (
                  <div key={idx} className={styles.imagesBox}>
                    <img

                      src={logo.fileUrl}
                      alt={`Logo ${idx + 1}`}
                      className={styles.logoImage}
                    />
                  </div>
                ))}
              </div>
            ) : ""}


            <button className={styles.ctamButton}>{slide.buttonText}</button>

          </div>
        ))}

      <div className={styles.dotsContainer}>
        {slideData &&
          slideData?.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
