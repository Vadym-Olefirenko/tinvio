import React from 'react';

import './DemoSection.scss';
import ImageDemo from './desktop.png';

const Demosection = () => {
    return (
        <section className="demo__section">
            <div className="container">
            <img src={ImageDemo} className="demo__img" alt="demo__img" />
            </div>
        </section>
    )
}

export default Demosection;
