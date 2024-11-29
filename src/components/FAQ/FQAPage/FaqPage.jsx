"use client";
import { useState,useEffect } from "react";
import styles from "./faqPage.module.css";
import Image from "next/image";
import faq1 from "../../../assests/FAQ/faq1.webp";
import faq2 from "../../../assests/FAQ/faq2.webp"
import { FaSearch } from "react-icons/fa";
import plusCircle from "../../../assests/FAQ/plusCircle.svg";
import minusCircle from "../../../assests/FAQ/minusCircle.svg";

const filters=[
    { id: 0, option: "All" },
    { id: 1, option: "Fee and Timeline" },
    { id: 2, option: "Process FAQs" },
    { id: 3, option: "Meetings" },
    { id: 4, option: "Clients" },
    { id: 5, option: "Other" },
]

const faqData=[
    {
        id: 1,
        title: "Fee and Timeline",
        questions:
        [
            {   
                qNumber:1,
                question:"What are your fees for financial planning services?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {
                qNumber:2,
                question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {   qNumber:3,
                question:"When can I expect to see results from your services?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
         ],
        image:faq1 , 
    },
    {
        id: 2,
        title: "Process FAQs",
        questions:
        [
            {   qNumber:1,
                question:"What information do I need to provide?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."     
            },
            {
                qNumber:2,
                question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {
                qNumber:3,
                question:"When can I expect to see results from your services?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
         ],
        image:faq2, 
    },
    {
        id: 3,
        title: "Meetings",
        questions:
        [
            {   qNumber:1,
                question:"What information do I need to provide?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."     
            },
            {
                qNumber:2,
                question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {
                qNumber:3,
                question:"When can I expect to see results from your services?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
         ],
        image: faq1, 
    },
    {
        id: 4,
        title: "Clients",
        questions:
        [
            {   qNumber:1,
                question:"What information do I need to provide?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."     
            },
            {
                qNumber:2,
                question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {
                qNumber:3,
                question:"When can I expect to see results from your services?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
         ],
        image: faq2, 
    },
    {
        id: 5,
        title: "Other",
        questions:
        [
            {   qNumber:1,
                question:"What information do I need to provide?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."     
            },
            {
                qNumber:2,
                question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {
                qNumber:3,
                question:"When can I expect to see results from your services?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
         ],
        image: faq1, 
    },
    
]

const FaqPage = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [openQuestions, setOpenQuestions] = useState({}); 

  const filteredData = activeFilter === 0
    ? faqData
    : faqData.filter((data) => data.id === activeFilter);

   useEffect(() => {
      setOpenQuestions({});
    }, [activeFilter]);
 
  const toggleAccordion = (sectionId, qNumber) => {
    const uniqueKey = `${sectionId}-${qNumber}`; 
    setOpenQuestions((prev) => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey],
    }));
  };



  return (
    <div className={styles.faqContainer}>
      <div className={styles.filterHeader}>
        <div className={styles.searchContainer}>
          <p className={styles.faqText}>FAQs</p>
          <div className={styles.searchBox}>
            <FaSearch size={24} />
          </div>
        </div>
        <hr className={styles.line}/>
        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={activeFilter===filter.id ? `${styles.filterButton} ${styles.activeButton}`:styles.filterButton}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.option}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterContent}>
        {filteredData.map((faq, index) => (
          <div className={styles.infoContainer} key={index}>
            <div className={styles.textBox}>
              <div className={styles.filterName}>
                <p>{faq.title}</p>
              </div>
              {faq.questions.map((q) =>{
                  const uniqueKey = `${faq.id}-${q.qNumber}`;
                  return (
                  
                    <div className={styles.accordionContainer} key={uniqueKey}>
                    <div
                      className={styles.questionContainer}
                     
                      role="button"
                      tabIndex="0"
                      onClick={() => toggleAccordion(faq.id, q.qNumber)}
                    >
                      <div  className={styles.faqBox}>
                          <p className={styles.question}>{q.question}</p>
                          {openQuestions[uniqueKey] && (
                          <p className={styles.answer}>{q.answer}</p>
                        )}
                      </div>
                   
                      <Image
                        src={openQuestions[uniqueKey] ? minusCircle : plusCircle}
                        alt="plus-minus-icon"
                      />
                    
                    </div>
                    
                  </div>
                  )
                
                })
             }
            </div>
            <div className={styles.imageBox}>
              <Image src={faq.image} alt="Image" className={styles.Img}/>
              <svg
                  width="80"
                  height="80"
                  className={styles.videoIcon}
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="40" fill="white" fillOpacity="0.2" />
                  <circle cx="40" cy="40" r="30" fill="white" fillOpacity="0.8" />
                  <path
                    d="M40.0007 56.6654C49.2054 56.6654 56.6673 49.2034 56.6673 39.9987C56.6673 30.794 49.2054 23.332 40.0007 23.332C30.7959 23.332 23.334 30.794 23.334 39.9987C23.334 49.2034 30.7959 56.6654 40.0007 56.6654Z"
                    stroke="#C18823"
                    strokeOpacity="0.75"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.666 33.332L46.666 39.9987L36.666 46.6654V33.332Z"
                    stroke="#C18823"
                    strokeOpacity="0.75"
                    strokeWidth="3.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
