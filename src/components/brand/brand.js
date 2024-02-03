import React from "react";
import "./brand.css";
import googlelogo from "../../assets/google.png";
import shopifylogo from "../../assets/shopify.png";
import slacklogo from "../../assets/slack.png";
import atlaslogo from "../../assets/atlassian.png";
import dropboxlogo from "../../assets/dropbox.png";

const brand = () => {
  return (
    <div className="brands">
      <ul className="brandContainer">
        <li className="brandItem">
          <img src={googlelogo} alt="googlelogo" />
        </li>
        <li className="brandItem">
          <img src={atlaslogo} alt="atlaslogo" />
        </li>
        <li className="brandItem">
          <img src={shopifylogo} alt="shopifylogo" />
        </li>
        <li className="brandItem">
          <img src={slacklogo} alt="slacklogo" />
        </li>
        <li className="brandItem">
          <img src={dropboxlogo} alt="dropboxlogo" />
        </li>
      </ul>
    </div>
  );
};

export default brand;
