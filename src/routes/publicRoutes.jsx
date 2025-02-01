import Index from "../pages";
import About from "../pages/about";
import Blog from "../pages/blog";
import Blogdetails from "../pages/blogdetails";
import CaseDetails from "../pages/casedetails";
import CaseStudy from "../pages/caseStudy";
import ContactUs from "../pages/contact";
import Service from "../pages/service";
import ServiceDetails from "../pages/servicedetails";


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
        path:"/service/:id",
        component:ServiceDetails
    },
    {
        path:'/caseStudy',
        component:CaseStudy
    },
    {
        path:'/caseStudy/:id',
        component:CaseDetails
    },
    {
        path:"/blog",
        component:Blog
    },
    {
        path:"/blog/:id",
        component:Blogdetails
    },
    {
        path:'/contact',
        component:ContactUs
    }
];
