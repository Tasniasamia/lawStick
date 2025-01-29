import Index from "../pages";
import About from "../pages/about";
import Blog from "../pages/blog";
import Blogdetails from "../pages/blogdetails";
import CaseStudy from "../pages/caseStudy";
import ContactUs from "../pages/contact";
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
