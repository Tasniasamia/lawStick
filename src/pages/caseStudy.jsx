import OurCase from "../components/caseStudy/ourCase";
import Banner from "../components/common/banner";
import Contact from "../components/common/contact";
import OurClients from "../components/common/out-clients";

const CaseStudy = () => {
    return (
        <div>
            <Banner title={'Case Study'}/>
            <OurCase/>
            <OurClients/>
            <Contact/>
        </div>
    );
};

export default CaseStudy;