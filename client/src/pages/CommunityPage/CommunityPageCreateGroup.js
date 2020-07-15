import React, { Component } from "react";
import "./CommunityPageCreateGroup.css";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import TextField from "@material-ui/core/TextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import { createGroup } from "../../services/Group";
import { getUSStates, getCitiesFromState } from "../../services/Location";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default class CommunityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      location: null
    };

    this.getUSStates = getUSStates.bind(this);
    this.getCitiesFromState = getCitiesFromState.bind(this);
    this.createGroup = createGroup.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {};

  componentDidMount() {
    this.getUSStates();
  }

  setLocationID = event => {
    let currentStateCities = this.state.currentStateCities;

    let userSubmission = event.target.textContent.toLowerCase();

    //binary search
    let result = this.binarySearch(
      currentStateCities,
      userSubmission,
      0,
      currentStateCities.length - 1
    );

    if (result) this.setState({ location: result.location.id });
    else this.setState({ location: null });
  };

  binarySearch = (cities, userSubmission, start, end) => {
    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (cities[mid].name.toLowerCase() === userSubmission)
      return { found: true, location: cities[mid] };

    // If element at mid is greater than x,
    // search in the left half of mid
    if (cities[mid].name.toLowerCase() > userSubmission)
      return this.binarySearch(cities, userSubmission, start, mid - 1);
    // If element at mid is smaller than x,
    // search in the right half of mid
    else return this.binarySearch(cities, userSubmission, mid + 1, end);
  };

  render() {
    return (
      <div className="CommunityPage">
        <Banner background={Banner__Community}>
          <h3 style={{ margin: 0 }}>Community: Groups</h3>
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
            <Button
              text="Discover Groups"
              color="pink"
              size="long"
              handleClick={this.handleClick}
            />
          </a>
        </div>{" "}
        <div className="CommunityPage__create-group-form-container">
          <header className="CommunityPage__header">
            <h3 style={{ margin: 0 }}>Create New Group</h3>
          </header>
            <Autocomplete
              id="AutoStateField"
              options={this.state.USStates}
              getOptionLabel={option => option.name}
              onChange={this.getCitiesFromState}
              renderInput={params => <TextField {...params} label="State" variant="filled" />}
            />

            {this.state.stateFound === true ? (
              <Autocomplete
                id="AutoCityField"
                options={this.state.currentStateCities}
                getOptionLabel={option => option.name}
                onChange={this.setLocationID}
                renderInput={params => <TextField {...params} label="City" variant="filled" />}
              />
            ) : (
              ""
            )}
          <TextField
            id="outlined-multiline-static"
            name="title"
            type="title"
            label="Title"
            margin="normal"
            required={true}
            fullWidth={true}
            placeholder="Title"
            variant="outlined"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br></br>
          <TextField
            id="outlined-multiline-static"
            name="description"
            type="description"
            label="Description"
            margin="normal"
            required={true}
            fullWidth={true}
            multiline
            rows={4}
            placeholder="Description"
            variant="outlined"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Button text="Submit" size="small" color="purple" handleClick={this.createGroup}></Button>
        </div>
      </div>
    );
  }
}
