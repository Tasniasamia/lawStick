import { useEffect, useState } from "react";
import { NavLink, useNavigate, Outlet, Link } from "react-router-dom";
import { Drawer, Space } from "antd";
import {
  FaHandsHoldingChild,
  FaTruckArrowRight,
  FaBell,
} from "react-icons/fa6";
import {
  IoMdInformationCircleOutline,
  IoMdMenu,
  IoMdClose,
} from "react-icons/io";
import {
  MdEmojiEvents,
  MdLocalActivity,
  MdOutlineDashboard,
} from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { SlBadge } from "react-icons/sl";
import profileImage from "../../public/images/Alina.png";
import UserDashboardSkeleton from "../components/skeleton/userDashboardSkeleton";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GiClawHammer } from "react-icons/gi";

const UserDashboardLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const menuItems = [
    { id: 1, name: "Dashboard", href: "/user/dashboard", icon: <MdOutlineDashboard /> },
    { id: 2, name: "Attorney", href: "/user/attorney", icon: <GiClawHammer /> },
    { id: 3, name: "Case History", href: "/user/case-history", icon: <FaClockRotateLeft /> },
    { id: 4, name: "Package", href: "/user/user_package", icon: <SlBadge /> },
    { id: 5, name: "Events", href: "/user/events", icon: <MdEmojiEvents /> },
    { id: 6, name: "Order History", href: "/user/order-history", icon: <FaTruckArrowRight /> },
    { id: 7, name: "Children", href: "/user/children", icon: <FaHandsHoldingChild /> },
    { id: 8, name: "Profile Settings", href: "/user/profile", icon: <ImProfile /> },
    { id: 9, name: "Change Password", href: "/user/change-password", icon: <IoMdInformationCircleOutline /> },
  ];

  return !user ? (
    <UserDashboardSkeleton />
  ) : (
    <section className="bg-white">
      <div className="custom-container lg:pt-[200px] pt-[150px] lg:pb-[150px] pb-[100px]">
        <div className="w-full flex lg:flex-row flex-col gap-6">
          {/* Small Screen Sidebar */}
          <div className="block lg:hidden">
            <Space>
              <IoMdMenu className="text-[40px]" onClick={showDrawer} />
            </Space>
            <Drawer placement={placement} closable={false} onClose={onClose} open={open}>
              <SidebarContent menuItems={menuItems}/>
            </Drawer>
          </div>

          {/* Large Screen Sidebar */}
          <div className="hidden lg:block lg:w-1/4 w-full border rounded-[20px] pb-[113px] shadow-md overflow-hidden">
            <SidebarContent menuItems={menuItems}/>
          </div>

          {/* Backdrop for Small Screens */}
          {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40" onClick={toggleSidebar}></div>}

          {/* Content Section */}
          <div className="lg:w-3/4 w-full shadow-md rounded-[20px] border">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

const SidebarContent = ({menuItems}) => (
  <div className="">
    <div className="bg-[#EDEDED]">
      <div className="flex justify-start ps-4 items-center gap-[10px] py-[34px]">
        <div className="rounded-full p-[3px] border border-black">
          <img className="rounded-full w-[48px] h-[48px] object-cover" src={profileImage} alt="profile" />
        </div>
        <div>
          <h3 className="font-medium mb-[2px]">Martha Ulison</h3>
          <p className="text-gray-500 text-sm">ulison@email.com</p>
        </div>
      </div>
    </div>
    <div className="pt-[40px]  mx-auto px-4 w-[242px]">
      <nav className="space-y-[27px]">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.href} className={`flex items-center gap-[15px] ${location.pathname === item.href ? "text-[#B68C5A]" : "text-[#242628]"}`}>
            <span className="text-[24px]">{item.icon}</span>
            <span className="sidebar-title">{item.name}</span>
          </Link>
        ))}
        <div className="pt-[50px] space-y-[27px]">
          <Link to="/user/help" className={`flex items-center gap-[15px] ${location.pathname === "/user/help" ? "text-[#B68C5A]" : "text-[#242628]"}`}>
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

export default UserDashboardLayout;