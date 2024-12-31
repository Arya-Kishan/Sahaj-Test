"use client"
import ServicesPage from "@/components/Services/ServicePage/services"
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer"
import ServiceHeader from "@/components/Services/Header/ServiceHeader"
import FAQ from "@/components/ProcessFlow/FAQ/FAQ"
function Services() {

  


  return (
    <>
      <ServiceHeader title="Financial plan creation" type={false} />
      <ServicesPage />
      <FAQ heading='Learn More About Renewal Plans' buttonText="View renewal plan" path="/renewalplan" />
      <ReviewsContainer />

    </>
  )
}

export default Services