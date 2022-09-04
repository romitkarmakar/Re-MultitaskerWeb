import React from "react";
import "./category.css";
import ScrollReveal from "scrollreveal";

const categories = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/3899/3899147.png",
    name: "Cleaning",
    subname: "Home or Office cleaning, laundry, etc",
    description:
      "Cleaning is the process of removing dirt, dust, or other material from a surface.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1949/1949291.png",
    name: "Trucking",
    subname: "Moving house, items picked up or dropped off, trash removal etc",
    description: "Trucking is the transportation of goods by trucks.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2767/2767679.png",
    name: "Handyman",
    subname: "Home or office repairs, Plumber, electrician, painter, masonry, carpenter, furniture assembly, disassemble furniture, home theatre installation, hang -TV, mirror, art, curtains, blinds, etc.",
    description:
      "Handyman is the professional service of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1518/1518965.png",
    name: "Landscaper",
    subname: "Cut grass, hedges trimming, create small garden, yard clean up, weed/shrub removal, vacation plant watering, patio cleaning, power washing, etc",
    description:
      "Landscaper is the professional service of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1995/1995507.png",
    name: "Mechanic",
    subname: "Bikes, car, or boat",
    description:
      "Plumbing is the process of installing and maintaining plumbing equipment.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3400/3400272.png",
    name: "Customization",
    subname: "Custom cups, custom crocs, alcohol bottles, keychains, t-shirts, sneakers etc.",
    description:
      "Lifestyle is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2806/2806972.png",
    name: "Graphic/design",
    subname: "Websites, logos, flyers, business cards, social media management, invitation design, etc.",
    description:
      "Graphic/design is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1320/1320477.png",
    name: "Security",
    subname: "Home or Business",
    description:
      "Security is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3078/3078996.png",
    name: "Event Planning",
    subname: "Photography",
    description:
      "Event Planning is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1085/1085850.png",
    name: "Transportation",
    subname: "Party charter, party bus, personal driver, mini bus etc.",
    description:
      "Transport is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3069/3069343.png",
    name: "Catering",
    subname: "For all your catering need",
    description:
      "Catering is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081288.png",
    name: "Run Errand",
    subname: "let Multitasker do the things you don’t have time for",
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
    subname: " baby, pet or house sitter",
    description: "Sitter is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2919/2919733.png",
    name: "Business",
    subname: "Notarize documents, bookkeeping/accounting, business plans, data entry, virtual administrator, personal assistant, mock job interview, life coach, online tutoring, etc.",
    description: "Section is the process of providing assistance to customers.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1182/1182761.png",
    name: "Anything",
    subname: "Heavy lifting, hang curtains, organizing service, cooking lessons etc",
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
            <div class="col-lg-3 col-sm-6">
              <div class="box mb-3 m-2 p-4">
                <a href="#">
                  <img src={category.image} alt="" />
                  <h6 className="category-title">{category.name}</h6>
                  <div className="category-description" style={{ textAlign: "center" }}>{category.subname}</div>
                  <div className="divider" />
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
