import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleGetTouch = () => console.log("Get In Touch");
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-black">
      <nav className="flex items-center justify-between h-20 w-full max-w-[86rem] mx-auto px-8 sm:px-4">
        <p className="text-xl font-bold">
          <Link to={"/"}>Levitate</Link>
        </p>
        <div className="flex items-center justify-between space-x-4">
          <button
            className="hidden py-1.5 px-4 text-sm font-bold sm:inline-flex items-center border-[2.5px] border-white rounded-full"
            type="button"
            onClick={handleGetTouch}
          >
            <Link to={"/contact"}>GET IN TOUCH</Link>
          </button>
          <FaTwitter className="h-6 w-6 cursor-pointer" />
          <FaLinkedinIn className="h-6 w-6 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
