import React from "react";

import { BsArrowRightShort } from "react-icons/bs";
import { Button, SectionTitle } from "../../components";
import { luxuryPackages } from "../../constans";
import images from "../../constans/images";

import "./LuxuryPackages.scss";

function LuxuryPackages() {
  return (
    <div className="luxury-packages">
      <div className="container">
        <div className="luxury-packages__container">
          <div>
            <SectionTitle
              text="Luxury Packages"
              style={{ textAlign: "left" }}
            />
            <Button text="view all" />
          </div>

          {luxuryPackages.map((item) => (
            <div className="luxury-packages__card" key={item.id}>
              <img src={item.image} alt="card" />
              <h4 className="luxury-packages__card-title title-font">
                {item.title}
              </h4>
              <div className="luxury-packages__card-rhombus">
                <span className="luxury-packages__card-count  title-font">
                  {item.placeCount}
                </span>
                <p className="title-font">places</p>
                <BsArrowRightShort className="luxury-packages__card-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="luxury-packages__bg">
        <img src={images.luxuryBg02} alt="bg" />
      </div>
    </div>
  );
}

export default LuxuryPackages;
