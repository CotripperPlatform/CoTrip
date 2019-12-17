import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
  // NEED to add saveImage
  saveAge = (e) => {
    e.preventDefault();
    this.setState({
      age: parseInt(e.target.value)
    });
  }
  saveDestination = (e) => {
    e.preventDefault();
    this.setState({
      destination: e.target.value
    });
  }
  next = () => {
    this.props.save(this.state);
    this.props.functionProp();
  }
  render() {
    return (
      <div className="OnboardingPage">
        <div className="OnboardingPage__wrapper">
          <Logo />
          <h1 className="OnboardingPage__text">
            Step Three: Personalize Your Profile (optional)
          </h1>
          {/* <ProfilePicture
            className="OnboardingParent__profile-image"
            type="medium"
            to="#"
            image={Image}
          /> */}
          <InputTextField type="text" name="age" placeholder="What is your age?" onChange={this.saveAge} />
          <div className="OnboardingPage__spacer"></div>
          <InputTextField type="destination" placeholder="What is your dream destination(s)?" onChange={this.saveDestination} />
          <div className="OnboardingPage__spacer"></div>
          <Button text="Finish" handleClick={this.next}></Button>
          <div className="OnboardingPage__spacer"></div>
          <div className="OnboardingPage__carousel-dots-container">
            <CarouselDots
              numberOfDots={3}
              activeLocation={this.props.currPage}
              onStatusChange={this.statusChange}
            />
          </div>
          <Link to='/home'>
            <p>Skip</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default PersonalSettingsForm;
