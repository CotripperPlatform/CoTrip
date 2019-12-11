import React, { Component } from "react";
import "./OnboardingPills.css";
import Pill from "../Pill/Pill";

class OnboardingPills extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      classList: "OnboardingPills"
    };
  }

  render() {
    return <Pill />;
  }
}

export default OnboardingPills;
