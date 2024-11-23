"use client"
import { useState } from "react";
import Image from "next/image";
import styles from "./Services.module.css";
import image1 from '../../../assests/Service/service1.webp';
import image2 from '../../../assests/Service/service2.webp';

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
    title: "Risk profiling",
    sections: [
      { heading: "Assessment", text: "The advisor conducts an in-depth analysis of your risk tolerance, considering factors such as age, income, investment experience, and psychological comfort with market volatility." },
      { heading: "Portfolio Allocation", text: "Based on your risk profile, the advisor recommends an appropriate mix of assets, balancing growth potential with the level of risk you're comfortable with." },
      { heading: "Ongoing Review", text: "As your life circumstances or market conditions change, your risk profile may need to be updated, and the advisor will adjust your portfolio accordingly." },
    ],
    image: image2,
  },
  {
    title: "Goal-Based Planning",
    sections: [
      { heading: "Identifying Goals", text: "The advisor helps you clearly define your financial goals, whether short-term (e.g., buying a car), medium-term (e.g., saving for college), or long-term (e.g., retirement)." },
      { heading: "Strategic Roadmap", text: "They create a customized financial plan that outlines the steps and timelines required to achieve each goal, often incorporating savings, investment strategies, and budget adjustments." },
      { heading: "Progress Tracking", text: "Regular reviews ensure that you're on track to meet your goals, and adjustments are made as needed to accommodate any changes in your financial situation or objectives." },
    ],
    image: image1,
  },
  {
    title: "Retirement Planning",
    sections: [
      { heading: "Current Savings Assessment", text: "The advisor evaluates your current retirement savings, including employer-sponsored plans (like 401(k)s) and individual retirement accounts (IRAs)." },
      { heading: "Future Needs Projection", text: "They estimate the amount of money you will need to maintain your desired lifestyle during retirement, considering factors like inflation, healthcare costs, and life expectancy." },
      { heading: "Savings and Investment Strategy", text: "A plan is developed to bridge the gap between your current savings and your retirement needs, involving a mix of investments, additional savings, and possibly downsizing or other adjustments." },
      { heading: "Estate Tax Considerations", text: "For those with significant estates, the advisor may help with planning to minimize estate taxes, including the use of trusts, gifts, and other estate planning tools." },
    ],
    image: image2,
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    <div className={styles.expertBox}>
        <h1>Expert Guidance,
            <br/> Personalized Plans</h1>
    </div>
    <div className={styles.services}>
      <div className={styles.tabs}>
        <h3>Services</h3>
        <hr />
       <div className={styles.optionBox}>
       {servicesData.map((service, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === index ? styles.active : styles.nonactive}`}
            onClick={() => setActiveTab(index)}
          >
            {service.title}
          </button>
        ))}
       </div>
      </div>
      <div className={styles.content}>
        <h2>{servicesData[activeTab].title}</h2>
        <div className={styles.details}>
          <div className={styles.text}>
            {servicesData[activeTab].sections.map((section, idx) => (
              <div key={idx} className={styles.section}>
                <h3>{section.heading}</h3>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.image}>
            <Image src={servicesData[activeTab].image} alt={servicesData[activeTab].title} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
