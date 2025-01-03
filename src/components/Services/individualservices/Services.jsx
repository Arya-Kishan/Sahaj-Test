"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./Services.module.css";
import image1 from "../../../assests/Service/service1.webp";
import image2 from "../../../assests/Service/service2.webp";
import Dropdown from "@/components/DropDownComponent/DropDown";
import { getServicesTitles, getServicesData } from "@/services/service";
import {getMainPageServicesData } from "@/services/service";

const Services = () => {
  const searchParams = useSearchParams();
  const queryId = searchParams.get("id");
  const [activeTab, setActiveTab] = useState(0);
  const [serviceOptions, setOptions] = useState([]);
  const [serviceData, setServicesData] = useState([]);
  const [mainServicePageData,setMainServicePageData]=useState({})

  const getTitleData = async () => {
    try {
      const { res, err } = await getServicesTitles();
      if (res) {
        setOptions(res?.data);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error("Error fetching service titles:", error);
    }
  };

  useEffect(() => {
    getTitleData();
  }, []);

  useEffect(() => {
    if (serviceOptions.length > 0) {
      const index = serviceOptions.findIndex((option) => option._id === queryId);
      if (index !== -1) {
        setActiveTab(index);
      }
      getAllServices(queryId || serviceOptions[0]._id);
    }
  }, [queryId, serviceOptions]);

  const getAllServices = async (serviceId) => {
    const data = {
      page: 1,
      limit: 10,
      servicetitle: serviceId,
    };
    try {
      const { res, err } = await getServicesData(data);
      if (res) {
        setServicesData(res?.data?.items);
      } else {
        setServicesData([]);
      }
    } catch (error) {
      console.error("Error fetching service data:", error);
    }
  };
    
  const getMainPageServices = async () => {
     
    try {
      const { res, err } = await getMainPageServicesData();
      if (res) {
        setMainServicePageData(res?.data || {});
        console.log("the main page  service data is",res.data)
      } else {
        setMainServicePageData({});
      }
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };
  useEffect(() => {
    getMainPageServices();
  }, []);
console.log("active tab",activeTab)
  return (
    <>
      <div className={styles.expertBox}>
        <h1>
          Expert Guidance,
          <br /> Personalized Plans
        </h1>
      </div>
      <div className={styles.services}>
        <div className={styles.tabs}>
          <h3>Services</h3>
          <hr />
          <div className={styles.optionBox}>
            {mainServicePageData?.Services?.map((option, index) => (
              <button
                key={option._id}
                className={`${styles.tabButton} ${
                  activeTab === index ? styles.active : styles.nonactive
                }`}
                onClick={() => {
                  setActiveTab(index);
                  getAllServices(option._id);
                }}
              >
                {option.title}
              </button>
            ))}
          </div>
          <div className={styles.dropDownBox}>
            <Dropdown
              title={serviceOptions[activeTab]?.title}
              value={activeTab}
              onChange={(index) =>
                 {setActiveTab(index)
                 getAllServices(serviceOptions[index]?._id)
                }}
              options={serviceOptions}
            />
          </div>
        </div>
        <div className={styles.content}>
          {serviceData?.map((section, idx) => (
            <div key={idx}>
              <h2 className={styles.mainHeading} >{section?.title}</h2>
              <div className={styles.details}>
                <div className={styles.text}>
                  {section?.ContentSubPointWise?.map((item, i) => (
                    <div key={i} className={styles.section}>
                      <h3>{item?.MainPoint}</h3>
                      <div className={styles.subPoints}>
                        {item?.SubPoints?.map((ele, idx) => (
                          <p key={idx}>{ele}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                 
                    <img
                      className={styles.image}
                      src={section?.ServiceImage}
                      alt={section?.title}
                    />
                  
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
