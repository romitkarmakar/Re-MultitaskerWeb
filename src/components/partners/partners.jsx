import './partners.css';
import React from "react";
import Slider from "react-slick";

export default function Partners () {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
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
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="center-heading">
                                <h2>Our <em>Partners</em> </h2>

                                <section class="customer-logos slider">
                                    <Slider { ...settings }>
                                        <div class="slide"><img alt="" src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" /></div>
                                        <div class="slide"><img alt="" src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" /></div>
                                        <div class="slide"><img alt="" src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" /></div>
                                        <div class="slide"><img alt="" src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" /></div>
                                        <div class="slide"><img alt="" src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" /></div>
                                        <div class="slide"><img alt="" src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" /></div>
                                        <div class="slide"><img alt="" src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" /></div>
                                        <div class="slide"><img alt="" src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg" /></div>
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