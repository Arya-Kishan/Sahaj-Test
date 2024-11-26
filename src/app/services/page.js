"use client"
import ServicesPage from "@/components/Services/ServicePage/services"
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer"
import ServiceHeader from "@/components/Services/Header/ServiceHeader"
import FAQ from "@/components/ProcessFlow/FAQ/FAQ"
function Services() {
  return (
    <>
    <ServiceHeader/>
    <ServicesPage/>
    <FAQ heading='Learn More About Renewal Plans' buttonText="View renewal plan" />
    <ReviewsContainer/>
    
    </>
  )
}

export default Services