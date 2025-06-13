import { useEffect } from "react";
import AboutUS from "../components/common/about";
import NewsBlog from "../components/common/blog";
import CaseStudy from "../components/common/caseStudy";
import Contact from "../components/common/contact";
import Lawyer from "../components/common/lawyer";
import Service from "../components/common/service";
import Testimonial from "../components/common/testimonial";
import Banner from "../components/home/banner";
import Faq from "../components/home/faq";
import gsap from "gsap";
import AnimationForm from "../components/common/form";

const Index = () => {
    useEffect(()=>{
   gsap.config({
    autoSleep:1,
    force3D: false,
    nullTargetWarn: false,
    trialWarn: false,
    units: { left: "100%", top: "100%", rotation: "600px" },
  });
    },[])
    return (
        <div>
            <Banner/>
            {/* <AnimationForm/> */}
            <AboutUS/>
            <Service/>
            <Lawyer/>
            <Testimonial/>
            <CaseStudy/>
            <Faq/>
            <Contact/>
            <NewsBlog/>
         
        </div>
    );
};

export default Index;