import Header from "@/components/FAQ/Header/Header";
import FAQ from "@/components/ProcessFlow/FAQ/FAQ";
import FaqPage from "@/components/FAQ/FQAPage/FaqPage";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
const page = () => {
  return (
    <>
      <Header />
      <FaqPage />
      <FAQ heading='Find the perfect financial solution for your needs.' buttonText="Book a free call"/>
      <ReviewsContainer />
    </>
  )
}

export default page
