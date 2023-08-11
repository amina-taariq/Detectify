import React from "react";
import diseaseInfo from "../Data/diseaseInfo";
import supplementInfo from "../Data/supplementInfo";

const Result = ({ predictedDisease, onClose }) => {
  const combinedInfo = diseaseInfo.map((disease) => {
    const supplement = supplementInfo.find((supp) => supp.id === disease.id);
    return {
      ...disease,
      supplement_name: supplement ? supplement.supplement_name : "No supplement available",
      supplement_image: supplement ? supplement.supplement_image : null,
    };
  });

    let selectedInfo = combinedInfo.find((info) => info.name === predictedDisease);
   // selectedInfo=""

  if (!selectedInfo) {
    return (
      <div
        className="result-container z-1 absolute left-0 right-0 mx-auto bg-white bg-opacity-90 border p-4 w-90 shadow-md"
        style={{ maxWidth: "600px" }}>
        <button
          className="close-button absolute top-2 right-1 bg-transparent border-none cursor-pointer md-2"
          onClick={onClose}>
          X
        </button>
        <p className="mb-2 font-semibold">Predicted Disease: {predictedDisease}</p>
        <p className="text-red-600">Information not available for this disease.</p>
      </div>
    );
  }

  return (
    <div
      className="result-container z-1 absolute left-0 right-0 mx-auto bg-white bg-opacity-90 border p-4 w-90 shadow-md"
      style={{ maxWidth: "600px" }}>
      <button
        className="close-button absolute top-4 right-3 bg-transparent border-none cursor-pointer mb-2 mr-2"
        onClick={onClose}>
        X
      </button>
      <p className="mb-2 font-semibold">Predicted Disease: {predictedDisease}</p>
      <div
        className="disease-info border-t border-gray-300 pt-2"
        key={selectedInfo.name}>
        <h2 className="text-lg font-semibold mb-1">{selectedInfo.name}</h2>
        <div className="mb-2">
          <h3 className="font-semibold">Description:</h3> <p className="text-justify">{selectedInfo.description}</p>
        </div>
        <div className="mb-2 ">
          <h3 className="font-semibold">Possible Steps:</h3> <p className="text-justify"> {selectedInfo.possibleSteps}</p>
        </div>
        <div className="mb-2">
          <h1 className="font-semibold">Supplement Name:</h1> <p className="text-justify">{selectedInfo.supplement_name}</p>
        </div>
        {selectedInfo.supplement_image && (
          <img
            src={selectedInfo.supplement_image}
            alt={selectedInfo.supplement_name}
            className="w-40 h-40 object-cover rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Result;
