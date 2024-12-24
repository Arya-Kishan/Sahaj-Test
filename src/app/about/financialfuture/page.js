"use client"
import { useState, useEffect } from "react";
import ReviewsContainer from "@/components/Blog/Reviews/ReviewsContainer";
import AboutHeader from "@/components/AboutusHeader/AboutHeader";
import { getSingleFounderData } from "@/services/aboutus";
import FinancialFuture from "@/components/FinancialFuture/FinancialFuture";

function page() {
    const [content, setContent] = useState([]);

    const getData = async () => {
        const data = {
            Title: "Building Strong Financial Futures"
        }
        try {
            const { res, err } = await getSingleFounderData(data);
            if (res) {
                console.log(res?.data);
                setContent(res?.data);
            }
            else {
                setContent([])
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            {content &&
                <>
                    <AboutHeader
                        heading={content?.Title}
                        subHeading={content?.Content}
                    />
                    <FinancialFuture content={content} />
                </>
            }
            <ReviewsContainer />
        </>
    )
}

export default page