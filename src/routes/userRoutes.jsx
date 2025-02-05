import Attorney from "../pages/user/attorney/attorney";
import CaseHistory from "../pages/user/case-history/case-history";
import UserDashBoard from "../pages/user/dashboard";
import MedicalChat from "../pages/user/message/messge";
import UserProfileSettings from "../pages/user/settings";

export const UserRoutes = [
  {
    path: "/user/dashboard",
    component: UserDashBoard,
  },
  {
    path: "/user/case-history",
    component: CaseHistory,
  },
  {
    path:'/user/attorney',
    component:Attorney
  },
  {
    path:'/user/profile',
    component:UserProfileSettings
  },
  {
    path:'/user/message',
    component:MedicalChat
  }
];
