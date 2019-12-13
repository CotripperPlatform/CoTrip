import React, { Component } from "react";
import "./OnboardingOne.css";
import InputTextField from "../InputTextField/InputTextField.js";
import Button from "../Button/Button.js";
import OnboardingParent from "../OnboardingParent/OnboardingParent";

class OnboardingOne extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      classList: "OnboardingOne"
    };
  }

  render() {
    return (
      <OnboardingParent>
        <div className={this.state.classList}>
          <form className="OnboardingOne__form" action="">
            <h1 className="OnboardingOne__header">Step One</h1>
            <div className="OnboardingOne__container">
              <InputTextField type="text" name="name" placeholder="Name"></InputTextField>
            </div>
            <div className="OnboardingOne__container">
              <InputTextField type="text" name="email" placeholder="Email"></InputTextField>
            </div>
            <div className="OnboardingOne__container">
              <InputTextField type="text" name="password" placeholder="Password"></InputTextField>
            </div>
            <div className="OnboardingOne__container">
              <InputTextField
                className="OnboardingOne__container"
                type="text"
                name="confirm password"
                placeholder="Confirm Password"
              ></InputTextField>
            </div>
            <div className="OnboardingOne__button-container">
              <Button
                className="OnboardingOne__button"
                text="Next"
                size="large"
                handleClick={() => this.props.handleClick}
              ></Button>
            </div>
          </form>
        </div>
      </OnboardingParent>
    );
  }
}

export default OnboardingOne;
