import './testimonials.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

export default function Testimonials () {
    const options = {
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        }
    }

    return (
        <>
            <section class="section" id="testimonials">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="center-heading">
                                <h2>What They Think <em>About Us</em></h2>
                                <p>Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio.
                                    Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                            </div>
                        </div>
                        <div class="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <OwlCarousel class="owl-carousel owl-theme" loop margin={ 20 } nav pagination { ...options } >
                                <div class="item service-item">
                                    <div class="author">
                                        <i><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg" class="rounded-circle" width="75" alt="Author One" /></i>
                                    </div>
                                    <div class="testimonial-content">
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <h4>Jonathan Smart</h4>
                                        <p>“Nullam hendrerit, elit a semper pharetra, ipsum nibh tristique tortor, in tempus
                                            urna elit in mauris.”</p>
                                        <span>Besta CTO</span>
                                    </div>
                                </div>
                                <div class="item service-item">
                                    <div class="author">
                                        <i><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg" class="rounded-circle" width="75" alt="Second Author" /></i>
                                    </div>
                                    <div class="testimonial-content">
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <h4>Martino Tino</h4>
                                        <p>“Morbi non mi luctus felis molestie scelerisque. In ac libero viverra, placerat est
                                            interdum, rhoncus leo.”</p>
                                        <span>Web Analyst</span>
                                    </div>
                                </div>
                                <div class="item service-item">
                                    <div class="author">
                                        <i><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg" class="rounded-circle" width="75" alt="Author Third" /></i>
                                    </div>
                                    <div class="testimonial-content">
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <h4>George Tasa</h4>
                                        <p>“Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor,
                                            congue a fringilla sed, maximus et urna.”</p>
                                        <span>System Admin</span>
                                    </div>
                                </div>
                                <div class="item service-item">
                                    <div class="author">
                                        <i><img src="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg" class="rounded-circle" width="75" alt="Fourth Author" /></i>
                                    </div>
                                    <div class="testimonial-content">
                                        <ul class="stars">
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                            <li><i class="fa fa-star"></i></li>
                                        </ul>
                                        <h4>Sir James</h4>
                                        <p>"Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor,
                                            congue a fringilla sed, maximus et urna."</p>
                                        <span>New Villager</span>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}