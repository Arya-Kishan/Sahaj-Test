"use client"
import Heading from './BlogHeader/BlogHeader';
import MainSection from './BlogMainSection/MainSection';
import SuggestionCardList from './Featured/Suggestion';
import ReviewsContainer from "./Reviews/ReviewsContainer";

const BlogPage=()=>{
    return(
        <>
            <Heading />
            <MainSection />
            <SuggestionCardList />
            <ReviewsContainer /> 
        </>
    )
}
export default BlogPage;
