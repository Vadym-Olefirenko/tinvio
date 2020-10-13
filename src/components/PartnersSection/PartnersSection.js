import React, { useEffect, useState } from 'react';
import './PartnersSection.scss';
import logo1 from './GoCheken.png';
import logo2 from './bens.png';
import logo3 from './Bens.svg';
import logo4 from './SimplyWrapps.png';
import logo5 from './Italian.png';
import Swiper from '../Swiper/Swiper';

const Logos = [{image: logo1}, {image: logo2}, {image: logo3}, {image: logo4}, {image: logo5}];

function PartnersSection() {
    const [swiper, setSwiper] = useState(false);

    const sliderParams = {
        className: 'partners__slider',
        spaceBetween: 10,
        slidesPerView: 2,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
        },
    }

    const showSwiper = () => window.innerWidth <= 600 ? setSwiper(true) : setSwiper(false);

    useEffect(() => {
        showSwiper();
    }, [swiper]);

    window.addEventListener('resize', showSwiper);

    return (
        <section className="partners">
            <h5 className="section__name">
                Trusted by 1000+ partners across APAC
            </h5>
            {swiper ? (
                <Swiper
                    params={sliderParams}
                    items={Logos}
                />
            ) : (
                    <div className="container">
                        <LogoRow />
                    </div>
                )}
        </section>
    )
}

const LogoRow = () => {

    const LogoItems = (arr) => {
        let images = arr.map((el, i) => {
            return (<div className="logo__item" key={i}>
                <img src={el.image} className="partner__logo" alt={`${el}`} />
            </div>
            )
        });

        return images;

    }
    return (
        <div className="logo__row">
            {LogoItems(Logos)}
        </div>
    )
}



export default PartnersSection;

