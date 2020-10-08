import React from 'react';

import './TopSection.scss';
import Boxes from './Boxes.png';
import Fruits from './Fruits.png';
import Confetti from './confetti.svg'
import Button from '../Button/Button';

const TopSection = () => {
    return (
        <section className="top__section">
            <div className="container">
                <div className="top__section-info">
                    <h2>FOR A SMARTER SUPPLY CHAIN</h2>
                    <h1>Take your business to the next level<br /> with Tinvio’s Supplier Platform</h1>
                    <Button
                        buttonText="Get Started Now"
                        buttonClassNames="btn btn__red top__btn"
                    />
                    <div className="its__free">
                        <p>Yes, it’s free</p>
                        <img src={Confetti} className="confetti" alt="confetti" />
                    </div>
                </div>
                <div className="top__images">
                    <img src={Boxes} className="boxes" alt="boxes" />
                    <img src={Fruits} className="fruits" alt="fruits" />
                </div>
            </div>
        </section>
    )
}

export default TopSection;