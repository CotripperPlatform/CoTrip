import React from "react";
import "./ForumPage.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import ModalContainer from "../../components/Modal/_ModalContainer"
import ForumContainer from "../../components/ForumPostContainer/ForumPostContainer"
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

function handleEvent(evt) {
  evt.preventDefault();
  alert("something happens");
}

const ForumPageHastag = props => {
  return (
    <div className="ForumPage">
      <NavBar page={2} profileImage={people} />
      <Banner background={Banner__Community}>
        <h3 style={{ margin: 0 }}>Forum</h3>
        <InputTextField
          type="text"
          variation="search"
          name="search directory"
          placeholder="Search Trip"
        />
      <div className="Modal_align">
        <ModalContainer
      buttonText="Follow"
      buttonTextColor="black"
      buttonColor="yellow"
      buttonSize="large"
      message="Are you sure you want to follow?"
      confirmText="Follow"
      cancelText="Cancel"
      onConfirm={handleEvent}
    />
    </div>
      </Banner>
      <header className="ForumPage__header"></header>
          <div>
              <ForumContainer className="ForumPost"/>
              <ForumContainer className="ForumPost"/>
              <ForumContainer className="ForumPost"/>

          </div>
          
          <div>

          </div>
      <div className="ForumPage__button-container">
        <Button text="View Previous Trips" color="pink" size="large" />
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default ForumPageHastag;
