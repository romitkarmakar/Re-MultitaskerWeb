import './header.css';
import React from 'react'
import $ from 'jquery'

import {Link} from 'react-router-dom'

export default function Header () {  
    
    return (
        <>

            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav navbar navbar-expand-md navbar-light fixed">
                                <a href="/" className="logo">
                                <img src="https://i.ibb.co/gZhsVNv/Multitasker-Logo-Final-Color.png" alt="Multitasker-Logo-Final-Color" height="75"/>
                                </a>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav ml-auto py-4 py-md-0">

                                        <li className="scroll-to-section"><a href="/" className="menu-item">Home</a></li>
                                        <li className="scroll-to-section"><a href="/" className="menu-item">About</a></li>
                                        <li className="scroll-to-section"><a href="/" className="menu-item">Testimonials</a>
                                        </li>
                                        <li className="scroll-to-section"><p className="menu-item">
                                            <Link to ="/category">Category</Link></p></li>

                                        <li className="submenu">
                                            <a href="">Know more</a>
                                            <ul>
                                                <li><a href="" className="menu-item">About Us</a></li>
                                                <li><a href="" className="menu-item">Features</a></li>
                                                <li><a href="" className="menu-item">FAQ's</a></li>
                                                <li><a href="" className="menu-item">Blog</a></li>
                                            </ul>
                                        </li>
                                        <li className="scroll-to-section"><p className="menu-item">
                                            <Link to ="/contact">Contact Us</Link></p></li> 

                                    </ul>

                                </div>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>


            <div className="welcome-area" id="welcome">

                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <h1>Get Your Job <em>DONE</em> By Experts</h1>
                                <p>Multitasker helps you get more time back in your day! You
                                    can book tasks from a variety of categories to best suit
                                    your needs.</p>
                                <a href="about" className="main-button-slider">KNOW US BETTER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}