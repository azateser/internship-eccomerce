import React from "react";
import { RiMailLine, RiArrowRightLine } from "react-icons/ri";
import FooterCCImage from "../../../assets/images/layout/footer-cc.png";
import "./Footer.css";
import {
  contactDetails,
  informationLinks,
  serviceLinks,
  socialMediaIcons,
} from "../../../mocks/layout/footer";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="details">
          <div className="logo">Logo</div>
          <ul>
            {contactDetails.map((detail, index) => (
              <li key={index}>
                {detail.icon}
                <span>{detail.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <h2>Information</h2>
          <ul>
            {informationLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <h2>Service</h2>
          <ul>
            {serviceLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="subscribe">
          <h2>Subscribe</h2>
          <p>
            Enter your email below to be the first to know about new collections
            and product launches.
          </p>
          <form>
            <RiMailLine className="icon" size={20} color="#C4C4C5" />
            <input type="email" placeholder="Your Email" />
            <button>
              <RiArrowRightLine size={20} />
            </button>
          </form>
        </div>
      </div>
      <div className="rights">
        <div className="image">
          <img width={200} src={FooterCCImage} alt="FooterCCImage" />
        </div>
        <div>2024 © All rights reserved</div>
        <div className="social">
          {socialMediaIcons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
