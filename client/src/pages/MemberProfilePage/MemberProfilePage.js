import React, { Component } from "react";
import "./MemberProfilePage.css";

import example2 from "../../assets/images/hawaii.png";
import pic1 from "../../assets/images/profile-picture-1.png";
import pic2 from "../../assets/images/profile-picture-2.png";
import pic3 from "../../assets/images/profile-picture-3.png";
import pic4 from "../../assets/images/profile-picture-4.png";
import example1 from "../../assets/images/card_small2.png";

import Navbar from "../../components/Navbar/Navbar";
import InteractionCard from "../../components/InteractionCard/InteractionCard";
import UpcomingTrip from "components/UpcomingTripsCard/UpcomingTripsCard";
import BookTripCard from "../../components/BookTripCard/BookTripCard";
import Connections from "../../components/Connections/Connections";
import Footer from "../../components/Footer/Footer";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__pink from "assets/images/Banner__pink.png";
import Banner from "../../components/Banner/Banner";
import GroupsList from "../../components/GroupsList/GroupsList";
import Bio from "../../components/Bio/Bio";
import PreviousTripsCard from "../../components/PreviousTripsCard/PreviousTripsCard";
import TripCard from "components/TripCard/TripCard";

// Class Based React Component
class MemberProfilePage extends Component {
  constructor(props) {
    super(props);
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
    let people = [
      {
        name: "Suzie",
        bio:
          "Nec et iriure utamur, per ubique mnesarchum an. At mei exerci voluptaria suscipiantur, ornatus consulatu interesset mei id. Ea possim percipit recteque his. Mea id ludus alterum apeirian, alienum dissentiet ut estLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        hashtags: ["#parenting", "#teenages", "#health&wellness", "#Hawaii2020"],
        facebook: "www.facebook.com",
        instagram: "www.instagram.com",
        pinterest: "www.pinterest.com",
        isCurrentUser: false
      },
      { name: "Martha", bio: "sup yall" }
    ];
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
        userPic: pic4
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
        <Navbar to={"/"} profileImage={pic1} page={0}></Navbar>
        <Banner background={Banner__pink}>
          <h3 style={{ margin: 0 }}>User Profile</h3>
          <InputTextField
            type="text"
            variation="search"
            name="search directory"
            placeholder="Search My Directory"
          />
        </Banner>
        <div className="MemberProfilePage__page-contents">
          <div className="MemberProfilePage__left-top">
            <div className="MemberProfilePage__left-contents">
              <div className="interaction-div">
                <InteractionCard></InteractionCard>
              </div>
              <div className="MemberProfilePage__bio-container">
                <Bio
                  instagram={people[0].intagram}
                  facebook={people[0].facebook}
                  pinterest={people[0].pinterest}
                  type="default"
                  name={people[0].name}
                  bio={people[0].bio}
                  hashtags={people[0].hashtags}
                  isCurrentUser={people[0].isCurrentUser}
                  onClick={() => console.log("Hello")}
                />
              </div>
              <div></div>
            </div>
            <Connections
              userViewing={false}
              to="User/userid/connections"
              users={testUsers.slice(0, 6)}
              extraUsers="View All"
            />
          </div>

          <div className="MemberProfilePage__right-contents">
            <UpcomingTrip>
              <h1>Book a Trip</h1>
              <TripCard src={example2} location="Hawaii" date="May 2020" />
              <TripCard src={example1} location="Puerto Rico" date="April 2019" />
            </UpcomingTrip>

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

        <div ClassName="MemberProfilePage__group-div">
          <GroupsList heading="Her Groups" moreGroups="View All" to="/" />
        </div>

        <Footer />
      </div>
    );
  }
}

export default MemberProfilePage;
