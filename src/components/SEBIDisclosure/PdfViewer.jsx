"use client"

import { Viewer,Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
 import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{height: "500px", overflow: "auto", border: "1px solid #ddd" }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer 
          fileUrl={pdfUrl} 
          plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>

  );
};

export default PdfViewer;


