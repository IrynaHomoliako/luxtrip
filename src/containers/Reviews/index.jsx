import React from "react";

import { BsArrowRightShort } from "react-icons/bs";

import images from "../../constans/images";
import { SectionTitle } from "../../components";
import { reviews } from "../../constans";

import "./Reviews.scss";

function Reviews() {
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
    <div className="reviews">
      <div className="container">
        <SectionTitle
          text="Customers reviews"
          imgUrl={images.rhombusSection}
          style={{ maxWidth: "280px", textAlign: "center" }}
        />
      </div>
      <div className="reviews__slider">
        <div className="reviews__slider-container" ref={scrollRef}>
          {reviews.map((review) => (
            <div className="reviews__slider-card" id={review.id}>
              <div className="reviews__card-content">
                <img src={review.avatar} alt="avatar" />
                <p className="reviews__card-text">{review.review}</p>
                <p className="reviews__card-name">{review.name}</p>
                <span className="reviews__card-country">{review.country}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="reviews__slider-arrows">
          <div className="reviews__slider-arrow_container">
            <BsArrowRightShort
              className="reviews__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
