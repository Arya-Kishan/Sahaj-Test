"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import Carousel from "@/components/Carousel/Carousel";
import FeaturedIn from "@/components/Home/Featured/Featured";
import FinanceQuestions from "@/components/Home/FinanceQuestions/FinanceQuestions";
import FinancialPlan from "@/components/Home/FinancialPlan/FinancialPlan";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import { getHomeData } from "@/services/home";

export default function Home() {
  const getData = async () => {
    try {
      const { res, err } = await getHomeData();
      if (res) {
        console.log(res);
      }
      throw err;
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>

      <Carousel />
      <FeaturedIn />
      <FinanceQuestions />
      <WhyChooseUs />
      <FinancialPlan />
      <Testimonials />
    </>
  );
}
