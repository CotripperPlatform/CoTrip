import React, { Component } from "react";
import "./OnboardingOne.css";
import InputTextField from "../InputTextField/InputTextField.js";
import Button from "../Button/Button.js";
import OnboardingParent from "../OnboardingParent/OnboardingParent";

// Class Based React Component
class OnboardingOne extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "OnboardingOne"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has`               ` been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    return (
      <OnboardingParent>
        <div className={this.state.classList}></div>
      </OnboardingParent>
    );
  }
}

export default OnboardingOne;
