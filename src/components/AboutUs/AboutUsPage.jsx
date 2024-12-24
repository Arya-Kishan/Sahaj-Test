"use client"
import { useState, useEffect } from 'react';
import Heading from './Heading/Heading';
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import FounderInfo from "./FounderInfo/FounderInfo"
import ClientsReview from "./ClientsReview/ClientsReview";
import ReviewPortfolio from "./ReviewPorfolio/Reviewportfolio";
import VisionMission from "./VisionMission/VisionMission";
import { getAboutusData } from '@/services/aboutus';

const AboutUsPage = () => {
  const [allData, setData] = useState([]);

  const getData = async()=>{
    try {
          const { res, err } = await getAboutusData();
          if (res) {
            // console.log(res.data);
            setData(res?.data);
          } else {
            setData([]);
          }
        } catch (error) {
          console.error(error);
        }
  }
  useEffect(()=>{
 getData()

  },[])

  return (
    <>
        <Heading allData = {allData} />
        <CompanyInfo />
        <VisionMission allData = {allData}/>
        <FounderInfo />
        <ClientsReview />
        <ReviewPortfolio />
  </>
  )
}

export default AboutUsPage
