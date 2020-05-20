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
import Connections from "../../components/Connections/Connections";
import Footer from "../../components/Footer/Footer";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__pink from "assets/images/Banner__pink.png";
import Banner from "../../components/Banner/Banner";
import GroupsList from "../../components/GroupsList/GroupsList";
import Bio from "../../components/Bio/Bio";
import PreviousTripsCard from "../../components/PreviousTripsCard/PreviousTripsCard";
import TripCardUsers from "../../components/TripCard-Users/TripCard-Users";

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
    let people = [
      {
        name: "Suzie",
        bio:
          "My daughter Brittany and I have been a CoTripper member for a while now and love everything about it. I work as an HR director and Brittany will be entering 8th grade this fall. We really enjoy hiking and jamming out to Lizzo. We love sharing our travel experiences and connecting with like-minded people. Hope to hear from you.",
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
          {" "}
          <div className="BannerTest">
            <h3 style={{ margin: 0 }}>User Profile</h3>
            <InputTextField
              type="text"
              variation="wide"
              name="search directory"
              placeholder="Search Groups"
            />{" "}
          </div>
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
                  onClick={console.log("Hello")}
                />
              </div>
              <div></div>
            </div>
            <div className="Connections__list-Member">
              <Connections
                userViewing={false}
                to="/home"
                users={testUsers.slice(0, 6)}
                extraUsers="View All"
              />
            </div>
          </div>

          <div className="MemberProfilePage__right-contents">
            <UpcomingTrip
              details={["3 Days, 2 Nights", "Resort Stay", "Children Welcome", "Guided Tours"]}
            >
              <h1>Book a Trip</h1>
              <TripCardUsers src={example2} location="Hawaii" date="May 2020" />
              <TripCardUsers src={example1} location="Puerto Rico" date="April 2019" />
            </UpcomingTrip>

            <PreviousTripsCard trips={true} link="/">
              <h1>Previous Trips</h1>
              <TripCardUsers src={example1} location="Puerto Rico" date="April 2019" />
              <TripCardUsers
                src="https://wallpaperaccess.com/full/144067.jpg"
                location="Hawaii"
                date="May 2020"
              />
            </PreviousTripsCard>
          </div>
        </div>

        <div className="MemberProfilePage__group-div-Her">
          <GroupsList heading="Her Groups" moreGroups="View All" to="/" />
        </div>

        <Footer history={this.props.history} handle_logout={this.props.handle_logout} />
      </div>
    );
  }
}

export default MemberProfilePage;
