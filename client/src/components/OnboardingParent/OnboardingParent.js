import React, { Component } from "react";
import "./OnboardingParent.css";
import logo from "../../../../assets/images/login_logo.png";
import CarouselDots from "../CarouselDots/CarouselDots";
// Class Based React Component
class OnboardingParent extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "OnboardingParent"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    return (
      <div className={this.state.classList}>
        <div className="OnboardingParent__wrapper">
          <img src={logo} alt="co-tripper-logo" />
          {this.props.children}
          <div className="test">
            <CarouselDots
              numberOfDots={3}
              activeLocation={3}
              border
              onStatusChange={() => this.props.statusChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OnboardingParent;
