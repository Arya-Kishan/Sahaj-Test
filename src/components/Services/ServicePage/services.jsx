"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import Dropdown from "@/components/DropDownComponent/DropDown";
import ReactPlayer from "react-player";

function ServicesPage({ mainServicePageData = {} }) {
  const [activeOption, setActiveOption] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null); 
  const serviceRefs = useRef([]);
  const playerRefs = useRef([]); 
  const userPlayed = useRef([]); 

  useEffect(() => {
    userPlayed.current = mainServicePageData?.Services?.map(() => false);
  }, [mainServicePageData]);

  const scrollToService = (id) => {
    let serviceIndex;

    if (id === "all") {
      serviceIndex = 0;
    } else {
      serviceIndex = mainServicePageData?.Services?.findIndex(
        (service) => service._id === id
      );

      if (serviceIndex !== -1 && serviceRefs.current[serviceIndex]) {
        const elementTop =
          serviceRefs.current[serviceIndex].getBoundingClientRect().top +
          window.scrollY;

        const offset = window.innerWidth <= 768 ? 350 : 80;

        window.scrollTo({
          top: elementTop - offset,
          behavior: "smooth",
        });
      } else {
        console.error("Service not found or ref missing:", id);
      }
    }
  };

  const handlePlay = (index) => {
    userPlayed.current[index] = true; 
    setActiveVideoIndex(index); 
  };

  const handlePause = (index) => {
    if (activeVideoIndex === index) {
      setActiveVideoIndex(null); 
    }
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const index = playerRefs.current.indexOf(entry.target);
      if (index !== -1 && userPlayed.current[index]) {
        if (entry.isIntersecting) {
          setActiveVideoIndex(index); 
        } else if (activeVideoIndex === index) {
          setActiveVideoIndex(null); 
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    playerRefs.current.forEach((player) => {
      if (player) observer.observe(player.wrapper);
    });

    return () => {
      playerRefs.current.forEach((player) => {
        if (player) observer.unobserve(player.wrapper);
      });
    };
  }, []);

  const newServiceOptions =
    mainServicePageData?.Services?.map((service) => ({
      _id: service._id,
      title: service.title,
    })) || [];

  const optionsWithAll = [
    { _id: "all", title: "All" },
    ...newServiceOptions,
  ];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.optionContainer}>
        <h3>
          {mainServicePageData?.serviceText || "What is included in 1st year"}
        </h3>
        <div className={styles.optionBox}>
          {optionsWithAll?.map((item, id) => (
            <button
              key={id}
              onClick={() => {
                scrollToService(item._id);
              }}
              className={styles.optionButton}
            >
              {item.title}
            </button>
          ))}
        </div>
        {optionsWithAll && (
          <div className={styles.dropDownBox}>
            <Dropdown
              title="All Services"
              value={activeOption}
              onChange={(index) => {
                setActiveOption(index);
                scrollToService(optionsWithAll[index]?._id);
              }}
              options={optionsWithAll}
            />
          </div>
        )}
      </div>
      <section className={styles.servicesContainer}>
        {mainServicePageData?.Services?.map((service, index) => (
          <div
            key={service._id}
            ref={(el) => (serviceRefs.current[index] = el)}
            className={`${styles.serviceCard} ${
              index % 2 !== 0 ? styles.reversCard : ""
            }`}
          >
            <div className={styles.serviceText}>
              <h4>{service.title}</h4>
              <p>{service.PitchLine}</p>
              <Link
                className={styles.readMore}
                href={{
                  pathname: "/individual/individualservices",
                  query: { id: service?._id, title: service?.MainTitle },
                }}
              >
                Read more →
              </Link>
            </div>
            <div className={styles.serviceImage}>
              {service?.isVideo ? (
                <ReactPlayer
                  className={styles.cardImage}
                  url={service?.Video}
                  playing={activeVideoIndex === index}
                  ref={(el) => (playerRefs.current[index] = el)}
                  controls
                  onPlay={() => handlePlay(index)}
                  onPause={() => handlePause(index)}
                />
              ) : (
                <img
                  className={styles.cardImage}
                  src={service.ServiceImage}
                  alt={service.title}
                />
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ServicesPage;
