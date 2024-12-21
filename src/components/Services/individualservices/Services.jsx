"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./Services.module.css";
import image1 from '../../../assests/Service/service1.webp';
import image2 from '../../../assests/Service/service2.webp';
import Dropdown from "@/components/DropDownComponent/DropDown";
import { getServicesTitles, getServicesData } from "@/services/service";

const servicesData = [
  {
    title: "All",
    sections: [
      { heading: "Assessment", text: "The advisor conducts an in-depth analysis of your risk tolerance, considering factors such as age, income, investment experience, and psychological comfort with market volatility." },
      { heading: "Portfolio Allocation", text: "Based on your risk profile, the advisor recommends an appropriate mix of assets, balancing growth potential with the level of risk you're comfortable with." },
      { heading: "Ongoing Review", text: "As your life circumstances or market conditions change, your risk profile may need to be updated, and the advisor will adjust your portfolio accordingly." },
    ],
    image: image1,
  },

  {
    title: "Goal-Based Planning",
    sections: [
      { heading: "Assessment", text: "The advisor conducts an in-depth analysis of your risk tolerance, considering factors such as age, income, investment experience, and psychological comfort with market volatility." },
      { heading: "Portfolio Allocation", text: "Based on your risk profile, the advisor recommends an appropriate mix of assets, balancing growth potential with the level of risk you're comfortable with." },
      { heading: "Ongoing Review", text: "As your life circumstances or market conditions change, your risk profile may need to be updated, and the advisor will adjust your portfolio accordingly." },
    ],
    image: image1,
  },

  {
    title: "Risk profiling",
    sections: [
      { heading: "Investment Analysis", text: "Analyze market trends to recommend optimal investment opportunities tailored to individual goals." },
      { heading: "Portfolio Growth", text: "Strategies for long-term growth to ensure your investments outperform market benchmarks." },
    ],
    image: image1,
  },
  {
    title: "Insurance Planning",
    sections: [
      { heading: "Policy Review", text: "Review current insurance policies to identify gaps in coverage." },
      { heading: "Risk Management", text: "Mitigate financial risks by choosing the right insurance products." },
    ],
    image: image2,
  },
  {
    title: "Tax Planning",
    sections: [
      { heading: "Policy Review", text: "Review current insurance policies to identify gaps in coverage." },
      { heading: "Risk Management", text: "Mitigate financial risks by choosing the right insurance products." },
    ],
    image: image2,
  },
  {
    title: "Net Worth Analysis",
    sections: [
      { heading: "Identifying Goals", text: "The advisor helps you clearly define your financial goals, whether short-term (e.g., buying a car), medium-term (e.g., saving for college), or long-term (e.g., retirement)." },
      { heading: "Strategic Roadmap", text: "They create a customized financial plan that outlines the steps and timelines required to achieve each goal, often incorporating savings, investment strategies, and budget adjustments." },
      { heading: "Progress Tracking", text: "Regular reviews ensure that you're on track to meet your goals, and adjustments are made as needed to accommodate any changes in your financial situation or objectives." },
    ],
    image: image2,
  },

];

const options = [
  { id: 1, option: "All" },
  { id: 2, option: "Goal-Based Planning" },
  { id: 3, option: "Investment Plan" },
  { id: 4, option: "Insurance Planning" },
  { id: 5, option: "Tax Planning" },
  { id: 6, option: "Net Worth Analysis" },
  { id: 7, option: "Cash Flow Analysis" },
  { id: 8, option: "Risk Planning" },
];

const Services = () => {
  const searchParams = useSearchParams();
  const queryId = searchParams.get("id");
  const [activeTab, setActiveTab] = useState(0);
  const [serviceOptions, setOptions] = useState([]);
  const [serviceData, setServicesData] = useState([]);


  const getTitleData = async () => {
    try {
      const { res, err } = await getServicesTitles();
      if (res) {
        console.log(res?.data);
        setOptions(res?.data)
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
  }, [])

  useEffect(() => {
    if (queryId) {
      // Decode query parameter and set the corresponding activeTab
      const decodedQueryId = decodeURIComponent(queryId).replace("+", " ");
      const matchedOption = options.find(option => option.option === decodedQueryId);
      if (matchedOption) {
        setActiveTab(options.indexOf(matchedOption));
      }
    } else {
      // Default to the first tab if no query parameter
      setActiveTab(0);
    }
  }, [queryId, options]);

  useEffect(() => {
    if (serviceOptions.length > 0) {
      // Fetch services data when activeTab changes
      const selectedService = serviceOptions[activeTab]?.title || "All";
      getAllServices(selectedService);
    }
  }, [activeTab, serviceOptions]);

  const getAllServices = async (serviceTitle = "All") => {
    const data = {
      page: 1,
      limit: 5,
      servicetitle: serviceTitle
    };
    try {
      const { res, err } = await getServicesData(data);
      if (res) {
        console.log(res.data?.items);
        setServicesData(res?.data?.items);
      } else {
        setServicesData([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            {serviceOptions &&
              serviceOptions?.map((option, index) => (
                <button
                  key={option.id}
                  className={`${styles.tabButton} ${activeTab === index ? styles.active : styles.nonactive
                    }`}
                  onClick={() => setActiveTab(index)}
                >
                  {option.title}ss
                </button>
              ))}
          </div>
          <div className={styles.dropDownBox}>
            <Dropdown
              title="All Services"
              value={activeTab}
              onChange={(index) => setActiveTab(index)}
              options={options}
            />
          </div>

        </div>
        <div className={styles.content}>
          {serviceData &&
            serviceData?.map((section, idx) => {
              return <>
                <h2>{section?.title}</h2>
                <div className={styles.details}>
                  <div className={styles.text}>

                    {section?.ContentSubPointWise?.map((item, i) => {
                      return <>
                        <div key={i} className={styles.section}>
                          <h3>{item?.MainPoint}</h3>
                          <div className={styles.subPoints} >
                            {item?.SubPoints.map((ele, idx) => <p key={idx} >{ele}</p>)}
                          </div>
                        </div>
                      </>
                    })}

                  </div>

                  {servicesData[activeTab] &&
                    <img
                      className={styles.image}
                      src={section?.ServiceImage}
                      alt={section?.title}
                    />
                  }

                </div>

              </>
            })}
        </div>
      </div>
    </>
  );
};

export default Services;
