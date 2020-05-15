import React from "react";
import "./CommunityPageGroup.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import ModalContainerJoin from "../../components/Modal/_ModalContainer-join";

function pillClick(val) {
  console.log(val);
}

function handleEvent(evt) {
  evt.preventDefault();
  alert("something happens");
}

const handleClick = e => {
  console.log("Clicked");
};

// Page or
const CommunityPageGroup = props => {
  return (
    <div>
      {" "}
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
          <div className="Modal_align">
            <ModalContainerJoin
              buttonText="Join"
              buttonTextColor="black"
              buttonColor="yellow"
              buttonSize="small"
              message="Are you sure you want to join?"
              confirmText="Join"
              cancelText="Exit"
              onConfirm={handleEvent}
            />
          </div>
          <div className="Modal_align">
            <ModalContainerJoin
              buttonText="Leave Group"
              buttonTextColor="white"
              buttonColor="pink"
              buttonSize="small"
              message="Are you sure you want to leave the group?"
              confirmText="Leave Group"
              cancelText="Exit"
              onConfirm={handleEvent}
            />
          </div>
        </Banner>{" "}
      </div>
    </div>
  );
};
export default CommunityPageGroup;
