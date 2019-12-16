import React, { Component } from "react";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo.js";
import CarouselDots from "components/CarouselDots/CarouselDots";

class UserSetupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }
  render() {
    return (
      <div className="OnboardingPage">
        <div className="OnboardingPage__wrapper">
          <Logo />
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
            <div className="OnboardingPage__button-container" onClick={this.props.funtionProp}>
              <Button className="OnboardingPage__button" text="Next" size="small" handleClick={this.props.functionProp}></Button>
            </div>
          </form>
          <div className="OnboardingPage__carousel-dots-container">
            <CarouselDots
              numberOfDots={3}
              activeLocation={this.props.currPage}
              onStatusChange={this.statusChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserSetupForm;
