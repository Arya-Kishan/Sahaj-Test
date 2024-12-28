"use client"
import { useEffect, useState } from "react";
import ProcessFlow from '@/components/ProcessFlow/ProcessFlowPage';
import { getProcessFlowData } from "@/services/process_flow" ;


const HowItWorks = () => {

  const [processFlowData, setProcessFlowData] = useState([]);

  const getData = async () => {
  
    
    try {
      const { res, err } = await getProcessFlowData();
      if (res) {
        setProcessFlowData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
     
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <ProcessFlow data={processFlowData}/>
    </>
  )
}

export default HowItWorks;
