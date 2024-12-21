"use client";

import style from "./investorCharter.module.css";
import PdfViewer from "../PdfViewer";

const InvestorCharter = ({contentData={}}) => {
  const {PDFlink='#' } = contentData || {};
  return (
    <>
    <div className={style.heading}>
      <p>SEBI's Investor Charter</p>
    </div>
    <section className={style.pdfContainer}>
      {PDFlink !== '#' ? (
        <PdfViewer pdfUrl={PDFlink} />
      ) : (
        <p>No PDF available at the moment.</p>
      )}
    </section>
  </>
  );
};

export default InvestorCharter;
