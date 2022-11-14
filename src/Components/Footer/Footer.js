import React from "react";
import logo from "../../assets/roche-robots-logo-v4-transformed.png";
import footer from "../../assets/robot-hand-finger-ai-background-technology-graphics.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container-fluid py-5 footer">
      <img src={footer} alt="" className="bg" />
      <div className="container d-flex flex-column align-items-center">
        <div className="footer-row d-flex align-items-center justify-content-between">
          <img src={logo} alt="" />

          <div className="col-lg-8">
            <div>
              <h4>Useful Links</h4>
              <a href="/">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>{" "}
                Home
              </a>
              <a href="about.html">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>{" "}
                About
              </a>
              <a href="products.html">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
                Products
              </a>
              <a href="services.html">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
                Services
              </a>
              <a href="demonstration.html">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
                Demonstration
              </a>
              <a href="contact.html">
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>{" "}
                Contact
              </a>
            </div>
            <div>
              <h4>Contact Us</h4>
              <p className="d-grid">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                (+61) 0 411 226 624
              </p>
              <p className="d-grid">
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                Info@rocherobots.com
              </p>
              <p className="d-grid">
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                Coomera, Gold Coast, Queensland, Australia 4209
              </p>
            </div>
          </div>
        </div>

        <ul className="logo-deck py-4">
          <li>
            <a href="https://www.facebook.com/Roche-Robots-108933881918473/">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/roche_robots/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/rocherobotics">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roche-robots/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCfUkARb1WMNYF0xJFq07caQ">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">
          Copyright 2022, Roche Robots. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
