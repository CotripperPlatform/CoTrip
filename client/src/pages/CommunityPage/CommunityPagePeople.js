import React, { useState, useEffect } from "react";
import "./CommunityPagePeople.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Pill from "../../components/Pill/Pill";
import PersonCard from "../../components/PersonCard/PersonCard";
import axios from "axios";
import image1 from "../../assets/images/profile-picture-1.png";
import image2 from "../../assets/images/profile-picture-2.png";
import image3 from "../../assets/images/profile-picture-3.png";
import image4 from "../../assets/images/profile-picture-4.png";
import image5 from "../../assets/images/profile-picture-5.png";
import Card from "../../components/Card/Card";

function pillClick(val) {
  console.log(val);
}

const handleClick = e => {};

// Page or
const CommunityPage = props => {
  const [profile, setProfile] = useState([]);

  // Getting profile list
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("http://127.0.0.1:8000/profile");
      setProfile(res.data);
      // console.log(res);
    };
    fetch();
  }, []);

  //random number between 1 and 5
  const randomPlaceholderImage = () => Math.floor(Math.random() * 6) + 1;

  const profileList = () => {
    return (
      profile &&
      profile.map(data => {
        return (
          <div className="CommunityPage__momCard-single">
            <PersonCard
              image={data.image[randomPlaceholderImage]}
              name={data.first_name + "" + data.last_name}
              location={data.city_of_residence}
              interests={data.hashtags}
            />
          </div>
        );
      })
    );
  };
  return (
    <div className="CommunityPage">
      <NavBar page={1} profileImage={people} />
      <Banner background={Banner__Community}>
        <h3 style={{ margin: 0 }}>Community: People</h3>
        <InputTextField
          type="text"
          variation="wide"
          name="search directory"
          placeholder="Search Groups"
        />
      </Banner>
      <div className="secondNav">
        <a className="secondNav">
          <Button
            text="Connect With Other Moms"
            color="pink"
            size="long"
            handleClick={handleClick}
          />
        </a>
        <a href="./join-groups" className="secondNav">
          <Button
            text="Discover Groups"
            color="outlinepink"
            size="long"
            handleClick={handleClick}
          />
        </a>
      </div>{" "}
      <div className="CommunityPage_SortByButton">
        <div className="CommunityPage_SortByText">Sort By: Location </div>
      </div>
      <div className="CommunityPage_body">
        <div>
          <header className="CommunityPage__header">
            Group Location: <a href="./view-group"> View Sample Page </a>
          </header>
        </div>
        <div className="CommunityPage__mom-location-container">
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
          <header className="CommunityPage__header">Moms in WASHINGTON, DC:</header>
        </div>
        <div className="CommunityPage__moms-in-city-container">
          {/* <div className="CommunityPage__momCard-single">
            <PersonCard image={image1} name="Lindsay L." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image2} name="Chandy S." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image3} name="Caroline N." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image4} name="Rachel G." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image5} name="Julia C." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image1} name="Lindsay L." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image2} name="Chandy S." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image3} name="Caroline N." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image4} name="Rachel G." location="Washington D.C." />
          </div>
          <div className="CommunityPage__momCard-single">
            <PersonCard image={image5} name="Julia C." location="Washington D.C." />
          </div>{" "}
          <div className="CommunityPage__momCard-single"> </div> */}
          {profileList}
        </div>
        <a className="seeAll-Button">See All</a>
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default CommunityPage;
