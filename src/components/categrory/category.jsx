import React from "react";
import "./category.css";
import ScrollReveal from "scrollreveal";

const categories = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/3899/3899147.png",
    name: "Cleaning",
    description:
      "Cleaning is the process of removing dirt, dust, or other material from a surface.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1949/1949291.png",
    name: "Trucking",
    description: "Trucking is the transportation of goods by trucks.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2767/2767679.png",
    name: "Handyman",
    description:
      "Handyman is the professional service of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1518/1518965.png",
    name: "Landscaper",
    description:
      "Landscaper is the professional service of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995507.png",
    name: "Plumbing",
    description:
      "Plumbing is the process of installing and maintaining plumbing equipment.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3400/3400272.png",
    name: "Lifestyle",
    description:
      "Lifestyle is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2806/2806972.png",
    name: "Graphic/design",
    description:
      "Graphic/design is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1320/1320477.png",
    name: "Security",
    description:
      "Security is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3078/3078996.png",
    name: "Event Planning",
    description:
      "Event Planning is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1085/1085850.png",
    name: "Transport",
    description:
      "Transport is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3069/3069343.png",
    name: "Catering",
    description:
      "Catering is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081288.png",
    name: "Run Errand",
    description:
      "Run Errand is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2907/2907253.png",
    name: "Music",
    description: "Music is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3209/3209094.png",
    name: "Sitter",
    description: "Sitter is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2919/2919733.png",
    name: "Section",
    description: "Section is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1182/1182761.png",
    name: "ASAP",
    description: "ASAP is the process of providing assistance to customers.",
  },
];

export default function Category() {
  ScrollReveal().reveal(".box");

  return (
    <div id="category" className="main-box">
      <div class="container">
        <div class="row pt-4">
          {categories.map((category) => (
            <div class=" col-lg-3 col-sm-6">
              <div class="box mb-3 m-2 p-4">
                <a href="#">
                  <img src={category.image} alt="" />
                  <h6 className="category-title">{category.name}</h6>
                  <div className="category-description">{category.description}</div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
