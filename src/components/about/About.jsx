import React from "react";
import "./about.css";
import { Towing } from "../../assets";
import {CustomButton} from "../../components";
import {HiArrowRight} from "react-icons/hi"

const About = () => {
  return (
    <div className="section-container" id="about us">
      <div className="about">
        <div className="about-info">
          <h3 className="title-alt">About us ?</h3>
          <div className="line"></div>
          <p className="paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            perferendis voluptas ad expedita magnam aperiam eveniet enim,
            eligendi non quam labore, repellendus obcaecati sint blanditiis
            voluptate rerum ab! Voluptatem, sit!
          </p>
          <CustomButton text="Know More" icon={<HiArrowRight />} />
        </div>
        <div className="img-container">
          <img src={Towing} alt="about" className="section-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
