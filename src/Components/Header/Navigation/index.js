import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2 navPart1">
                        <Button className="allCatTab align-items-center">
                            <span className="icon1 mr-2"><IoIosMenu /></span>
                            <span className="text">Tüm Kategoriler</span>
                            <span className="icon2 ml-2"><FaAngleDown /></span>
                        </Button>
                    </div>
                    <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"><Link to={"/"} ><Button>Ana Sayfa</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Moda</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Elektronik</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Fırın</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Bakkal</Button></Link></li>
                            <li className="list-inline-item"><Link to={"/"} ><Button>Cep Telefonları</Button></Link></li>
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