import React, { Component } from "react";
import "./MemberProfilePage.css";

import example2 from "../../assets/images/hawaii.png";
import pic1 from "../../assets/images/profile-picture-1.png";
import pic2 from "../../assets/images/profile-picture-2.png";
import pic3 from "../../assets/images/profile-picture-3.png";
import pic4 from "../../assets/images/profile-picture-4.png";
import example1 from "../../assets/images/card_small2.png";

import InteractionCard from "../../components/InteractionCard/InteractionCard";
import UpcomingTrip from "components/UpcomingTripsCard/UpcomingTripsCard";
import Connections from "../../components/Connections/Connections";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__pink from "assets/images/Banner__pink.png";
import Banner from "../../components/Banner/Banner";
import GroupsList from "../../components/GroupsList/GroupsList";
import Bio from "../../components/Bio/Bio";
import PreviousTripsCard from "../../components/PreviousTripsCard/PreviousTripsCard";
import TripCardUsers from "../../components/TripCard-Users/TripCard-Users";
import getMemberData from "../../services/Members"




// Class Based React Component
class MemberProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      classList: "MemberProfilePage",
      protectedProfileData: {
        first_name: '',
        last_name: '',
        bio: '',
        age: '',
        image: '',
        city_of_residence: [],
        social_media: [],
        user_id: [],
        hashtags: [],
        connections: []
      }
    };

    this.getMemberData = getMemberData.bind(this);
  }

  componentDidMount() {

    this.getMemberData(this.props.userid)
  }



  render() {

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
                  <InteractionCard image={this.state.protectedProfileData.image ? this.state.protectedProfileData.image : require('../../assets/images/profile_default.svg')} ></InteractionCard>
                </div>
                <div className="MemberProfilePage__bio-container">


                  {this.state.protectedProfileData !== undefined && this.props.userid !== undefined ?
                    <Bio
                      userid={this.props.userid}
                      type="default"
                      first_name={this.state.protectedProfileData.first_name} last_name={this.state.protectedProfileData.last_name}
                      bio={this.state.protectedProfileData.bio}
                      hashtags={this.state.protectedProfileData.hashtags}
                      isCurrentUser={true}
                      social_media={this.state.protectedProfileData.social_media}
                    />
                    : ''}
                </div>
              </div>
              <div className="Connections__list-Member">
                <Connections
                  userViewing={false}
                  to="/home"
                  users={this.state.protectedProfileData.connections.slice(0, 6)}
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
  }

}


export default MemberProfilePage;
