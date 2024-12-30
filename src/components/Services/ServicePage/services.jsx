"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import Dropdown from "@/components/DropDownComponent/DropDown";
import { getServicesTitles, getServicesData } from "@/services/service";
import logo from '../../../assests/Service/svg.png';
import Image from "next/image";
import DownloadModal from '@/components/DownloadModal/Download';

const services = [
  "Goal plan/F.I.R.E/Retirement plan",
  "Investment Plan",
  "Insurance Plan",
  "Tax Plan",
  "Net worth analysis",
  "Cash analysis",
  "Risk Planning",
];

function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(0);
  const [serviceOptions, setOptions] = useState([]);
  const [serviceData, setServicesData] = useState([]);
  const serviceRefs = useRef([]);

  const getTitleData = async () => {
    try {
      const { res, err } = await getServicesTitles();
      if (res) {
        setOptions(res?.data || []);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error("Error fetching service titles:", error);
    }
  };

  const getAllServices = async (title = "All") => {
    const data = {
      page: 1,
      limit: 10,
      servicetitle: title,
    };
    try {
      const { res, err } = await getServicesData(data);
      if (res) {
        setServicesData(res?.data?.items || []);
      } else {
        setServicesData([]);
      }
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };

  useEffect(() => {
    getTitleData();
    getAllServices();
  }, []);
   
  const scrollToService = (id) => {
    const serviceIndex = serviceData.findIndex((service) => service._id === id);
  
    if (serviceIndex !== -1 && serviceRefs.current[serviceIndex]) {
     
      const elementTop = serviceRefs.current[serviceIndex].getBoundingClientRect().top + window.scrollY;
   
      window.scrollTo({
        top: elementTop - 40, 
        behavior: "smooth",
      });
    } else {
      console.error("Service not found or ref missing:", id);
    }
  };
  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.optionContainer}>
        <div className={styles.container2}>
        <h3 className={styles.header}>What is included in 1st year</h3>
      
        <ul className={styles.serviceList}>
          {services.map((service, index) => (
            <li key={index} className={styles.serviceListItem}>
              <Image
                src={logo}
                alt="tick image"
                className={styles.ticklogo}
              />
              <h4 className={styles.serviceTitle}>{service}</h4>
            </li>
          ))}
        </ul>
        </div>
        <div className={styles.expertBox}>
        <div className={styles.content}>
          <p className={styles.headline}>Download Your Free Financial Plan</p>
          <p className={styles.para}>See how <span className={styles.head}>Sahaj<span className={styles.money}>Money</span></span> simplifies financial planning </p></div>
  <button className={styles.downloadButton} onClick={() => setIsModalOpen(true)} >Download Now</button>
  <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
        <div className={styles.optionBox}>
          {serviceOptions.map((item,id) => (
            <button
              key={id}
              onClick={() => {scrollToService(item._id)
                console.log("the id is,",id,item._id)
              }}
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
              scrollToService(serviceOptions[index]?._id);
            }}
            options={serviceOptions}
          />
        </div>
      </div>
      <section className={styles.servicesContainer}>
        {serviceData.map((service, index) => (
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
                  query: { id: service?._id },
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
