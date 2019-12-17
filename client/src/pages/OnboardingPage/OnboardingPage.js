import React, { Component } from "react";
import { Link } from "@storybook/router";
import UserSetupForm from "./UserSetupForm/UserSetupForm";
import FilterSettingsForm from "./FilterSettingsForm/FilterSettingsForm";
import PersonalSettingsForm from "./PersonalSettingsForm/PersonalSettingsForm";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import "./OnboardingPage.css";

class OnboardingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      setup: {
        name: '',
        email: '',
        password: ''
      },
      filter: {
        city: '',
        tags: []
      }, 
      personal: {
        img: '',
        age: 0,
        destination: ''
      }
    };
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  saveUserSetup = (childState) => {
    this.setState({
      setup: {
        name: childState.name,
        email: childState.email,
        password: childState.password
      }
    });
  }
  saveFilterSettings = (childState) => {
    this.setState({
      filter: {
        city: childState.city,
        tags: childState.tags
      }
    });
  }
  savePersonalSettings = (childState) => {
    this.setState({
      personal: {
        img: childState.img,
        age: childState.age,
        destination: childState.destination
      }
    });
  }
  render() {
    if (this.state.counter == 1) {
      return <UserSetupForm currPage={this.state.counter} save={this.saveUserSetup} functionProp={this.handleClick} />;
    }
    else if (this.state.counter == 2) {
      return <FilterSettingsForm currPage={this.state.counter} save={this.saveFilterSettings} functionProp={this.handleClick} />;
    }
    else {
      return <PersonalSettingsForm currPage={this.state.counter} save={this.savePersonalSettings} functionProp={this.handleClick} />;
    }
  }
}
export default OnboardingPage;