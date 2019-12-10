import React from "react";
import "./Banner.css";

const Banner = props => {
  let classlist = `banner banner-${props.bannerType}`;
  return <div className={classlist}>{props.children}</div>;
};

export default Banner;
