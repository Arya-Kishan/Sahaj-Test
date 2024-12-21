'use client';
import { useEffect, useState } from "react";
import Heading from '@/components/Blog/BlogHeader/BlogHeader'
import MainSection from '@/components/Blog/BlogMainSection/MainSection';
import SuggestionCardList from '@/components/Blog/Featured/Suggestion';
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
import { getBlogsData } from '@/services/blogs';

const page = () => {
  const [mediaData, setMediaData] = useState([]);
  const bodyData= {
    "page" :1, 
    "limit" : 10,
   "tags" : [], 
   "blog_slug":"All"
  }
    const getData = async () => {
      
        
        try {
          const { res, err } = await getBlogsData(bodyData);
          if (res) {
            console.log("the res",res.data)
            setMediaData(res.data.data);
          }
        } catch (error) {
          console.log(error);
        }
      }
         
      useEffect(() => {
       getData();
      }, [])
      console.log("the blog datails",mediaData)

  return (
    <>
       
            <Heading />
            <MainSection  />
            <SuggestionCardList />
            <ReviewsContainer />
    </>
  );
}

export default page;