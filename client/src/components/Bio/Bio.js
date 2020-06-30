import React, { Component } from "react";
import "./Bio.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import InputTextField from "../../components/InputTextField/InputTextField";
import TextField from '@material-ui/core/TextField';
import Button from '../../components/Button/Button';

import axios from 'axios';
import { BASE_URL } from '../../services/constants';

// const Bio = props => {
class Bio extends Component {
  constructor(){
    super();
    this.state = {
        editMode: false,
          form_first_name: '',
          form_last_name: '',
          form_bio: ''
    }
  }

  toggleEditMode = () => {
      this.setState({
        editMode: !(this.state.editMode)
      })

  }

  updateFirstName = (event) => {
    let first_name = event.target.value;
    this.setState({
           form_first_name: first_name
    });
  }

  updateLastName = (event) => {
    let last_name = event.target.value;
    this.setState({
        form_last_name: last_name
    });
  }

  updateBio = (event) => {
    let bio = event.target.value;
    this.setState({
        form_bio: bio
    });
  }



  submitUserUpdates = () => {
      axios({
        method: 'PATCH',
        url: `${BASE_URL}/profile/${this.props.userid}`,
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        },
        data: {
            first_name: this.state.form_first_name,
            last_name: this.state.form_last_name,
            bio: this.state.form_bio
        }
      })
      .then(res => {
          console.log(res)

          this.setState({
              updated_first_name: this.state.form_first_name,
              updated_last_name: this.state.form_last_name,
              updated_bio: this.state.form_bio
          })
          this.toggleEditMode();
          // this.forceUpdate();
      })
      .catch(err => console.log(err))

  }

  logForm = () => console.log(this.state.form_first_name, this.state.form_last_name, this.state.form_bio);

  componentDidMount(){
    this.setState({
      form_first_name: this.props.first_name,
      form_last_name: this.props.last_name,
      form_bio: this.props.bio,
      form_topics: this.props.topics
    })
  }

  render() {

      let userBio = '';
      let firstName = '';
      let lastName = '';

      if(this.state.updated_first_name !== undefined) {
          if(this.props.first_name === this.state.updated_first_name)
              firstName = this.props.first_name;
          else
              firstName = this.state.updated_first_name;
      }
      else {
          firstName = this.props.first_name;
      }

      if(this.state.updated_last_name !== undefined) {
        if(this.props.last_name === this.state.updated_last_name)
            lastName = this.props.last_name;
        else
            lastName = this.state.updated_last_name;
      }
      else {
        lastName = this.props.last_name;
      }

      if(this.state.updated_bio !== undefined) {
        if(this.props.bio === this.state.updated_bio)
            userBio = this.props.bio;
        else
            userBio = this.state.updated_bio;
      }
      else {
          userBio = this.props.bio == undefined ? '': this.props.bio;
      }

    if(this.state.editMode === true)
    {


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
          placeholder='First name'
          defaultValue={firstName}
          onChange={this.updateFirstName}
          // loadcallback={this.updateFirstName}
          /> &nbsp;
          <InputTextField
          name="last_name"
          type="text"
          placeholder='Last name'
          defaultValue={lastName}
          onChange={this.updateLastName}
          /> &nbsp;
              {this.props.isCurrentUser ? <Icon callback={this.toggleEditMode} icon={"edit"} /> : null}
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

        {/* <a onClick={this.logForm}>Log Vals</a> */}
        <br />
        <br />
        <Button text="Submit" color="pink" size="small" handleClick={this.submitUserUpdates} />


            </div>
            <h3 className="Bio__interests">Interests</h3>
          <p>aweosome</p>
            <div className="hashtag__container">
              {this.props.hashtags.map(hashtag => (
                <span className="Bio__span" key={hashtag + 1}>
                  {hashtag}
                </span>
              ))}
            </div>
            <div className="icons__div">
              <Link to={this.props.instagram}>
                <Icon onClick={this.props.onClick} icon={["fab", "instagram"]} />
              </Link>
              <Link to={this.props.pinterest}>
                <Icon onClick={this.props.onClick} icon={["fab", "pinterest"]} />
              </Link>
              <Link to={this.props.facebook}>
                <Icon onClick={this.props.onClick} icon={["fab", "facebook"]} />
              </Link>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className={"Bio"}>
          <div>
            <h2 className={"Bio__header"}>
              {firstName} {lastName}
              {this.props.isCurrentUser ? <Icon  callback={this.toggleEditMode} icon={"edit"} /> : null}
            </h2>


            <h3 className="Bio__subheader">Bio </h3>

            <p className="Bio__paragraph">{userBio}</p>
            <h3 className="Bio__interests">Interests</h3>
            <p>awesome</p>
            <div className="hashtag__container">
              {this.props.hashtags.map(hashtag => (
                <span className="Bio__span" key={hashtag + 1}>
                  {hashtag}
                </span>
              ))}
            </div>
            <div className="icons__div">
              <Link to={this.props.instagram}>
                <Icon onClick={this.props.onClick} icon={["fab", "instagram"]} />
              </Link>
              <Link to={this.props.pinterest}>
                <Icon onClick={this.props.onClick} icon={["fab", "pinterest"]} />
              </Link>
              <Link to={this.props.facebook}>
                <Icon onClick={this.props.onClick} icon={["fab", "facebook"]} />
              </Link>
            </div>
          </div>
        </div>
      );



    }
  }
};

export default Bio;
