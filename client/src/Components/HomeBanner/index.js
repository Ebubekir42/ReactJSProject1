import React from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";

const HomeBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">


                <Swiper slidesPerView={1} slidesPerGroup={1} spaceBetween={15} pagination={{ clickable: true }} autoplay={{delay:2500, disableOnInteraction:false}} modules={[Navigation, Autoplay]} className="mySwiper">
                    <SwiperSlide>
                        <div className="item">
                            <img src="https://rotaraf.com/wp-content/uploads/2021/02/G%C4%B0Y%C4%B0M-MA%C4%9EAZA-RAFLARI.png" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src="https://rotaraf.com/wp-content/uploads/2021/02/G%C4%B0Y%C4%B0M-MA%C4%9EAZA-RAFLARI.png" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src="https://rotaraf.com/wp-content/uploads/2021/02/G%C4%B0Y%C4%B0M-MA%C4%9EAZA-RAFLARI.png" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src="https://rotaraf.com/wp-content/uploads/2021/02/G%C4%B0Y%C4%B0M-MA%C4%9EAZA-RAFLARI.png" className="w-100" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
export default HomeBanner;