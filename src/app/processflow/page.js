"use client"
import { useEffect, useState } from "react";
import ProcessFlow from '@/components/ProcessFlow/ProcessFlowPage';
import { getProcessFlowData } from "@/services/process_flow" ;


const page = () => {
  const getData = async () => {
    const [processFlowData, setProcessFlowData] = useState([]);

    try {
      const { res, err } = await getProcessFlowData();
      if (res) {
        console.log(res);
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
    <ProcessFlow />
    </>
  )
}

export default page;
