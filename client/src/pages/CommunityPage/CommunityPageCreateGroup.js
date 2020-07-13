import React, { Component } from "react";
import "./CommunityPageCreateGroup.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import axios from 'axios'
import { BASE_URL } from '../../services/constants';
import FilterSettingsForm from "pages/OnboardingPage/FilterSettingsForm/FilterSettingsForm";

export default class CommunityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      filter: {
        city: "",
        tags: []
      }
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  handleClick = () => {
    this.setState({})
  }

  saveSettings = (key, payload) => {
    this.setState({
      [key]: payload
    });
  };

  render() {
    return (
      <div className="CommunityPage">
        <Banner background={Banner__Community}>
          <div className="community-page-header">
            {" "}
            <h3 style={{ margin: 0 }}>Community: Groups</h3>
          </div>
          <InputTextField
            type="text"
            name="search directory"
            placeholder="Search Groups"
            variation="wide"
          />
        </Banner>
        <div className="secondNav">
          <a href="./explore-people" className="secondNav">
            <Button
              text="Connect With Other Moms"
              color="outlinepink"
              size="long"
              handleClick={this.handleClick}
            />
          </a>{" "}
          <a className="secondNav">
            <Button text="Discover Groups" color="pink" size="long" handleClick={this.handleClick} />
          </a>
        </div>{" "}
        <div className="CommunityPage_body">
        <InputTextField
              name="title"
              type="title"
              placeholder="Title"
              onChange={this.handleChange}
              value={this.state.title}
            />
        <InputTextField
              name="description"
              type="description"
              placeholder="Description"
              onChange={this.handleChange}
              value={this.state.description}
            />
            <FilterSettingsForm
            handleClick={this.handleClick}
            {...this.state}
            save={this.saveSettings}
            />
        </div>
      </div>
    );
  }
}
