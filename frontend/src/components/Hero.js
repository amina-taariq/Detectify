import React from 'react'
import heroimg from '../Images/heroimg.png'
import { GiVanillaFlower } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="flex justify-center p-15 w-full h-screen items-center sm:p-0" id='Home'>
      <div className="absolute left-0 top-0">
        <GiVanillaFlower
          size={80}
          style={{ color: "#abd4b5" }}
        />
      </div>
      <img
        src={heroimg}
        alt="Detectify"
        className=" w-full  "
      />
      <div className="absolute bottom-0 right-0">
        <GiVanillaFlower
          size={80}
          style={{ color: "#abd4b5" }}
        />
      </div>
    </div>
  );
}

export default Hero