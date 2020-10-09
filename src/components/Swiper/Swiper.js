import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default function Slider({ items, params, description = false}) {
    const itemsArr = (arr) => {
        let arrItems = arr.map((el, i) => {
            return (
                <SwiperSlide key={i}>
                    {description ? (
                        <>
                        <h5 className="section__name">{el.sliderHead}</h5>
                        <p className="section__desk">
                            {el.sliderText}
                        </p>
                        </>
                    ) : (
                            <div className="slide__img-box">
                                <img src={el.image} className="slide__img" alt={`${el}`} />
                            </div>
                        )}
                </SwiperSlide>
            )
        });

        return arrItems;

    }
    return (
        <>
            <Swiper
                {...params}
            >
                {itemsArr(items)}

            </Swiper>

        </>
    );
};