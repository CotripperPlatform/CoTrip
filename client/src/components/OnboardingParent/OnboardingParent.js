import React, { Component } from "react";
import "./OnboardingParent.css";
import Logo from "../Logo/Logo.js";
import CarouselDots from "../CarouselDots/CarouselDots";

class OnboardingParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }
  statusChange = value => {
    console.log("Status Changed", value);
    this.setState({ counter: value });
  };

  onClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div className="OnboardingParent">
        <div className="OnboardingParent__wrapper">
          <Logo className="OnboardingParent__logo" />
          {this.props.children}
          <div className="OnboardingParent__carousel-dots-container">
            <CarouselDots
              numberOfDots={3}
              activeLocation={3}
              border
              onStatusChange={this.statusChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OnboardingParent;
