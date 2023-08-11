import React, { useState, useCallback } from "react";
import { FaAlignRight } from "react-icons/fa";
// import {useLocation } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();

  const handleToggle = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);
  // const displayNavbarPaths = ['/']
  // const shouldDisplayNavbar= displayNavbarPaths.includes(location.pathname)

  return (
    // shouldDisplayNavbar ?
    //   (
    <nav className="absolute top-0 left-0 w-full z-80">
        <div className="p-10 md:hidden flex justify-end">
          <button
            type="button"
            onClick={handleToggle}>
            <FaAlignRight />
          </button>
        </div>
        <ul className={`${isOpen ? "flex gap-10 justify-center" : "hidden"} md:flex md:justify-center md:space-x-8 p-10 font-bold font-serif`}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Detection">Detection</a>
          </li>
          <li>
            <a href="#Contact">Contact Us</a>
          </li>
        </ul>
      </nav>
     // ) : null
  );
};

export default Navbar;
