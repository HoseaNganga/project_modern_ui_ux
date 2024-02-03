import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import aiImage from "../../assets/ai.png";

const header = () => {
  return (
    <div className="headerContainer">
      <div className="gpt3Header">
        <h1 className="styleHeader">
          Let's build something amazing with GPT-3 OpenAi
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="headerContent">
          <input
            type="email"
            id="emailInput"
            placeholder="Your Email Address"
          />
          <button type="button">Get Started</button>
        </div>
        <div className="headerContentPeople">
          <img src={people} alt="people" />
          <p>1006 people requested accces</p>
        </div>
      </div>
      <div className="headeraiImage">
        <img src={aiImage} alt="aiImage" />
      </div>
    </div>
  );
};

export default header;
