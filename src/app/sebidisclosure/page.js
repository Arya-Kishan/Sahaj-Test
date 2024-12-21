"use client"

import { useEffect, useState } from "react";
import Sebiheader from "@/components/SEBIDisclosure/Header/SebiHeader";
import Sebi from "@/components/SEBIDisclosure/Sebi";
import InvestorCharter from "@/components/SEBIDisclosure/InvestorCharter/InvestorCharter";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
import { getlastMonthData,getmonthTrendData,getyearTrendData,getannualTrendData} from "@/services/sebi" ;

const page = () => {
 
  const [lastMonthData, setLastMonthData] = useState([]);
  const [monthTrendData, setMonthTrendData] = useState([]);
  const [yearTrendData, setYearTrendData] = useState([]);
  const [annualTrendData, setAnnualTrendData] = useState([]);
    
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
  }, []);


  return (
    <>
      <Sebiheader />
      <Sebi lastMonthData={lastMonthData?.data} monthTrendData={monthTrendData?.data} yearTrendData={yearTrendData?.data} annualTrendData={annualTrendData?.data}/>
      <InvestorCharter />
      <ReviewsContainer />
    </>
  )
}

export default page
