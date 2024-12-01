import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {

    const [isOpenSidebarNav, setIsOpenSidebarNav] = useState(false);

    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 navPart1">
                        <div className="catWrapper">
                            <Button className="allCatTab align-items-center" onClick={() => setIsOpenSidebarNav(!isOpenSidebarNav)}>
                                <span className="icon1 mr-2"><IoIosMenu /></span>
                                <span className="text">Tüm Kategoriler</span>
                                <span className="icon2 ml-2"><FaAngleDown /></span>
                            </Button>
                            <div className={`sidebarNav ${isOpenSidebarNav ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to={"/"} ><Button>Erkek<FaAngleRight className="ml-auto"></FaAngleRight></Button></Link>
                                        <div className="subMenu">
                                            <Link to={"/"} ><Button>Kıyafet</Button></Link>
                                            <Link to={"/"} ><Button>Ayakkabı</Button></Link>
                                            <Link to={"/"} ><Button>Saat</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to={"/"} ><Button>Kadın</Button></Link></li>
                                    <li><Link to={"/"} ><Button>Moda</Button></Link></li>
                                    <li><Link to={"/"} ><Button>Saat</Button></Link></li>
                                    <li><Link to={"/"} ><Button>Çocuk</Button></Link></li>
                                    <li><Link to={"/"} ><Button>Hediye</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"><Link to={"/"} ><Button>Ana Sayfa</Button>
                            </Link></li>
                            <li className="list-inline-item">
                                <Link to={"/"} ><Button>Erkek</Button></Link>
                                <div className="subMenu shadowk">
                                    <Link to={"/"} ><Button>Kıyafet</Button></Link>
                                    <Link to={"/"} ><Button>Ayakkabı</Button></Link>
                                    <Link to={"/"} ><Button>Saat</Button></Link>
                                </div>
                            </li>

                            <li className="list-inline-item"><Link to={"/"} ><Button>Kadın</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Moda</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Saat</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Çocuk</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Hediye</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Blog</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Bize Ulaşın</Button></Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;