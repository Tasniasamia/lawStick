import AboutUS from "../components/common/about";
import NewsBlog from "../components/common/blog";
import CaseStudy from "../components/common/caseStudy";
import Contact from "../components/common/contact";
import Lawyer from "../components/common/lawyer";
import Service from "../components/common/service";
import Testimonial from "../components/common/testimonial";
import Banner from "../components/home/banner";
import Faq from "../components/home/faq";

const Index = () => {
    return (
        <div>
            <Banner/>
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