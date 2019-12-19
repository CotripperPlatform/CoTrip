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
    // this.props.save(this.state);
    this.props.functionProp();
    this.props.save("filter", this.state);
  };
  updateValue = e => {
    let city = e.target.name;
    let value = e.target.value;
    this.setState({
      [city]: value
    });
    console.log(e.target.value);
  };

  test = val => {
    let selectedPills = [];
    val.pills.map(pill => {
      if (pill.selected == true) {
        selectedPills.push(pill.value);
        console.log(selectedPills);
      }
    });
    this.setState({ tags: selectedPills });
  };

  render() {
    return (
      <div className="OnboardingPage__wrapper">
        <InputTextField name="city" type="text" placeholder="City" onChange={this.updateValue} />
        <OnboardingPills onChange={this.test} />
        <div className="OnboardingPage__button-container">
          <Button text="Next" size="small" handleClick={this.next}></Button>
        </div>
      </div>
    );
  }
}

export default FilterSettingsForm;
