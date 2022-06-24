import "./testimonials.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";

export default function Testimonials() {
  const values = [
    {
      img:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      star: 4,
      name: "Adam Davis",
      title: "App User",
      comment: "This sounds exciting!",
    },
    {
      img:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      star: 5,
      name: "Justin Jackson",
      title: "App User",
      comment: "This is exactly what Bermuda needs!",
    },
    {
      img:
        "https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg",
      star: 3,
      name: "Dana Manning",
      title: "App User",
      comment: "I will be one of the first to use this service.",
    },
    {
      img:
        "https://www.journeyofparenthood.com/wp-content/uploads/2021/06/32B32576-E2EA-41D6-99FF-B66F33F593CA-scaled.jpeg",
      star: 4,
      name: "Mike Williams",
      title: "App User",
      comment: "Can't wait for Multitasker to launch.",
    },
  ];

  const options = {
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section className="section" id="testimonials">
        <div
          className="container"
          style={{ borderTop: "solid 2px green", paddingTop: "50px" }}
        >
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="center-heading">
                <h2>
                  What They Think <em>About Us</em>
                </h2>
              </div>
            </div>
            <div
              className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big px-4"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <OwlCarousel
                className="owl-carousel owl-theme"
                loop
                margin={20}
                nav
                pagination
                {...options}
              >
                {values.map((value) => (
                  <div className="item service-item pb-8 md:pb-0">
                    <div className="author">
                      <img
                        src={value.img}
                        className="rounded-circle"
                        alt="Author One"
                      />
                    </div>
                    <div className="testimonial-content">
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                        <li>
                          <i className="fa fa-star"></i>
                        </li>
                      </ul>
                      <h4>{value.name}</h4>
                      <p>“{value.comment}”</p>
                      <span>{value.title}</span>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
