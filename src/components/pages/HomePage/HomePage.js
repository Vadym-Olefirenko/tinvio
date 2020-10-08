import React from 'react';
import Communication from '../../Communication/Communication';
import Demosection from '../../DemoSection/Demosection';
import GetStartSection from '../../GetStartSection/GetStartSection';
import Order from '../../Order/Order';
import PartnersSection from '../../PartnersSection/PartnersSection';
import SliderSection from '../../SliderSection/SliderSection';
import Steps from '../../Steps/Steps';
import TopSection from '../../TopSection/TopSection';


function HomePage() {
    return (
        <main>
            <TopSection/>   
            <Demosection/>
            <PartnersSection/>
            <SliderSection/>
            <Communication/>
            <Order/>
            <Steps/>
            <GetStartSection/>
        </main>
    )
}

export default HomePage;
