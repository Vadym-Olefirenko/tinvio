import React, { useState } from 'react';
import Lottie from 'react-lottie';
import './Communication.scss';

import Before from './Before.png';
import After from './After.png';
import animationData from './animation.json';

const img = [Before, After];

const textContent = [
    {
        head: "Old-School Chaos",
        text: "Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes",
    },
    {
        head: "New-School Chaos",
        text: "Lorem ipsum dolor sit ammet, Lorem ipsum dolor sit ammet, Lorem ipsum dolor sit ammet",
    }
]

function Communication() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [active, setActive] = useState(1);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };


    return (
        <section className="communication" >
            <div className="container__fluid">
                <div className="communication__content">

                    <div className="communication__images">
                        {selectedTab === 0 ? (
                            <img src={Before} className="tab__img" alt="demo__img" />
                        ) : (
                                <div className="tab__img">
                                    <Lottie
                                        options={defaultOptions}
                                        className="tab__img"
                                    />
                                </div>
                            )}
                        
                    </div>

                    <div className="communication__text">
                        <div className="tab__buttons">
                            <h5 className="section__name">
                                Communication
                        </h5>
                            <div className="tabs__btn-group">
                                <button
                                    className={`btn btn__transparent tab__btn${active === 1 ? ' tab__btn-active' : ''}`}
                                    onClick={() => {
                                        setSelectedTab(0);
                                        setActive(1);

                                    }}>
                                    BEFORE
                                </button>
                                <button
                                    className={`btn btn__transparent tab__btn${active === 2 ? ' tab__btn-active' : ''}`}
                                    onClick={() => {
                                        setSelectedTab(1);
                                        setActive(2);

                                    }}>
                                    AFTER
                                 </button>
                            </div>
                        </div>
                    </div>

                    <div className="tabs__desk">
                        <h6>{textContent[selectedTab].head}</h6>
                        <p className="section__desk">
                            {textContent[selectedTab].text}
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}




export default Communication;
