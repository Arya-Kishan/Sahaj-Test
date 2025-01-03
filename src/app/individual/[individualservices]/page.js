"use client"

import Services from "@/components/Services/individualservices/Services"
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer"
import FAQ from "@/components/ProcessFlow/FAQ/FAQ";

function index() {
  return (
    <>
    <Services/>
    <FAQ  heading={"Find Answers to Your Questions in Our Frequently asked questions "} buttonText={"Book a free call"}/>
    <ReviewsContainer/>
    </>
  )
}

export default index