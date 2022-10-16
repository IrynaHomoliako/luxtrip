import React from "react";
import { findJourney } from "../../constans/index";

import "./FindJourney.scss";

function FindJourney() {
  return (
    <div className="container">
      <div className="find-journey">
        <h2 className="find-journey__title title-font">find your journey</h2>
        <form className="find-journey__form">
          {findJourney.map((item) => (
            <div className="find-journey__form-container" key={item.id}>
              <label key={item.id}>
                <img src={item.icon} alt="icon" />
                {item.title}
              </label>
              <input type="text" placeholder={item.text} />
            </div>
          ))}
          <button className="title-font">Find</button>
        </form>
      </div>
    </div>
  );
}

export default FindJourney;
