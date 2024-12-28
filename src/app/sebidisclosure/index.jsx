"use client"

import { useEffect, useState } from "react";
import Sebiheader from "@/components/SEBIDisclosure/Header/SebiHeader";
import Sebi from "@/components/SEBIDisclosure/Sebi";
import InvestorCharter from "@/components/SEBIDisclosure/InvestorCharter/InvestorCharter";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
import { getlastMonthData,getmonthTrendData,getyearTrendData,getannualTrendData,getcontentData} from "@/services/sebi" ;

const SEBIPage = () => {
 
  const [lastMonthData, setLastMonthData] = useState([]);
  const [monthTrendData, setMonthTrendData] = useState([]);
  const [yearTrendData, setYearTrendData] = useState([]);
  const [annualTrendData, setAnnualTrendData] = useState([]);
  const [contentData, setContentData] = useState([]);
    
  const getData = async (apiCall, setter) => {

    try {
      const { res, err } = await apiCall();
      if (res) {
        console.log( res.data);
        setter(res.data);
      } 
      // else if (err) {
      //   console.error("API error:", err);
      // }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
   
   useEffect(() => {
    getData(getlastMonthData, setLastMonthData); 
    getData(getmonthTrendData, setMonthTrendData);
    getData(getyearTrendData, setYearTrendData); 
    getData(getannualTrendData, setAnnualTrendData); 
    getData(getcontentData, setContentData);

  
  }, []);
  

  return (
    <>
      <Sebiheader contentData={contentData?.data}/>
      <Sebi lastMonthData={lastMonthData?.data} monthTrendData={monthTrendData?.data} yearTrendData={yearTrendData?.data} annualTrendData={annualTrendData?.data}/>
      <InvestorCharter contentData={contentData?.data}/>
      <ReviewsContainer />
    </>
  )
}

export default SEBIPage;
