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

import { BASE_URL } from '../../services/constants';
import axios from 'axios';

// Class Based React Component
class MemberProfilePage extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "MemberProfilePage"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {
    // axios()

    // console.log('memberpage props: ', this.props);
    if (this.props.userid !== undefined) {
      axios.get(`${BASE_URL}/profile/${this.props.userid}`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
          }
        })
        .then(res => {
          console.log('axios ', res.data)

          this.setState({
            protectedProfileData: {
              first_name: res.data.first_name,
              last_name: res.data.last_name,
              bio: res.data.bio,
              age: res.data.age,
              image: res.data.image,
              city_of_residence: res.data.city_of_residence
            }
          })
        })
    }

    // .then(res => console.log('axios ', res.data))

  }



  // Runs after a component has been updated
  componentDidUpdate() { }

  // Runs right before a component is removed from the DOM
  componentWillUnmount() { }

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

    if (this.props.logged_in === true) {
      return (


        <div className={this.state.classList}>
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


                  {this.state.protectedProfileData !== undefined && this.props.userid !== undefined ?
                    <Bio
                      userid={this.props.userid}
                      type="default"
                      first_name={this.state.protectedProfileData.first_name} last_name={this.state.protectedProfileData.last_name}
                      // name={`${this.props.profile.firstname} ${this.props.profile.lastname}` }
                      bio={this.state.protectedProfileData.bio}
                      hashtags={people[0].hashtags}
                      isCurrentUser={true}
                      onClick={console.log("Hello")}
                    />
                    : ''}



                </div>
                <div></div>
              </div>
              <div className="Connections__list-Member">
                <Connections
                  userViewing={false}
                  to="/"
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

        </div>
      );

    }
    else {
      window.location.href = "/";
    }

  }

}

export default MemberProfilePage;
