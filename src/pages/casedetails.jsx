import OurCaseDetails from "../components/caseStudy/ourCaseDetails";
import Tabs from "../components/caseStudy/tab";
import Banner from "../components/common/banner";

const CaseDetails = () => {
    return (
        <div>
            <Banner title={'Case Study'}/>
            <OurCaseDetails/>
            <Tabs/>
        </div>
    );
};

export default CaseDetails;