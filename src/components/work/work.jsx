import "./work.css";
import React from "react";

const services = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/3899/3899147.png",
    name: "Cleaning",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1949/1949291.png",
    name: "Trucking",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995491.png",
    name: "Handyman",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1518/1518965.png",
    name: "Landscaper",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995507.png",
    name: "Plumbing",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3400/3400272.png",
    name: "Lifestyle",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2806/2806972.png",
    name: "Graphic",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1320/1320477.png",
    name: "Security",
  },
];

export default function Work() {
  return (
    <>
      <section className="section" id="work">
        <div
          className="container"
          id="brute"
          style={{
            backgroundColor: "rgba( 250, 250, 250, 0.1 )",
            borderTop: "solid 2px green",
            paddingTop: "50px",
          }}
        >
          <div className="center-heading">
            <h2>
              What We <em>Do?</em>
            </h2>
            <p>A network of talented people making everyday life easier</p>
          </div>
        </div>
        <div>
          <div className="services-container">
            {services.map((service, index) => {
              return (
                <div className="services-item" key={index}>
                  <img src={service.image} alt="Some Tech Picture" />
                  <h6>{service.name}</h6>
                </div>
              );
            })}
          </div>
          <a href="/category" className="arrow">
            LEARN MORE <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </>
  );
}
