import Availablity from "../pages/attorney/availablity";
import Booking from "../pages/attorney/booking/booking";
import BookingDetails from "../pages/attorney/booking/bookingDetails";
import CaseRequest from "../pages/attorney/caseRequest/caseRequest";
import CaseRequestDetails from "../pages/attorney/caseRequest/caseRequestDetails";
import MyCase from "../pages/attorney/cases/myCase";
import Clients from "../pages/attorney/client/client";
import ClientDetails from "../pages/attorney/client/clientDetails";
import AttorneyDashBoard from "../pages/attorney/dashboard/attorneyDashboard";
import MedicalChat from "../pages/attorney/messsage/message";
import AttorneyProfileSettings from "../pages/attorney/settings/settings";


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
    path:"/attorney/clients/:id",
    component:ClientDetails
  },
  {
    path:"/attorney/message",
    component:MedicalChat
  },
  {
    path:"/attorney/profile",
    component:AttorneyProfileSettings
  },
  {
    path:"/attorney/caseRequst/:id",
    component:CaseRequestDetails
  },
  {
    path:"/attorney/bookingDetails/:id",
    component:BookingDetails
  }
  
];
