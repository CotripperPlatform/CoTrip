import React, { Component } from "react";

import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo.js";
import CarouselDots from "components/CarouselDots/CarouselDots";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import FileUpload from "components/FileUploadComponent/FileUpload";
// import handleFile from ""
class PersonalSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.setup.email,
      password: this.props.setup.password,
      profile: {
        img: "",
        age: 0,
        destination: "",
        name: this.props.setup.name,
        city: this.props.filter.city,
        topics: this.props.filter.tags
      }
    };
  }

  updateValue = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      profile: { ...this.state.profile, [name]: value }
    });
  };
  next = () => {
    this.props.save("personal", this.state);
    this.props.functionProp();
    this.props.handleSignup(this.state);
  };
  render() {
    if (this.props.logged_in) {
      this.props.history.push("/coming_soon");
    }
    return (
      <div className="OnboardingPage__wrapper">
        <h1 className="OnboardingPage__text">Step Three: Personalize Your Profile (optional)</h1>
        <div className="OnboardingPage__form-container">
          {this.state.img === "" ? (
            <FileUpload
              header="Upload a profile photo"
              buttonLabel="Browse Files"
              handleFile={evt => {
                evt.preventDefault();
                evt.persist();
                console.log(evt);
                let imageUrl = URL.createObjectURL(evt.target.files[0]);
                this.setState({ img: imageUrl });
                return imageUrl;
              }}
            ></FileUpload>
          ) : (
            <ProfilePicture type="medium" image={this.state.img}></ProfilePicture>
          )}

          <InputTextField
            type="text"
            name="age"
            placeholder="What is your age?"
            onChange={this.updateValue}
          />

          <InputTextField
            type="text"
            name="destination"
            placeholder="What is your dream destination(s)?"
            onChange={this.updateValue}
          />

          <Button text="Finish" handleClick={this.next}></Button>
        </div>
      </div>
    );
  }
}

export default PersonalSettingsForm;
