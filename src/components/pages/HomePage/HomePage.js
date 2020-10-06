import React from 'react';
import Communication from '../../Communication/Communication';
import Demosection from '../../DemoSection/Demosection';
import PartnersSection from '../../PartnersSection/PartnersSection';
import SliderSection from '../../SliderSection/SliderSection';
import TopSection from '../../TopSection/TopSection';


function HomePage() {
    return (
        <main>
            <TopSection/>   
            <Demosection/>
            <PartnersSection/>
            <SliderSection/>
            <Communication/>
        </main>
    )
}

export default HomePage;
