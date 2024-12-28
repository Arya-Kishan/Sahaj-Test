"use client";
import { useEffect, useRef, useState } from "react";
import Carousel from "@/components/Carousel/Carousel";
import FeaturedIn from "@/components/Home/Featured/Featured";
import FinanceQuestions from "@/components/Home/FinanceQuestions/FinanceQuestions";
import FinancialPlan from "@/components/Home/FinancialPlan/FinancialPlan";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import { getHomeData } from "@/services/home";
import ReviewPortfolio from "@/components/AboutUs/ReviewPorfolio/Reviewportfolio";


export default function Home() {
  const [homeData, setHomeData] = useState([]);
  const testimonialsRef = useRef(null); // Reference for Testimonials

  const getData = async () => {
    try {
      const { res, err } = await getHomeData();
      if (res?.data) {
        setHomeData(res.data);
      } else {
        setHomeData([]);
      }
    } catch (error) {
      console.log(error);
      setHomeData([]);
    }
  };

  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

      <Carousel bannerData={homeData?.data || []} />
      <FeaturedIn featuredData={homeData?.data || []} />
      <FinanceQuestions financeData={homeData?.data || []} />
      <WhyChooseUs /> 
      <FinancialPlan financePlanData={homeData?.data || []} scrollToTestimonials={scrollToTestimonials} />
      <Testimonials ref={testimonialsRef} /> 
      <ReviewPortfolio/>  
    </>
  );
}
