
import React, {Component} from 'react';
import "./MemberProfilePage.css";
import Nav from "../Navbar/Navbar"
import InteractionCard from "../InteractionCard/InteractionCard"
import PreviousTripsCard from "../PreviousTripsCard/PreviousTripsCard"
import TripCard from "../TripCard/TripCard"
import example1 from "../../assets/images/card_small2.png";

// Class Based React Component
class MemberProfilePage extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "MemberProfilePage"
    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    return(
      <div className={this.state.classList}>
        <Nav></Nav>
        <div className="banner">bioootch</div>
        <div className="page">
        <div className="left">
          <div className="interaction-div">
            <InteractionCard></InteractionCard>
          </div>
          <div>
            
          </div>
          <div></div>
        </div>
        <div className="right">
        <div className="trip-card">
    <PreviousTripsCard trips={true} link="/">
      <h1>Previous Trips</h1>
      <TripCard src={example1} location="Puerto Rico" date="April 2019" />
      <TripCard
        src="https://wallpaperaccess.com/full/144067.jpg"
        location="Hawaii"
        date="May 2020"
      />
    </PreviousTripsCard>
    </div>
        </div>
        </div>
      </div>
    );
  }
}

export default MemberProfilePage;
