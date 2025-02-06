import AttorneyDashBoard from "../pages/attorney/dashboard/attorneyDashboard";
import AppointmentDetails from "../pages/user/appointment/appointmentdetails";
import UserAppointment from "../pages/user/appointment/userAppointment";
import Attorney from "../pages/user/attorney/attorney";
import CaseHistory from "../pages/user/case-history/case-history";
import CaseDetails from "../pages/user/case-history/casedetails";
import UserDashBoard from "../pages/user/dashboard";
import CaseFile from "../pages/user/files/files";
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
     path:'/user/case-history/:id',
     component:CaseDetails
  },
  {
    path:'/user/appointment',
    component:UserAppointment
  },
  {
    path:'/user/appointment/:id',
    component:AppointmentDetails
  },
  {
    path:'/user/files',
    component:CaseFile
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
  },
  {
    path:'/user/chart',
    component:AttorneyDashBoard
  }
];
