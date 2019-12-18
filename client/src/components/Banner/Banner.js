import React from "react";
import "./Banner.css";

const Banner = props => {
  return <div className="Banner" style={{
    backgroundImage: `url(${props.background})`
  }}>
    {props.children}
  </div>;
};

export default Banner;

