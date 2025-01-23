import { FaRegChartBar } from "react-icons/fa6";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import { IoMdClose } from "react-icons/io";
import { Dropdown } from "antd";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const dropdownContent = (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: "10px",
        background: "#fff",
        border: "1px solid #d9d9d9",
        borderRadius: "4px",
      }}
    >
      <li style={{ padding: "5px 10px" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          style={{ textDecoration: "none", color: "#000" }}
        >
          1st menu item
        </a>
      </li>
      <li style={{ padding: "5px 10px", color: "#999", cursor: "not-allowed" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
          style={{
            textDecoration: "none",
            color: "inherit",
            pointerEvents: "none",
          }}
        >
          2nd menu item (disabled)
        </a>
      </li>
      <li style={{ padding: "5px 10px", color: "#999", cursor: "not-allowed" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
          style={{
            textDecoration: "none",
            color: "inherit",
            pointerEvents: "none",
          }}
        >
          3rd menu item (disabled)
        </a>
      </li>
      <li style={{ padding: "5px 10px", color: "#ff4d4f", cursor: "pointer" }}>
        <div>a danger item</div>
      </li>
    </ul>
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
            src={"./images/logo.png"}
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
                <div>
                  <Link to={`/caseStudy`}>
                    <li
                      className={`hover:text-primary ${
                        location?.pathname === "Case Study"
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      Case Study
                    </li>
                  </Link>
                </div>
                <li
                  className={`hover:text-primary cursor-pointer ${
                    location?.pathname === "Contact Us" ? "text-primary" : ""
                  }`}
                >
                  Contact Us
                </li>
                <li
                  className={`hover:text-primary cursor-pointer`}
                >
                  <Dropdown overlay={dropdownContent} trigger={["hover"]} >
                    <a onClick={(e) => e.preventDefault()} className="flex items-center gap-2">
                      Pages
                      <FaAngleDown className="text-sm"/>
                    </a>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex items-center gap-3">
            <Button>Get Appointed</Button>

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
          <div className="absolute top-[-30px] left-0 z-10 bg-[#3F4069] w-full md:px-[57px] px-7 py-8  text-white">
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
              <li
                  className={`hover:text-primary cursor-pointer`}
                >
                  <Dropdown overlay={dropdownContent} trigger={["hover"]} >
                    <a onClick={(e) => e.preventDefault()} className="flex items-center gap-2">
                      Pages
                      <FaAngleDown className="text-sm"/>
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
    </header>
  );
};

export default Navbar;
