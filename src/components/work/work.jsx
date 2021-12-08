import './work.css';
export default function Work () {
    return (
        <>

            <section class="section" id="about">
                <div class="container">
                    <div class="center-heading">
                        <h2>What We <em>Do?</em></h2>
                        <p>Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio.
                            Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <div class="features-item">
                                <div class="features-icon">
                                    <h2>01</h2>
                                    <img src="img/truck.png" width="100" alt="" />
                                    <h4>Moving</h4>
                                    <p>Curabitur pulvinar vel odio sed sagittis.Nam maximus ex diam, nec consectetur diam.</p>
                                    <a href="#testimonials" class="main-button">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                            data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                            <div class="features-item">
                                <div class="features-icon">
                                    <h2>02</h2>
                                    <img src="img/basket.png" width="100" alt="" />
                                    <h4>Cleaning</h4>
                                    <p>Curabitur pulvinar vel odio sed sagittis.Nam maximus ex diam, nec consectetur diam.</p>
                                    <a href="#testimonials" class="main-button">
                                        Discover More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                            <div class="features-item">
                                <div class="features-icon">
                                    <h2>03</h2>
                                    <img src="img/flowers.png" width="100" alt="" />
                                    <h4>Gardening</h4>
                                    <p>Curabitur pulvinar vel odio sed sagittis.Nam maximus ex diam, nec consectetur diam.</p>
                                    <a href="#testimonials" class="main-button">
                                        More Detail
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="left-image-decor"></div>

            <section class="section" id="promotion">
                <div class="container">
                    <div class="row">
                        <div class="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <img src="img/grid2.svg" width="200" class="topgrid" alt="" />
                            <img src="img/grid2.svg" width="200" class="bottomgrid" alt="" />

                            <div class="staggered-grid">
                                <div class="picture-container">
                                    <a href="https://unsplash.com/@benchaccounting" target="_blank" rel="noreferrer noopener nofollow">
                                        <span>Picture taken from Unsplash</span>
                                        <b>@benchaccounting</b>
                                    </a>
                                </div>
                                <div class="picture-container">
                                    <a href="https://unsplash.com/@jazminantoinette" target="_blank" rel="noreferrer noopener nofollow">
                                        <span>Picture taken from Unsplash</span>
                                        <b>@jazminantoinette</b>
                                    </a>
                                </div>

                                <div class="picture-container">
                                    <a href="https://unsplash.com/@laurenmancke" target="_blank" rel="noreferrer noopener nofollow">
                                        <span>Picture taken from Unsplash</span>
                                        <b>@laurenmancke</b>
                                    </a>
                                </div>


                            </div>

                        </div>
                        <div class="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                            <ul>
                                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                                    <img src="img/armchair.png" width="100" alt="" />
                                    <div class="text">
                                        <h4>Furniture Assembly</h4>
                                        <p>
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <h6>Know more <em><i class="fas fa-arrow-right"></i></em> </h6>

                                        </p>

                                    </div>
                                </li>
                                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                                    <img src="img/digital-campaign.png" width="100" alt="" />
                                    <div class="text">
                                        <h4>Marketing</h4>
                                        <p>
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <h6>Know more <i class="fas fa-arrow-right"></i></h6>

                                        </p>
                                    </div>
                                </li>
                                <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                                    <img src="img/man.png" width="100" alt="" />
                                    <div class="text">
                                        <h4>Hand in a job</h4>
                                        <p>
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            <h6>Know more <em><i class="fas fa-arrow-right"></i></em> </h6>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}