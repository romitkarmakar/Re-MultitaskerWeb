import './footer.css';
import React from 'react'


export default function Footer () {
    return (
        <>
            <footer id="contact-us">
                <div class="footer">
                    <div class="heading">
                        <h2 className="text-white">MULTITASKER<sup>&trade;</sup></h2>
                        <p class="text-black">
                            Multitasker is an online marketplace that connects busy everyday people who need to outsource any task or run any errand with trusted local multitaskers who are ready to work and lend a helping hand
                        </p>
                    </div>
                    <div class="content">
                        <div class="services">
                            <h4>Services</h4>
                            <p><a href="/category">Cleaning</a></p>
                            <p><a href="/category">Web development</a></p>
                            <p><a href="/category">Trucking</a></p>
                            <p><a href="/category">Graphic designing</a></p>
                            <p><a href="/category">And many other services</a></p>

                        </div>
                        <div class="social-media">
                            <h4>Social</h4>
                            <p>
                                <a href="https://www.linkedin.com/in/"
                                ><i class="fab fa-linkedin"></i> Linkedin</a
                                >
                            </p>
                            <p>
                                <a href="https://twitter.com/"
                                ><i class="fab fa-twitter"></i> Twitter</a
                                >
                            </p>
                            <p>
                                <a href="https://github.com/"
                                ><i class="fab fa-pinterest"></i> Pinterest</a
                                >
                            </p>
                            <p>
                                <a href="https://codepen.io/"
                                ><i class="fab fa-youtube"></i> Youtube</a
                                >
                            </p>
                            <p>
                                <a href="https://www.instagram.com/"
                                ><i class="fab fa-instagram"></i> Instagram</a
                                >
                            </p>
                        </div>
                        <div class="links">
                            <h4>Quick links</h4>
                            <p><a href="/#work">Home</a></p>
                            <p><a href="/#about">About</a></p>
                            <p><a href="/category">Category</a></p>
                            <p><a href="/contact">Contact</a></p>
                            <p><a href="/terms-and-conditions">Terms and Conditions</a></p>

                        </div>
                        <div class="details">
                            <h4 class="address">Address</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                adipisicing elit. Cupiditate, qui!
                            </p>
                            <h4 class="mobile">Mobile</h4>
                            <p><a href="#">+9112233445</a></p>
                            <h4 class="mail">Email</h4>
                            <p><a href="#">abcdef@gmail.com</a></p>
                        </div>
                    </div>
                    <footer>
                        <hr />
                        &copy; 2021 Multitasker.
                    </footer>
                </div>


            </footer >

        </>
    )

}