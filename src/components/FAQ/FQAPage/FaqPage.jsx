"use client";
import styles from "./faqPage.module.css";
import Image from "next/image";
import faq1 from "../../../assests/FAQ/faq1.webp";
import faq2 from "../../../assests/FAQ/faq2.webp"
import { FaSearch } from "react-icons/fa";

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
            {question:"What are your fees for financial planning services?",
             answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {question:"When can I expect to see results from your services?",
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
            {question:"What information do I need to provide?"   
            },
            {question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {question:"When can I expect to see results from your services?",
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
            {question:"What information do I need to provide?"   
            },
            {question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {question:"When can I expect to see results from your services?",
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
            {question:"What information do I need to provide?"   
            },
            {question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {question:"When can I expect to see results from your services?",
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
            {question:"What information do I need to provide?"   
            },
            {question:"How long does the financial planning process take?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
            {question:"When can I expect to see results from your services?",
                answer:"The timeline for creating a financial plan can vary depending on the complexity of your financial situation. However, we strive to provide a comprehensive plan within [timeframe]."   
            },
         ],
        image: faq1, 
    },
    
]
const FaqPage = () => {

  return (

    <div className={styles.faqContainer}>
        <div className={styles.filterHeader}>
            <div className={styles.searchContainer}>
            <p className={styles.faqText}>FAQs</p>
            <div>
              <FaSearch size={24} />
            </div>
            </div>
            <div className={styles.filters}>
            {
                filters.map((filter)=>(
                 <button key={filter.id} className={styles.filterButton}>{filter.option}</button>
                ))
            }
            </div>
        </div>
        
         <div className={styles.filterContent}>
           <div className={styles.infoContainer}>
             <div className={styles.textBox}>
                <div className={styles.textBox}>

                </div>
                 <div className={styles.questionsContainer}>
                    <div className={styles.filterName}>
                        <p>Fee and Timeline</p>
                        </div>
                  <div className={styles.question}>

                  </div>
                 </div>
             </div>
             <div className={styles.imageBox}>
              
             </div>
           </div>
         </div>
     </div>
      
  )
}

export default FaqPage
