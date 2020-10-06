import React from 'react';
import Swiper from '../Swiper/Swiper';
import './SliderSection.scss';

import img1 from './Analytics.png';
import img2 from './Operational.png';
import img3 from './Orders.png';


const images = [img3, img2, img1];

function SliderSection() {

    const sliderParams = {
        className: 'main__slider',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30,
        slidesPerView: 1
      }

    return (
        <section className="slider__section">
            <div className="container">
                <div className="slider__section-content">
                    <div className="slider__section-text">
                        <h5 className="section__name">All your orders in<br/> one place</h5>
                        <p className="section__desk">
                            Say no more to chunky emails and messy WhatsApp messages. Receive and manage your orders in one platform
                        </p>
                        <div className="main__slider-navigation">
                            <button className="swiper-button swiper-button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" fillRule="evenodd" opacity=".25">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M0 0L24 0 24 24 0 24z" transform="translate(-89 -2034) translate(77 2022) matrix(-1 0 0 1 36 12)" />
                                                    <path fill="#21272E" d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" transform="translate(-89 -2034) translate(77 2022) matrix(-1 0 0 1 36 12)" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <div className="swiper-pagination"></div>
                            <button className="swiper-button swiper-button-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" fillRule="evenodd" opacity=".4">
                                        <g>
                                            <g>
                                                <g>
                                                    <g>
                                                        <path d="M0 0L24 0 24 24 0 24z" transform="translate(-322 -3688) translate(87 3006) translate(0 181) translate(235 501)" />
                                                        <path fill="#21272E" d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" transform="translate(-322 -3688) translate(87 3006) translate(0 181) translate(235 501)" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="swiper__box">
                        <Swiper
                            params={sliderParams}
                            items={images}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}



export default SliderSection;
