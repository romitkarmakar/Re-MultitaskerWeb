
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import $ from 'jquery';


import { Routes, Route } from "react-router-dom";
import Category from "./components/categrory/category";
import Home from "./pages/home";

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
     <Home />

      <Footer />
    </div>
  );
}

export default App;
