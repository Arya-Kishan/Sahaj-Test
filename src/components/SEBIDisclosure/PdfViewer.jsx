"use client";

import dynamic from "next/dynamic";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Viewer = dynamic(() => import("@react-pdf-viewer/core").then((mod) => mod.Viewer), { ssr: false });
const Worker = dynamic(() => import("@react-pdf-viewer/core").then((mod) => mod.Worker), { ssr: false });
const defaultLayoutPlugin = dynamic(() => import("@react-pdf-viewer/default-layout").then((mod) => mod.defaultLayoutPlugin), { ssr: false });

const PdfViewer = ({ pdfUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: "500px", overflow: "auto", border: "1px solid #ddd" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
