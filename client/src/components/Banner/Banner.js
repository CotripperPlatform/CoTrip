import React from "react";
import "./Banner.css";

const Banner = props => {
  let classlist = "banner";
  return <div className={classlist} style={{
    backgroundImage: `${props.bannerType}`,
    height: `${props.bannerHeight}`, fontSize: `${props.bannerFontSize}`, lineHeight: `${props.bannerLineHeight}`
  }}>
    {props.children}
  </div>;
};

export default Banner;
