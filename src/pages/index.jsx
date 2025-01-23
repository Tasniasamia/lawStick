import AboutUS from "../components/common/about";
import Banner from "../components/home/banner";
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
        </div>
    );
};

export default Index;