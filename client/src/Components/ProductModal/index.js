import { Dialog } from "@mui/material";
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useContext, useRef, useState } from "react";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductZoom from "../ProductZoom";
import { IoCartSharp } from "react-icons/io5";

const ProductModal = (props) => {

    const context = useContext(MyContext);

    const [slideIndex, setSlideIndex] = useState(0);



    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    var settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    }

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    }

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <Dialog open={true} className="productModal" onClose={() => context.setIsOpenProductModal(false)} >

            <Button className='close_' onClick={() => context.setIsOpenProductModal(false)} ><MdClose /></Button>
            <h4 className="mb-2 font-weight-bold">Torku Fındık Ezmesi 370 G</h4>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center mr-4">
                    <span>Marka: </span>
                    <span className="ml-2"><b>Torku</b></span>
                </div>
                <Rating size="small"
                    name="simple-controlled" precision={0.5}
                    value={3}
                />
            </div>
            <hr />
            <div className="row mt-2 productDetaileModal">
                <div className="col-md-5">
                    <ProductZoom/>
                </div>
                <div className="col-md-7">
                    <div className="d-flex info align-items-center mb-3">
                        <span className="oldPrice lg mr-2">20 TL</span>
                        <span className="netPrice text-danger lg">14 TL</span>
                    </div>
                    <span className="badge bg-success">STOKTA</span>
                    <p className="mt-3">Fındık ezmesi bambaşka tadıyla herkesi kendisine hayran bırakır. Torku Banada Fındık Ezmesi Cam 370 Gr, kendisini mutlu etmek isteyen kişiler için özel olarak üretilmiş bir fındık ezmesi lezzetidir.</p>

                    <div className="d-flex align-items-center">
                        <QuantityBox />

                        <Button className="btn-blue btn-big btn-lg btn-round ml-3"><IoCartSharp/> Sepete Ekle</Button>
                    </div>

                    <div className="d-flex align-items-center mt-4 actions">
                        <Button className="btn-round btn-sml" variant="outlined"><IoIosHeartEmpty /> &nbsp; İSTEK LİSTESİNE EKLE</Button>
                        <Button className="btn-round btn-sml ml-3" variant="outlined"><MdOutlineCompareArrows /> &nbsp; KIYASLA</Button>
                    </div>
                </div>
            </div>


        </Dialog>
    );

}

export default ProductModal;