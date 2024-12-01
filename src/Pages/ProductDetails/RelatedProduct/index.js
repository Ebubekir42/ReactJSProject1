import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../../../Components/ProductItem";
import 'swiper/css';
import 'swiper/css/navigation';

const RelatedProduct = (props) => {
    return (
        <>
            <div className="d-flex align-items-center mt-3">
                <div className="info w-75">
                    <h3 className="mb-0 hd">{props.title}</h3>
                </div>
            </div>
            <div className="product_row w-100 mt-0" >
                <Swiper slidesPerView={5} spaceBetween={0}  modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>

                </Swiper>

            </div>
        </>
    )
}
export default RelatedProduct;