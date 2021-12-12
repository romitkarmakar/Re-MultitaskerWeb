import './partners.css';
import React from "react";
import Slider from "react-slick";

export default function Partners () {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        centerMode: false,
        responsive: [ {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        } ]
    };

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="center-heading">
                                <h2>Our <em>Partners</em> </h2>

                                <section className="customer-logos slider">
                                    <Slider rtl { ...settings }>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg" /></div>
                                    </Slider>
                                </section>
                            </div>
                            <div className="center-heading">
                                <h2>Our Service <em>Provider</em> </h2>

                                <section className="customer-logos slider">
                                    <Slider ltr { ...settings }>
                                        <div className="slide"><img alt="" src="https://cdn-icons-png.flaticon.com/512/1670/1670080.png" />
                                        <p>Lorem</p>
                                        </div>
                                        <div className="slide"><img src="https://cdn-icons-png.flaticon.com/512/1718/1718449.png" alt="" />
                                        <p>Lorem</p>
                                        </div>
                                        <div className="slide"><img src="https://cdn-icons-png.flaticon.com/512/2919/2919726.png" alt="" />
                                        <p>Lorem</p>
                                        </div>
                                        <div className="slide"><img alt="" src="https://cdn-icons-png.flaticon.com/512/3238/3238681.png" />
                                        <p>Lorem</p>
                                        </div>
                                        <div className="slide"><img alt="" src="https://cdn-icons-png.flaticon.com/512/994/994928.png" />
                                        <p>Lorem</p>
                                        </div>
                                        <div className="slide"><img alt="" src="https://cdn-icons-png.flaticon.com/512/3048/3048343.png" />
                                        <p>Lorem</p>
                                        </div>
                                        <div className="slide"><img alt="" src="https://cdn-icons-png.flaticon.com/512/2762/2762402.png" />
                                        <p>Lorem</p>
                                        </div>
                                        <div className="slide"><img alt="" src="https://cdn-icons-png.flaticon.com/512/393/393651.png" />
                                        <p>Lorem</p>
                                        </div>
                                    </Slider>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}