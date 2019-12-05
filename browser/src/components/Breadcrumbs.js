import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

function Breadcrumbs(props, home) {
  return (
    <div className="breadcrumbs">
      <div className="home-wrap">
        <Link to="/" className="home-link">
          {props.home.title}
        </Link>
      </div>
      {props.links
        ? props.links.map((link, i) => (
            <Link
              to={`/${link.toLowerCase()}`}
              onClick={() => props.onLinkClick()}
              key={i}
              className="home-link"
            >
              > <span> {link}</span>
            </Link>
          ))
        : ""}
    </div>
  );
}

export default Breadcrumbs;
