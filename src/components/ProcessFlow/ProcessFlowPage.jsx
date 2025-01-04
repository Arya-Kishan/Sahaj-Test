"use client";
import FAQ from './FAQ/FAQ';
import Support from './Support/Support';
import ProcessStepsContainer from "./ProcessSteps/ProcessSteps";
import ReviewsContainer from '../Reviews/ReviewsContainer';

const ProcessFlow = ({ data }) => {
    
    const ProcessObject = data && data.length > 0 ? data[0] : null;

    
    if (!ProcessObject) {
        return <div>Loading...</div>;
    }

    const { 
        ProcessTopBanner,ProcessVideo, ProcessContent, ProcessSteps,
        ProcessBottomBanner } = ProcessObject;
   

    return (
        <div>
            <ProcessStepsContainer ProcessTopBanner={ProcessTopBanner} ProcessVideo={ProcessVideo} ProcessSteps={ProcessSteps} />
            <Support ProcessContent={ProcessContent} />
            <FAQ heading={ProcessBottomBanner?.Title} buttonText={ProcessBottomBanner?.ButtonText} path="/faqs" />
            <ReviewsContainer />
        </div>
    );
};

export default ProcessFlow;
