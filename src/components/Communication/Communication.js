import React, { useState } from 'react'
import './Communication.scss';
import Button from '../Button/Button';

import Before from './Before.png';
import After from './After.png';

const img = [Before, After];

function Communication() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [active, setActive] = useState(1);


    return (
        <section className="communication">
            <div className="container">
                <div className="communication__content">

                    <div className="communication__images">
                        <img src={img[selectedTab]} className="tab__img" alt="demo__img" />
                    </div>

                    <div className="communication__text">
                        <div className="tab__buttons">
                            <h5 className="section__name">
                                Communication
                        </h5>
                            <div className="tabs__btn-group">
                                {/* <Button 
                                    buttonText="BEFORE"
                                    buttonClassNames={`btn btn__transparent tab__btn${active === 1 ? ' tab__btn-active' : ''}`}
                                    onClick={() => {
                                        setSelectedTab(0);
                                        setActive(1);
                                    }}
                                />
                                <Button 
                                    buttonText="AFTER"
                                    buttonClassNames={`btn btn__transparent tab__btn${active === 2 ? ' tab__btn-active' : ''}`}
                                    onClick={() => {
                                        setSelectedTab(1);
                                        setActive(2);
                                    }}
                                /> */}
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
                        <div className="tabs__desk">
                            <h6>Old-School Chaos</h6>
                            <p className="section__desk">
                                Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Communication;
