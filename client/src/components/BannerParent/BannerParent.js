import React from "react";
import "./BannerParent.css";

const BannerParent = props => {
  let classlist = `banner-parent banner-${props.bannerType}`;
  return <div className={classlist}>{props.children}</div>;
};

export default BannerParent;
