import React from "react";
import "./CommunityPageGroup.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
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

function pillClick(val) {
  console.log(val);
}

const handleClick = e => {
  console.log("Clicked");
};

// Page or
const CommunityPageGroup = props => {
  return (
    <div className="CommunityPage-Group-">
      <NavBar page={1} profileImage={people} />
      <Banner background={Banner__Community}>
        <div className="community-page-header">
          {" "}
          <h3 style={{ margin: -5 }}>Group: Moms in DC</h3>
        </div>
        <InputTextField
          type="text"
          variation="search"
          name="search directory"
          placeholder="Search My Directory"
          variation="wide"
        />
      </Banner>
      <div className="secondNav">
        <Button
          text="Connect With Other Moms"
          color="outline"
          size="long"
          handleClick={handleClick}
        />
        <Button text="Discover Groups" color="pink" size="long" handleClick={handleClick} />
      </div>{" "}
      <div className="CommunityPage-Group-_SortByButton">
        <div className="CommunityPage-Group-_SortByText">Sort By: Location </div>
      </div>
      <div className="CommunityPage-Group-_body">
        <div>
          <header className="CommunityPage-Group-__header">Group Location:</header>
        </div>
        <div className="CommunityPage-Group-__group-location-container">
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"purple"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />{" "}
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />{" "}
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"wide"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
        </div>{" "}
        <a className="seeMore-Button">See More</a>
        <div>
          <header className="CommunityPage-Group-__header">Groups in WASHINGTON, DC:</header>
        </div>
        <div className="CommunityPage-Group-__groups-in-city-container">
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="DIY with your kids"
              members="98 Members"
              location="Mixed Locations"
              picture={picture1}
            />
          </div>
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="Moms traveling to Hawaii"
              members="5"
              location="Chicago, IL"
              picture={picture2}
            />
          </div>{" "}
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="DIY with your kids"
              size="wide"
              members="98 Members"
              location="Mixed Locations"
              picture={picture1}
            />
          </div>
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="Moms traveling to Hawaii"
              members="5"
              location="Chicago, IL"
              picture={picture2}
            />
          </div>{" "}
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="DIY with your kids"
              members="98 Members"
              location="Mixed Locations"
              picture={picture1}
            />
          </div>
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="Moms traveling to Hawaii"
              members="5"
              location="Chicago, IL"
              picture={picture2}
            />
          </div>{" "}
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="DIY with your kids"
              members="98 Members"
              location="Mixed Locations"
              picture={picture1}
            />
          </div>
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="Moms traveling to Hawaii"
              members="5"
              location="Chicago, IL"
              picture={picture2}
            />
          </div>
          <div className="CommunityPage-Group-__groupCard-single">
            <GroupCard
              name="Group Name"
              members="# of "
              location="Location, State"
              picture={picture3}
            />
          </div>{" "}
          <div className="CommunityPage-Group-__groupCard-single">
            {" "}
            <Card outline size="medium-wide">
              <a href="/">Discover New Groups</a>
            </Card>{" "}
          </div>
        </div>
        <a className="seeAll-Button">See All</a>
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default CommunityPageGroup;
