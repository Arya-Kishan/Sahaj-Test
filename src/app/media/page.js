"use client"
import Header from "@/components/Media/Header/Header";
import Tabs from "@/components/Media/Tabs/Tabs";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
//import Media from '@/components/Media/Media';

const page = () => {
  return (
    <>
     <Header />
      <Tabs />
      <ReviewsContainer />
    </>
  )
}

export default page

