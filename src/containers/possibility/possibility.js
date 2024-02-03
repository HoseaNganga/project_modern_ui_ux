import React from "react";
import "./possibility.css";
import img from "../../assets/possibility.png";

export default function possibility() {
  return (
    <div className="possibilityContainer">
      <div className="possibilityImg">
        <img src={img} alt="possibility" />
      </div>
      <div className="possibilitybody">
        <p className="styleColor">request early to get access</p>
        <h2 className="gradient-text">
          the possibilities are beyond your imagination
        </h2>
        <p className="descr">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
          voluptatibus nesciunt molestias asperiores libero{" "}
        </p>
        <p className="gradient-text">Request Early to Get Started</p>
      </div>
    </div>
  );
}
