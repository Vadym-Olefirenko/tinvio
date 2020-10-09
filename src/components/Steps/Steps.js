import React from 'react';
import './Steps.scss';

import stepImg1 from './st1.png';
import stepImg2 from './st2.png'
import stepImg3 from './st3.png'

function Steps() {
    return (
        <section className="steps">
            <div className="container__fluid">
                <div className="steps__head">
                    <h2>ARE YOU READY?</h2>
                    <h5 className="section__name">
                        3 Simple Steps to Get Started
                    </h5>
                </div>

                <div className="steps__row">
                    <div className="step">
                        <img src={stepImg1} alt="img" className="step__img" />
                        <h6>Get in Touch With Us</h6>
                        <p className="step__desk">
                            Fill up the form and we’ll reach out to you
                        </p>
                    </div>
                    <div className="step">
                        <img src={stepImg2} alt="img" className="step__img" />
                        <h6>Connect to Your Clients</h6>
                        <p className="step__desk">
                            They’ll receive a fully guided<br/> tutorial on how to order
                        </p>
                    </div>
                    <div className="step">
                        <img src={stepImg3} alt="img" className="step__img" />
                        <h6>Onboarded In a Heartbeat</h6>
                        <p className="step__desk">
                            Activated and live<br/>
                            within a day
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps
