"use client"
import { useEffect, useState } from "react";
import ServicesPage from "@/components/Services/ServicePage/services"
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer"
import ServiceHeader from "@/components/Services/Header/ServiceHeader"
import FAQ from "@/components/ProcessFlow/FAQ/FAQ"
import { getServicesData } from "@/services/service"
function Services() {

  const [servicesData, setServices] = useState([]);

  const getData = async () => {
    try {
      const { res, err } = await getServicesData();
      if (res) {
        console.log(res);
        setServices(res.data);
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
      <ServiceHeader />
      <ServicesPage />
      <FAQ heading='Learn More About Renewal Plans' buttonText="View renewal plan" />
      <ReviewsContainer />

    </>
  )
}

export default Services