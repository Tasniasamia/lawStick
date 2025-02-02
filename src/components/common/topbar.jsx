import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

import { useState } from "react";

const Topbar = () => {
  let [socialDropDown, setSocialDropDown] = useState(false);

  let socialToggle = () => {
    setSocialDropDown((prev) => !prev);
  };

  return (
    <div className="bg-[#734A35] text-white text-sm py-2 work-sans">
      <div className="custom-container flex justify-between items-center xl:px-5 md:px-7 sm:px-8  px-2">
        {/* 1st div */}
        <div>
          <div className="lg:block hidden">
            <div className="flex items-center gap-9">
              <span className="mr-4 flex items-center gap-1">
                <IoLocationOutline />
                82 East Hill, Colchester, Essex, England
              </span>
              <span>info@appstick.co.uk</span>
            </div>
          </div>

          <div className="block lg:hidden relative">
            <button
              className="peer flex items-center gap-1"
              aria-expanded="false"
              aria-controls="dropdown-menu"
            >
              <IoLocationOutline />
            </button>
            <div
              id="dropdown-menu"
              className="absolute left-0 mt-2 hidden w-64 p-3 bg-gray-700 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-0 peer-focus:opacity-100 peer-focus:block"
              style={{ position: "absolute", left: "0", zIndex: "100" }}
            >
              <p>Location: 82 East Hill, Colchester, Essex, England.</p>
              <p>Email: info@appstick.co.uk</p>
            </div>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex gap-[33px] items-center">
          <div>
            <span className="whitespace-nowrap">Mon-Saturday, 09am - 05pm</span>
          </div>
          <div className="sm:flex hidden md:static items-center md:gap-5 gap-3 relative">
            <a
              href="#"
              className="hover:translate-y-[-1.5px] duration-300 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:translate-y-[-1.5px] duration-300 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:translate-y-[-1.5px] duration-300 transition-all"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div
            className={`drop_down_social flex flex-col md:flex-row  md:static items-center md:gap-5 gap-3 absolute right-0 transition-all duration-500 ${
              socialDropDown
                ? "top-8 bg-indigo-500 w-[50px] py-2 z-10 "
                : "-top-full w-[50px] "
            } `}
            style={{ position: "absolute", right: "0", zIndex: "100" }}
          >
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
          </div>

          <div
            onClick={() => socialToggle()}
            className="sm:hidden block toggleSocial"
          >
            <IoShareSocialOutline></IoShareSocialOutline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
