import React from 'react';
import Banner from '../components/common/banner';
import OurClients from '../components/common/out-clients';
import Counseling from '../components/team/counsling';
import OurTeam from './../components/team/ourTeam';
const Team = () => {
    return (
        <div>
           <Banner title="Team" />  
            <OurTeam/>
            <OurClients/>
            <Counseling/>
        </div>
    );
};

export default Team;