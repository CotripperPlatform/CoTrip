import React, { Component } from "react";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo.js";
import CarouselDots from "components/CarouselDots/CarouselDots";

class PersonalSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      age: 0,
      destination: ''
    };
  }
  render() {
    return (
      <div className="OnboardingPage">
        <div className="OnboardingPage__wrapper">
          <Logo />
          <h1 className="OnboardingParent__text">
            Step Three: Personalize Your Profile (optional){" "}
          </h1>
          {/* <ProfilePicture
            className="OnboardingParent__profile-image"
            type="medium"
            to="#"
            image={Image}
          /> */}
          <div className="OnboardingParent__spacer"></div>
          <InputTextField type="text" name="age" placeholder="What is your age?" />
          <InputTextField type="destination" placeholder="What is your dream destination(s)?" />
          <Button text="Finish" handleClick={this.props.functionProp}></Button>
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

export default PersonalSettingsForm;
