"use client"
import Sebiheader from "@/components/SEBIDisclosure/Header/SebiHeader";
import Sebi from "@/components/SEBIDisclosure/Sebi";
import InvestorCharter from "@/components/SEBIDisclosure/InvestorCharter/InvestorCharter";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
const page = () => {
  return (
    <>
      <Sebiheader />
      <Sebi />
      <InvestorCharter />
      <ReviewsContainer />
    </>
  )
}

export default page
