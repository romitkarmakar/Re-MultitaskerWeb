
import ScrollReveal from "scrollreveal";
import $ from 'jquery';
import React, {useEffect} from 'react'

import tawkTo from "tawkto-react";
import { Switch, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from './pages/contactus/contactus'
import TNC from './pages/termsAndConditions/TermsAndConditions'
import CategoryPage from "./pages/category";

function App () {
  if(window.console && !console.dir){
    var methods = ["dir", "dirxml", "trace", "profile"]; //etc etc
        for(var i=0;i<methods.length;i++){
            console[methods[i]] = function(){};
        }
    }
  const tawkToPropertyId = '61b98aaac82c976b71c1854b'

  // Direct Chat Link
  // https://tawk.to/chat/tawkToPropertyId/tawkToKey
  
  const tawkToKey = 'b256ef02bc8bc95ddf9910cb94407194e0930942'
  
  useEffect(() => {
      tawkTo(tawkToPropertyId, tawkToKey)
  }, [])
  
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var box = $('.header-text').height();
      var header = $('header').height();
  
      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });
  
    // Window Resize Mobile Menu Fix
    mobileNav();
  
  
    // Scroll animation init
    window.sr = new ScrollReveal();
  
  
    // Menu Dropdown Toggle
    if ($('.menu-trigger')) {
      $(".menu-trigger").on('click', function () {
        $("menu-trigger").removeClass("active");
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });
    }
  
  
    // Menu elevator animation
    
    $(document).ready(function () {
      $('a[href^="#welcome"]').addClass('active');
  
      
    });
  
    
    // Page loading animation
    $(window).on('load', function () {
      if ($('.cover').length) {
        $('.cover').parallax({
          imageSrc: $('.cover').data('image'),
          zIndex: '1'
        });
      }
  
      $("#preloader").animate({
        'opacity': '0'
      }, 600, function () {
        setTimeout(function () {
          $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
      });
    });
  
  
    // Window Resize Mobile Menu Fix
    $(window).on('resize', function () {
      mobileNav();
    });
  
  
    // Window Resize Mobile Menu Fix
    function mobileNav() {
      var width = $(window).width();
      $('.submenu').on('click', function () {
        if (width < 992) {
          $('.submenu ul').removeClass('active');
          $(this).find('ul').toggleClass('active');
        }
      });
    }
  
   
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={< Home />}></Route>
        <Route exact path="/contact" element={< Contact />} />
        <Route exact path="/terms-and-conditions" element={< TNC />} />
        <Route exact path="/category" element={< CategoryPage />}></Route>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
