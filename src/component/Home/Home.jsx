import React from 'react';
import Banner from '../Banner/Banner';
import LearnTennologis from '../LearnTennologis/LearnTennologis';
import OurUpdate from '../OurUpdate/OurUpdate';
import PricingTable from '../PricingTable/PricingTable';
import TelentPeople from '../TelentPeople/TelentPeople';

const Home = () => {

    return (
        <div>
            <Banner />
            <PricingTable/>
            <LearnTennologis/>
            <TelentPeople/>
            {/* <OurUpdate/> */}
        </div>
    );
};

export default Home;