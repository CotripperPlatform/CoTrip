import React from "react";
import "./CommunityPage.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

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
      <header className="CommunityPage__header">COMMUNITY</header>

      <div className="CommunityPage__button-container">
        <Button text="View Previous Trips" color="pink" size="large" />
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default CommunityPage;
