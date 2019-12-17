import React, { Component } from "react";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo.js";
import CarouselDots from "components/CarouselDots/CarouselDots";
import OnboardingPills from "components/OnboardingPills/OnboardingPills";
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

  render() {
    return (
      <div className="OnboardingPage__wrapper">
        <InputTextField />
        <OnboardingPills onChange={() => this.props.onChange} />
        <div className="OnboardingPage__button-container">
          <Button text="Next" size="small" handleClick={this.next}></Button>
        </div>
      </div>
    );
  }
}

export default FilterSettingsForm;
