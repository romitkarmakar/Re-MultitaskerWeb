import React from 'react'
import "./category.css"

export default function Category () {
    return(
        <div id="category">
        <div class="card"> 
            <div class="head-card">
                <span class="rate"><i class="far fa-star" aria-hidden="true"></i> 4.5/5 (50)</span>
                <span class="like"><i class="far fa-heart"></i></span>
            </div>
  
        <div class="img-mask">
            <img src="https://www.visitdubai.com/-/media/gathercontent/poi/k/kite-beach/fallback-image/kite-beach-by-meraas-poi-shutterstock-v4.jpg" alt=""/>
        </div>
  
        <div class="card-content">
            <h2 class="title">Lorem ipsum</h2>
            <span class="price"><b>$</b> 4000 / Week</span>
        </div>
        </div>
        </div>
    )
}