import AboutUs from "../components/about/about";
import CasesStatus from "../components/about/caseStatus";
import Fairness from "../components/about/fairness";
import Banner from "../components/common/banner";
import Contact from "../components/common/contact";
import Lawyer from "../components/common/lawyer";
import OurClients from "../components/common/out-clients";
import Testimonial from "../components/common/testimonial";


const About = () => {
    return (
        <div>
            <Banner title="About Us"/>
            <AboutUs/>
            <CasesStatus/>
            <Fairness/>
            <Testimonial/>
            <Lawyer/>
            <Contact/>
            <OurClients/>
        </div>
    );
};

export default About;