import React, { Component } from "react";
import "./DirectoryGroups.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import Banner__Directory from "assets/images/Banner__pink.png";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Pill from "../../components/Pill/Pill";
import GroupCard from "../../components/GroupCard/GroupCard";
import picture1 from "../../assets/images/card_small1.png";
import picture2 from "../../assets/images/card_small2.png";
import picture3 from "../../assets/images/card_small3.png";
import Card from "../../components/Card/Card";
import { BASE_URL } from "../../services/constants";
import axios from "axios";

// Page or
class DirectoryGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    axios
      .get(`${BASE_URL}/groups`)
      .then(response => {
        this.setState({
          groups: response.data
        });
      })
      .catch(error => {
        console.log("Error while fetching and parsing API request", error);
      });
  }

  render() {
    const groups = this.state.groups ? this.state.groups : [];
    return (
      <div className="DirectoryPage">
        <NavBar page={0} profileImage={people} />
        <Banner background={Banner__Directory}>
          <h3 style={{ margin: 0 }}>Directory: My Groups</h3>
          <InputTextField
            type="text"
            variation="wide"
            name="search directory"
            placeholder="Search Groups"
          />
        </Banner>
        <div className="secondNav">
          <a className="secondNav" href="./people">
            <Button text="My Friends" color="outline" size="long" />
          </a>{" "}
          <a className="secondNav" href="./groups">
            <Button text="My Groups" color="purple" size="long" />
          </a>
        </div>

        <div className="CommunityPage_body">
          <div>
            <header className="CommunityPage__header">Groups in WASHINGTON, DC:</header>
          </div>
          <div className="CommunityPage__groups-in-city-container">
            {groups.map(group => {
              console.log(group);
              let memberLength = 1;
              if (memberLength) {
                const memberLength = group.members.length;
              }
              return (
                <div className="CommunityPage__groupCard-single">
                  <GroupCard
                    name={group.title}
                    members={memberLength}
                    location={group.location}
                    picture={picture1}
                    id={group.id}
                  />
                </div>
              );
            })}

            <div className="CommunityPage__groupCard-single">
              {" "}
              <Card outline size="medium-wide-directory">
                <a href="/">Discover New Groups</a>
              </Card>
            </div>
          </div>
          <a className="seeAll-Button">See All</a>
        </div>
        <Footer history={this.props.history} handle_logout={this.props.handle_logout} />
      </div>
    );
  }
}

export default DirectoryGroups;
