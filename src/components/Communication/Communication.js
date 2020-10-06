import React, { useState } from 'react'
import './Communication.scss';
// import Button from '../Button/Button';

import Before from './Before.png';
import After from './After.png';

const img = [Before, After];

function Communication() {
    const [selectedTab, setSelectedTab] = useState(0);


    const Tab = () => {
        return (
            <div className="tabs__btn-group">
                {/* <Button 
                    buttonText="BEFORE"
                    buttonClassNames="btn__transparent tab__btn"
                    onClick={() => {
                        console.log('click')
                        setSelectedTab('before');
                    }}
                />
               <Button 
                    buttonText="AFTER"
                    buttonClassNames="btn__transparent tab__btn"
                    onClick={() => setSelectedTab('after')}
                /> */}
                <button className="btn btn__transparent tab__btn" onClick={() => setSelectedTab(0)}>Before</button>
                <button className="btn btn__transparent tab__btn" onClick={() => setSelectedTab(1)}>After</button>
            </div>
        )
    }

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
                            <Tab />
                        </div>
                        <h6>Old-School Chaos</h6>
                        <p className="section__desk">
                            Unstructured orders across multiple apps and inboxes. New message notifications and alerts every few minutes
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Communication;
