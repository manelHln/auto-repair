import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="section-container gray-bg" id="contact us">
      <div className="footer">
        <div className="footer-header">
          <h1>Lorem ipsum dolor sit amet consectetur<br /><span>Voluptatum culpa reprehend</span></h1>
          <p>Request Early Access</p>
        </div>

        <div className="footer-links">
          <div className="logo-container">
            <h2>
              <a href="#home">.carRepair</a>
            </h2>
            <p className="paragraph">
              Crechterwoord K12 182
              <br />
              All Rights Reserved
            </p>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              <li>Overon</li>
              <li>social media</li>
              <li>contact</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>terms and conditions</li>
              <li>privacy and policy</li>
              <li>contact</li>
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>Somewhere in the world</li>
              <li>985-532168</li>
              <li>john@doe.me</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2021 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
