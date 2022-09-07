import './partners.css';
import React from "react";
import Slider from "react-slick";

export default function Partners () {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        centerMode: false,
        responsive: [ {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 1
            }
        } ]
    };

    return (
        <>
            <section className="section">
                <div className="container" style={ { borderTop: 'solid 2px green', paddingTop: '50px' } }>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="center-heading">
                                <h2>Our <em>Openings</em> </h2>
                                <h3 style={{marginBottom: "30px",textAlign: "center", fontSize: "18px"}}>Add Job Openings also</h3>

                                <section className="customer-logos slider">
                                    <Slider rtl { ...settings }>
                                        <div className="slide job"><div><p>Mechanic Job</p><p>$25</p></div></div>
                                        <div className="slide job"><div><p>Handyman Job</p><p>$40</p></div></div>
                                        <div className="slide job"><div><p>Trucking Job</p><p>$30</p></div></div>                                
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