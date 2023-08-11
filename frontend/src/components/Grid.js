import React from 'react'
import { GiThreeLeaves } from "react-icons/gi";
import { GiVanillaFlower } from "react-icons/gi";
import apples from '../Images/apples.png'
import corns from '../Images/corns.png'
import grapes from "../Images/grapes.png";
import peachs from "../Images/peachs.png";
import tomatos from "../Images/tomatos.png";
import strawberry from "../Images/strawberry.png";

const Grid = () => {
  return (
    <div
      className="flex flex-col items-center flex-wrap gap-24 justify-center py-10 px-100 min-h-screen"
      style={{ overflow: "visible", flex: "none", width: "100%" }}>
      <div className="flex flex-row w-4/5  gap-20">
        <GiThreeLeaves
          size={80}
          style={{ color: "#abd4b5" }}
        />

        <div className="w-1/2">
          <h3 className="font-serif font-bold text-left text-4xl md:text-3xl lg:text-4xl leading-tight">Quick and Accurate Detection</h3>
        </div>
        <div className="w-1/2 justify-center">
          <p
            className="font-serif
            text-2xl
            text-center">
            Our state-of-the-art AI model identifies 10 diseases across six different plants, giving you precise results in seconds. Just upload an image, and let Detectify work its magic.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-4/5  gap-20">
        <div>
          <h1 className="font-serif font-bold text-left text-5xl md:text-4xl lg:text-5xl leading-tight">Our Diagnosis Capabilities</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 relative">
          <div className="absolute -left-8 -top-8">
            <GiVanillaFlower
              size={80}
              style={{ color: "#abd4b5" }}
            />
          </div>
          {/* First image (smaller) */}
          <img
            src={apples}
            alt="Apples"
            className="w-full h-64 object-cover"
          />
          {/* Second image (larger) */}
          <img
            src={strawberry}
            alt="Strawberry"
            className="w-full h-64 object-cover"
          />
          {/* Third image (smaller) */}
          <img
            src={grapes}
            alt="Grapes"
            className="w-full h-64 object-cover"
          />
          {/* Fourth image (smaller) */}
          <img
            src={tomatos}
            alt="Tomatos"
            className="w-full h-64 object-cover"
          />
          {/* Fifth image (larger) */}
          <img
            src={peachs}
            alt="Peachs"
            className="w-full h-64 object-cover"
          />
          {/* Sixth image (smaller) */}
          <img
            src={corns}
            alt="Corns"
            className="w-full h-64 object-cover"
          />
          <div className="absolute -bottom-8 -right-8">
            <GiVanillaFlower
              size={80}
              style={{ color: "#abd4b5" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid