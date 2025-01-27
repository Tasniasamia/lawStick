import footerLogo from "./../../../public/images/logo.png";
import footerCircle from "./../../../public/images/footer-circle.png";
import footerDesign1 from "./../../../public/images/footer design-1.png";
import footerDesign2 from "./../../../public/images/foote design-2.png";
import footerLine from "./../../../public/images/footer-line.png";
import footerLine2 from "./../../../public/images/footer-line-2.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiMiniChevronDown } from "react-icons/hi2";
import { HiMiniChevronUp } from "react-icons/hi2";

import { useState } from "react";

const Footer = () => {
  let [active, setActive] = useState(false);
  let [selectedLanguage, setSelectedLanguage] = useState("English");
  let languages = ["English", "French", "Spanish"];

  let handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setActive(false);
  };
  return (
    <div
      className="bg-gradient-to-r from-[#0C0C15] to-[#3F4069]
     relative "
    >
      <img
        className="absolute bottom-0 left-0 hidden 2xl:block h-[311px] !z-20 "
        src={footerDesign1}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden 2xl:block "
        src={footerDesign2}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden 2xl:block "
        src={footerLine}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden 2xl:block "
        src={footerLine2}
        alt=""
      />

      <div className="custom-container py-[62px] text-white ">
        <div className="flex flex-col md:flex-row lg:flex-nowrap flex-wrap justify-between md:mb-[69px] mb-10 lg:gap-0 md:gap-6 gap-[60px] ">
          {/* 1st */}
          <div>
            <img src={footerLogo} alt="" />
            <p className="mt-6 leading-[27.2px]  font-normal ">
              Reach out for expert guidance and personalized{" "}
              <br className="sm:inline-block hidden" /> solutions to meet your
              needs.
            </p>
            <div className="flex justify-start  mt-10 gap-4 relative !z-50">
              <a className="" href="#">
                <FaFacebookF className="!text-[24px] hover:text-primary !cursor-pointer" />
              </a>
              <a className="hover:text-primary cursor-pointer" href="#">
                <FaTwitter className="text-[24px] hover:text-primary cursor-pointer" />
              </a>
              <a className="hover:text-primary cursor-pointer" href="#">
                <FaYoutube className="text-[24px]" />
              </a>
              <a
                className="hover:text-primary cursor-pointer text-white "
                href="#"
              >
                <AiFillInstagram className="text-[24px]" />
              </a>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex flex-col ">
            <h1 className="font-medium text-2xl mb-[10px] whitespace-nowrap">
              Quick Links
            </h1>
            <div className="md:mt-10 mt-5 flex flex-col leading-9 content-end">
              <a className="hover:text-primary" href="">
                Home
              </a>
              <a className="hover:text-primary" href="">
                About
              </a>
              <a className="hover:text-primary" href="">
                Service
              </a>
              <a className="hover:text-primary" href="">
                Case Study
              </a>
              <a className="hover:text-primary" href="">
                Contact Us
              </a>
            </div>
          </div>
          {/* 3rd */}
          <div className="flex flex-col ">
            <h1 className="font-medium text-2xl mb-[10px]">Support</h1>
            <div className="md:mt-10 mt-5 flex flex-col leading-9 content-end">
              <a className="hover:text-primary" href="">
                FAQ’S
              </a>
              <a className="hover:text-primary" href="">
                Privacy Policy
              </a>
              <a className="hover:text-primary" href="">
                Terms & Condition
              </a>
            </div>
          </div>
          {/* 4rth */}
          <div>
            <h1 className="font-medium text-2xl">Address</h1>
            <p className="md:mt-[52px] mt-6 mb-6 leading-7">
              85 KDA Outer Bypass <br className="inline-block" /> road,
              Shonadanga, Khulna
            </p>
            <p className="mb-[20px] brightness-50">Language</p>
            <div className="relative flex ">
              {/* btn */}
              <button
                onClick={() => setActive((prev) => !prev)}
                className="px-2 lg:py-3 py-2 rounded-lg font-medium whitespace-nowrap w-[144px] lg:text-lg text-base flex items-center justify-center gap-1 text-black border bg-white"
              >
                <img src={footerCircle} alt="" />
                {selectedLanguage}
                {active ? (
                  <HiMiniChevronUp className="h-[1.75rem] w-[20px]"></HiMiniChevronUp>
                ) : (
                  <HiMiniChevronDown className="h-[1.75rem] w-[20px]" />
                )}
              </button>
              {/* dropdown */}

              {active && (
                <div className="absolute top-full bg-white text-black px-2 py-2 rounded-lg w-[144px] z-10">
                  {languages.map((language, index) => (
                    <div
                      onClick={() => handleLanguageSelect(language)}
                      className="py-1 px-2 cursor-pointer hover:bg-blue-100"
                      key={index}
                    >
                      {language}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-5 md:justify-between">
          <p className="text-center md:text-left">
            2024 © All rights reserved by <br className="sm:hidden block" />
            LawStick
          </p>
          <p className="text-center md:text-left">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
