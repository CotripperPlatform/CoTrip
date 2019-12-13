import React, { Component } from "react";
import "./OnboardingPage.css";
import OnboardingParent from "../OnboardingParent/OnboardingParent";
import { Link } from "@storybook/router";
import InputTextField from "../InputTextField/InputTextField.js";
import Button from "../Button/Button.js";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

// Class Based React Component
class OnboardingPage extends Component {
  constructor(props) {
    super(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "OnboardingPage",
      counter: 1
    };
  }
  handleClick = () => {
    this.setState({
      counter: (this.state.counter += 1)
    });
    alert(this.state.counter);
  };
  renderthis = () => {
    if (this.state.counter == 1) {
      return (
        <OnboardingParent>
          <div className={this.state.classList}>
            <div className="OnboardingPage__onboarding-one">
              <div className="OnboardingPage__wrapper">
                <form className="OnboardingPage__form" action="">
                  <h1 className="OnboardingPage__header">Step One</h1>
                  <div className="OnboardingPage__container">
                    <InputTextField type="text" name="name" placeholder="Name"></InputTextField>
                  </div>
                  <div className="OnboardingPage__container">
                    <InputTextField type="text" name="email" placeholder="Email"></InputTextField>
                  </div>
                  <div className="OnboardingPage__container">
                    <InputTextField
                      type="text"
                      name="password"
                      placeholder="Password"
                    ></InputTextField>
                  </div>
                  <div className="OnboardingPage__container">
                    <InputTextField
                      className="OnboardingPage__container"
                      type="text"
                      name="confirm password"
                      placeholder="Confirm Password"
                    ></InputTextField>
                  </div>
                  <div className="OnboardingPage__button-container" onClick={this.handleClick}>
                    <Button className="OnboardingPage__button" text="Next" size="small"></Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </OnboardingParent>
      );
    }
    if (this.state.counter == 2) {
      return (
        <OnboardingParent>
          <div className="OnboardingPage-onboarding-two">This is Onboarding Two</div>
        </OnboardingParent>
      );
    }
    if (this.state.counter == 3) {
      return (
        <OnboardingParent>
          <div className="OnboardingParent__onboarding-three">
            <h1 className="OnboardingParent__text">
              Step Three: Personalize Your Profile (optional){" "}
            </h1>
            <ProfilePicture
              className="OnboardingParent__profile-image"
              type="medium"
              to="#"
              image={Image}
            />
            <div className="OnboardingParent__spacer"></div>
            <InputTextField type="text" name="age" placeholder="What is your age?" />
            <InputTextField type="destination" placeholder="What is your dream destination(s)?" />
            <Button text="Finish"></Button>
          </div>
        </OnboardingParent>
      );
    }
  };
  render() {
    let pageOne = this.renderthis();
    return <div className="a">{pageOne}</div>;
  }
}
export default OnboardingPage;
