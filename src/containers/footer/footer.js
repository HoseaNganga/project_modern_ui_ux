import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <h1 className="gradient-text">
          Do you want to step into the future before others?
        </h1>
        <div className="button">
          <button className="requestEarly">Request Early Access</button>
        </div>

        <div className="footerFlex">
          <div className="body-1">
            <h2>GPT-3</h2>
            <p>All rights reserved</p>
          </div>
          <div className="footerLinks">
            <h3>Links</h3>
            <p>Overtrons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contacts</p>
          </div>
          <div className="footerCompanyLinks">
            <h3>Company</h3>
            <p>Overtrons</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contacts</p>
          </div>
          <div className="footerTouchLinks">
            <h3>Get In Touch</h3>
            <p>CrenchWood KTZ</p>
            <p>05-3373631</p>
            <p>info@payment</p>
          </div>
        </div>
        <div className="last">GPT-3 Copyright&copy; All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default footer;
