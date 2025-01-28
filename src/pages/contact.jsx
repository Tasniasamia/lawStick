import Banner from '../components/common/banner';
import OurClients from '../components/common/out-clients';
import OurContact from '../components/contact/ourContact';

const ContactUs = () => {
    return (
        <div>
            <Banner title={"Contact Us"}/>
            <OurContact/>
            <OurClients/>
        </div>
    );
};

export default ContactUs;