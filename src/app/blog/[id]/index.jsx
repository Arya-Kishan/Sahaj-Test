'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Heading from '@/components/Blog/BlogHeader/BlogHeader'
import MainSection from '@/components/Blog/BlogMainSection/MainSection';
import SuggestionCardList from '@/components/Blog/Featured/Suggestion';
import ReviewsContainer from "@/components/Reviews/ReviewsContainer";
import { getBlogsData } from '@/services/blogs';

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [allblogData, setAllBlogData] = useState([]);

  const { id } = useParams();
 
  const bodyData= {
    "page" :1, 
    "limit" : 10,
   "tags" : [], 
   "blog_slug":id
  }
  const allblogsbodyData= {
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
            setBlogData(res?.data?.data?.item);
          }
        } catch (error) {
          console.log(error);
        }
      }
      const getAllBlogsData = async () => {
      
        
        try {
          const { res, err } = await getBlogsData(allblogsbodyData);
          if (res) {
            console.log("the res",res.data)
            setAllBlogData(res?.data?.data?.items);
          }
        } catch (error) {
          console.log(error);
        }
      }
         
      useEffect(() => {
       getData();
       getAllBlogsData();
      }, [])
      

  return (
    <>
       
            <Heading data={blogData} />
            <MainSection  data={blogData}/>
            <SuggestionCardList data={allblogData}/>
            <ReviewsContainer />
    </>
  );
}

export default BlogPage;