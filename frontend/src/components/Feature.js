import React, { useState } from "react";
import { PiArrowArcRight } from "react-icons/pi";
import FileUpload from "./FileUpload"; 

const Feature = () => {
  const [showFileUpload, setShowFileUpload] = useState(false); 

  const handleButtonClick = () => {
    setShowFileUpload(true);
  };
  

  return (
    <div
      className="flex flex-col items-center flex-wrap gap-24 justify-center py-10 px-100 min-h-screen"
      id="Detection"
      style={{ overflow: "visible", flex: "none", width: "100%" }}>
      <div className=" flex flex-col w-3/5 items-center justify-center gap-12 ">
        <PiArrowArcRight size={100} />
        <div w-full>
          <h1 className="font-serif font-bold text-center text-5xl md:text-4xl lg:text-5xl leading-tight">Revolutionize Plant Care with Detectify!</h1>
        </div>
        <div className="w-3/5 justify-center">
          <p className="font-serif text-xl text-center ">
            Detectify is an AI-powered web app that instantly identifies plant diseases from a leaf image and suggests effective supplements. Save your precious plants and time by making informed
            decisions.
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={handleButtonClick}
            className="bg-yellow font-serif font-bold py-4 px-8 rounded-lg w-full md:w-80">
            Try it Now
          </button>
        </div>
      </div>
      {showFileUpload && <FileUpload setShowFileUpload={setShowFileUpload} />}
    </div>
  );
};

export default Feature;
