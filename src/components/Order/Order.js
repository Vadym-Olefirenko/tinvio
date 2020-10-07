import React from 'react';

import './order.scss';

import img1 from './Screen1.png';
import img2 from './Screen2.png';
import img3 from './Screen3.png';
import iconRight from './rightcard.svg';
import check from './check.svg';

function Order() {
    return (
        <section className="order">
            <div className="container">
                <div className="order__head">
                    <h5 className="section__name">
                        Seamless Ordering<br /> Experience
                    </h5>
                    <p className="section__desk">
                        Increase your sales by 30% with a better checkout experience. Your customers can place orders easily with a few taps on the item list
                    </p>
                </div>

                <div className="cards__row">
                    <Card
                        src={img1}
                        text={"Select Items"}
                        icon={iconRight}
                    />
                    <Card
                        src={img2}
                        text={"Review Order"}
                        icon={iconRight}
                    />
                    <Card
                        src={img3}
                        text={"Send Order"}
                        icon={check}
                    />
                </div>
            </div>
        </section>
    )
}

const Card = ({src, text, icon}) => {
    return (
        <div className="card">
            <img src={src} alt="img" className="card__img" />
            <div className="card__desk">
                <p>{text}</p>
                <img src={icon} alt="icon" className="card__icon-img" />
            </div>
        </div>
    )
}

export default Order;
