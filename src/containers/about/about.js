import React from "react";
import "./about.css";

const about = () => {
  return (
    <div className="aboutContainer" id="/about">
      <div className="aboutgpt3">
        <div className="aboutheader">
          <div className="styleLine"></div>
          <h3>What is GPT-3</h3>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="aboutbody gradient-text">
          <h2>The possibilities are beyond your imagination</h2>
          <p className="gradient-text">Explore the Library</p>
        </div>
        <div className="aboutfooter">
          <div className="aboutfooterdiv">
            <div className="styleLine"></div>
            <h3>Chatbots</h3>
            <p>
              {" "}
              We so opinion friends me message as delight. Whole front do of
              plate heard ohought
            </p>
          </div>
          <div className="aboutfooterdiv">
            <div className="styleLine"></div>
            <h3>Knowledgebase</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              alias quo nemo aliquam! Autem
            </p>
          </div>
          <div className="aboutfooterdiv">
            <div className="styleLine"></div>
            <h3>Education</h3>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard ohought
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
