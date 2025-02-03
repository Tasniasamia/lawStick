import CaseHistory from "../pages/user/case-history/case-history";
import UserDashBoard from "../pages/user/dashboard";

export const UserRoutes = [
  {
    path: "/user/dashboard",
    component: UserDashBoard,
  },
  {
    path: "/user/case-history",
    component: CaseHistory,
  },
];
