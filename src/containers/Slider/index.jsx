import React from "react";
import images from "../../constans/images";
import { countries } from "../../constans/index";
import { SectionTitle, SliderExperiense } from "../../components";

import "./Slider.scss";

function Slider() {
  return (
    <div className="container">
      <div className="slider-top-rated">
        <SectionTitle
          text="Top Rated Experiences"
          imgUrl={images.rhombusSection}
          style={{ maxWidth: "280px", textAlign: "center" }}
        />
        <nav className="slider-top-rated__nav">
          <ul className="slider-top-rated__nav-links">
            {countries.map((country) => (
              <li className="slider-top-rated__nav-item" key={country.id}>
                <a className="slider-top-rated__nav-link title-font" href="/">
                  {country.country}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SliderExperiense />
      </div>
    </div>
  );
}

export default Slider;
