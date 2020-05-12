import React from "react";
import "./CommunityPage.css";
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
const CommunityPage = props => {
  return (
    <div className="CommunityPage">
      <NavBar page={1} profileImage={people} />
      <Banner background={Banner__Community}>
        <h3 style={{ margin: 0 }}>Community: Groups</h3>
        <InputTextField
          type="text"
          variation="search"
          name="search directory"
          placeholder="Search My Directory"
        />
      </Banner>
      <div className="secondNav">
        <Button
          className="secondNav-Button"
          text="Connect with Other Moms"
          color="outline"
          handleClick={handleClick}
        />
        <Button
          className="secondNav-Button"
          text="Discover Groups"
          color="pink"
          handleClick={handleClick}
        />
      </div>{" "}
      <div className="CommunityPage_SortByButton">
        <div className="CommunityPage_SortByText">Sort By: Location </div>
      </div>
      <div className="CommunityPage_body">
        <div>
          <header className="CommunityPage__header">Group Location:</header>
        </div>
        <div className="CommunityPage__group-location-container">
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"purple"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />{" "}
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />{" "}
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Pill"
            text={"Traveling"}
            size={"medium"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
        </div>{" "}
        <a className="seeMore-Button">See More</a>
        <div>
          <header className="CommunityPage__header">Groups in WASHINGTON, DC:</header>
        </div>
        <div className="CommunityPage__groups-in-city-container">
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="DIY with your kids"
              members="98 Members"
              location="Mixed Locations"
              picture={picture1}
            />
          </div>
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="Moms traveling to Hawaii"
              members="5"
              location="Chicago, IL"
              picture={picture2}
            />
          </div>{" "}
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="DIY with your kids"
              members="98 Members"
              location="Mixed Locations"
              picture={picture1}
            />
          </div>
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="Moms traveling to Hawaii"
              members="5"
              location="Chicago, IL"
              picture={picture2}
            />
          </div>{" "}
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="DIY with your kids"
              members="98 Members"
              location="Mixed Locations"
              picture={picture1}
            />
          </div>
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="Moms traveling to Hawaii"
              members="5"
              location="Chicago, IL"
              picture={picture2}
            />
          </div>{" "}
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="DIY with your kids"
              members="98 Members"
              location="Mixed Locations"
              picture={picture1}
            />
          </div>
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="Moms traveling to Hawaii"
              members="5"
              location="Chicago, IL"
              picture={picture2}
            />
          </div>
          <div className="CommunityPage__groupCard-single">
            <GroupCard
              name="Group Name"
              members="# of "
              location="Location, State"
              picture={picture3}
            />
          </div>{" "}
          <div className="CommunityPage__groupCard-single">
            {" "}
            <Card outline size="medium">
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

export default CommunityPage;
