import React, { Component } from "react";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo.js";
import CarouselDots from "components/CarouselDots/CarouselDots";

class UserSetupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: false
    };
  }
  saveName = e => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };
  saveEmail = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };
  savePassword = e => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  };
  confirmPassword = e => {
    e.preventDefault();
    if (this.state.password === e.target.value) {
      this.setState({
        confirmPassword: !this.state.confirmPassword
      });
    }
  };
  next = () => {
    if (this.state.confirmPassword) {
      this.props.save(this.state);
      this.props.functionProp();
    } else {
      alert("PASSWORDS DONT MATCH");
    }
  };
  render() {
    return (
      <div className="OnboardingPage">
        <div className="OnboardingPage__wrapper">
          <Logo />
          <div className="OnboardingPage__form">
            <h1 className="OnboardingPage__header">Step One</h1>
            <div className="OnboardingPage__container">
              <InputTextField
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.saveName}
              ></InputTextField>
            </div>
            <div className="OnboardingPage__container">
              <InputTextField
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.saveEmail}
              ></InputTextField>
            </div>
            <div className="OnboardingPage__container">
              <InputTextField
                type="text"
                name="password"
                placeholder="Password"
                onChange={this.savePassword}
              ></InputTextField>
            </div>
            <div className="OnboardingPage__container">
              <InputTextField
                className="OnboardingPage__container"
                type="text"
                name="confirm password"
                placeholder="Confirm Password"
                onChange={this.confirmPassword}
              ></InputTextField>
            </div>
            <div className="OnboardingPage__button-container">
              <Button
                className="OnboardingPage__button"
                text="Next"
                size="small"
                handleClick={this.next}
              ></Button>
            </div>
          </div>
          <div className="OnboardingPage__carousel-dots-container">
            <CarouselDots
              numberOfDots={3}
              activeLocation={this.props.currPage}
              // onStatusChange={this.statusChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserSetupForm;
