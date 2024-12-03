"use client"
import HeadSection from './HeadSection/HeadSection'
import FAQ from './FAQ/FAQ';
import Support from './Support/Support';
import ProcessSteps from "./ProcessSteps/ProcessSteps";
import ReviewsContainer from '../Blog/Reviews/ReviewsContainer';

const ProcessFlow=()=>{
    return(
        <div>
           <HeadSection />
           <ProcessSteps />
           <Support />
           <FAQ heading='Find Answers to Your Questions in Our FAQ' buttonText="Visit FAQ" path='/faqs'/>
           <ReviewsContainer />
        </div>
    )
}
export default ProcessFlow;