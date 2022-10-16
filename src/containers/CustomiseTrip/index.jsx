import React from "react";
import { SectionButton, SectionTitle } from "../../components";
import { customisations } from "../../constans";
import SubscribeForm from "../SubscribeForm";

import "./CustomiseTrip.scss";

function CustomiseTrip() {
  return (
    <div className="customise">
      <div className="container">
        <SectionTitle text="Customise your trip with us" />
        <div className="customise__container">
          {customisations.map((item) => (
            <div className="customise__box" key={item.id}>
              <div className="customise__box-number title-font">
                <span>{item.number}</span>
              </div>
              <div className="customise__box-content">
                <h4 className="customise__box-title title-font">
                  {item.title}
                </h4>
                <p className="customise__box-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <SectionButton text="Start a trip request" />
        <span className="customise__text-bottom">
          It’s Free! - no credit card required
        </span>
      </div>
      <SubscribeForm />
    </div>
  );
}

export default CustomiseTrip;
