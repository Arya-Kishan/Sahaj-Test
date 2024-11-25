"use client"
import ServicesPage from "@/components/Services/ServicePage/services"
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer"
import ServiceHeader from "@/components/Services/Header/ServiceHeader"
function Services() {
  return (
    <>
    <ServiceHeader/>
    <ServicesPage/>
    <ReviewsContainer/>
    </>
  )
}

export default Services