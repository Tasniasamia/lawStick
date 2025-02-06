import { useState } from "react";
import {  useNavigate, Outlet, Link } from "react-router-dom";
import { Drawer, Space } from "antd";

import {
  IoMdMenu,
} from "react-icons/io";
import {
MdOutlineDashboard,
} from "react-icons/md";
import {  IoSettingsOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import profileImage from "../../public/images/Alina.png";
import UserDashboardSkeleton from "../components/skeleton/userDashboardSkeleton";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GiClawHammer } from "react-icons/gi";
import { useModal } from "../context/modalContext";
import Appointment from "../pages/user/attorney/appointment";
import { TbMessage } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { VscFiles } from "react-icons/vsc";

const AttorneyDashboardLayout = () => {
  const [user, setUser] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  // const {isAppointmentOpen,setIsAppointmentOpen}=useModal();

  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      href: "/attorney/dashboard",
      icon: <MdOutlineDashboard />,
    },
    { id: 2, name: "Attorney", href: "/user/attorney", icon: <GiClawHammer /> },
    {
      id: 3,
      name: "Case History",
      href: "/user/case-history",
      icon: <FaClockRotateLeft />,
    },
    {
      id: 4,
      name: "Availability",
      href: "/attorney/availablity",
      icon: <LuCalendarClock />,
    },
    {
      id: 4,
      name: "Files",
      href: "/user/files",
      icon: <VscFiles />,
    },
    { id: 7, name: "Message", href: "/user/message", icon: <TbMessage /> },

    {
      id: 8,
      name: "Settings",
      href: "/user/profile",
      icon: <IoSettingsOutline />,
    },
  ];

  return !user ? (
    <UserDashboardSkeleton />
  ) : (
    <section className="bg-white">
      <div className="custom-container lg:pt-[150px] pt-[150px] lg:pb-[150px] pb-[100px]">
         {/* Small Screen Sidebar */}
         <div className="flex items-end justify-between mb-[56px]">
           <div className="md:w-[353px] w-[300px]">
           <h2 className="font-sans font-medium text-[24px] leading-[28.15px] pb-[24px]">Good Morning, <span className="sm:text-[38px] text-[28px] ms-1 leading-[44.57px]">Asif</span></h2>
           <p className="text-base font-normal font-sans text-textColor ">Here’s a quick overview of your performance.
           Let’s make today another successful day!</p>
           </div>
            <Space className="lg:hidden block">
              <IoMdMenu className="text-[40px]" onClick={showDrawer} />
            </Space>

            <Drawer
              placement={"right"}
              closable={false}
              onClose={onClose}
              open={open}
            >
              <SidebarContent menuItems={menuItems} />
            </Drawer>
          </div>
        <div className="w-full flex lg:flex-row flex-col gap-6">
        
         
          {/* Large Screen Sidebar */}
          <div className="hidden lg:block lg:w-1/4 w-full border rounded-[20px] pb-[113px] shadow-md overflow-hidden">
            <SidebarContent menuItems={menuItems} />
          </div>

          {/* Backdrop for Small Screens */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
              onClick={toggleSidebar}
            ></div>
          )}

          {/* Content Section */}
          <div className="lg:w-3/4 w-full shadow-md rounded-[20px] border overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
      <Appointment />
    </section>
  );
};

const SidebarContent = ({ menuItems }) => (
  <div className="">
    <div className="bg-[#EDEDED]">
      <div className="flex justify-start ps-4 items-center gap-[10px] py-[34px]">
        <div className="rounded-full p-[3px] border border-black">
          <img
            className="rounded-full w-[48px] h-[48px] object-cover"
            src={profileImage}
            alt="profile"
          />
        </div>
        <div>
          <h3 className="font-medium mb-[2px]">Martha Ulison</h3>
          <p className="text-gray-500 text-sm">ulison@email.com</p>
        </div>
      </div>
    </div>
    <div className="pt-[40px]  mx-auto px-4 w-[242px]">
      <nav className="space-y-[27px]">
        {menuItems?.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`flex items-center gap-[15px] ${
              location.pathname === item.href
                ? "text-[#B68C5A]"
                : "text-[#242628]"
            }`}
          >
            <span className="text-[24px]">{item.icon}</span>
            <span className="sidebar-title">{item.name}</span>
          </Link>
        ))}
        <div className="pt-[50px] space-y-[27px]">
          <Link
            to="/user/help"
            className={`flex items-center gap-[15px] ${
              location.pathname === "/user/help"
                ? "text-[#B68C5A]"
                : "text-[#242628]"
            }`}
          >
            <span className="text-[24px]">
              <IoIosInformationCircleOutline />
            </span>
            <span className="sidebar-title">Help & Info</span>
          </Link>
          <a className="flex items-center gap-[15px] cursor-pointer" href="#">
            <HiOutlineLogout className="h-6 w-6 hover:text-[#B68C5A] text-[#242628]" />
            <span className="sidebar-title">Logout</span>
          </a>
        </div>
      </nav>
    </div>
  </div>
);

export default AttorneyDashboardLayout;
