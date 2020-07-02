import React, { Component } from "react";
import UserSetupForm from "./UserSetupForm/UserSetupForm";
import FilterSettingsForm from "./FilterSettingsForm/FilterSettingsForm";
import PersonalSettingsForm from "./PersonalSettingsForm/PersonalSettingsForm";
import "./OnboardingPage.css";
import Logo from "components/Logo/Logo.js";
import CarouselDots from "components/CarouselDots/CarouselDots";

class OnboardingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      setup: {
        name: "",
        email: "",
        password: ""
      },
      filter: {
        city: "",
        tags: []
      },
      personal: {
        img: "",
        age: 0,
        destination: ""
      }
    };
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  saveSettings = (key, payload) => {
    this.setState({
      [key]: payload
    });
  };

  render() {
    let pageSetup = (
      <div>
        <UserSetupForm
          currPage={this.state.counter}
          save={this.saveSettings}
          handleClick={this.handleClick}
        />
      </div>
    );
    let pageFilter = (
      <div>
        <FilterSettingsForm
          currPage={this.state.counter}
          save={this.saveSettings}
          handleClick={this.handleClick}
        />
      </div>
    );
    let pagePersonal = (
      <div>
        <PersonalSettingsForm
          currPage={this.state.counter}
          save={this.saveSettings}
          handleClick={this.handleClick}
          handleSignup={this.props.handleSignup}
          {...this.state}
          logged_in={this.props.logged_in}
          history={this.props.history}
        />
      </div>
    );
    return (
      <div className="OnboardingPage">
        <div className="OnboardingPage__wrapper">
          <div className="OnboardingPage__form">
            <div className="OnboardingPage__logo">
              <Logo large />
            </div>
            {this.state.counter === 1
              ? pageSetup
              : this.state.counter === 2
              ? pageFilter
              : pagePersonal}
            <div className="OnboardingPage__carousel-dots-container">
              <CarouselDots numberOfDots={3} activeLocation={this.state.counter} />
            </div>
            {/* {this.state.counter === 3 ? (
              <div className="OnboardingPage__skip-link">
                <Link to="/">
                  <p>Skip</p>
                </Link>
              </div>
            ) : (
              <div />
            )} */}
          </div>
        </div>
      </div>
    );
  }
}
export default OnboardingPage;
