"use client";
import HeadSection from './HeadSection/HeadSection';
import FAQ from './FAQ/FAQ';
import Support from './Support/Support';
import ProcessSteps from "./ProcessSteps/ProcessSteps";
import ReviewsContainer from '../Reviews/ReviewsContainer';

const ProcessFlow = ({ data }) => {
    
    const ProcessObject = data && data.length > 0 ? data[0] : null;

    
    if (!ProcessObject) {
        return <div>Loading...</div>;
    }

    const { ProcessVideo, ProcessContent, PrcessSteps } = ProcessObject;
   

    return (
        <div>
            <HeadSection />
            <ProcessSteps ProcessVideo={ProcessVideo} PrcessSteps={PrcessSteps} />
            <Support ProcessContent={ProcessContent} />
            <FAQ heading="Find Answers to Your Questions in Our FAQ" buttonText="Visit FAQ" path="/faqs" />
            <ReviewsContainer />
        </div>
    );
};

export default ProcessFlow;
