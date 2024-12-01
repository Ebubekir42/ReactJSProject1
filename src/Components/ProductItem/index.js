import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { IoMdHeartEmpty } from "react-icons/io";
import { TfiFullscreen } from "react-icons/tfi";
import ProductModal from '../ProductModal';
import { useContext, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { MyContext } from '../../App';

const ProductItem = (props) => {

    const context = useContext(MyContext);

    const viewProductDetails = (id) => {
        context.setIsOpenProductModal(true);
    }

    const closeProductModal = () => {
        context.setIsOpenProductModal(false);
    }

    return (
        <>
        <div className={`productItem ${props.itemView}`}>
            <div className="img_rapper">
                <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428345/1731428343183_New_Project_35.jpg" className="w-100" />
                <span className="badge badge-primary">28%</span>
                <div className="actions">
                    <Button onClick={() => viewProductDetails(1)} ><TfiFullscreen/></Button>
                    <Button><IoMdHeartEmpty style={{fontSize:'20px'}} /></Button>
                </div>

            </div>

            <div className="info">
                <h4>Super Grocery Sale</h4>
                <span className="text-success d-block">Stokta</span>
                <Rating className="my-2"
                    name="simple-controlled"
                    value={5} size="small" precision={0.5}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                // }}
                />
                <div className="d-flex">
                    <span className="oldPrice">20 TL</span>
                    <span className="netPrice text-danger ml-2">14 TL</span>
                </div>
            </div>

        </div>

        
        </>
    );
}

export default ProductItem;