"use client"

import { useState,useEffect } from "react";
import Header from "@/components/FAQ/Header/Header";
import FAQ from "@/components/ProcessFlow/FAQ/FAQ";
import FaqPage from "@/components/FAQ/FQAPage/FaqPage";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
import { getFaqData } from "@/services/faq" ;

const page = () => {

   const [faqData, setFaqData] = useState([]);
    
      const getData = async () => {
        try {
          const { res, err } = await getFaqData();
          if (res) {
            console.log(res);
            setFaqData(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
  
      useEffect(() => {
        getData();
      }, [])
  
  
  return (
    <>
      <Header />
      <FaqPage />
      <FAQ heading='Find the perfect financial solution for your needs.' buttonText="Book a free call"/>
      <ReviewsContainer />
    </>
  )
}

export default page
