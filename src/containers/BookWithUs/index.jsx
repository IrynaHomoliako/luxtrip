import React from "react";
import { SectionTitle } from "../../components";

import { bookCards } from "../../constans";

import images from "../../constans/images";

import "./BookWithUs.scss";

function BookWithUs() {
  return (
    <div className="book">
      <div className="container">
        <SectionTitle text="Book With Us" imgUrl={images.rhombusSection} />
        <div className="book__container">
          {bookCards.map((card) => (
            <div className="book__card" key={card.id}>
              <h4 className="book__card-title title-font">{card.title}</h4>
              <img src={card.image} alt="card" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookWithUs;
