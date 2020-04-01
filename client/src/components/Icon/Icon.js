import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Icon.css";

const Icon = props => (
  <div>
    <FontAwesomeIcon icon={props.icon} size={props.size} onClick={props.onClick} />
  </div>
);

export default Icon;
