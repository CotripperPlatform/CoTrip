import React, { Component } from "react";
import "./Bio.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import InputTextField from "../../components/InputTextField/InputTextField";
import Button from "../../components/Button/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import axios from "axios";
import { BASE_URL } from "../../services/constants";


class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      form_first_name: "",
      form_last_name: "",
      form_bio: "",
      form_social_media: "",
      socialMediaOptions: [],
      email: this.props.email,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      isSuccess: false,
      isFailure: false,
      passwordMatch: false
    };
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  updateFirstName = event => {
    let first_name = event.target.value;
    this.setState({
      form_first_name: first_name
    });
  };

  updateLastName = event => {
    let last_name = event.target.value;
    this.setState({
      form_last_name: last_name
    });
  };

  updateBio = event => {
    let bio = event.target.value;
    this.setState({
      form_bio: bio
    });
  };

  updateSocialMediaList = (event, mediaId) => {
    let username = event.target.value;
    let media = this.state.socialMediaOptions.filter(option => option.id === mediaId)[0];
    let option = {
      profile: this.props.userid, // userid
      social_media_type: {
        id: mediaId,
        name: media.name
      },
      url: `https://www.${media.name.toLowerCase()}.com/${username}`
    };
    let prevMediaList = [...this.state.form_social_media];
    let prevMedia = prevMediaList.filter(media => media.social_media_type.id !== mediaId);

    this.setState({
      form_social_media: [...prevMedia, option]
    });
  };

  submitUserUpdates = () => {
    axios({
      method: "PATCH",
      url: `${BASE_URL}/profile/${this.props.userid}`,
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      },
      data: {
        first_name: this.state.form_first_name,
        last_name: this.state.form_last_name,
        bio: this.state.form_bio,
        social_media: this.state.form_social_media
      }
    })
      .then(res => {
        console.log(res);

        this.setState({
          updated_first_name: this.state.form_first_name,
          updated_last_name: this.state.form_last_name,
          updated_bio: this.state.form_bio
        });
        this.toggleEditMode();
        // this.forceUpdate();
      })
      .catch(err => console.log(err));
  };

  logForm = () => console.log(...this.state);

  componentDidMount() {
    this.getSocialMediaOptions();
    this.setState({
      form_first_name: this.props.first_name,
      form_last_name: this.props.last_name,
      form_bio: this.props.bio,
      form_social_media: this.props.social_media
    });
  }

  getSocialMediaOptions = () => {
    axios
      .get(`${BASE_URL}/social_media_type`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        this.setState(prevState => ({
          socialMediaOptions: [...prevState.socialMediaOptions, ...res.data]
        }));
      })
      .catch(error => console.log(error));
  };

  /**
   * Change Your Password Functionality
   */

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newPassword !== this.state.confirmPassword) {
      this.setState({
        passwordMatch: true,
        isFailure: false,
        isSuccess: false
      });
      return;
    }

    fetch(`${BASE_URL}/auth/password_change`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(json => {
        if (json === "Success! New password has been created") {
          this.setState({
            isSuccess: true,
            isFailure: false,
            passwordMatch: false
          });
        } else {
          this.setState({
            isFailure: true,
            isSuccess: false,
            passwordMatch: false
          });
        }
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let userBio = "";
    let firstName = "";
    let lastName = "";

	/**
	 * Change Password Alerts
	 */
    let passwordSuccess = !this.state.isSuccess ? "" : <p>Password has been changed</p>;
    let passwordFailure = !this.state.isFailure ? "" : <p>Current password is invalid</p>;
    let passwordMatch = !this.state.passwordMatch ? "" : <p>New Passwords do not match</p>;

    if (this.state.updated_first_name !== undefined) {
      if (this.props.first_name === this.state.updated_first_name)
        firstName = this.props.first_name;
      else firstName = this.state.updated_first_name;
    } else {
      firstName = this.props.first_name;
    }

    if (this.state.updated_last_name !== undefined) {
      if (this.props.last_name === this.state.updated_last_name) lastName = this.props.last_name;
      else lastName = this.state.updated_last_name;
    } else {
      lastName = this.props.last_name;
    }

    if (this.state.updated_bio !== undefined) {
      if (this.props.bio === this.state.updated_bio) userBio = this.props.bio;
      else userBio = this.state.updated_bio;
    } else {
      userBio = this.props.bio == undefined ? "" : this.props.bio;
    }

    let userSocialMediaLinks = !this.state.form_social_media
      ? ""
      : this.state.form_social_media.map(mediaType => {
          return (
            <a href={mediaType.url} target="_blank">
              <Icon
                onClick={this.props.onClick}
                icon={["fab", mediaType.social_media_type.name.toLowerCase()]}
                key={mediaType.social_media_type.id}
              />
            </a>
          );
        });

    if (this.state.editMode === true) {
      // if(this.props.bio)
      //     userBio = this.props.bio;
      // else
      //   userBio = "Please enter a bio."

      return (
        <div className={"Bio"}>
          <div>
            {/* <h3>Editing..</h3> */}
            <h2 className={"Bio__header"}>
              <InputTextField
                name="first_name"
                type="text"
                placeholder="First name"
                defaultValue={firstName}
                onChange={this.updateFirstName}
                // loadcallback={this.updateFirstName}
              />{" "}
              &nbsp;
              <InputTextField
                name="last_name"
                type="text"
                placeholder="Last name"
                defaultValue={lastName}
                onChange={this.updateLastName}
              />{" "}
              &nbsp;
              {this.props.isCurrentUser ? (
                <Icon callback={this.toggleEditMode} icon={"edit"} />
              ) : null}
            </h2>

            <div className="Bio__paragraph">
              <TextField
                id="outlined-multiline-static"
                label="Bio"
                fullWidth={true}
                multiline
                rows={4}
                defaultValue={userBio}
                variant="outlined"
                onChange={this.updateBio}
              />

              <a onClick={this.logForm}>Log Vals</a>
              <br />
              <div className="icons__div-edit ">
                {!this.state.socialMediaOptions
                  ? ""
                  : this.state.socialMediaOptions.map(mediaType => {
                      return (
                        <div className="icons__div-edit__media-entry-container">
                          <TextField
                            fullWidth={true}
                            label={`${mediaType.name} Username`}
                            size="small"
                            rows={1}
                            defaultValue={""}
                            variant="outlined"
                            onChange={e => this.updateSocialMediaList(e, mediaType.id)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Icon icon={["fab", mediaType.name.toLowerCase()]} />
                                </InputAdornment>
                              )
                            }}
                          />
                        </div>
                      );
                    })}
              </div>
              <br />
              <Button
                text="Submit"
                color="pink"
                size="small"
                handleClick={this.submitUserUpdates}
              />
            </div>
            <div className="change__password">
              <h2 className="change__password__title">Change Your Password</h2>
              <form onSubmit={this.handleSubmit}>
                <InputTextField
                  name="currentPassword"
                  type="password"
                  placeholder="Current Password"
                  onChange={this.handleChange}
                  value={this.state.currentPassword}
                />
                <InputTextField
                  name="newPassword"
                  type="password"
                  placeholder="New password"
                  onChange={this.handleChange}
                  value={this.state.newPassword}
                />
                <InputTextField
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={this.handleChange}
                  value={this.state.confirmPassword}
                />
                {passwordSuccess}
                {passwordFailure}
                {passwordMatch}
                <input className="LoginPage__submit" text="Login" type="submit" />
              </form>
            </div>
            <h3 className="Bio__interests">Interests</h3>
            <div className="hashtag__container">
              {this.props.hashtags.map(hashtag => (
                <span className="Bio__span" key={hashtag + 1}>
                  {hashtag}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={"Bio"}>
          <div>
            <h2 className={"Bio__header"}>
              {firstName} {lastName[0] + "."}
              {this.props.isCurrentUser ? (
                <Icon callback={this.toggleEditMode} icon={"edit"} />
              ) : null}
            </h2>

            <h3 className="Bio__subheader">Bio </h3>

            <p className="Bio__paragraph">{userBio}</p>
            <h3 className="Bio__interests">Interests</h3>
            <div className="hashtag__container">
              {this.props.hashtags.map(hashtag => (
                <span className="Bio__span" key={hashtag + 1}>
                  {hashtag}
                </span>
              ))}
            </div>
            <div className="icons__div">{userSocialMediaLinks}</div>
          </div>
        </div>
      );
    }
  }
}

export default Bio;
