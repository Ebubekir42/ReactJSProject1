import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import Slide from '@mui/material/Slide';
import { useState } from 'react';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(
    props,
    ref
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {

    const [isOpenModel, setisOpenModel] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [countryList, setCountryList] = useState([]);
    const context = useContext(MyContext);

    const selectCountry = (index, country) => {
        setSelectedTab(index);
        setisOpenModel(false);
        context.setSelectedCountry(country);
    };

    useEffect(() => {
       setCountryList(context.countryList); 
    },[])

    const filterList = (event) => {
        const keyword = event.target.value.toLowerCase();

        if(keyword !== ""){
            const list = countryList.filter((item) =>  {
                return item.country.toLowerCase().includes(keyword);
            });
            setCountryList(list);
        }
        else{
            setCountryList(context.countryList);
        }
        
    }

    return (
        <>

            <Button className="countryDrop" onClick={() => setisOpenModel(true)} >
                <div className="info d-flex flex-column">
                    <span className='label'>Sizin Konumunuz</span>
                    <span className='name'>{context.selectedCountry !== "" ? context.selectedCountry.length > 10 ? context.selectedCountry.substr(0,10) + "..." : context.selectedCountry : "Konumunuz"}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>
            <Dialog className='locationModal' TransitionComponent={Transition} onClose={() => setisOpenModel(false)} open={isOpenModel}>
                <h4 className='mb-0'>Teslimat Yerinizi Seçin</h4>
                <p>Adresinizi girin, bölgenize uygun teklifi belirleyelim.</p>
                <Button className='close_' onClick={() => setisOpenModel(false)}><MdClose /></Button>
                <div className="headerSearch ml-3 mr-3">
                    <input type="text" placeholder="Bölgenizi Arayın..." onChange={filterList} />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    {

                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (<li key={index}><Button onClick={() => selectCountry(index, item.country)} className={' ${selectedTab === index ? "active" : ""}'}>{item.country}</Button></li>)
                        })
                    }


                </ul>
            </Dialog>
        </>
    );
}


export default CountryDropDown;