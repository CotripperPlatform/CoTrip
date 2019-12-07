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
        <h1>{this.props.text}</h1>
        <img src={Heart} />
      </div>
    );
  }
}
export default PillIcon;
