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
    </div>
  );
};
export default CommunityPageGroup;
