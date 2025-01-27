import Banner from '../components/common/banner';
import Contact from '../components/common/contact';
import OurClients from '../components/common/out-clients';
import OurService from '../components/service/service';

const Service = () => {
    return (
        <div>
            <Banner title={'Service'}/>
            <OurService/>
            <OurClients/>
            <Contact/>
        </div>
    );
};

export default Service;