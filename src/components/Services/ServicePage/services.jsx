"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import servicepic from "../../../assests/Service/service3.webp";
import servicepic1 from "../../../assests/Service/service4.webp";
import Dropdown from "@/components/DropDownComponent/DropDown";
import { getServicesTitles, getServicesData } from "@/services/service";

function ServicesPage() {
  const [activeOption, setActiveOption] = useState(0);
  const [serviceOptions, setOptions] = useState([]);
  const [serviceData, setServicesData] = useState([]);
  const serviceRefs = useRef([]);


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
  const getTitleData = async () => {
    try {
      const { res, err } = await getServicesTitles();
      if (res) {
        // console.log(res?.data);
        setOptions(res?.data)
      }
      else {
        setOptions([]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  

  const getAllServices = async () => {
    const data = {
      page: 1,
      limit: 5,
      servicetitle: "All"
    }
    try {
      const { res, err } = await getServicesData(data);
      if (res) {
        console.log(res.data?.items);
        setServicesData(res?.data?.items)
      }
      else {
        setOptions([]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTitleData();
    getAllServices();
  }, []);
  const services = [
    {
      id: 2,
      title: "Goal/Retirement/F.I.R.E Planning",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic1,
    },
    {
      id: 3,
      title: "Investment plan",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic1,
    },
    {
      id: 4,
      title: "Insurance Planning",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic,
    },
    {
      id: 5,
      title: "Tax planning",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic1,
    },
    {
      id: 6,
      title: "Net worth analysis",
      description:
        "Our risk profiling process helps you identify your comfort level with investment risk, ensuring your financial plan aligns with your preferences.",
      image: servicepic,
    },
  ];

  const scrollToService = (id) => {
    const serviceIndex = services.findIndex((service) => service.id === id);
    if (serviceIndex !== -1 && serviceRefs.current[serviceIndex]) {
      serviceRefs.current[serviceIndex].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.optionContainer}>
        <h3>What is included in 1st year</h3>
        <div className={styles.optionBox}>
          {serviceOptions &&
            serviceOptions.map((item) => (
              <button
                key={item._id}
                onClick={() => scrollToService(item._id)}
                className={styles.optionButton}
              >
                {item.title}
              </button>
            ))}
        </div>
        <div className={styles.dropDownBox}>
          <Dropdown
            title="Select Service"
            value={activeOption}
            onChange={(index) => {
              setActiveOption(index);
              scrollToService(options[index]?.id);
            }}
            options={options}
          />
        </div>
      </div>
      <section className={styles.servicesContainer}>
        {serviceData &&
        serviceData?.map((service, index) => (
          <div
            key={service._id}
            ref={(el) => (serviceRefs.current[index] = el)}
            className={`${styles.serviceCard} ${index % 2 !== 0 ? styles.reversCard : ""
              }`}
          >
            <div className={styles.serviceText}>
              <h4>{service.title}</h4>
              <p>{service.PitchLine}</p>
              <Link
                className={styles.readMore}
                href={{
                  pathname: "/individual/individualservices",
                  query: { id: service._id },
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
