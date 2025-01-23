import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className=" text-sm navbar topbar pt-[14.7px] pb-[15.64px]">
      <div className="custom-container flex md:flex-row flex-col md:justify-between items-center md:gap-0 gap-3">
        {/* 1st div */}
        <div>
          <div className="flex items-center md:gap-9 gap-6">
            <span className="mr-4 flex items-center gap-1">
              <IoLocationOutline />
              82 East Hill, Colchester, Essex, England
            </span>
            <span>info@appstick.co.uk</span>
          </div>

          <div className="block lg:hidden relative">
            <div
              id="dropdown-menu"
              className="absolute left-0 mt-2 hidden w-64 p-3 bg-gray-700 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-0 peer-focus:opacity-100 peer-focus:block"
            >
              <p>Location: 82 East Hill, Colchester, Essex, England.</p>
              <p>Email: info@appstick.co.uk</p>
            </div>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex md:gap-[33px] gap-6 items-center">
          <div>
            <span className="whitespace-nowrap">Mon-Saturday, 09am - 05pm</span>
          </div>

          <div
            className={`flex   md:static items-center md:gap-5 gap-3  relative`}
          >
            <a
              href=""
              className="hover:translate-y-[-1.5px] duration-300 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href=""
              className="hover:translate-y-[-1.5px]  duration-300 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href=""
              className="hover:translate-y-[-1.5px]  duration-300 transition-all"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
