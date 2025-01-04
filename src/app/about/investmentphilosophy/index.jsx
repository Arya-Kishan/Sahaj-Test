"use client"
import { useState, useEffect } from "react";
import Investment from "@/components/Investment/Investment";
import AboutHeader from "@/components/AboutusHeader/AboutHeader";
import { getSingleInvestmentData } from "@/services/aboutus";
import ReviewsContainer from "@/components/Reviews/ReviewsContainer";
function Philosophy() {

    const [content, setContent ] = useState([]);

    const getData = async ()=>{
       
               
        try {
            const {res, err} = await getSingleInvestmentData();
            if(res){
                console.log("SahajMoney Investment Philosophy",res?.data[0]?.Content);
                setContent(res?.data);
            }
            else{
                setContent([])
            }
        } catch (error) {
            console.log(error)
        }
    }
useEffect(()=>{
    getData()
},[])

  return (
    <>
    {content &&
    <>
     <AboutHeader 
        heading={content[0]?.MainHeading} 
        subHeading={content[0]?.Title} 
      />
    <Investment content={content[0]?.Content} />
    <ReviewsContainer/>
    </>}
    </>
  )
}

export default Philosophy;

