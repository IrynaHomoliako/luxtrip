import React from "react";
import images from "../../constans/images";

import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar">
        <div className="navbar__logo">
          <img src={images.logo} alt="logo" />
        </div>
        <nav className="navbar__links">
          <ul className="navbar__links-items">
            <li className="navbar__links-item">
              <a className="navbar__item-link title-font" href="/">
                Home
              </a>
            </li>
            <li className="navbar__links-item">
              <a className="navbar__item-link title-font" href="/">
                Luxury packages
              </a>
            </li>
            <li className="navbar__links-item">
              <a className="navbar__item-link title-font" href="/">
                Book with us
              </a>
            </li>
            <li className="navbar__links-item">
              <a className="navbar__item-link title-font" href="/">
                Why Lux Trips
              </a>
            </li>
            <li className="navbar__links-item">
              <a className="navbar__item-link title-font" href="/">
                Contact
              </a>
            </li>
            <li className="navbar__links-item">
              <a className="navbar__item-link title-font" href="/">
                Client Area
              </a>
            </li>
          </ul>
        </nav>
        <div className="navbar__callback">
          <a className="navbar__callback-link title-font" href="/">
            Call Me Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
