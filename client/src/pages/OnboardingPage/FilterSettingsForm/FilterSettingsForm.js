import React, { Component } from "react";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo.js";
import CarouselDots from "components/CarouselDots/CarouselDots";

class FilterSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      tags: []
    };
  }
  next = () => {
    this.props.save(this.state);
    this.props.functionProp();
  };
  // NEED to add onChange to save state
  // NEED to save tags
  render() {
    return (
      <div className="OnboardingPage">
        <div className="OnboardingPage__wrapper">
          <Logo />
          <h1>This is Onboarding Two</h1>
          <div className="OnboardingPage__button-container">
            <Button text="Next" size="small" handleClick={this.next}></Button>
          </div>
          <div className="OnboardingPage__carousel-dots-container">
            <CarouselDots numberOfDots={3} activeLocation={this.props.currPage} />
          </div>
        </div>
      </div>
    );
  }
}

export default FilterSettingsForm;
