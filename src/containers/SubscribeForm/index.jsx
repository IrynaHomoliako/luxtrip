import React from "react";
import { SectionButton } from "../../components";

import "./SubscribeForm.scss";

function SubscribeForm() {
  return (
    <div className="container">
      <div className="subscribe-form">
        <div className="subscribe-form__box">
          <h3 className="subscribe-form__title title-font">
            Get weekly inspiration and expert advice
          </h3>
          <span className="subscribe-form__subtitle">
            Sign up for our Weekly Newsletter
          </span>
          <form className="subscribe-form__form">
            <input type="email" placeholder="Email address" />
            <SectionButton text="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
