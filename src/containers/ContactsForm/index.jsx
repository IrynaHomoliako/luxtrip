import React from "react";
import { SectionButton } from "../../components";

import "./ContactsForm.scss";

function ContactsForm() {
  return (
    <div className="contacts-form">
      <div className="container">
        <div className="contacts-form__box">
          <h3 className="contacts-form__title title-font">Contact</h3>
          <form className="contacts-form__form">
            <input
              className="contacts-form__form-input"
              type="text"
              placeholder="Name"
            />
            <input
              className="contacts-form__form-input"
              type="text"
              placeholder="Phone"
            />
            <SectionButton text="Call me back" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactsForm;
