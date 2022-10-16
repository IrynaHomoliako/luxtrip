import React from "react";

import "./SectionTitle.scss";

function SectionTitle({ text, imgUrl, style }) {
  return (
    <div className="section-title">
      <h3 className="container-title" style={style}>
        {text}
      </h3>
      <img className="section-title__img" src={imgUrl} alt="rombus" />
    </div>
  );
}

export default SectionTitle;
