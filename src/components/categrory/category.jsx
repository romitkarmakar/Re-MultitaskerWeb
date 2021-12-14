import React from 'react'
import "./category.css"

export default function Category () {
    return(
        <div id="category">
        <div class="main-holder d-flex flex-wrap justify-content-center align-items-center">
    <input type="text" class="serach-input" placeholder="Search" />
      <div class="d-flex flex-wrap col-12">
        <div class="category category-1 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-1"></div>
          <img src="https://i.ibb.co/HF8tZk7/home.png" class="img-responsive card-img" />
          <p class="card-text">Property</p>
        </div>
        <div class="category category-2 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-2"></div>
          <img src="https://i.ibb.co/NnvW3pH/car.png" class="img-responsive card-img" />
          <p class="card-text">Cars</p>
        </div>
        <div class="category category-3 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-3"></div>
          <img src="https://i.ibb.co/bRMq2Gs/boat.png" class="img-responsive card-img" />
          <p class="card-text">Boat</p>
        </div>
        <div class="category category-4 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-4"></div>
          <img src="https://i.ibb.co/jDpfGwL/cycle.png" class="img-responsive card-img" />
          <p class="card-text">Bike</p>
        </div>
        <div class="category category-5 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-5"></div>
          <img src="https://i.ibb.co/Dzv2vFB/camera.png" class="img-responsive card-img" />
          <p class="card-text">Ticket</p>
        </div>
        <div class="category category-6 d-flex flex-column justify-content-center align-item-center">
          <div class="category-header category-header-6"></div>
          <img src="https://i.ibb.co/Dzv2vFB/camera.png" class="img-responsive card-img" />
          <p class="card-text">Economy</p>
        </div>
       
      </div>
  </div>

        </div>
    )
}