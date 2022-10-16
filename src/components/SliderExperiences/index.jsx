import React from "react";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import { sliderExperiense } from "../../constans/index";

import "./SliderExperiences.scss";

function SliderExperiense() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {sliderExperiense.map((slide) => (
          <div className="app__gallery-images_card flex__center" key={slide.id}>
            <div className="app__gallery-images_card-content">
              <span className="app__gallery-images_card-content-location">
                {slide.location}
              </span>
              <h4>{slide.title}</h4>
              <p>From</p>
              <span className="app__gallery-images_card-content-price">
                {slide.price}
              </span>
            </div>
            <img src={slide.image} alt="gallery" />
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrows">
        <div className="app__gallery-images_arrows-container">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
        </div>
        <div className="app__gallery-images_arrows-container">
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default SliderExperiense;
