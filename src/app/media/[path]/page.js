"use client";

import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from '@/components/Media/Header/Header';
import Tabs from '@/components/Media/Tabs/Tabs';
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
import { getpressCoverageData, getpodcastData, getvideoChannelData, getblogsData, getcustomersInMediaData,gettopicData} from "@/services/media";
import { setMediaData } from "../../../store/slices/mediaSlice"

const fetchAndStoreData = async (apiCall, key, dispatch) => {
  try {
    const { res } = await apiCall();
    if (res) {
      dispatch(setMediaData({ key, data: res.data }));
      console.log("the ressssssss",res)
     
    }
  } catch (error) {
    console.error(`Fetch error for ${key}:`, error);
  }
};

  

const Page = () => {
  const [topicData, setTopicData] = useState([]);
  const dispatch = useDispatch();

  const getTopicData = async () => { 
    try {
      const { res, err } = await gettopicData();
      if (res) {
       
        setTopicData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
     
  useEffect(() => {
    getTopicData();
  }, [])
  console.log("the fillll0",topicData)

  useEffect(() => {
    // Fetch data from APIs and store in Redux
    fetchAndStoreData(getpressCoverageData, "pressCoverageData", dispatch);
    fetchAndStoreData(getpodcastData, "podcastData", dispatch);
    fetchAndStoreData(getvideoChannelData, "videoChannelData", dispatch);
    fetchAndStoreData(getblogsData, "blogsData", dispatch);
    fetchAndStoreData(getcustomersInMediaData, "customersInMediaData", dispatch);
  }, [dispatch]);

  return (
    <>
   
      <Header />
      <Tabs  filtersData={topicData}/>
      <ReviewsContainer />
    </>
    
  );
};

export default Page;


