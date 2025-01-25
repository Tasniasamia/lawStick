import AboutUS from "../components/common/about";
import Contact from "../components/common/contact";
import Banner from "../components/home/banner";
import NewsBlog from "../components/home/blog";
import CaseStudy from "../components/home/caseStudy";
import Faq from "../components/home/faq";
import Lawyer from "../components/home/lawyer";
import Service from "../components/home/service";
import Testimonial from "../components/home/testimonial";

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