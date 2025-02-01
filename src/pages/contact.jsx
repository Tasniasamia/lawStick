import Banner from '../components/common/banner';
import OurClients from '../components/common/out-clients';
import Location from '../components/contact/location';
import OurContact from '../components/contact/ourContact';

const ContactUs = () => {
    return (
        <div>
            <Banner title={"Contact Us"}/>
            <OurContact/>
            <OurClients/>
           <Location/>
        </div>
    );
};

export default ContactUs;