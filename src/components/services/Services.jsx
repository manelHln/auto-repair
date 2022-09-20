import React from "react";
import "./services.css"
import { HiWifi } from "react-icons/hi";

const Service = () => {
  return (
    <div className="service">
      <div className="service-icon center">
        <HiWifi />
      </div>
      <div className="service-info">
        <h3 className="title-sm">Title</h3>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus enim
          consequatur perferendis dicta ab ratione iure.
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="section-container" id="our services">
      <h2 className="title">Our services</h2>
      <div className="services">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Services;
