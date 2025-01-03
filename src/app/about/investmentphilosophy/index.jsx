"use client"
import { useState, useEffect } from "react";
import Investment from "@/components/Investment/Investment";
import AboutHeader from "@/components/AboutusHeader/AboutHeader";
import { getSingleInvestmentData } from "@/services/aboutus";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
function Philosophy() {

    const [content, setContent ] = useState([]);

    const getData = async ()=>{
       const data = {
            Title:"SahajMoney Investment Philosophy"
        }
               
        try {
            const {res, err} = await getSingleInvestmentData(data);
            if(res){
                console.log("SahajMoney Investment Philosophy",res?.data);
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
        heading={content?.Title} 
        subHeading="Understand Your Risk Tolerance" 
      />
    <Investment content={content} />
    <ReviewsContainer/>
    </>}
    </>
  )
}

export default Philosophy;