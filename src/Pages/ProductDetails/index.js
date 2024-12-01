import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import { BsCartFill } from "react-icons/bs";

import { Button } from "@mui/material";
import QuantityBox from "../../Components/QuantityBox";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProduct from "./RelatedProduct";


const ProductDetails = () => {

    const [activeSize, setActiveSize] = useState(0);
    const [activeTabs, setActiveTabs] = useState(0);

    const isActive = (index) => {
        setActiveSize(index);
    }

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7 pl-5 pr-5">
                            <h2>Torku Fındık Ezmesi 370 G</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light">Marka</span>
                                        <span>Torku</span>
                                    </div>
                                </li>
                                <li className="list-inline-item d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                        <span className="text-light cursor ml-2">2 İnceleme</span>
                                    </div>

                                </li>

                            </ul>
                            <div className="d-flex info mb-3">
                                <span className="oldPrice">20 TL</span>
                                <span className="netPrice text-danger ml-2">14 TL</span>
                            </div>
                            <span className="badge badge-success">STOKTA</span>
                            <p className="mt-3">Fındık ezmesi bambaşka tadıyla herkesi kendisine hayran bırakır. Torku Banada Fındık Ezmesi Cam 370 Gr, kendisini mutlu etmek isteyen kişiler için özel olarak üretilmiş bir fındık ezmesi lezzetidir.</p>

                            <div className="productSize d-flex align-items-center">
                                <span>Boyut / Ağırlık</span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 0 ? "active" : ""}`} onClick={() => isActive(0)} >50g</a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 1 ? "active" : ""}`} onClick={() => isActive(1)} >100g</a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 2 ? "active" : ""}`} onClick={() => isActive(2)} >200g</a></li>
                                    <li className="list-inline-item"><a className={`tag ${activeSize === 3 ? "active" : ""}`} onClick={() => isActive(3)} >500g</a></li>
                                </ul>
                            </div>


                            <div className="d-flex align-items-center mt-3">
                                <QuantityBox />

                                <Button className="btn-blue btn-big btn-lg btn-round ml-3"><BsCartFill /> &nbsp; Sepete Ekle</Button>
                                <Tooltip title="İstek Listesine Ekle" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                                        <FaRegHeart />
                                    </Button>
                                </Tooltip>

                                <Tooltip title="Kıyaslamaya Ekle" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                                        <MdOutlineCompareArrows />
                                    </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="card mt-5 p-5 detailsPageTabs">
                        <div class="customTabs">
                            <ul class="list list-inline">
                                <li class="list-inline-item"><Button className={`${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs(0) }}>Description</Button></li>
                                <li class="list-inline-item"><Button className={`${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs(1) }}>Additional info</Button></li>
                                <li class="list-inline-item"><Button className={`${activeTabs === 2 && 'active'}`} onClick={() => { setActiveTabs(2) }}>Reviews (3)</Button></li>
                            </ul>
                            <br />
                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    <p>Fındık ezmesi bambaşka tadıyla herkesi kendisine hayran bırakır. Torku Banada Fındık Ezmesi Cam 370 Gr, kendisini mutlu etmek isteyen kişiler için özel olarak üretilmiş bir fındık ezmesi lezzetidir.</p>
                                </div>
                            }
                            {/* <div class="tabContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div> */}
                            {
                                activeTabs === 1 &&
                                <div class="tabContent">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr class="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                    </td>
                                                </tr>

                                                <tr class="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td><p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td></tr>
                                                <tr class="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td><p>24</p></td></tr>

                                                <tr class="frame"><th>Frame</th>
                                                    <td><p>Aluminum</p></td></tr>

                                                <tr class="weight-wo-wheels"><th>Weight (w/o wheels)</th>
                                                    <td><p>20 LBS</p></td></tr>

                                                <tr class="weight-capacity"><th>Weight Capacity</th><td><p>60 LBS</p></td></tr>

                                                <tr class="width"><th>Width</th><td><p>24″</p></td></tr>
                                                <tr class="handle-height-ground-to-handle"><th>Handle height (ground to handle)</th><td><p>37-45″</p></td></tr>
                                                <tr class="wheels"><th>Wheels</th><td><p>12″ air / wide track slick tread</p></td></tr>
                                                <tr class="seat-back-height"><th>Seat back height</th><td><p>21.5″</p></td></tr>
                                                <tr class="head-room-inside-canopy"><th>Head room (inside canopy)</th><td><p>25″</p></td></tr>
                                                <tr class="pa_color"><th>Color</th><td><p>Black, Blue, Red, White</p></td></tr>
                                                <tr class="pa_size"><th>Size</th><td><p>M, S</p></td></tr>
                                            </tbody></table></div></div>
                            }
                            {
                                activeTabs === 2 &&
                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Müşteri Soruları & Cevapları</h3>
                                            <br />
                                            {


                                                <div className="card p-4 reviewsCard flex-row">
                                                    <div className="image">
                                                        <div className="rounded-circle">
                                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" />
                                                        </div>
                                                        <span className="text-g d-block text-center font-weight-bold">Muhammet Ebu Bekir Türk</span>
                                                    </div>
                                                    <div className="info pl-5" >
                                                        <div className="d-flex align-items-center w-100">
                                                            <h5 className="text-light">
                                                                01/12/2024
                                                            </h5>
                                                            <div className="ml-auto">
                                                                <Rating name="half-rating-read" value={3} precision={0.5} readOnly size="small" />
                                                            </div>
                                                        </div>
                                                        <p>Fındık ezmesi bambaşka tadıyla herkesi kendisine hayran bırakır. Torku Banada Fındık Ezmesi Cam 370 Gr, kendisini mutlu etmek isteyen kişiler için özel olarak üretilmiş bir fındık ezmesi lezzetidir.</p>
                                                    </div>
                                                </div>


                                            }
                                            <br className="res-hide" />
                                            <br className="res-hide" />
                                            <form className="reviewForm">
                                                <h4>Röpartaj Ekle</h4>
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Bir röportaja yazın..." name="review" >
                                                    </textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Adı" name="userName" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating name="rating" value={3} precision={0.5} />
                                                        </div>

                                                    </div>

                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Röportaj Gönder</Button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <div className="col-md-4 pl-5 reviewBox">
                                            <h4>Müşterinin Röpartajları</h4>
                                            <div className="d-flex align-items-center mt-2" >
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                            <strong className="ml-3">5 üzerinden 4.8</strong>
                                            </div>
                                            <br />
                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">5 yıldız</span>
                                                <div className="progress" style={{ width: "78%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "75%", height: "20px" }}>75%</div>
                                                </div>
                                            </div>
                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">4 yıldız</span>
                                                <div className="progress" style={{ width: "78%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "75%", height: "20px" }}>75%</div>
                                                </div>
                                            </div>
                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">3 yıldız</span>
                                                <div className="progress" style={{ width: "78%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "75%", height: "20px" }}>75%</div>
                                                </div>
                                            </div>
                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">2 yıldız</span>
                                                <div className="progress" style={{ width: "78%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "75%", height: "20px" }}>75%</div>
                                                </div>
                                            </div>
                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">1 yıldız</span>
                                                <div className="progress" style={{ width: "78%", height: "20px" }}>
                                                    <div className="progress-bar bg-success" style={{ width: "75%", height: "20px" }}>75%</div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <br/>
                    <RelatedProduct title="İLGİLİ ÜRÜNLER"/>
                    <RelatedProduct title="SON GÖRÜNTÜLENEN ÜRÜNLER"/>
                </div>
            </section>
        </>
    );

}
export default ProductDetails;