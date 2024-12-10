"use client"
import Sebiheader from "@/components/SEBIDisclosure/Header/SebiHeader";
import Sebi from "@/components/SEBIDisclosure/Sebi";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
const page = () => {
  return (
    <>
      <Sebiheader />
      <Sebi />
      <ReviewsContainer />
    </>
  )
}

export default page
