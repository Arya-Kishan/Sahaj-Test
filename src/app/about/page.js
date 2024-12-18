"use client"
import { useEffect, useState } from "react";
import AboutUsPage from '@/components/AboutUs/AboutUsPage';
import { getAboutUsData } from "@/services/about_us" ;

const page = () => {
  const [aboutUsData, setAboutUsData] = useState([]);
  
    const getData = async () => {
      try {
        const { res, err } = await getAboutUsData();
        if (res) {
          console.log(res);
          setAboutUsData(res.data);
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
    <AboutUsPage />
    </>
  )
}

export default page
