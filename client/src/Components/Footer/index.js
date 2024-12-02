import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount } from "react-icons/tb";
import { FaLiraSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/></span>
                        <span className="ml-2">Günlük taze ürünler</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">70 TL üzeri siparişlerde ücretsiz teslimat</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbDiscount/></span>
                        <span className="ml-2">Günlük Mega İndirimler</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><FaLiraSign/></span>
                        <span className="ml-2">Piyasadaki en iyi fiyat</span>
                    </div>
                </div>

                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>MEYVE & SEBZELER</h5>
                        <ul>
                            <li><Link to="#">Taze Sebzeler</Link></li>
                            <li><Link to="#">Otlar ve Baharatlar</Link></li>
                            <li><Link to="#">Taze Meyveler</Link></li>
                            <li><Link to="#">Kesikler ve Filizler</Link></li>
                            <li><Link to="#">Egzotik Meyve ve Sebzeler</Link></li>
                            <li><Link to="#">Paketlenmiş Ürünler</Link></li>
                            <li><Link to="#">Parti Tepsileri</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>KAHVALTI VE SÜT ÜRÜNLERİ</h5>
                        <ul>
                            <li><Link to="#">Taze Sebzeler</Link></li>
                            <li><Link to="#">Otlar ve Baharatlar</Link></li>
                            <li><Link to="#">Taze Meyveler</Link></li>
                            <li><Link to="#">Kesikler ve Filizler</Link></li>
                            <li><Link to="#">Egzotik Meyve ve Sebzeler</Link></li>
                            <li><Link to="#">Paketlenmiş Ürünler</Link></li>
                            <li><Link to="#">Parti Tepsileri</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>ET & DENİZ ÜRÜNLERİ</h5>
                        <ul>
                            <li><Link to="#">Taze Sebzeler</Link></li>
                            <li><Link to="#">Otlar ve Baharatlar</Link></li>
                            <li><Link to="#">Taze Meyveler</Link></li>
                            <li><Link to="#">Kesikler ve Filizler</Link></li>
                            <li><Link to="#">Egzotik Meyve ve Sebzeler</Link></li>
                            <li><Link to="#">Paketlenmiş Ürünler</Link></li>
                            <li><Link to="#">Parti Tepsileri</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>İÇECEKLER</h5>
                        <ul>
                            <li><Link to="#">Taze Sebzeler</Link></li>
                            <li><Link to="#">Otlar ve Baharatlar</Link></li>
                            <li><Link to="#">Taze Meyveler</Link></li>
                            <li><Link to="#">Kesikler ve Filizler</Link></li>
                            <li><Link to="#">Egzotik Meyve ve Sebzeler</Link></li>
                            <li><Link to="#">Paketlenmiş Ürünler</Link></li>
                            <li><Link to="#">Parti Tepsileri</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>EKMEK & FIRINCILIK</h5>
                        <ul>
                            <li><Link to="#">Taze Sebzeler</Link></li>
                            <li><Link to="#">Otlar ve Baharatlar</Link></li>
                            <li><Link to="#">Taze Meyveler</Link></li>
                            <li><Link to="#">Kesikler ve Filizler</Link></li>
                            <li><Link to="#">Egzotik Meyve ve Sebzeler</Link></li>
                            <li><Link to="#">Paketlenmiş Ürünler</Link></li>
                            <li><Link to="#">Parti Tepsileri</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. Tüm Hakları Saklıdır.</p>
                    <ul className="list list-inline ml-auto mb-0">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebookF/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaTwitter/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;