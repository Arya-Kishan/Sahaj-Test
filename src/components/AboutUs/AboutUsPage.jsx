"use client"
import Heading from './Heading/Heading';
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import FounderInfo from "./FounderInfo/FounderInfo"
import ClientsReview from "./ClientsReview/ClientsReview";
import ReviewPortfolio from "./ReviewPorfolio/Reviewportfolio";
import VisionMission from "./VisionMission/VisionMission";

const AboutUsPage = () => {
  return (
    <>
        <Heading />
        <CompanyInfo />
        <VisionMission />
        <FounderInfo />
        <ClientsReview />
        <ReviewPortfolio />
  </>
  )
}

export default AboutUsPage
