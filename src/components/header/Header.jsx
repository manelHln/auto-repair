import React from "react";
import "./header.css";
import { Towing } from "../../assets";
import { CustomButton } from "../../components";
import { HiPhone } from "react-icons/hi";

const Header = () => {
  return (
    <div className="section-container" id="home">
      <div className="header">
        <div className="header-text">
          <h1 className="title-lg">
            Automotive <br />
            repair services
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quam aspernatur culpa temporibus vel reiciendis.
          </p>
          <CustomButton text="Get in touch" icon={<HiPhone />} />
        </div>
        <div className="img-container">
          <img src={Towing} alt="towing" className="section-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
