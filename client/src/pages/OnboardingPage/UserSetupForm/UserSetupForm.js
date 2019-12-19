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

  updateValue = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  confirmPassword = e => {
    e.preventDefault();
    if (this.state.password === e.target.value) {
      this.setState({
        confirmPassword: true
      });
    } else {
      this.setState({
        confirmPassword: false
      });
    }
  };
  next = () => {
    if (this.state.confirmPassword) {
      this.props.save("setup", this.state);
      this.props.functionProp();
    } else {
      alert("PASSWORDS DONT MATCH");
    }
  };
  render() {
    return (
      <div>
        <h1 className="OnboardingPage__header">Step One</h1>
        <div className="OnboardingPage__container">
          <InputTextField
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={this.updateValue}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__container">
          <InputTextField
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={this.updateValue}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__container">
          <InputTextField
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.updateValue}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__container">
          <InputTextField
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.updateValue}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__container">
          <InputTextField
            className="OnboardingPage__container"
            type="password"
            name="confirm password"
            placeholder="Confirm Password"
            onChange={this.confirmPassword}
          ></InputTextField>
        </div>
        <div className="OnboardingPage__button-container">
          <Button text="Next" size="small" handleClick={this.next}></Button>
        </div>
      </div>
    );
  }
}

export default UserSetupForm;
