import React from 'react'

export default function MobileApp () {
    return (
        <>
            <section className="section" id="promotion">
                <div className="container">
                    <div className="row">
                        <div className="center-heading">
                            <h2>On the <em>Move?</em></h2>
                            <p>Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio.
                                Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                        </div>
                        <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.

                            </p>
                            <br />
                            <a href="#about" className="main-button-slider m-4">
                                <i className="fab fa-android"></i>ANDROID</a>
                            <a href="#about" className="main-button-slider"><i className="fab fa-apple"></i>APPLE</a>

                        </div>
                        <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">


                            <img src="../../assets/img/manphone.png" height="400" alt="mobile-app" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}