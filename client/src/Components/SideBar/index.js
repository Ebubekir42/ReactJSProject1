import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => {

    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);

    return (
        <>
            <div className="sidebar">
                <div className='stick'>
                    <div className="filterBox">
                        <h6>Ürün Kategorileri</h6>

                        <div className='scroll'>
                            <ul>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Erkek" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Kadın" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Moda" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Saat" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Çocuk" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>Fiyata Göre Filtrele</h6>

                        <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />

                        <div className='d-flex pt-2 pb-2 priceRange'>
                            <span>From: <strong className='text-dark'>Rs: {value[0]}</strong></span>
                            <span className='ml-auto'>To: <strong className='text-dark'>Rs: {value[1]}</strong></span>
                        </div>
                    </div>
                    <div className='filterBox'>
                        <h6>ÜRÜN DURUMU</h6>
                        <div className='scroll'>
                            <ul>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Stokta" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="İndirim" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='filterBox'>
                        <h6>MARKA</h6>
                        <div className='scroll'>
                            <ul>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Torku" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ülker" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Torku" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ülker" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Torku" /></li>
                                <li><FormControlLabel className='w-100' control={<Checkbox />} label="Ülker" /></li>
                            </ul>
                        </div>
                    </div>

                    <br />
                    <Link to="#"><img src='https://res.cloudinary.com/dkgonwhvj/image/upload/v1731428345/1731428343183_New_Project_35.jpg' className='w-100' /></Link>
                </div>
            </div>


        </>
    );
}
export default SideBar;