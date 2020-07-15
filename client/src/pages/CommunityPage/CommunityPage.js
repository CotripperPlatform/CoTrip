import React, { Component } from "react";
import "./CommunityPage.css";
import Banner from "../../components/Banner/Banner";
import Banner__Community from "assets/images/Banner__pink.png";
import Button from "../../components/Button/Button";
import GroupCard from "../../components/GroupCard/GroupCard";
import picture1 from "../../assets/images/card_small1.png";
import Card from "../../components/Card/Card";
import { getAllGroups } from "../../services/Groups";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";


class CommunityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: []
    };

    this.getAllGroups = getAllGroups.bind(this);

  }

  componentDidMount() {
    this.getAllGroups()
  }

  handleSelect = (e) => {
    // TODO: load selected group page
    console.log(e.target.value)


  }

  handleClick = (e) => {
  }
  render() {
    const groups = this.state.groupList ? this.state.groupList : [];
    console.log(groups)
    return (
      <div className="CommunityPage">
        <Banner background={Banner__Community}>
          <div className="community-page-header">
            <h3 style={{ margin: 0 }}>Community: Groups</h3>
          </div>
          <Autocomplete
            style={{ width: 400 }}
            id="AutoStateField"
            options={groups}
            getOptionLabel={option => option.title}
            onSelect={this.handleSelect}
            renderInput={params => <TextField {...params} label="Search Groups" variant="filled" />}
          />
        </Banner>
        <div className="secondNav">
          <Link to="./explore-people" className="secondNav" style={{ textDecoration: "none" }}>
            <Button
              text="Connect With Other Moms"
              color="outlinepink"
              size="long"
              handleClick={this.handleClick}
            />
          </Link>
          <a className="secondNav">
            <Button text="Discover Groups" color="pink" size="long" handleClick={this.handleClick} />
          </a>
        </div>
        <div className="CommunityPage_SortByButton">
          <div className="CommunityPage_SortByText">Sort By: Location </div>
        </div>
        <div className="CommunityPage_body">

          <div>
            <header className="CommunityPage__header">
              Groups in WASHINGTON, DC: 
              <Link to="./create-group">
                Create Group
              </Link>
            </header>
          </div>
          <div className="CommunityPage__groups-in-city-container">
            {groups.map((group, index) => {
              return (
                <div key={index} className="CommunityPage__groupCard-single">
                  <GroupCard
                    name={group.title}
                    members={group.members.length}
                    location={group.location}
                    picture={picture1}
                    id={group.id}
                  />
                </div>
              );
            })}
            <div className="CommunityPage__groupCard-single">

              <Card outline size="medium-wide">
                <a href="./view-group">Discover New Groups</a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default CommunityPage;
