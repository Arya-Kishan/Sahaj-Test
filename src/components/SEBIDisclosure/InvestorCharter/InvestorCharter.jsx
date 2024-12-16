"use client"
import style from "./investorCharter.module.css"
// import PdfViewer from "../PdfViewer";

const InvestorCharter = () => {
  return (
    <>
        <div className={style.heading}>
          <p>SEBI&apos;s Investor Charter</p>
        </div>
        <section className={style.pdfContainer} >
        {/* <PdfViewer pdfUrl={"https://pdfobject.com/pdf/sample.pdf"}/> */}
      </section>
      
    </>
  )
}

export default InvestorCharter
