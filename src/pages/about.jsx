import AboutUs from "../components/about/about";
import CasesStatus from "../components/about/caseStatus";
import Banner from "../components/common/banner";

const About = () => {
    return (
        <div>
            <Banner title="About Us"/>
            <AboutUs/>
            <CasesStatus/>
        </div>
    );
};

export default About;