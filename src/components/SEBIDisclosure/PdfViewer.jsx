"use client";

import { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styles from "./pdfViewer.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.pdfContainer}>
      <div className={styles.pdfViewer}>
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <div key={index} className={styles.pdfPageWrapper}>
              <Page
                pageNumber={index + 1}
                renderMode="svg"
                width={windowWidth <= 768 ? windowWidth * 0.9 : 600}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
