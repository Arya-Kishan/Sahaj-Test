"use client";

import style from "./investorCharter.module.css";
import PdfViewer from "../PdfViewerWrapper";

const InvestorCharter = ({ contentData = {} }) => {

  return (
    <>
      <div className={style.heading}>
        <p>SEBI's Investor Charter</p>
      </div>
      <section className={style.pdfContainer}>
        {contentData?.PDFlink ? (
          <PdfViewer pdfUrl={contentData?.PDFlink} />
        ) : (
          <p>No PDF available at the moment.</p>
        )}
      </section>
    </>
  );
};

export default InvestorCharter;
