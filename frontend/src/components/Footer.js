import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div
      className="flex flex-col items-center flex-wrap justify-center min-h-screen" id='Contact'
      >
      <div className="flex flex-row   gap-8">
        <a href="https://www.linkedin.com/in/amina-tariq-b0a26624a/">
          <AiFillLinkedin size={20} />
        </a>
        <a href="https://github.com/amina-taariq/">
          <AiFillGithub size={20} />
        </a>
        <a href="mailto:tariqamina88@gmail.com">
          <AiFillMail size={20} />
        </a>
      </div>
      <div>
        <p>
          <div className="flex flex-row">
            <FaRegCopyright size={15} />
            <span> Detectify 2023. All rights reserved.</span>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Footer