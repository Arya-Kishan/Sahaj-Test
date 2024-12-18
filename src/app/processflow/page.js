"use client"
import { useEffect, useState } from "react";
import ProcessFlow from '@/components/ProcessFlow/ProcessFlowPage';
import { getProcessFlowData } from "@/services/process_flow" ;

const [processFlowData, setProcessFlowData] = useState([]);

  const getData = async () => {
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


const page = () => {
  return (
    <>
    <ProcessFlow />
    </>
  )
}

export default page;
