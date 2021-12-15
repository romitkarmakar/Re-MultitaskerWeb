import React from "react"
import { Link } from "react-router-dom"


const Navbar = () => {

    return (
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

                                <li className="scroll-to-section"><a href="welcome" className="menu-item">Home</a></li>
                                <li className="scroll-to-section"><a href="about" className="menu-item">About</a></li>
                                <li className="scroll-to-section"><a href="testimonials" className="menu-item">Testimonials</a>
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

    )
}

export default Navbar
