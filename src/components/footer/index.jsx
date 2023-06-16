import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full z-10 bg-white text-black">
      <div className="flex items-center justify-between h-28 w-full max-w-[86rem] mx-auto px-8 sm:px-4">
        <h1 className="font-bold">LeviTate</h1>
        <p className="font-medium">© 2023. All Rights Reserved by LEVITATE</p>
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-xl font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebookF className="h-6 w-6 cursor-pointer text-black" />
            <FaInstagram className="h-6 w-6 cursor-pointer text-black" />
            <FaTwitter className="h-6 w-6 cursor-pointer text-black" />
            <FaLinkedinIn className="h-6 w-6 cursor-pointer text-black" />
            <FaYoutube className="h-6 w-6 cursor-pointer text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
