import React, { Component } from "react";
import { Link } from "@storybook/router";
import UserSetupForm from "./UserSetupForm/UserSetupForm";
import FilterSettingsForm from "./FilterSettingsForm/FilterSettingsForm";
import PersonalSettingsForm from "./PersonalSettingsForm/PersonalSettingsForm";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
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
          functionProp={this.handleClick}
        />
      </div>
    );
    let pageFilter = (
      <div>
        <FilterSettingsForm
          currPage={this.state.counter}
          save={this.saveSettings}
          functionProp={this.handleClick}
        />
      </div>
    );
    let pagePersonal = (
      <div>
        <PersonalSettingsForm
          currPage={this.state.counter}
          save={this.saveSettings}
          functionProp={this.handleClick}
        />
      </div>
    );
    return (
      <div className="OnboardingPage">
        <div className="OnboardingPage__wrapper">
          <div className="OnboardingPage__form">
            <Logo />
            {this.state.counter === 1
              ? pageSetup
              : this.state.counter === 2
              ? pageFilter
              : pagePersonal}
            <div className="OnboardingPage__carousel-dots-container">
              <CarouselDots numberOfDots={3} activeLocation={this.state.counter} />
            </div>
            {this.state.counter === 3 ? (
              <Link to="/home">
                <p>Skip</p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );

    if (this.state.counter == 1) {
      return (
        <div>
          <Logo />
          <UserSetupForm
            currPage={this.state.counter}
            save={this.saveSettings}
            functionProp={this.handleClick}
          />
          <div className="OnboardingPage__carousel-dots-container">
            <CarouselDots numberOfDots={3} activeLocation={1} />
          </div>
        </div>
      );
    } else if (this.state.counter == 2) {
      return (
        <div>
          <Logo />
          <FilterSettingsForm
            currPage={this.state.counter}
            save={this.saveSettings}
            functionProp={this.handleClick}
          />
          <div className="OnboardingPage__carousel-dots-container">
            <CarouselDots numberOfDots={3} activeLocation={2} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Logo />
          <PersonalSettingsForm
            currPage={this.state.counter}
            save={this.saveSettings}
            functionProp={this.handleClick}
          />
          <div className="OnboardingPage__carousel-dots-container">
            <CarouselDots numberOfDots={3} activeLocation={3} />
          </div>
          <Link to="/home">
            <p>Skip</p>
          </Link>
        </div>
      );
    }
  }
}
export default OnboardingPage;
