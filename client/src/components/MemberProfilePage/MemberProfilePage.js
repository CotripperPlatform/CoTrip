import React, { Component } from "react";
import "./MemberProfilePage.css";
import Nav from "../Navbar/Navbar";
import InteractionCard from "../InteractionCard/InteractionCard";
import PreviousTripsCard from "../PreviousTripsCard/PreviousTripsCard";
import TripCard from "../TripCard/TripCard";
import example1 from "../../assets/images/card_small2.png";
import BookTripCard from "../BookTripCard/BookTripCard";
import example2 from "../../assets/images/hawaii.png";
import Connections from "../Connections/Connections";
import pic1 from "../../assets/images/card_profile1.png";
import pic2 from "../../assets/images/card_profile2.png";
import pic3 from "../../assets/images/card_profile3.png";
import Footer from "../Footer/Footer";
import InputTextField from "../InputTextField/InputTextField";
import Banner__pink from "../Banner/Banner__pink.png";
import Banner from "../Banner/Banner";
// Class Based React Component
class MemberProfilePage extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "MemberProfilePage"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    let testUsers = [
      {
        userId: 1,
        userFirstName: "Paula",
        userSurname: "Bannerman",
        userPic: pic1
      },
      {
        userId: 2,
        userFirstName: "Jack",
        userSurname: "Johnson",
        userPic: pic2
      },
      {
        userId: 3,
        userFirstName: "Jenny",
        userSurname: "Jones",
        userPic: pic3
      },
      {
        userId: 4,
        userFirstName: "Joan",
        userSurname: "Rivers",
        userPic: pic1
      },
      {
        userId: 5,
        userFirstName: "Freddy",
        userSurname: "Mercury",
        userPic: pic2
      },
      {
        userId: 5,
        userFirstName: "Leslie",
        userSurname: "Knope",
        userPic: pic3
      },
      {
        userId: 7,
        userFirstName: "Frank",
        userSurname: "Ocean",
        userPic: pic1
      }
    ];
    return (
      <div className={this.state.classList}>
        <Nav></Nav>
        <Banner background={Banner__pink}>
          <h3 style={{ margin: 0 }}>User Profile</h3>
          <InputTextField
            type="text"
            variation="search"
            name="search directory"
            placeholder="Search My Directory"
          />
        </Banner>
        <div className="page">
          <div className="left">
            <div className="interaction-div">
              <InteractionCard></InteractionCard>
            </div>
            <div></div>
            <div>
              <Connections
                to="User/userid/connections"
                users={testUsers.slice(0, 6)}
                extraUsers="View All"
              />
            </div>
          </div>
          <div className="right">
            <div className="trip-card">
              <BookTripCard>
                <h1>Book a Trip</h1>
                <TripCard src={example2} location="Hawaii" date="May 2020" />
                <TripCard src={example1} location="Puerto Rico" date="April 2019" />
              </BookTripCard>
            </div>
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
        <Footer />
      </div>
    );
  }
}

export default MemberProfilePage;
