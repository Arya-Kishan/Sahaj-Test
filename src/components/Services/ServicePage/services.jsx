"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import Dropdown from "@/components/DropDownComponent/DropDown";

function ServicesPage({mainServicePageData={}}) {
  const [activeOption, setActiveOption] = useState(0);
  const serviceRefs = useRef([]);

  

  const scrollToService = (id) => {
    let serviceIndex;

    if (id === "all") {
      serviceIndex = 0; 
    }
    else{
    serviceIndex = mainServicePageData?.Services?.findIndex((service) => service._id === id);
  
    if (serviceIndex !== -1 && serviceRefs.current[serviceIndex]) {
      const elementTop = serviceRefs.current[serviceIndex].getBoundingClientRect().top + window.scrollY;
  
   
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

const newServiceOptions = mainServicePageData?.Services?.map(service => ({
  _id: service._id,
  title: service.title
})) || [];

const optionsWithAll = [
  { _id: "all", title: "All" }, 
  ...newServiceOptions, 
];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.optionContainer}>
        <h3>{mainServicePageData?.serviceText || "What is included in 1st year"}</h3>
        <div className={styles.optionBox}>
          {optionsWithAll?.map((item,id) => (
            <button
              key={id}
              onClick={() => {scrollToService(item._id)
              }}
              className={styles.optionButton}
            >
              {item.title}
            </button>
          ))}
        </div>
        {optionsWithAll && 
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
      </div>}
        
      </div>
      <section className={styles.servicesContainer}>
        {mainServicePageData?.Services?.map((service, index) => (
          <div
            key={service._id}
            ref={(el) => (serviceRefs.current[index] = el)}
            className={`${styles.serviceCard} ${index % 2 !== 0 ? styles.reversCard : ""}`}
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
              <img
                className={styles.cardImage}
                src={service.ServiceImage}
                alt={service.title}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ServicesPage;
