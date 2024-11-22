import React from 'react';
import Heading from './Heading';
import SectionOne from "./Section1";
import FounderInfo from "./FounderInfo";
import ClientsReview from "./ClientsReview";
import ReviewPortfolio from "./Reviewportfolio";
import VisionMission from "./VisionMission";

const AboutUsPage = () => {
  return (
    <>
        <Heading />
        <SectionOne />
        <VisionMission />
        <FounderInfo />
        <ClientsReview />
        <ReviewPortfolio />
  </>
  )
}

export default AboutUsPage
