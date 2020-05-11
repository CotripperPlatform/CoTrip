import React from "react";
import "./CommunityPage.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__pink from "assets/images/Banner__pink.png";

import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const CommunityPage = props => {
  return (
    <div className="CommunityPage">
      <NavBar page={3} profileImage={people} />
      <Banner background={Banner__pink}>
        <h3 style={{ margin: 0 }}>Book a Trip</h3>
        <InputTextField
          type="text"
          variation="search"
          name="search directory"
          placeholder="Search Trip"
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
