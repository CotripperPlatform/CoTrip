import React from "react";
import "./Banner.css";

const Banner = props => {
  let classlist = "Banner";
  return <div className={classlist} style={{
    backgroundImage: `url(${props.background})`,
    height: `${props.Height}`, fontSize: `${props.FontSize}`, lineHeight: `${props.LineHeight}`,
    textAlign: `${props.TextAlign}`, display: `${props.display}`, flexDirection: `${props.flexdirection}`,
    justifyContent: `${props.justifycontent}`, alignItems: `${props.alignitems}`
  }}>
    {props.children}
  </div>;
};

export default Banner;
