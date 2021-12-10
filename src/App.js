import About from "./components/about-us/about-us";
import FAQ from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Testimonials from "./components/testimonials/testimonials";
import Work from "./components/work/work";
import $ from 'jquery';
import ScrollReveal from "scrollreveal"

import Partners from "./components/partners/partners";
import MobileApp from "./components/mobile-app/mobile-app";

function App () {

  // Page loading animation
  $( window ).on( 'load', function () {
    if ( $( '.cover' ).length ) {
      $( '.cover' ).parallax( {
        imageSrc: $( '.cover' ).data( 'image' ),
        zIndex: '1'
      } );
    }

    $( "#preloader" ).animate( {
      'opacity': '0'
    }, 600, function () {
      setTimeout( function () {
        $( "#preloader" ).css( "visibility", "hidden" ).fadeOut();
      }, 300 );
    } );
  } );


  return (
    <div className="App">
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Header />
      <Work />
      <Partners />
      <About />
      <Testimonials />
      <FAQ />
      <MobileApp />
      <Footer />
    </div>
  );
}

export default App;
