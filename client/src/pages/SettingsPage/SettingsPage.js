import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner__pink from "assets/images/Banner__pink.png";
import Banner from "../../components/Banner/Banner";
import Bio from "../../components/Bio/Bio";

// test image for nav
import pic1 from "../../assets/images/profile-picture-1.png";

import { BASE_URL } from "../../services/constants";
import axios from "axios";

class SettingsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      protectedProfileData: {
        first_name: "",
        last_name: "",
        bio: "",
        age: "",
        image: "",
        city_of_residence: ""
      }
    };
  }

  componentDidMount() {
    // if (this.props.userid !== undefined) {
    axios
      .get(`${BASE_URL}/profile/6`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        console.log("axios ", res.data);

        this.setState({
          protectedProfileData: {
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            bio: res.data.bio,
            age: res.data.age,
            image: res.data.image,
            city_of_residence: res.data.city_of_residence
          }
        });
      });
    // }
  }
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
    console.log(this.props.userid);
    console.log(this.state);

    return (
      <div>
        <Navbar to={"/"} profileImage={pic1} page={0}></Navbar>

        <Banner background={Banner__pink}>
          {" "}
          <div className="BannerTest">
            <h3 style={{ margin: 0 }}>User Profile Settings</h3>
          </div>
        </Banner>

        <Bio
          userid={this.props.userid}
          type="default"
          first_name={this.props.first_name}
            last_name={this.state.protectedProfileData.last_name}
          // name={`${this.props.profile.firstname} ${this.props.profile.lastname}` }
          bio={this.state.protectedProfileData.bio}
          hashtags={people[0].hashtags}
          isCurrentUser={true}
          onClick={console.log("Hello")}
        />
      </div>
    );
  }
}

export default SettingsPage;
