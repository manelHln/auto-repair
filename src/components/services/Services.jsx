import React from "react";
import "./services.css"
import {Wrench, Coding, Engine, Assistance, Programming} from "../../assets"

const Service = ({icon, title}) => {
  return (
    <div className="service">
      <div className="service-icon center">
        <img src={icon} alt={title} />
      </div>
      <div className="service-info">
        <h3 className="title-sm">{title}</h3>
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
        <Service icon={Engine} title="Diagnostic" />
        <Service icon={Assistance} title="Assistance" />
        <Service icon={Wrench} title="Maintenance" />
        <Service icon={Programming} title="Programming" />
        <Service icon={Programming} title="Expertise" />
        <Service icon={Coding} title="Online Coding" />
      </div>
    </div>
  );
};

export default Services;
