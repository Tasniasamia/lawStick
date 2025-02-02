import Index from "../pages";
import About from "../pages/about";
import Blog from "../pages/blog";
import Blogdetails from "../pages/blogdetails";
import CaseDetails from "../pages/casedetails";
import CaseStudy from "../pages/caseStudy";
import ContactUs from "../pages/contact";
import FaqPage from "../pages/faq";
import Service from "../pages/service";
import ServiceDetails from "../pages/servicedetails";
import Team from "../pages/team";
import TeamDetails from "../pages/teamdetails";


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
    },
    {
        path:"/team",
        component:Team
    },
    {
        path:"/team/:id",
        component:TeamDetails
    },
    {
        path:"/faq",
        component:FaqPage
    }
];
