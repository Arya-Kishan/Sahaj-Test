"use client";
import { useState,useEffect } from "react";
import ServicesPage from "@/components/Services/ServicePage/services"
import ReviewsContainer from "@/components/Reviews/ReviewsContainer"
import ServiceHeader from "@/components/Services/Header/ServiceHeader"
import FAQ from "@/components/ProcessFlow/FAQ/FAQ";
import {getMainPageServicesData } from "@/services/service";

function RenewalServices() {

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
      <ServiceHeader title={mainServicePageData[1]?.MainTitle} banner={mainServicePageData[1]?.Banner} type={true} />
      <ServicesPage mainServicePageData={mainServicePageData[1]}/>
      <FAQ heading={mainServicePageData[1]?.footer?.text} buttonText={mainServicePageData[1]?.footer?.buttonText} path="/services" />
      <ReviewsContainer />

    </>
  )
}

export default RenewalServices;