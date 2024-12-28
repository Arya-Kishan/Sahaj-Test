"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel/Carousel";
import FeaturedIn from "@/components/Home/Featured/Featured";
import FinanceQuestions from "@/components/Home/FinanceQuestions/FinanceQuestions";
import FinancialPlan from "@/components/Home/FinancialPlan/FinancialPlan";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import { getHomeData } from "@/services/home";
import ReviewPortfolio from "@/components/AboutUs/ReviewPorfolio/Reviewportfolio";


export default function Home() {
 
  const [homeData, setHomeData] = useState([])

  const getData = async () => {
    try {
      const { res, err } = await getHomeData();
      if (res?.data) {
        // console.log(res.data.data);
        setHomeData(res.data)

      }
      else{
        setHomeData([])
      }
    } catch (error) {
      console.log(error)
      setHomeData([])
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>

      <Carousel bannerData = {homeData?.data || []} />
      <FeaturedIn  featuredData = {homeData?.data || []} />
      <FinanceQuestions financeData = {homeData?.data || []} />
      <WhyChooseUs />
      <FinancialPlan financePlanData={homeData?.data || []}/>
      <Testimonials />
      <ReviewPortfolio/>   
    </>
  );
}
