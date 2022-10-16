import React from "react";

import "./SectionButton.scss";

function SectionButton({ text }) {
  return (
    <div className="section-button__box">
      <button className="section-button title-font">{text}</button>
    </div>
  );
}

export default SectionButton;
