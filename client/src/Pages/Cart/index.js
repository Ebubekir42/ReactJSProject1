import { Button, Link, Rating } from "@mui/material";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";

const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-1">Sepetiniz</h2>
                    <p>Sepetinizde <b className="text-red">3</b> ürün var</p>
                    <div className="row">
                        <div className="col-md-9 pr-5">


                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>


                                        <tr>
                                            <th width="35%">Ürün</th>
                                            <th width="15%">Birim Fiyatı</th>
                                            <th width="25%">Miktar</th>
                                            <th width="15%">Toplam</th>
                                            <th width="10%">Kaldır</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">

                                                        <div className="imgWrapper">
                                                            <img className="w-100" src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg"></img>
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Torku Fındık Ezmesi 370 G</h6>
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" />
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">14.00 TL</td>
                                            <td width="25%"><QuantityBox /></td>
                                            <td width="15%">14.00 TL</td>
                                            <td width="10%"><span className="remove"><IoIosClose /></span></td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">

                                                        <div className="imgWrapper">
                                                            <img className="w-100" src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg"></img>
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Torku Fındık Ezmesi 370 G</h6>
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" />
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">14.00 TL</td>
                                            <td width="25%"><QuantityBox /></td>
                                            <td width="15%">14.00 TL</td>
                                            <td width="10%"><span className="remove"><IoIosClose /></span></td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">

                                                        <div className="imgWrapper">
                                                            <img className="w-100" src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg"></img>
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Torku Fındık Ezmesi 370 G</h6>
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" />
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">14.00 TL</td>
                                            <td width="25%"><QuantityBox /></td>
                                            <td width="15%">14.00 TL</td>
                                            <td width="10%"><span className="remove"><IoIosClose /></span></td>
                                        </tr>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">

                                                        <div className="imgWrapper">
                                                            <img className="w-100" src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg"></img>
                                                        </div>

                                                        <div className="info px-3">
                                                            <h6>Torku Fındık Ezmesi 370 G</h6>
                                                            <Rating name="read-only" value={4.5} precision={0.5} size="small" />
                                                        </div>

                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">14.00 TL</td>
                                            <td width="25%"><QuantityBox /></td>
                                            <td width="15%">14.00 TL</td>
                                            <td width="10%"><span className="remove"><IoIosClose /></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border p-3 cartDetails">
                                <h4>SEPETE TOPLAMLAR</h4>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Alt Toplam</span>
                                    <span className="ml-auto text-red font-weight-bold">14.00 TL</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Kargo</span>
                                    <span className="ml-auto"><b>Ücretsiz</b></span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Tahmin</span>
                                    <span className="ml-auto"><b>Türkiye</b></span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span>Toplam</span>
                                    <span className="ml-auto text-red font-weight-bold">14.00 TL</span>
                                </div>
                                <br/>
                                <Button className="btn-blue btn-big btn-lg bg-red"><IoCartSharp/> Sepete Ekle</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Cart;