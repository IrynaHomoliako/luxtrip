import React, { useState } from "react";
import { FindJourney, Navbar } from "../../components/index";
import images from "../../constans/images";

import "./Header.scss";

function Header() {
  const [offset, setOffset] = useState();

  const handleScroll = () => setOffset(window.pageYOffset);

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="header">
      <Navbar />

      <div
        className="header__zoom"
        style={{ backgroundImage: `url(${images.sky})` }}
      >
        <img
          className="header__zoom-img1"
          src={images.lake}
          alt="lake"
          style={{ bottom: 0 - offset * 0.05 + "%" }}
        />
        <img
          className="header__zoom-img2"
          src={images.mountain}
          alt="mountain"
          style={{ bottom: 0 - offset * 0.05 + "%" }}
        />
        <img
          className="header__zoom-img3"
          src={images.mountain02}
          alt="mountain"
          style={{ bottom: 0 - offset * 0.03 + "%" }}
        />
        <div className="header__zoom-gradient"></div>
        <div className="header__zoom-title">
          <span className="header__subtitle title-font">the world’s most</span>
          <h1 className="header__title title-font">
            extra ordinary
            <br />
            <span>place</span>
          </h1>
          <img
            className="header__title-rhombus"
            src={images.rhombusHeader}
            alt="rhombus"
          />
        </div>
      </div>
      <FindJourney />
    </div>
  );
}

export default Header;
