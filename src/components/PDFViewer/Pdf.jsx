"use client"
import React, { useState } from 'react'
import Heading from '@/components/AboutUs/Heading/Heading';
import Image from 'next/image';
import style from './Pdf.module.css';
import bouncerLoader from "@/assests/Loader/bouncingCircles.svg"

const PDF = ({ title, coverImage, pdfLink }) => {

    const [loader, setLoader] = useState(true);

    const pdfUrl = pdfLink;
    const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(
        pdfUrl,
    )}&embedded=true`

    const handlePdfLoading = () => {
        setLoader(false);
    }

    console.log("pdfUrl", pdfUrl);
    console.log("googleViewerUrl", googleViewerUrl);


    return (
        <div>

            <Heading allData={{ PitchLine: title }} />


            <div>
                {coverImage && <Image src={coverImage} alt="customermedia featured" className={style.coverImage} />}
            </div>

            <div className={style.pdfDiv}>

                {
                    loader && <div className={style.loaderScreen}>
                        <Image src={bouncerLoader} height={200} width={200} alt='spinner' />
                    </div>
                }

                <iframe
                    src={googleViewerUrl}
                    className={style.frame}
                    onLoad={handlePdfLoading}
                    title="PDF Viewer"
                />
            </div>

        </div>
    )
}

export default PDF