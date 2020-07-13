import React, { Component } from "react";
import "./CommunityPageCreateGroup.css";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import TextField from "@material-ui/core/TextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import axios from "axios";
import { BASE_URL } from "../../services/constants";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default class CommunityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      location: null,
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = () => {
    console.log(this.state);
    axios({
      method: 'POST',
      url: `${BASE_URL}/groups`,
      data: {
        title: this.state.title,
        description: this.state.description,
        location: this.state.location
      }
    })
  };

  componentDidMount() {
    this.getUSStates();
  }

  getUSStates = () => {
    axios.get(`${BASE_URL}/location/states`).then(res => {
      console.log(res.data);
      this.setState({ USStates: res.data });
    });
  };

  getCitiesFromState = event => {
    if (event.target.textContent === "") this.setState({ stateFound: false });

    let USStates = this.state.USStates;

    //TextContent because materialUI outputs an <li> tag
    let userSubmission = event.target.textContent.toLowerCase();

    USStates.forEach(state => {
      if (state.name.toLowerCase() === userSubmission) {
        axios.get(`${BASE_URL}/location/bystate?state__code=${state.code}`).then(res => {
          this.setState({
            stateFound: true,
            currentStateCities: res.data
          });
        });
      }
    });
  };

  setLocationID = event => {
    let currentStateCities = this.state.currentStateCities;
    // console.log(currentStateCities);

    let userSubmission = event.target.textContent.toLowerCase();

    // for(let i=0;i<currentStateCities.length)

    //binary search
    let result = this.binarySearch(
      currentStateCities,
      userSubmission,
      0,
      currentStateCities.length - 1
    );

    if (result) this.setState({ location: result.location.id});
    else this.setState({ location: null});

    console.log("binarysearch: ", result);
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
            <Button
              text="Discover Groups"
              color="pink"
              size="long"
              handleClick={this.handleClick}
            />
          </a>
        </div>{" "}
        <div className="CommunityPage_body">
          <div className="CommunityPage__Autocomplete">
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
          </div>
          <TextField 
            id="outlined-multiline-static"
            name="title"
            type="title"
            fullWidth={true}
            placeholder="Title"
            variant="outlined"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <TextField 
            id="outlined-multiline-static"
            name="description"
            type="description"
            fullWidth={true}
            multiline
            rows={4}
            placeholder="Description"
            variant="outlined"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <Button text="Submit" size="small" handleClick={this.submit}></Button>
        </div>
      </div>
    );
  }
}
