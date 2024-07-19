import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { CiYoutube } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="">
      <div className="container">
        <div className="">
          <h1 className="text-white text-xl text-center mt-10">Let’s get Social</h1>
          <div className="flex items-center justify-center gap-10 text-white text-5xl mt-6">
            <a>
           
              <CiLinkedin />
            </a>
            <a>
         
              <FaInstagram />
            </a>
            <a>
             
              <FcGoogle />
            </a>
            <a>
              <CiYoutube />
            </a>
            <a>
            <AiOutlineFacebook />
            </a>
          </div>
          <h1 className="text-white text-xl text-center mt-6 mb-14">Privacy Policy 
•  <span>Terms & Conditions</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
