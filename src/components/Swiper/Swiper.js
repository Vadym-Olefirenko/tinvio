import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
export default function Slider({ items, params}) {
    console.log('nav', params)
    const itemsArr = (arr) => {
        let images = arr.map((el, i) => {
            return (
                <SwiperSlide key={i}>
                    <div className="slide__img-box">
                        <img src={el} className="slide__img" alt={`${el}`} />
                    </div>
                </SwiperSlide>
            )
        });

        return images;

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