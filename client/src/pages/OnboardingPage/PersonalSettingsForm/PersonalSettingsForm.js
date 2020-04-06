import React, { Component } from "react";
import InputTextField from "components/InputTextField/InputTextField";
import Button from "components/Button/Button";
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
        image: "",
        age: 0,
        dream_destination: "",
        first_name: this.props.setup.first_name,
        last_name: this.props.setup.last_name,
        city_of_residence: this.props.filter.city,
      },
    };
  }
  getSignedRequest = (file) => {
    // copied and modified from https://devcenter.heroku.com/articles/s3-upload-python
    let xhr = new XMLHttpRequest();
    // this function/method should only be called in prod, so heroku URL is used directly
    xhr.open(
      "GET",
      "https://cotripper-api.herokuapp.com/sign_s3?file_name=" +
        file.name +
        "&file_type=" +
        file.type
    );
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          this.uploadFile(file, response.data, response.url);
        } else {
          alert("Could not get signed URL.");
        }
      }
    };
    xhr.send();
  };
  uploadFile = (file, s3Data, url) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", s3Data.url);

    let postData = new FormData();
    for (let key in s3Data.fields) {
      postData.append(key, s3Data.fields[key]);
    }
    postData.append("file", file);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 204) {
          this.setState({ profile: { ...this.state.profile, image: url } });
        } else {
          alert("Could not upload file.");
        }
      }
    };
    xhr.send(postData);
  };
  updateValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      profile: { ...this.state.profile, [name]: value },
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
              handleFile={(evt) => {
                evt.preventDefault();
                evt.persist();
                console.log(evt);

                if (process.env.NODE_ENV === "development") {
                  let imageUrl = URL.createObjectURL(evt.target.files[0]);
                  this.setState({
                    profile: { ...this.state.profile, image: imageUrl },
                  });
                  return imageUrl;
                } else {
                  // in production. Use S3
                  let file = evt.target.files[0];
                  this.getSignedRequest(file);
                }
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
