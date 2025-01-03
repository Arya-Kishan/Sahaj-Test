"use client"
import { useEffect,useState } from "react";
import ServicesPage from "@/components/Services/ServicePage/services"
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer"
import ServiceHeader from "@/components/Services/Header/ServiceHeader"
import FAQ from "@/components/ProcessFlow/FAQ/FAQ";
import {getMainPageServicesData } from "@/services/service";
function Services() {

  const [mainServicePageData,setMainServicePageData]=useState({})

  const getMainPageServices = async () => {
   
    try {
      const { res, err } = await getMainPageServicesData();
      if (res) {
        setMainServicePageData(res?.data || {});
        console.log("the main page  service data is",res.data)
      } else {
        setMainServicePageData({});
      }
    } catch (error) {
      console.error("Error fetching services data:", error);
    }
  };
  useEffect(() => {
    getMainPageServices();
  }, []);

  return (
    <>
      <ServiceHeader title={mainServicePageData[0]?.MainTitle} banner={mainServicePageData[0]?.Banner} type={false} />
      <ServicesPage  mainServicePageData={mainServicePageData[0]}/>
      <FAQ heading={mainServicePageData[0]?.footer?.text} buttonText={mainServicePageData[0]?.footer?.buttonText} path="/renewalplan" />
      <ReviewsContainer />

    </>
  )
}

export default Services