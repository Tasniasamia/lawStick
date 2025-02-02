import React from 'react';
import Banner from '../components/common/banner';
import OurClients from '../components/common/out-clients';
import Contact from '../components/common/contact';
import OurFaq from '../components/faq/ourFaq';
const FaqPage = () => {
    return (
        <div>
            <Banner title={'FAQ'}/>
            <OurFaq/>
            <OurClients/>
            <Contact/>
        </div>
    );
};

export default FaqPage;