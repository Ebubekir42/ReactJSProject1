import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
// import TextField from "@mui/material/TextField";
// import Button  from "@mui/material/Button";
import { TextField, Button } from "@mui/material";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";



const SignUp = () => {

    const context = useContext(MyContext);
    useEffect(() => {
        context.setIsHeaderFooterShow(false);
    }, []);


    return (
        <section className="section signInPage">
            <div class="shape-bottom">
                <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8"> <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path>
                </svg>
            </div>
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img src="data:image/jpeg;base64,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" />
                    </div>

                    <form className="mt-3">
                        <h2 className="mb-4">KAYIT OL</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField  className="w-100" label="Ad" type="text" variant="standard" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField  className="w-100" label="Telefon No" type="text" variant="standard" required />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <TextField id="standard-basic" className="w-100" label="Email" type="email" variant="standard" required />
                        </div>
                        <div className="form-group">
                            <TextField id="standard-basic" className="w-100" label="Şifre" type="password" required variant="standard" />
                        </div>

                        

                        <div className="d-flex align-items-center mt-3 mb-3">
                            <Button className="btn-blue btn-lg btn-big col">Kayıt Ol</Button>
                            <Link to="/"><Button onClick={() => context.setIsHeaderFooterShow(true)} className=" btn-lg btn-big col ml-3" variant="outlined">İptal Et</Button></Link>
                        </div>

                    
                        <p className="txt">Kayıtlı mısınız? <Link to="/signUp" className="border-effect">Giriş Yap</Link></p>
                        <h6 className="mt-4 text-center font-weight-bold ">Veya sosyal hesapla devam edin</h6>
                        {/* <ul className="list  list-inline mt-3 mb-1 socials text-center">
                            <li className="list-inline-item">
                                <Link to="#"><FaFacebookF/></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><FaTwitter/></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><FaInstagram/></Link>
                            </li>
                        </ul> */}
                        <Button className="loginWithGoogle mt-2" variant="outlined"><img src="https://cdnlogo.com/logos/g/35/google-icon.svg" />Google İle Giriş Yap</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default SignUp;