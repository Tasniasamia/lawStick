import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Badge, Avatar } from "antd";
import {
  FaBell,
  FaRegChartBar,
  FaUser,
  FaAngleDown,
  FaRegUser,
} from "react-icons/fa6";
import { TfiCommentAlt } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";

import logo from "./../../../public/images/logo.png";
import { useModal } from "../../context/modalContext";
import Button from "./button";
import SignUp from "../modal/signup";
import Login from "../modal/login";
import OtpModal from "../modal/otpmodal";
import UpdateProfile1 from "../modal/updateProfile1";
import UpdateProfile2 from "../modal/updateProfile2";

const Navbar = () => {
  const location = useLocation();
  const [user, setUser] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTl = useRef(gsap.timeline({ paused: true }));
  const findPath = location.pathname.match(/user|attorney|admin/gi) || [];

  const {
    isLoginModalOpen,
    openLoginModal,
    signUpModal,
    otpModal,
    isProfleUpdate1,
    isProfleUpdate2,
  } = useModal();

  useEffect(() => {
    // Logo animation
    gsap.from(".logo", { y: -30, opacity: 0, duration: 1, delay: 0.5 });

    // Mobile nav timeline
    menuTl.current
      .to("#mobile", { right: 0, duration: 0.6 })
      .from("#mobile li", {
        x: 80,
        duration: 0.3,
        stagger: 0.2,
        opacity: 0,
       
      });
  }, []);

  const handleMenuToggle = () => {
    if (!menuOpen) {
      menuTl.current.play();
    } else {
      menuTl.current.reverse();
    }
    setMenuOpen(!menuOpen);
  };

  const dropdownContent = (
    <div className="bg-white z-40 flex flex-col items-start w-[150px] shadow-xl">
      {["blog", "team", "faq", "contact"].map((item) => (
        <Link
          key={item}
          to={`/${item}`}
          className={`${
            location.pathname === `/${item}`
              ? "bg-primary text-white"
              : "text-textColor"
          } hover:bg-primary hover:text-white ps-5 py-2 w-full block text-lg`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
      <p
        className="hover:bg-primary hover:text-white ps-5 py-2 w-full block text-lg cursor-pointer"
        onClick={() => console.log("OTP Clicked")}
      >
        OTP
      </p>
    </div>
  );

  const dropdownContent2 = (
    <div className="absolute right-0 z-40 mt-2 bg-white shadow-lg ring-1 ring-black ring-opacity-5 w-[150px]">
      <Link
        to={
          user?.role === "admin"
            ? "/admin/profile"
            : user?.role === "attorney"
            ? "/attorney/profile"
            : "/user/profile"
        }
        className={`block px-4 py-2 text-lg ${
          location.pathname.includes("profile")
            ? "bg-primary text-white"
            : "text-textColor"
        } hover:bg-primary hover:text-white`}
      >
        <div className="flex items-center gap-2">
          <FaRegUser />
          <span>Profile</span>
        </div>
      </Link>
      <Link
        to={
          user?.role === "admin"
            ? "/admin/dashboard"
            : user?.role === "attorney"
            ? "/attorney/dashboard"
            : "/user/dashboard"
        }
        className={`block px-4 py-2 text-lg ${
          location.pathname.includes("dashboard")
            ? "bg-primary text-white"
            : "text-textColor"
        } hover:bg-primary hover:text-white`}
      >
        <div className="flex items-center gap-2">
          <RxDashboard />
          <span>Dashboard</span>
        </div>
      </Link>
      <div className="px-4 py-2 text-lg text-textColor cursor-pointer hover:bg-primary hover:text-white">
        <div className="flex items-center gap-2">
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`w-full absolute z-20 border-b ${
        findPath.length
          ? "text-textColor border-[#EDEDED]"
          : "text-white border-b-amber-900"
      } pt-4 pb-3 lg:pt-[30px] lg:pb-[27.66px]`}
    >
      <div className="overflow-hidden">
        <nav className="flex justify-between items-center custom-container">
          <a href="#" className="logo">
            <img
              src={logo}
              alt="logo"
              className="xl:w-[56px] xl:h-[62px] md:w-[45px] md:h-[49px] w-[29px] h-[32px]"
            />
          </a>
          <div className="flex items-center gap-10">
            <ul className="hidden lg:flex gap-8 text-lg font-medium">
              {["", "about", "service", "caseStudy", "contact"].map((path) => (
                <li key={path}>
                  <Link
                    to={`/${path}`}
                    className={`hover:text-primary ${
                      location.pathname === `/${path}` ? "text-primary" : ""
                    }`}
                  >
                    {path === ""
                      ? "Home"
                      : path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                </li>
              ))}
              <li className="cursor-pointer">
                <Dropdown overlay={dropdownContent} trigger={["hover"]}>
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2"
                  >
                    Pages <FaAngleDown className="text-sm" />
                  </a>
                </Dropdown>
              </li>
            </ul>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  {findPath[0] === "attorney" && (
                    <Link
                      to="/"
                      target="_blank"
                      className="flex items-center gap-1 hover:text-primary"
                    >
                      <ImExit />
                      <span>Live Site</span>
                    </Link>
                  )}
                  <TfiCommentAlt />
                  <Badge count={3} size="small">
                    <FaBell />
                  </Badge>
                  <Dropdown overlay={dropdownContent2} trigger={["hover"]}>
                    <div className="cursor-pointer">
                      <Avatar
                        icon={<FaUser />}
                        className="w-[40px] h-[40px] object-cover rounded-full"
                      />
                    </div>
                  </Dropdown>
                </>
              ) : (
                <Button onClick={openLoginModal}>Get Appointed</Button>
              )}

              {/* Mobile Menu Icon */}
              {!findPath.includes("attorney") && (
                <div className="lg:hidden">
                  {!menuOpen && (
                    <FaRegChartBar
                      className="h-6 w-6 text-white cursor-pointer"
                      onClick={handleMenuToggle}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        
          <div
            id="mobile"
            className={`fixed ${menuOpen && "block"} top-0  right-[-100%] w-[40%] h-full bg-black text-white py-12 z-30`}
          >
            <IoMdClose
              className="h-6 w-6 text-white cursor-pointer absolute top-4 right-4"
              onClick={handleMenuToggle}
            />

            <ul className="flex flex-col items-start px-6 gap-6">
              {["", "about", "service", "caseStudy", "contact"].map((path) => (
                <li key={path}>
                  <Link
                    to={`/${path}`}
                    className={`hover:text-primary ${
                      location.pathname === `/${path}` ? "text-primary" : ""
                    }`}
                  >
                    {path === ""
                      ? "Home"
                      : path.charAt(0).toUpperCase() + path.slice(1)}
                  </Link>
                </li>
              ))}
              <li>
                <Dropdown overlay={dropdownContent} trigger={["hover"]}>
                  <a
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-2"
                  >
                    Pages <FaAngleDown />
                  </a>
                </Dropdown>
              </li>
            </ul>
          </div>
       
      </div>

      {/* Modals */}
      {signUpModal && <SignUp />}
      {isLoginModalOpen && <Login />}
      {otpModal && <OtpModal />}
      {isProfleUpdate1 && <UpdateProfile1 />}
      {isProfleUpdate2 && <UpdateProfile2 />}
    </header>
  );
};

export default Navbar;
