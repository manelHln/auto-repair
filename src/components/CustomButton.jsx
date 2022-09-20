import React from "react";

const CustomButton = ({ text, icon }) => {
  return (
    <span className="custom-btn">
      {text}{" "}
      <span
        style={{ marginLeft: "5px", display: "flex", alignItems: "center" }}
      >
        {icon}
      </span>
    </span>
  );
};

export default CustomButton;
