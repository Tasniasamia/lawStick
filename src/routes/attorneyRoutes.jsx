import Availablity from "../pages/attorney/availablity";
import Booking from "../pages/attorney/booking/booking";
import CaseRequest from "../pages/attorney/caseRequest/caseRequest";
import MyCase from "../pages/attorney/cases/myCase";
import Clients from "../pages/attorney/client/client";
import AttorneyDashBoard from "../pages/attorney/dashboard/attorneyDashboard";
import MedicalChat from "../pages/attorney/messsage/message";


export const AttorneyRoutes = [
  {
    path: "/attorney/dashboard",
    component: AttorneyDashBoard,
  },
  {
    path:"/attorney/availablity",
    component:Availablity
  },
  {
    path:"/attorney/cases",
    component:MyCase
  },
  {
    path:"/attorney/case-request",
    component:CaseRequest
  },
  {
    path:"/attorney/booking",
    component:Booking
  },
  {
    path:"/attorney/clients",
    component:Clients
  },
  {
    path:"/attorney/message",
    component:MedicalChat
  }
  
];
