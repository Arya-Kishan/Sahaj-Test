"use client"
import ServicesPage from "@/components/Services/ServicePage/services"
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer"
import ServiceHeader from "@/components/Services/Header/ServiceHeader"
import FAQ from "@/components/ProcessFlow/FAQ/FAQ"
function RenewalServices() {

  


  return (
    <>
      <ServiceHeader title="Renewal plan" type={true} />
      <ServicesPage />
      <FAQ heading='Learn More About Renewal Plans' buttonText="View Financial plan" path="/services" />
      <ReviewsContainer />

    </>
  )
}

export default RenewalServices;