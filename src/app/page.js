import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "@/components/Carousel/Carousel";
import FeaturedIn from "@/components/Home/Featured/Featured";
import FinanceQuestions from "@/components/Home/FinanceQuestions/FinanceQuestions";
import FinancialPlan from "@/components/Home/FinancialPlan/FinancialPlan";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
const apiUrl = process.env.BASE_URL;
export default function Home() {
  return (
    <>
    
    <Carousel />
      <FeaturedIn />
      <FinanceQuestions/>
      <h1>{apiUrl}</h1>
      <WhyChooseUs/>
      <FinancialPlan/>
      <Testimonials/>   
    </>
  );
}
