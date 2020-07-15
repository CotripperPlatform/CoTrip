import React, { Component } from "react";
import "./DirectoryGroups.css";
import Banner from "../../components/Banner/Banner";
import Banner__Directory from "assets/images/Banner__pink.png";
import Button from "../../components/Button/Button";
import GroupCard from "../../components/GroupCard/GroupCard";
import picture1 from "../../assets/images/card_small1.png";
import Card from "../../components/Card/Card";
import { getAllGroups } from "../../services/Groups";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";


class DirectoryGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
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

  render() {
    const groups = this.state.groupList ? this.state.groupList : [];
    return (
      <div className="DirectoryPage">
        <Banner background={Banner__Directory}>
          <h3 style={{ margin: 0 }}>Directory: My Groups</h3>
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
          <a className="secondNav" href="./people">
            <Button text="My Friends" color="outline" size="long" />
          </a>
          <a className="secondNav" href="./groups">
            <Button text="My Groups" color="purple" size="long" />
          </a>
        </div>
        <div className="CommunityPage_body">
          <div>
            <header className="CommunityPage__header">Your Groups</header>
          </div>
          <div className="CommunityPage__groups-in-city-container">
            {/* Map loops through groups array, assigns the number of members to variable and generates card */}
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
              {" "}
              <Card outline size="medium-wide-directory">
                <a href="/">Discover New Groups</a>
              </Card>
            </div>
          </div>
          <a className="seeAll-Button">See All</a>
        </div>
      </div>
    );
  }
}

export default DirectoryGroups;
