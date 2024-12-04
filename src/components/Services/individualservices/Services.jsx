"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./Services.module.css";
import image1 from '../../../assests/Service/service1.webp';
import image2 from '../../../assests/Service/service2.webp';
import Dropdown from "@/components/DropDownComponent/DropDown";

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
    title: "Investment Plan",
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

  
  useEffect(() => {
    const parsedId = parseInt(queryId, 10);
    if (parsedId && parsedId >= 1 && parsedId <= options.length) {
      setActiveTab(parsedId - 1); 
    }
  }, [queryId]);

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
              {options.map((option, index) => (
                <button
                  key={option.id}
                  className={`${styles.tabButton} ${
                    activeTab === index ? styles.active : styles.nonactive
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {option.option}
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
          <h2>{servicesData[activeTab]?.title || "No Data"}</h2>
          <div className={styles.details}>
            <div className={styles.text}>
              {servicesData[activeTab]?.sections.map((section, idx) => (
                <div key={idx} className={styles.section}>
                  <h3>{section.heading}</h3>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
            
              {servicesData[activeTab]&&
                <Image 
                className={styles.image}
                src={servicesData[activeTab]?.image}
                alt={servicesData[activeTab]?.title || "Service"}
              />
              }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
