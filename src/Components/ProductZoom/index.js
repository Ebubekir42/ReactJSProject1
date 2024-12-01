
import { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);



    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }
    return (
        <div className="productZoom">
            <div className="productZoom position-relative">
                <div className="badge badge-primary">25%</div>

                <Swiper slidesPerView={1} navigation={false} slidesPerGroup={1} spaceBetween={0}  modules={[Navigation]} className="zoomSliderBig" ref={zoomSliderBig}>



                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom  zoomType="hover" zoomScale={1} src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <Swiper slidesPerView={4} navigation={true} slidesPerGroup={1} spaceBetween={0} modules={[Navigation]} className="zoomSlider" ref={zoomSlider}>



                <SwiperSlide >
                    <div className={`item ${slideIndex === 0 && 'item_active'}`} >
                        <img src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg" className="w-100" onClick={() => goto(0)} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFhUWFRgVFRcWGBYYFRcWFRcYGBgWFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHSYvKzUtLS0tLS0tLS0vKy0tLS0tLS0wKy0tKystLS0tKy0tKystLy0tLS0tLS0tLS0tK//AABEIAQMAwgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABgQFAgMHAQj/xABJEAABAwIEAgYFCQUFBwUAAAABAAIDBBEFEiExQVEGEyJhcZEygaGxwQcUIzNCUnLR4WKCotLwFVOSsvEWJENzo8LiRFRjhMP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAtEQACAgEEAQIFAgcAAAAAAAAAAQIRAwQSITFBE1EiMmFxkbHBBXKh0eHw8f/aAAwDAQACEQMRAD8A7ihCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQAhCEAIWD5AN/UOKgYhWOY1zgBZoub+xRckiUYtlgXLEyKmw/FHuc1paNQCT3ngO61lh0jnd83cQ4g57aGxtfbRQ9RbbRZ6T3UyRVdIYIyQ5xuN9NlFPS+n/b8v1SNiLjmm/DH741DqT9Z/yo//AMlleoma1poHS4elVK7/AIlvEEKzpa+OT0JGu8CCfJcalee1/wAuMj/p3+K1S1BbmI0IEZHdmDb29blKOol5Iy0sfDO5XXq5DQ9M6qndlzdY3Pkyya+Fn7hPfRrphT1lmg9XIR9W/c/gOztj39y0QyqRlnhlEY0IQrSoEIQgBCEIAQhCAEIQgBCEIAQhCAFCxLEBEAN3O2Hsue5S3usCTwSTiNQXTFxPEeQO38KpzZNq47L8GPe+ei4pqkuuTqS03vwubCw4ae9SsVaXMe3ibD3Ktw+cAOLuAA81O+eB+w0LwNeVgqoO0XTjUrogYbZjwDbQak6DbmteMYjGY3NMg0fc2BJsXb8uI81C6QB2STlnAHPcezVUM8DiJLAnsxjQE3N41VKbitpdGCk9x7WvYTIcxsWs4cPo+9QpnMudT9Vy5N/8VImpX9sZXfVN4HcNZp7FFlpXX9E/UOGx3tIAPcs7ZfRpeWn7W8J4cs/8qjyx3Bs4G8Q7vRd3/gWw0xuy4P1b2nTmZP5goOQ2Z3xyN9fb/mC6jjNdbdpJI2dE/wAhY+1yrs5ZsbFuYXGhuyQHfwKmSvOXfeK/+F5+DVEncHEgi13cP/kZ+itiyqSOrfJ/0vM/+71BvI0dh5+2ASLO/a034+O74vnnBpyyVjgdbAgjno4fFd5wetE0LJOY18RutuOVqjDlhTsmoQhWlIIQhACEIQAhCEAIQhACEIQEPFH2Z4pHqJbPPP8ARxTfjktm+r3pKiZd1z4+NwR8Vg1MviPQ00fhLLD43Pzfu+1MFPh5a394OHqsqzB5mtuTbw7gP9Arujqc6lh2vsjnck+Cpr5hESXRB1zmuTfUdyqsRx920dmN8Be6telEjGRuLnAcrkDX1rnOIY/TNsDOzvsbm/qUMzkntiW4lFx3Msaiqe83c4n1qHLIeaqZul1INnk+DXfkoj+l1Mfv/wCFZ/Tk/Bf6kV5Lk1DhxPmtT6w8bG3MA7qm/wBpqc/acPFpWQxWF/oyt9Zt709NrtDfF9MlTyMI9G3ZLdORvwPiq6WO5u031j02d2NNvBbpTfUajmNR5hVsx1U4kZG6gkLXtF+V79ziPiF2r5Pqq8bmcrOHr0I93muGtnvo7XkeI47rqnyYVVnht7hzTlPdv56LXifJjzLg6YhAQtRjBCEIAQhCAEIQgBCEIAQhBQFLjp0JPAD4pLY8l5PcnDpRK1kTnOIDQLknYLhPSDpTJM4xU12s2Lh6TvDkFgzQc8lI9DDNRx2x3x3plTUpLS7rHgWyRkadznbDgqyXHsQdD18kzcPgfpGGsz1Mo37DTrb9olo47Kn6K9F3McJXxh8p1jY7VrT/AHjwd7cBzTNV4O25lqJc7wO09x0A5NCnGMMffLK5ZJz4XCObVtO+d2ZxkcfvSOL3nvJ2HgFh/ZDhwTXU1bSSIm2aPtHc+A4KG+Rd9RnNpSf2WsXYd3K2c9YBxUd7O7UVP9nBBwo8NVb5QhuZurSm9jahfdSvjN2lzT3EhZtxOQaSAO79j5j4prgnil7MrbHmq3F8EMeo7TTsQuqSfaOcx6ZBhmY+2Q6/dOh9R4p++TSrySsB2zW8NbLmc1JxGhV70Qx/qZmsm2uLO5ePMKajXKOOd8M+mgvVqpZMzWuGt2g+YW1aTKCEIQAhCEAIQhACEIQAvCvV4UBxv5W8WlqapmHU9zxfbid9e4D48lpwjonHTltxmcLHxd+X9cE7YdgDYKisrpRd8ry2PuibwHe5xPqAUemb6UzuJOXx5+AWTJKl9zTHl/Y1SubAwucbOIu93IfdCQ8WxJ0zrnRgPZb8TzKsekWImV2Rp7IOveeapzDpnebNHme4BUr3LSKQTsok0zRp6R7tlMFPJNsMkY423/Mq1pMMYwaDXmd03JCmLXVTOGjCB36e9avm03JOvVts48rac7m3lZDY2ZXOLASCLWuB6LiAQb31aBqqp6jb0i2OG+2JIEo4X8FuirODhbxV8abNewA5m3ZHHfgoMtMCNQpxyp8PsjLHXKIr2A6hSsPxHL2JNWnTVQMpadNlsc3MLhTTTIO0b8Sw4MOdvajctVbgXXR5ovrA3Mz9sDh+JScLrbfRv1adPBWGHv8Am8oY4/RvN2O+67gfA7HzVsJU6Kpx9jpXyR4m6fDYi70oy6I+DTdv8LgPUnRL/Qygjhhd1egkldK5vBrnBoIHd2b+tMC1R6M8uwQhC6cBCEIAQhCAEIQgBeFeqPW1AjY55Ng0E6rjdAoOkNV1krKdp3u53cB6R9w9aWelWI5R1bOVhbgFngdQXMmr3/8AHNor8IIyQ0/vHM71hLrnGaQuPPTwWCbuRrgqRGgpvtO2Ht7k5YH0WikZ1kwzPIOVpvkYO4Dc/tFL0LczwB6LT7eKfqCcGPIOzchu5vY8LqWPuvJyfQnYtSlzi2JvYbo5xs1gA4EnRvrN1VSSU7fSnzni2Fub/qOs3yuteO1rJar6YPMDXuDWMIbZou1pYDoDsSeOqZ6TCKX5vBPBSB7p5eqAnkeQ2xeMzspsfq72A4qEcKbZ7L0sMMYyy276qkvem2/oLQxmJnoU+bS15ZC7T8DQ0cuK0ydJJeEcI/ccf8zimGPolBJNJTtqT17QXkCLLECSDYa7DONio0uB0cEEE9R17uusCGFlmOtdx1FyBY+Sej9F/Q0xno1SUW3xxT8q139iiq8VnDWmSniDXC7C6EgObzabi41G3NQ34swiz6WM/gfIz3lw9i6OMEjrKWiGc9VHm30kexrS0NFvtHIL25FKrsCgfTV0rYpInwSkMa5zrhgazR4dxPaPr5KfpV0VRyaWdqUKadOv5qXsUkM9G9wGV0TjxeczLnm4G4HeW2WqvoTG4gNIcDYjn3bqZ0qwWKKno54gR18V5ASSM+Vh0vt6TtO5WeGvEkULzYktAN+Lozkv/CFCOBbr5syayMY41PH021z4a/4xQqI+6xG44gqxoZRKwxP3+yVa9KKBoPWN3+13jn4hLIJY4OCmeedX+S/GS9rqeQ/SM58WjQH4eXNdBC4LR4g6GWKsj3YQJBzadCPWPgu50VU2VjZGG7XtDmnuIutWOVozTVM3oQhWEAQhCAEIQgBCEIASZ8oVQ6TqqGMkOqHWeR9mIavd5Aj1pyKQqCXrqqrrD6LHfNofCP6xw8XWH7pVWaVRJ41bIHSmcNa2CMWa0BoA4NaLAKnazIzTchbqp3WSk96wZNdztLjYer+rrA3StmyvCPMPAaLk6pmwyrtl1+233hLbbbWuSRaw0HD1k6BTsVxNtDCXyAukI7LBbjpqeA11PqF+NMdQ4y4Vu+F7/wCCc8Sa/UUcZjLJ5GHdsj2+Tj7/AIpmw3pNHFRQRNuZYZ+ssR2SMzzbN4PSS/pq6Z96iip5Hk+m3rYnkbDMWvIcQLC9r2AUqbHoWWvh41HComv5WK9D0pR5TPTf8U02aEY5Iy4p8VV1Xv1yOEvTCJsr6iGmtO9uUufIXNGg2YBY+i3lsl/EsffNTx07mttG7MHi+Y3DhYjb7fDkFXM6SUx/9AB/9mX+ULOXHYGjSiivwzSzO/7goNS6b/38FmPUaWNSjB8Vy2vHC7l9Tc7H5uojp+yGxSCSNwBEjXjNbtXtbtu4KS/prVGRzvoiXtDHtyAskDb2Lm3NzYkXHDRbqSYFocaalGgNxGXC/d1jnKfHi5aLZmtP7LGt/wArVNQa8mbL/EcD6xX33Xn8lFidZW1rGRmDsMN2BkXVsbpawJ0t3XU6OJ0MMcdg5zQS6ztA5zi4gEA3tdWDp6ibVkckg55HEeoka8FElL43NE8fV5tQHAC+Ui+pHePNTUa5MGfVvLFQUUkuaRvicZ2h0kZYOIJGvhxsfBLWLUoY8tb6J1b3cwmjGaktvra40SNjGMgObxB0PcQRr7SskX8TUUQa+G2TMLnsSx2x0XTfktxQhslE86xHPEecbzr5H3rkspsQ4Jr6K4l1dRDNfY5Xd7HaH8/Ur4SplM1aO4BCwYVmtZnBCEIAQhCAEIQgIeLzmOGR7RdzWOLRzdbsjzsk+pgFNSMhB1a3tHm4m7j63EpyrvRt3j2apD6VTXNge5ZNQ+UjRhXko49GufxcbBatrAcvf8fzUupjtkZyFz61EzA3O/8AWixZWtvJqjd8GbMRbTDrHWzHRgPE78vM8AkvGsXdVSlua9z2ncNNgByHwTL0zwXPE0W+kAJzDhfdp09E29l0qdGaJ7+scwNHVxPlcTf0Yxc2tx1VuiwJXkl836DUZXGG1efP7FrhHRogh5JHqFvMqTjXROqnIMUb3gAnM5zWtAG5zOIAA57KZh+IV0oHzGgNrfWytDmkHXMHS5YreDToPG8p/QqtrZhFX4i1r5G9aIW3kDmA6ubGCxjbOy7A6kFejR57Yqs6NMYHGfEqSKwJsx5nk04ZGa37r3WcNXg0QPWMrKl4sWucWQRu11sGuzNFhxudeHC76I9H8KndVxSNneafO8yOc5lomgjMGRkdtrg64II23vZWeI4PLQYXUGKOAvhlhkiqWRszTwdYxwe8m5MjXDU7EAW0KcHNzKek6YTOZejwWPJb0upmqBYa6SAC+g2W7CcQxytjLoHsjjaSwuAgiylnpNIsXst4BWHSLGqyowimr4JniWOSPrerv23axPBjbo4dblOUi1uCvMMpy3EKaXqiJKuhl+dsGXTqjCWOfc83ujvqTpy0CxJd0frpqd9RJixcxt87I5J5iHXF4y1pAz3IGXjfRQn4UygqoIn1ZkdNmZI0tLcrJAWskuXEAdZY6kE5SUydC8Glw11ZDUSxRRtcHR55G75XBrnfslvV3F79kjxXumVNR1UPzxlQ1tQxlpgzNLHI9oytaHgdlxIAa82BBGi4CtxSqqI80ZOdrXFuu7SDYgH4Lb0MohI6SWVocW2DARcDNcl1uegVhVSdY5sp9GpiZOANWhzhaRuo4PDvMKb0dhAe/wDDytxVMopJ12XqTa+hW41TkOd2bA6j42/riomFVJGnJW2MPJNuF1SZLG44HXwKpg7RZJUd/wCi2IdbTxuvc5cp8W6K7BXNPk2xD6NzCdiCPcfcuiwS3WuErRlkqZvQhCsIghCEAIQhAQ8QdYJBrmZ5R4p1xp3Z9SVBH278gsWf5masPRTYge1K7k2w9w96WK6vMZaxm/pO7uQ8fXyTPWtzZtL3I052FwPPKPWubYvQVTJXdYBaxe6TURgAXcCd7ja2+1t1lUFPJTfRrhkjB/EXeLY64s9KxIs7sjXuvc6Hl3qx+T3CiJWXdYSxyxHj2XxuHHvt5LnsLnSPAcba7WPtXWejMwidTuOzZGC54A9kk6aWF16GOGwo1OaOT5VwjH5N55KnCqyGaI1XVdiKFxLczGRsLIQ5uwzNKVugdb1OKiWeWOBsfXCUTyWa1oBYIWucTctcWWF9oymjo1hb53VtM3Ep4oqeqqCYKZjWTkF7nZxM67hc5mgAbtKqK6rwukkppDR1DJBK6WoirGOklfA+KVrXubI4szdZlcBfdtzZXGEmYViFBSYhV1EMk9Y2Zr+xTRZ2XqJXOkjc69uzaOzrgds7qFLNiNFh1VDJRuNE/PFD10jTNTwyFzWghjnEtF2DW1ncwRZi6W1tUaOOmijJqqvPljibkMcDSHP7OY5SAWRk31JeRspeA4+52G0T6gGSGbrKWqdI0yZbudG2WUm/Zdky5nafStJ5ICB0Zw3EH4bC8V8dLAKfOxkNO1zy1rCQ6R7r3cQLkga35qBh+AUdRA2uzYhiMklmGNsjWPbq4EOAyFsYc08bag21TrRvbDWSUgLW0sGH07LOeAWOc+ZrWm51HVt3Oug3ukDoxWUVDTVVLLiADs72RzUwc6QMLIy10UsYN9bnTZ2YIDDDKbCHz1MNNHCZnFggbWiQsu0BskLXSXc1+Zshzam722Dg3KpdJh8L5a2jfQuhzsFSyHrSIpRHYMy9Vo0BwB7J+0LjRVM3SDB4g1kNI6qcYpWSOfE1r5XPDSJHPd28wyvuQL2e4rd/tDXvdFPTYWWsgidBG6brXEDsFxdI4suBkAu6/E3vtFo6L+EV2agjOxp6lzN7kR1DTICe7O0hWgqnRkPYMzrgWF+0Du0W3voqhjnNlqm1EcEPzinc4MiyiNksID4crWudlLiDpfUvvxTB0TeC5ubUhhI8dB7iVXMsgWLG/aezKSPRNiRfe9iQqB0XbLf60VzilQRfTiqbrgZARzHt/wBFlxteDRKLq2MXQWUskLfEe4rp+H1K5dgoyzt5HXzT5RzWWhOiiXI3xvus1XUM91YArQnZSz1CELoBCEICsxdlwEszaF55BN9cy48Eo1+geseoXJpwsXa7EhB27AuA7IOozG1iRyFj7FowOsdUOJkdmvcZDcx2cDoGnQDQi3f3a445SdYco9LL2fGxOp4Ds+1GE0zYXFuYlzWhziLWzHbKLacOJWCc1E2Zs8MOJJfM6/F/2NNRhTZmsJjaCLuFh3i9wDrwVi+kIiLe42tv/qp8EmVzG20LHF2neMoFlKMIeLW09g53WrSzbxXI8zE+GU2F1DabHKuaaaKKKSCN5Mjgy+bq8ts1gbFsl9eI3VJjGLYVGJZJKh9fUumjkZI+I/Rsjla8QskfZoZla5vZOuZ3Oyi9KGMfUwOmgfMyKIRPZnLMwa55ZlkbqLBw8jzuJeG4u6If7lhsEBItndmnlGt9JJLE+FlvtUNrLKDppX1chkw/Cm5rZBPKC9xaHHs9acjW6k9nMbKFUdHcUmiMFfiEFLDYWhe+ININzlIjtmAsNHOPC2yjVEFfUG81TMeHpuYNbXGVlhwHBY0/RaMm8hBdvdzjrbxIK45o7sZHdgOEROa+qr5q119WwsOXTi55JOXXg4Hko3zqiicfmuGCQa2fWPMm4cPqfQsLixPLmmGDo3GCA1oJOlhdx96vaPok1ushH4Wt1Hi6/wAFB5KJbBIpsbrG/UR01Pe4+gp2Rmx7xry1GuiscOwGes+kq6h/VtNg1hyg6WtpoABpxNtExYnRQxguaSMp1u1p30sNAQo1Jj8MbGsOa4vcADiTrv4Kh6iHuWLC/Yg1PRehY3SMDvDn3v6zY+SozaneHsGZrb6Ei5uLEbaGx/rZWWK42xws0O472/NLr6pr+9pOtjyOuo4rOtRcuei/0ko/UsJiKodZEcrNiTfQjcW4n2KiZTPimIcbtLRldwJYb2twPaKt58eiytZG3K0CwAAtbcWsfEqDHiDHgtBcTfiLW9p71KMknwuCLtrljbhguWOTXTPSlgTrtHgEy0rlospYy4dKruJ90r0UlkwUkiugyqSJ10LXmQrSBsQhCA1VPolJuKjR3inGq9EpNxM7+KyantGnB5FmeraKh3NrcjrnQdkSB1tjyPEac15SytkfZmpdxG62/wBn0j6qz3vfPLtENWsa0AZjsBo2+pvyB478TpmUjo3MaACerJ466i58R7V5WZLd5tmPULJuuXX7DBFQxsbne3M4N0BPZ8j8VEikc/Q3c633rAD8LW5fYouI17Wx9Y9zWtGlyS03OwGhzHTYaqjo+k4BeYnAAiwL2ucHX46eidOPkEwylLvpGrTYsmWVQXBtqspPadbfTI07G/3f6utsbmDZ1vFoPeocLw+KaQuymPK/Nbs2ubt13JudO5e01aXNaRb1t9vZXrYZbo2y/VYliyuKJJqx9++nBneTxbsvGVo/vb+LOJ0+77v0WmSoI1DRcnTsi3uWqSteBqw6chpY+oa9ysooGrosMwfI4g2OUWG3E8O9qn4lNYaKp6HV4e2SIgh187b6ZgQAbeBHtTEWBmu55/ALLni5Orpe5ODS5EXF6l2V2YFo5kEDzI7kk11M17zlks9+UNtcm9wOG97NHqXUcaxEgEa6rlvSQBksdSwBuV7S8DQaOBzAcP1WTFijvpSNcpNwujY7otU3FmPsCHXIN7gnTU6DVQqnAnNNiHA2ta/f3nvsunx4ixzCQdioVNRtdeU6k+jfgNlONtpJlbSSbkjm8fR2Uu0Y8WsdQGtPgTofAL2HCZmSatHPccNea6DXWHH2pTrsRAmDTt+m3u81Zb6IKKfJd4C7sjwTNSuSrgh0HgmSlctBUy8pnq3pplQ0zlZwOUkyDRa/OEKHmQp2yNDChCFeVmmq9E+CSsQPpeKd5x2T4JIxFnaPisuoXRowMXKyrEM0coic5xJjGX0i9+jB36Bw12uO5TOl0zTTludhlZJEZGtNyzUOJLdwLOG/AqDjmHtmjLHX5gjcFIT6EwtljDSTIGMz8Qxjg7LbiOwwb6Bqx+hGUlK+UT1MfUja7qh0xymqpKdwhka9hFy0NBf+AWabjUG+hSMaSaGTJJGWvsDbS9jsdPBY0ElTCT1c8oBNy3Mcp9RU+pxaqkBDnN1GUnq48xBFiMxF/IqyGNw4VNfglhzZMaqkSagVD6RwiyiMPD5QCOsdkGhttlGug10WzB6xwbYkkcdD8FQsoX2trblf389gtoonkaudblcq+ElFUQl6mSTlPsZpK8DS/s/PdaJcWYNDK3wzC3sBS23DFsGHBSeVHNjGPBsfgjqI3ukysa+7iA51gPwj3BONZ8odCQcskjvCJ4/zALl8VALqQKFvNQnJSVMkoVyX+JdNYJNo5j4hg/7lQTYvC/R9O57ful4aD+IgE+SDSM5rE07FRHHCLtIteSVVZLf0qblysomM72vIPsaPaj/bGoyta2OIBoDRcPJ0Ft8wUPqmIEbVNKK8EG2+2ez47USHXIPBv5kqGA5zru1KndUBwW+mhuQbaXuupJdI42y4wrS3h8EwUxVJRtsFb0zlMgXNOVZQOVTTOVjA5dRFk/MvVozoUrODYhCFpKTxwSR0gfkcU8KDXYVFL6bQSq8kNyJwltZymtxiMbuAO2pVTUYhA6/bb5hXvSeMQvc0URIB37WvfcBKE9bLc2oiOXpe+yp9Ki31T2aePgb+AJ9wWj5w3gD/AIXfksZKmX/29v3CfeAozqib+6t4MTYN5K+cng13lb3odObeg7+H81X56g/YePBv6ItPx6z2Aea5sO7yWZHfcPm381i5z/uD/EPgojo5f2vW4fmtZppDx/i/VNo3EwPf91v+I/yrIOf+x7T+Sgilfz/iK9+ZvP2h5k/BNosmuJ+83y/VYnvePIKKMPP3h5LP+zr7u8tE2o5bNudv3gfJZsmYNiPP9Vrbho0u4qVFhreN0pC2ZxjrNN/3j8Sp8FAQM1hbb0gfZfTyWumpMuziPDRTqeEN2XOBySadtlZU5UCMKXAVxkqLencrKFyqKcqygOiJnGTsyFrzIUrIjqhCFrKAQhCA0T0cb9Xxsd+JoPvCxgoImG7ImNPNrWg+wKShARZ6KNxzOjYXbXLWk+dku4vRRgWEbAAbgBrQL87WTU9UOMsugOd4vFqSlqpZqnTFob3StVwqmaLolS5qwLVKkYtRaqyZqDVllWWVe2QGICyDVllWQauA9Y1b2tWAbst7AgNkakRLS0LexROm9ikRlRmrexcOllTuVlA5U8DlYwOREWWGZC13QukR/QhC2lAIQhACEIQHjlS4o3Qq7KrcRZoUAmV8SWa6DuTlVsVHW06hJFkWKcsSjOYrqqgUCSJUMtIORehqkGNeBi4dNQYswxbQ1ehq5YMAxbWhZBi2NauCjxgW1q8DVtaEB61bo1qaLLNj7EDmuMEyEqxpyqyNWNMVwE9eLwFC6co6IhCFuMwIQhACEIQAoNfsvUIBZqRqVWVTUIUWSRRVyr5gvEKiRaiM4LW/ZeoUCZ63c+pZrxC4dNrQswhCA2BZhCFwHrVkhC4CRErKlQhATQUIQug//9k=" className="w-100" onClick={() => goto(1)} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                        <img src="https://cdn.dsmcdn.com/ty95/product/media/images/20210404/05/7deec09e/56930241/1/1_org.jpg" className="w-100" onClick={() => goto(2)} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default ProductZoom;