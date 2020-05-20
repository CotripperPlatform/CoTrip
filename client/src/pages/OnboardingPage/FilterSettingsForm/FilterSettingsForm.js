import React, { Component } from "react";
import axios from 'axios';
import InputTextField from "components/InputTextField/InputTextField";
import InputSelect from "components/InputSelect/InputSelect";
import Button from "components/Button/Button";
import OnboardingPills from "components/OnboardingPills/OnboardingPills";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { BASE_URL } from '../../../services/constants';



class FilterSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      tags: []
    };
  }
  next = () => {
    // this.props.save(this.state);

    if(this.state.city == null) {
      alert("You must select a valid city before continuing.");
      return;
    }
    else {
      this.props.handleClick();
      this.props.save("filter", this.state);
    }
  };
  updateValue = e => {
    let city = e.target.name;
    let value = e.target.value;
    this.setState({
      [city]: value
    });
    console.log(e.target.value);
  };

  test = val => {
    let selectedPills = [];
    val.pills.map(pill => {
      if (pill.selected == true) {
        selectedPills.push(pill.value);
        console.log(selectedPills);
      }
    });
    this.setState({ tags: selectedPills });
  };

  componentDidMount() {
    this.getUSStates();
  }

  getUSStates = () => {
    axios.get(`${BASE_URL}/location/states`)
    .then(res=> {
      console.log(res.data)
      this.setState({ USStates: res.data });
    });

  }

  getCitiesFromState = (event) =>
  {

    if(event.target.textContent === "") this.setState({ stateFound: false });

    let USStates = this.state.USStates;

    //TextContent because materialUI outputs an <li> tag
    let userSubmission = event.target.textContent.toLowerCase();


    USStates.forEach(state => {
      if(state.name.toLowerCase() === userSubmission) {
        axios.get(`${BASE_URL}/location/bystate?state__code=${state.code}`)
        .then(res => {
          this.setState({ 
            stateFound: true,
            currentStateCities: res.data
          })

          
        })
      }
    });
  }
  
  setLocationID = (event) => {

      let currentStateCities = this.state.currentStateCities;
      // console.log(currentStateCities);

      let userSubmission = event.target.textContent.toLowerCase();
      
      // for(let i=0;i<currentStateCities.length)

      //binary search
      let result = this.binarySearch(currentStateCities, userSubmission, 0, currentStateCities.length-1);

      this.setState({ city: result.location, city_of_residence: result.location })
      console.log("binarysearch: ", result);
  }

  binarySearch = (cities, userSubmission, start, end) => {
    // Base Condition 
    if (start > end) return {found: false, location: null }; 
   
    // Find the middle index 
    let mid=Math.floor((start + end)/2); 
   
    // Compare mid with given key x 
    if (cities[mid].name.toLowerCase()===userSubmission) return { found:true, location: cities[mid] }; 
          
    // If element at mid is greater than x, 
    // search in the left half of mid 
    if(cities[mid].name.toLowerCase() > userSubmission)  
        return this.binarySearch(cities, userSubmission, start, mid-1); 
    else
        // If element at mid is smaller than x, 
        // search in the right half of mid 
        return this.binarySearch(cities, userSubmission, mid+1, end); 
  }

  render() {

    
    return (
      <div className="OnboardingPage__wrapper">
        {/* <InputTextField
          name="city"
          type="text"
          placeholder="City of residence"
          onChange={this.updateValue}
        /> */}

        <div className="OnboardingPage__Autocomplete">
    <Autocomplete
          id="AutoStateField"
          options={this.state.USStates}
          getOptionLabel={(option) => option.name}
          onChange={this.getCitiesFromState}
          
          renderInput={(params) => <TextField  
            
            {...params} label="State" variant="filled" />}
          
         
        />


        { this.state.stateFound === true ? 

            <Autocomplete
            id="AutoCityField"
            options={this.state.currentStateCities}
            getOptionLabel={(option) => option.name}
            onChange={this.setLocationID}
            renderInput={(params) => <TextField  
              
              {...params} label="City" variant="filled" />}
            />  
    
        : 
           ''
        
        }


        </div>
        <p>Topics of interest</p>
        <OnboardingPills onChange={this.test} />
        <div className="OnboardingPage__button-container">
          <Button text="Next" size="small" handleClick={this.next}></Button>
        </div>
      </div>
    );
  }
}

export default FilterSettingsForm;
