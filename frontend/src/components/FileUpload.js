import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import Result from "./Result";
import axios from "axios";

const FileUpload = ({ setShowFileUpload }) => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const [fileName, setFileName] = useState("No selected file");
  const [predictedDisease, setPredictedDisease] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageURL(URL.createObjectURL(file));
      setFileName(file.name);
      setImage(file);
    }
  };

  const uploadImageToBackend = async () => {
    try {
      console.log(image);
      const formData = new FormData();
      formData.append("file", image);
      console.log(formData);

      // Send the image to the Flask backend for prediction
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Process the response from the backend and display the predicted disease
      if (response.data && response.data.predicted_class) {
        console.log(response.data.predicted_class);
        setPredictedDisease(response.data.predicted_class);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleCloseResult = () => {
    setImage(null);
    setPredictedDisease(null);
    setFileName("No selected file");
    setImageURL(null);
    setShowFileUpload(false)
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-10">
      <form
        action=""
        onClick={() => document.querySelector(".input-field").click()}
        style={{ height: "300px", width: "500px", color: "#abd4b5" }}
        className="flex justify-center flex-col items-center cursor-pointer border-2 border-dashed rounded-lg">
        <input
          type="file"
          accept="image/*"
          className="input-field"
          hidden
          onChange={handleFileChange}
        />
        {image ? (
          <img
            src={imageURL}
            width={250}
            height={250}
            alt={fileName}
          />
        ) : (
          <>
            <MdCloudUpload
              color="#abd4b5"
              size={60}
            />
            <p>Browse Images to upload</p>
          </>
        )}
      </form>
      <section
        className="flex justify-between items-center p-4 rounded-lg m-3"
        style={{ width: "500px", backgroundColor: "#ddede1", height: "40px" }}>
        <AiFillFileImage
          color="#74b884"
          size={25}
        />
        <span className="flex flex-row ">
          {fileName}{" "}
          <MdDelete
            onClick={() => {
              setFileName("No Selected File");
              setImage(null);
              setPredictedDisease("");
            }}
            color="#74b884"
            size={25}
          />
        </span>
      </section>
      {predictedDisease && (
        <Result
          predictedDisease={predictedDisease}
          onClose={handleCloseResult}
        />
      )}
      {image && (
        <button
          type="button"
          onClick={uploadImageToBackend}
          className="bg-yellow font-serif font-bold py-4 px-8 rounded-lg w-full md:w-80">
          Predict Disease
        </button>
      )}
    </div>
  );
};

export default FileUpload;
