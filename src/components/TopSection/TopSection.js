import React from 'react';

import './TopSection.scss';
import Confetti from './confetti.svg'


const TopSection = () => {
    return (
        <section className="top__section">
            <div className="container__fluid">
                <div className="top__section-info">
                    <h2>FOR A SMARTER SUPPLY CHAIN</h2>
                    <h1>Take your business to the next level<br /> with Tinvio’s Supplier Platform</h1>
                    <button className="btn btn__red top__btn">
                        Get Started Now
                    </button>
                    <div className="its__free">
                        <p>Yes, it’s free</p>
                        <img src={Confetti} className="confetti" alt="confetti" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopSection;