import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo.js";
import CarouselDots from "components/CarouselDots/CarouselDots";

class PersonalSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      age: 0,
      destination: ""
    };
  }
  // NEED to add saveImage
  // saveAge = e => {
  //   e.preventDefault();
  //   this.setState({
  //     age: parseInt(e.target.value)
  //   });
  // };
  // saveDestination = e => {
  //   e.preventDefault();
  //   this.setState({
  //     destination: e.target.value
  //   });
  // };

  updateValue = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  next = () => {
    this.props.save("personal", this.state);
    this.props.functionProp();
  };
  render() {
    return (
      <div className="OnboardingPage__wrapper">
        <h1 className="OnboardingPage__text">Step Three: Personalize Your Profile (optional)</h1>

        <InputTextField
          type="text"
          name="age"
          placeholder="What is your age?"
          onChange={this.updateValue}
        />
        <div className="OnboardingPage__spacer"></div>
        <InputTextField
          type="text"
          placeholder="What is your dream destination(s)?"
          onChange={this.updateValue}
        />
        <div className="OnboardingPage__spacer"></div>
        <Button text="Finish" handleClick={this.next}></Button>
        {/* <div className="OnboardingPage__spacer"></div> */}
      </div>
    );
  }
}

export default PersonalSettingsForm;
