"use client"
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import Pdf from '@/components/PDFViewer/Pdf'

const page = () => {

    const searchParams = useSearchParams();

    return (
        <div>
            <Pdf
                title={searchParams.get("title")}
                coverImage={searchParams.get("coverImage")}
                pdfLink={searchParams.get("pdfLink")} />
        </div>
    )
}

export default page