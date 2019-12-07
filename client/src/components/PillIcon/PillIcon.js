import React, { Component } from "react";
import "./PillIcon.css";
import Heart from "./Icon/icon.svg";

class PillIcon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ backgroundColor: this.props.backgroundColor }} className="pill-container">
        <span>
          <img src={Heart} /> <h1>{this.props.text}</h1>
        </span>
      </div>
    );
  }
}
export default PillIcon;
