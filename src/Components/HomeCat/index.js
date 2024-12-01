import React, { useState } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from "@mui/material";
import { Navigation } from 'swiper/modules';

const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        "#aaa",
        "#bbb",
        "#ccc",
        "#ddd",
        "#eee",
        "#fff",
        "#aaa",
        "#bbb",
        "#ddd",
        "#eee",
        "#fff",
        "#aaa",
        "#bbb"
    ])

    return (
        <section className="homeCat">
            <div className="container">
                <h3 className="mb-3 hd">Öne Çıkan Kategoriler</h3>
                <Swiper slidesPerView={10} slidesPerGroup={1} spaceBetween={8} pagination={{ clickable: true }} modules={[Navigation]} className="mySwiper">
                    {itemBg.map((item, index) => {
                        return (
                            <SwiperSlide>

                                <div className="item text-center cursor" style={{background:item}}>
                                    <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png" />

                                    <h6>Groceries</h6>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );

}

export default HomeCat;