import './footer.css';
import React from 'react'


export default function Footer () {
    return (
        <>
            <footer id="contact-us">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <ul className="quick-links-ul">
                                    <li className="quick-links-li">
                                        <a href="#header">Home</a>
                                    </li>
                                    <li className="quick-links-li">
                                        <a href="/category">Category</a>
                                    </li> <li className="quick-links-li">
                                        <a href="#steps">How It Works</a>
                                    </li>
                                    <li className="quick-links-li">
                                        <a href="#services">How Can We Help</a>
                                    </li>
                                    <li className="quick-links-li">
                                        <a href="#badges">Badges</a>
                                    </li><li className="quick-links-li">
                                        <a href="#partners">Opennings</a>
                                    </li>
                                    <li className="quick-links-li">
                                        <a href="#about">About</a>
                                    </li><li className="quick-links-li">
                                        <a href="#testimonials">Testimonials</a>
                                    </li>
                                    <li className="quick-links-li">
                                        <a href="#faq">FAQS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-content col-lg-6 col-md-12 col-sm-12">
                                <h2>More About <em>Multitasker</em></h2>
                                <p>Multitasker is an online marketplace that connects busy everyday people who need to outsource any task or run any errand with trusted local multitaskers who are ready to work and lend a helping hand.
                                    <br /><br />If you need this contact form to send email to your inbox, you may follow our <a
                                        rel="nofollow" href="/contact" target="_parent">contact</a> page
                                    for more detail.</p>
                                <br />
                                <br />
                                <a
                                    rel="nofollow" href="/contact" target="_parent">TERMS AND CONDITIONS</a>
                                <ul className="social">
                                    <li><a href="https://fb.com/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <p>Copyright &copy; 2021 Multitasker.All Rights Reserved.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </footer >

        </>
    )

}