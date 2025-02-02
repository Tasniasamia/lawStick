import { FaRegChartBar } from "react-icons/fa6";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import { IoMdClose } from "react-icons/io";
import { Dropdown } from "antd";
import { FaAngleDown } from "react-icons/fa";
import logo from "./../../../public/images/logo.png";
import { useModal } from "../../context/modalContext";
import SignUp from "../modal/signup";
import Login from "../modal/login";
import OtpModal from "../modal/otpmodal";
import UpdateProfile1 from "../modal/updateProfile1";
import UpdateProfile2 from "../modal/updateProfile2";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const {
    isLoginModalOpen, openLoginModal, closeLoginModal,openSignUp,closeSignUp,signUpModal, otpModal,openOtpModal,closeOtpModal,isProfleUpdate1,openUpdateProfile1,closeUpdateProfile1,isProfleUpdate2,openUpdateProfile2,closeUpdateProfile2  } = useModal();

  const dropdownContent = (
    <div className="bg-white shadow-sm flex flex-col items-start w-[150px] h-fit ">
      {/* <p > */}
      <Link
        to="/blog"
        className={`${
          location?.pathname === "/blog"
            ? "bg-primary text-white"
            : "bg-white text-textColor"
        } hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full`}
      >
        Blog
      </Link>
      <Link
        to="/team"
        className={`${
          location?.pathname === "/team"
            ? "bg-primary text-white"
            : "bg-white text-textColor"
        } hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full`}
      >
        Team
      </Link>
      {/* </p> */}
      {/* <p > */}
      <Link
        to="/faq"
        className={`${
          location?.pathname === "/faq"
            ? "bg-primary text-white"
            : "bg-white text-textColor"
        } hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full`}
      >
        Faq
      </Link>
      {/* </p> */}
      {/* <p> */}
      <Link
        to="/contact"
        className={`${
          location?.pathname === "/contact"
            ? "bg-primary text-white"
            : "bg-white text-textColor"
        } hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full`}
      >
        Contact
      </Link>
      <p
        className={` hover:bg-primary hover:text-white text-lg  ps-[20px] block py-[10px] w-full cursor-pointer`}
        onClick={() => {
          openOtpModal();
          console.log("clicked");
        }}
      >
        OTP
      </p>
      {/* </p> */}
    </div>
  );

  return (
    <header
      className="w-full absolute bg-transparent  text-white z-20  pt-[30px] pb-[27.66px] border-b border-b-amber-900"
      id="navbar"
    >
      <nav className="flex justify-between items-center custom-container relative">
        {/* 1st */}
        <a href="#">
          <img
            className="xl:w-[56px] xl:h-[62px] md:w-[45px] md:h-[49px] w-[29px] h-[32px]"
            src={logo}
            alt="logo"
          />
        </a>
        {/* 2nd */}
        <div className="flex items-center gap-[100px]">
          <div className="hidden lg:block">
            <div
              className={`flex gap-9 text-lg font-medium transition-all  w-full items-center`}
            >
              <ul className="flex items-center gap-8">
                <div>
                  <Link to={`/`}>
                    <li
                      className={`hover:text-primary ${
                        location?.pathname === "/" ? "text-primary" : ""
                      }`}
                    >
                      Home
                    </li>
                  </Link>
                </div>
                <div>
                  <Link to={`/about`}>
                    <li
                      className={`hover:text-primary ${
                        location?.pathname === "/about" ? "text-primary" : ""
                      }`}
                    >
                      About
                    </li>
                  </Link>
                </div>
                <div>
                  <Link to={`/service`}>
                    <li
                      className={`hover:text-primary ${
                        location?.pathname === "/service" ? "text-primary" : ""
                      }`}
                    >
                      Service
                    </li>
                  </Link>
                </div>
                <div>
                  <Link to={`/caseStudy`}>
                    <li
                      className={`hover:text-primary ${
                        location?.pathname === "/caseStudy"
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      Case Study
                    </li>
                  </Link>
                </div>
                <Link to={`/contact`}>
                  <li
                    className={`hover:text-primary cursor-pointer ${
                      location?.pathname === "/contact" ? "text-primary" : ""
                    }`}
                  >
                    Contact Us
                  </li>
                </Link>
                <li className={`hover:text-primary cursor-pointer`}>
                  <Dropdown overlay={dropdownContent} trigger={["hover"]}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-2"
                    >
                      Pages
                      <FaAngleDown className="text-sm" />
                    </a>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => {
                openLoginModal();
              }}
            >
              Get Appointed
            </Button>

            {/*droppings*/}
            <div className="relative">
              <div
                onClick={() => setActive((prev) => !prev)}
                className="block lg:hidden toggle-icon"
              >
                <FaRegChartBar className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
        {active && (
          <div
            className="absolute top-[-30px] left-0  bg-[#3F4069] w-full md:px-[57px] px-7 py-8  text-white"
            style={{ zIndex: "150" }}
          >
            <ul className="flex flex-col items-center gap-8">
              <div>
                <Link to={`/`}>
                  <li
                    className={`hover:text-primary ${
                      location?.pathname === "/" ? "text-primary" : ""
                    }`}
                  >
                    Home
                  </li>
                </Link>
              </div>
              <div>
                <Link to={`/about`}>
                  <li
                    className={`hover:text-primary ${
                      location?.pathname === "About" ? "text-primary" : ""
                    }`}
                  >
                    About
                  </li>
                </Link>
              </div>
              <div>
                <Link to={`/service`}>
                  <li
                    className={`hover:text-primary ${
                      location?.pathname === "Service" ? "text-primary" : ""
                    }`}
                  >
                    Service
                  </li>
                </Link>
              </div>
              <li
                className={`hover:text-primary ${
                  location?.pathname === "Case Study" ? "text-primary" : ""
                }`}
              >
                Case Study
              </li>
              <li
                className={`hover:text-primary cursor-pointer ${
                  location?.pathname === "Contact Us" ? "text-primary" : ""
                }`}
              >
                Contact Us
              </li>
              <li className={`hover:text-primary cursor-pointer`}>
                <Dropdown overlay={dropdownContent} trigger={["hover"]}>
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2"
                  >
                    Pages
                    <FaAngleDown className="text-sm" />
                  </a>
                </Dropdown>
              </li>
            </ul>
            <div className="absolute right-[2rem] top-[1rem]">
              <div
                onClick={() => setActive((prev) => !prev)}
                className="block lg:hidden toggle-icon"
              >
                <IoMdClose className="h-6 w-6" />
              </div>
            </div>
          </div>
        )}
      </nav>
      {signUpModal && <SignUp />}
      {isLoginModalOpen && <Login />}
      {otpModal && <OtpModal />}
      {isProfleUpdate1 && <UpdateProfile1/>}
      {isProfleUpdate2 && <UpdateProfile2/>}
    </header>
  );
};

export default Navbar;
