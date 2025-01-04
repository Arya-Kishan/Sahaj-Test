"use client";
import { useState, useEffect } from "react";
import ReviewsContainer from "@/components/Reviews/ReviewsContainer";
import AboutHeader from "@/components/AboutusHeader/AboutHeader";
import { getSingleFounderData } from "@/services/aboutus";
import FinancialFuture from "@/components/FinancialFuture/FinancialFuture";

function FuturePage() {
  const [content, setContent] = useState([]);

  const getData = async () => {
   ;
    try {
      const { res, err } = await getSingleFounderData();
      if (res) {
        // console.log("the author data", res?.data[0]);
        setContent(res?.data[0]);
      } else {
        setContent([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {content && (
        <>
          <AboutHeader
            heading={content?.Title || "Default Title"}
            subHeading={content?.Content?.ContentParagraph || "Default Subheading"}
          />
          <FinancialFuture content={content} />
        </>
      )}
      <ReviewsContainer />
    </>
  );
}

export default FuturePage;
