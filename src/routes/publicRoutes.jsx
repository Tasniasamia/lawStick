import Index from "../pages";
import About from "../pages/about";
import CaseStudy from "../pages/caseStudy";
import Service from "../pages/service";


export const PublicRoutes = [
    {
        path: "/",
        component: Index,
    },
    {
        path:"/about",
        component:About
    },
    {
        path:'/service',
        component:Service
    },
    {
        path:'/caseStudy',
        component:CaseStudy
    }
];
