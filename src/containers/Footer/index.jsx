import React from "react";
import images from "../../constans/images";

import "./Footer.scss";

const footerLinks = [
  {
    id: "packages",
    title: "Luxury packages",
  },
  {
    id: "book",
    title: "Book with us",
  },
  {
    id: "callBack",
    title: "Call Me Back",
  },
  {
    id: "why",
    title: "Why Lux Trips",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <img
          src={images.footerLogo}
          alt="footerLogo"
          className="footer__logo"
        />
        <nav className="footer__nav">
          <ul className="footer__nav-items">
            {footerLinks.map((link) => (
              <li className="footer__nav-item" key={link.id}>
                <a className="footer__nav-link title-font" href="/">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__bottom">
          <p className="footer__bottom-copyright">
            © 2021 All Rights Reserved | Luxtrips
          </p>
          <p className="footer__bottom-info">Company Site | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
