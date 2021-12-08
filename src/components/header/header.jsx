import './header.css';
export default function Header () {



    return (
        <>

            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                <a href="index.html" class="logo">
                                    <img alt="" src="logo/Multitasker-Logo-Final-Color.png" height="100" />
                                </a>
                                <ul class="nav">
                                    <li class="scroll-to-section"><a href="#welcome" class="menu-item">Home</a></li>
                                    <li class="scroll-to-section"><a href="#about" class="menu-item">About</a></li>
                                    <li class="scroll-to-section"><a href="#testimonials" class="menu-item">Testimonials</a>
                                    </li>
                                    <li class="submenu">
                                        <a href="https://github.com">Know more</a>
                                        <ul>
                                            <li><a href="https://github.com" class="menu-item">About Us</a></li>
                                            <li><a href="https://github.com" class="menu-item">Features</a></li>
                                            <li><a href="https://github.com" class="menu-item">FAQ's</a></li>
                                            <li><a href="https://github.com" class="menu-item">Blog</a></li>
                                        </ul>
                                    </li>
                                    <li class="scroll-to-section"><a href="#contact-us" class="menu-item">Contact Us</a></li>
                                </ul>
                                <a class='menu-trigger' href="https://github.com">
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>


            <div class="welcome-area" id="welcome">

                <div class="header-text">
                    <div class="container">
                        <div class="row">
                            <div class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <h1>Get Your Job <em>DONE</em> By Experts</h1>
                                <p>Multitasker helps you get more time back in your day! You
                                    can book tasks from a variety of categories to best suit
                                    your needs.</p>
                                <a href="#about" class="main-button-slider">KNOW US BETTER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}