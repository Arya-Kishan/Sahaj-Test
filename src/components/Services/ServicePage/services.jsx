"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import servicepic from '../../../assests/Service/service3.webp'
import servicepic1 from '../../../assests/Service/service4.webp'

function ServicesPage() {
  const [selectedOption, setSelectedOption] = useState(1);

  const options = [
    { id: 1, option: "All" },
    { id: 2, option: "Goal plan/F.I.R.E/ Retirement plan" },
    { id: 3, option: "Investment plan" },
    { id: 4, option: "Insurance planning" },
    { id: 5, option: "Tax planning" },
    { id: 6, option: "Net worth analysis" },
    { id: 7, option: "Cash flow analysis" },
    { id: 8, option: "Risk planning" },
  ];

  const services = [
    {
      id: 1,
      title: "Goal/Retirement/F.I.R.E Planning",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic1, 
    },
    {
      id: 2,
      title: "Investment plan",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic1, 
    },
    {
      id: 3,
      title: "Insurance Planning",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic, 
    },
    {
      id: 4,
      title: "Tax planning",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic1, 
    },
    {
      id: 5,
      title: "Net worth analysis",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic, 
    },
  ];

  const filteredServices =
    selectedOption === 1
      ? services
      : services.filter((service) => service.id === selectedOption);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.optionContainer}>
        <h3>What is included in 1st year</h3>
        <div className={styles.optionBox}>
          {options.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedOption(item.id)}
              className={
                selectedOption === item.id
                  ? `${styles.optionButton} ${styles.selected}`
                  : styles.optionButton
              }
            >
              {item.option}
            </button>
          ))}
        </div>
      </div>
      <section className={styles.servicesContainer}>
        {filteredServices.map((service, index) => (
          <div key={service.id} className={`${styles.serviceCard} ${index%2!==0? styles.reversCard:""}`}>
            <div className={styles.serviceText}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <Link className={styles.readMore} href={{ pathname: "/individualservices", query: { id: service.id } }}>Read more →</Link>
            </div>
            <div className={styles.serviceImage}>
              <Image className={styles.cardImage} src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ServicesPage;
