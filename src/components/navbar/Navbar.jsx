import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import './navbar.css'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
        <div className="logo">.carRepair</div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#why us">Why Us</a>
          </li>
          <li>
            <a href="#our services">Our services</a>
          </li>
          <li>
            <a href="#about us">About Us</a>
          </li>
          <li><a href="#contact us">Contact us</a></li>
        </ul>
        <div className="toggle-menu">
          <HiMenu onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="mobile-menu">
              <HiX onClick={() => setToggleMenu(false)} />
              <ul>
                {["home", "why us", "our services", "about us", "contact us"].map((item) => (
                  <li key={item} onClick={() => setToggleMenu(false)}><a href={`#${item}`}>{item}</a></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
  );
}
