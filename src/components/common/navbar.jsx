import { FaBell, FaRegChartBar, FaRegUser } from "react-icons/fa6";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import { IoMdClose } from "react-icons/io";
import { Avatar, Badge, Dropdown } from "antd";
import { FaAngleDown, FaUser } from "react-icons/fa";
import logo from "./../../../public/images/logo.png";
import { useModal } from "../../context/modalContext";
import SignUp from "../modal/signup";
import Login from "../modal/login";
import OtpModal from "../modal/otpmodal";
import UpdateProfile1 from "../modal/updateProfile1";
import UpdateProfile2 from "../modal/updateProfile2";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { TfiCommentAlt } from "react-icons/tfi";
import { RxDash, RxDashboard } from "react-icons/rx";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const {
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
    openSignUp,
    closeSignUp,
    signUpModal,
    otpModal,
    openOtpModal,
    closeOtpModal,
    isProfleUpdate1,
    openUpdateProfile1,
    closeUpdateProfile1,
    isProfleUpdate2,
    openUpdateProfile2,
    closeUpdateProfile2,
  
  } = useModal();
  const [user, setUser] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const findPath = location.pathname.match(/user|attorney|admin/gi) || [];
  const dropdownContent = (
    <div className="bg-white shadow-sm flex flex-col items-start w-[150px] h-fit ">
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
    </div>
  );
  return (
    <header
    className={`w-full absolute bg-transparent  ${
      findPath && (findPath[0] === "user" || findPath[0] === "attorney")
        ? "text-textColor border-[#EDEDED]"
        : "text-white border-b-amber-900"
    } z-20 pt-[30px] pb-[27.66px] border-b`}
    id="navbar">
    
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
        <div className={` items-center gap-[100px] flex`}>
          <div className={` ${ (findPath && findPath[0]) === "attorney" ?"hidden":"hidden lg:block"}`}>
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
            {user ? (
              <div className="flex gap-[20px] items-center">
                <TfiCommentAlt  className={`text-[18px] ${
                    findPath && (findPath[0] === "user" || findPath[0] === "attorney") ? "text-textColor" : "text-white"
                    }`} />
                <Badge count={5} size="small">
                  <FaBell
                    className={`text-[18px] ${
                      findPath && (findPath[0] === "user" || findPath[0] === "attorney") ? "text-textColor" : "text-white"
                    }`}
                  />
                </Badge>
                <div className="relative dropdown-container">
                  <div
                    className="cursor-pointer"
                    aria-label="User Profile"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  >
                    {user?.image ? (
                      <img
                        src={user?.image}
                        alt="User"
                        className="object-cover w-[56px] h-[56px] rounded-full"
                      />
                    ) : (
                      <Avatar
                        name={user?.name}
                        className="w-[40px] h-[40px]"
                        bgColor="bg-secondary"
                        icon={<FaUser className="text-[20px]" />}
                      />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 z-50  mt-2 transition-all duration-300 bg-white  shadow-lg ring-1 ring-black ring-opacity-5 w-[150px]">
                      <div className="" role="menu" aria-orientation="vertical">
                        {/* Profile */}
                        <Link
                          to={
                            user?.role === "admin"
                              ? "/admin/profile"
                              : user?.role === "attorney"
                              ? "/attorney/profile"
                              : "/user/profile"
                          }
                          className={`block ${
                            location?.pathname ===
                            ("/user/profile" ||
                              "/attorney/profile" ||
                              "/admin/profile")
                              ? "bg-primary text-white"
                              : ""
                          } px-4 py-2 text-sm text-textColor transition duration-200  hover:bg-primary  hover:text-white`}
                          role="menuitem"
                        >
                          <div className="flex items-center gap-2">
                            <FaRegUser />
                            <span>Profile</span>
                          </div>
                        </Link>

                        {/* Dashboard */}
                        {/* user?.role === "admin"
                              ? "/admin/dashboard"
                              : user?.role === "attorney"
                              ? "/attorney/dashboard"
                              : "/user/dashboard" */}
                        <Link
                          to={user && "/user/dashboard"}
                          className={`block ${
                            location?.pathname ===
                            ("/user/dashboard" ||
                              "/attorney/dashboard" ||
                              "/admin/dashboard")
                              ? "bg-primary text-white"
                              : ""
                          } px-4 py-2 text-sm text-textColor transition duration-200  hover:bg-primary  hover:text-white`}
                          role="menuitem"
                        >
                          <div className="flex items-center gap-2">
                            <RxDashboard />
                            <span>Dashboard</span>
                          </div>
                        </Link>

                        {/* Logout */}
                        <div
                          // onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-textColor transition duration-200 rounded-md cursor-pointer hover:bg-primary hover:text-white"
                          role="menuitem"
                        >
                          <div className="flex items-center gap-2">
                            <FiLogOut />
                            <span>Logout</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Button
                onClick={() => {
                  openLoginModal();
                }}
              >
                Get Appointed
              </Button>
            )}

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
            className={`absolute top-[-30px] left-0  bg-[#3F4069] w-full md:px-[57px] px-7 py-8  text-white`}
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
      {isProfleUpdate1 && <UpdateProfile1 />}
      {isProfleUpdate2 && <UpdateProfile2 />}
      
    </header>
  );
};

export default Navbar;
