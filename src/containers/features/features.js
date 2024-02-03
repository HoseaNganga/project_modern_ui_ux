import "./features.css";
import { useState } from "react";
const Features = () => {
  const [featuresData] = useState([
    {
      title: "Improving end distrusts instantly",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
    },
  ]);

  return (
    <div className="feature">
      <div className="featureContainer">
        <div className="featureHeader">
          <h2 className="gradient-text">
            the future is now and you just need to realize it.step into the
            future today & make it happen
          </h2>
          <p className="gradient-text">request early acccess to get started</p>
        </div>
        <div className="featureBody">
          {Array.from(featuresData).map((val) => (
            <div className="featureItem">
              <div className="flex">
                <div className="styleLine"></div>
                <h2>{val.title}</h2>
              </div>

              <p>{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
