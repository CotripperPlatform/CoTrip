import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../services/constants";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
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
import image1 from "../../assets/images/profile-picture-1.png";
import image2 from "../../assets/images/profile-picture-2.png";
import image3 from "../../assets/images/profile-picture-3.png";
import image4 from "../../assets/images/profile-picture-4.png";
import image5 from "../../assets/images/profile-picture-5.png";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import FilterSettingsForm from "pages/OnboardingPage/FilterSettingsForm/FilterSettingsForm";

function pillClick(val) {
  console.log(val);
}

const handleClick = e => {};

const CommunityPage = props => {
  // State Hooks
  const [profile, setProfile] = useState([]);
  const [states, setStates] = useState([]);

  // Getting profile list
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${BASE_URL}/profile`);
      setProfile({ users: res.data, baseState: res.data });
    };
    fetch();
  }, []);

  // Getting US States
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${BASE_URL}/location/states`);
      setStates(res.data);
    };
    fetch();
  }, []);

  //random placeholder image
  const stockImages = [image1, image2, image3, image4, image5];
  const randomPlaceholderImages = () =>
    stockImages[Math.floor(Math.random() * (stockImages.length - 1 + 1))];

  // all profiles
  const profileList = props => {
    return (
      profile.users &&
      profile.users.map(data => {
        return (
          <div className="CommunityPage__momCard-single">
            <Link to={`/member-page/${data.user}`}>
              <PersonCard
                image={
                  !data.image ? require("../../assets/images/profile_default.svg") : data.image
                }
                name={data.first_name + "" + data.last_name}
                location={data.city_of_residence.name + ", " + data.city_of_residence.state.name}
                interests={data.hashtags.title}
              />
            </Link>
          </div>
        );
      })
    );
  };

  const getProfileFromStates = event => {
    let userSubmission = event.target.textContent.toLowerCase();
    if (userSubmission === "") {
      return setProfile({
        users: profile.baseState,
        baseState: profile.baseState
      });
    } else {
      return setProfile({
        baseState: profile.baseState,
        users: profile.users.filter(
          user => userSubmission === user.city_of_residence.state.name.toLowerCase()
        )
      });
    }
  };

  const handleFullName = () => {
    return (
      profile.baseState &&
      profile.baseState.map(user => {
        return { fullName: user.first_name + " " + user.last_name };
      })
    );
  };

  const getProfileFromName = event => {
    let userSubmission = event.target.textContent.toLowerCase();
    if (userSubmission === "") {
      return setProfile({
        users: profile.baseState,
        baseState: profile.baseState
      });
    } else {
      return setProfile({
        baseState: profile.baseState,
        users: profile.users.filter(
          user =>
            userSubmission === user.first_name.toLowerCase() + " " + user.last_name.toLowerCase()
        )
      });
    }
  };

  const handleDisplay = () => {
    profile.users &&
      profile.users.forEach(user => {
        if (user.city_of_residence.state.name) {
          return user.city_of_residence.state.name;
        }
      });
  };

  return (
    <div className="CommunityPage">
      <Banner background={Banner__Community}>
        <h3 style={{ margin: 0 }}>Community: People</h3>
        <Autocomplete
          style={{ width: 400 }}
          id="AutoStateField"
          options={handleFullName()}
          getOptionLabel={option => option.fullName}
          onChange={getProfileFromName}
          renderInput={params => <TextField {...params} label="Search By Name" variant="filled" />}
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
      </div>
      <div className="CommunityPagePeople__Autocomplete">
        <Autocomplete
          id="AutoStateField"
          options={states}
          getOptionLabel={option => option.name}
          onChange={getProfileFromStates}
          renderInput={params => <TextField {...params} label="Search By State" variant="filled" />}
        />
      </div>
      <div className="CommunityPage_body">
        <div>
          <header className="CommunityPage__header"></header>
        </div>
        <div className="CommunityPage__moms-in-city-container">{profileList()}</div>
        <a className="seeAll-Button"></a>
      </div>
    </div>
  );
};

export default CommunityPage;
