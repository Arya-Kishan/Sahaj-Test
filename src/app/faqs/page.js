"use client"

import { useState,useEffect } from "react";
import Header from "@/components/FAQ/Header/Header";
import FAQ from "@/components/ProcessFlow/FAQ/FAQ";
import FaqPage from "@/components/FAQ/FQAPage/FaqPage";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
import { getFaqData, getTopicFaqData} from "@/services/faq" ;

const page = () => {

   const [faqdata, setFaqdata] = useState([]);
   const [faqTopicData, setTopicFaqData] = useState([]);
   const bodyData= {
        "page": 1,
        "limit": 10,
        "topic": "All"
    }
    
      const getData =  async (apiCall, setter) => {
        try {
          const { res, err } = await apiCall();
          if (res) {
            console.log(res.data);
            setFaqdata(res.data);
          }
          if (res) {
            console.log( res.data);
            setter(res.data);
          } 
        } catch (error) {
          console.log(error);
        }
      }
  
      useEffect(() => {
        getData(getFaqData,setFaqdata);
        getData(() => getTopicFaqData(bodyData), setTopicFaqData);
      }, [])
  
 
  return (
    <>
      <Header />
      <FaqPage faqData={faqTopicData?.items} topic={faqdata?.data}/>
      <FAQ heading='Find the perfect financial solution for your needs.' buttonText="Book a free call"/>
      <ReviewsContainer />
    </>
  )
}

export default page
