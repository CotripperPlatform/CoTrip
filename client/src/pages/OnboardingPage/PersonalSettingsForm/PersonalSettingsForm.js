import React, { Component } from "react";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import FileUpload from "components/FileUploadComponent/FileUpload";

// In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with require() use the following approach:
const axios = require("axios").default;

// import handleFile from ""
class PersonalSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.setup.email,
      password: this.props.setup.password,
      profile: {
        image: "",
        age: 0,
        dream_destination: "",
        first_name: this.props.setup.first_name,
        last_name: this.props.setup.last_name,
        city_of_residence: this.props.filter.city
      }
    };
  }
  getSignedRequest = file => {
    const API_HOST =
      process.env.NODE_ENV === "production"
        ? "https://cotripper-api.herokuapp.com/"
        : "http://localhost:8000/";
    axios
      .get(`${API_HOST}sign_s3?folder=profile&file_type=` + file.type)
      .then(response => {
        this.uploadFile(file, response.data.data, response.data.url);
      })
      .catch(error => alert("Could not get signed URL. " + error));
  };
  uploadFile = (file, s3Data, url) => {
    let postData = new FormData();
    for (let key in s3Data.fields) {
      postData.append(key, s3Data.fields[key]);
    }
    postData.append("file", file);

    axios
      .post(s3Data.url, postData)
      .then(res => {
        this.setState({ profile: { ...this.state.profile, image: url } });
      })
      .catch(err => {
        alert("Could not upload file.");
      });
  };
  updateValue = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      profile: { ...this.state.profile, [name]: value }
    });
  };
  next = () => {
    this.props.save("personal", this.state);
    console.log(this.state);
    this.props.handleClick();
    this.props.handleSignup(this.state, this.props.history);
  };
  render() {
    return (
      <div className="OnboardingPage__inner-wrapper">
        <h1 className="OnboardingPage__text">Step Three: Personalize Your Profile (optional)</h1>
        <div className="OnboardingPage__form-container">
          {this.state.profile.image === "" ? (
            <FileUpload
              header="Upload a profile photo"
              buttonLabel="Browse Files"
              handleFile={evt => {
                evt.preventDefault();
                evt.persist();
                console.log(evt);

                let file = evt.target.files[0];
                this.getSignedRequest(file);
              }}
            ></FileUpload>
          ) : (
            <ProfilePicture type="medium" image={this.state.profile.image}></ProfilePicture>
          )}

          <InputTextField
            type="text"
            name="age"
            placeholder="What is your age?"
            onChange={this.updateValue}
          />

          <InputTextField
            type="text"
            name="dream_destination"
            placeholder="What is your dream destination?"
            onChange={this.updateValue}
          />

          <Button text="Finish" handleClick={this.next}></Button>
        </div>
      </div>
    );
  }
}

export default PersonalSettingsForm;
