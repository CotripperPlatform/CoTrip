import React from "react";
import "./HomePageOldUser.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import example1 from "assets/images/card_small2.png";
import example2 from "assets/images/Hawaii-resort.jpg";
import card1 from "assets/images/card-image-3.png";
import card2 from "assets/images/card-image-2.png";
import card3 from "assets/images/card-image.png";
import happiness from "assets/images/media-card-2.png";
import van from "assets/images/media-card-3.png";
import nightSky from "assets/images/media-card-4.png";
import waterfall from "assets/images/media-card-5.png";
import flight from "assets/images/media-card-6.png";
import Banner__purpleBig from "assets/images/Banner__purple--big.png";
import image1 from "../../assets/images/profile-picture-1.png";
import image2 from "../../assets/images/profile-picture-5.png";
import image3 from "../../assets/images/profile-picture-4.png";

import people from "assets/images/profile_default.svg";
import airplane from "assets/images/airplane-shape.png";
import groups from "assets/images/protest.png";
import hashtags from "assets/images/trending-hashtags.png";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import GroupCard from "../../components/GroupCard/GroupCard";
import TrendingHashtagCard from "../../components/TrendingHashtagCard/TrendingHashtagCard";
import BookTripCard from "../../components/BookTripCard/BookTripCard";
import TripCard from "../../components/TripCard/TripCard";
import MediaCard from "../../components/MediaCard/MediaCard";
import SignUp from "components/SignUpAd/SignUpAd";
import Banner from "components/Banner/Banner";
import PersonCard from "components/PersonCard/PersonCard";
import Pill from "../../components/Pill/Pill";

const personCard1 = (
  <PersonCard
    image={image1}
    name="Justine P."
    location="Pittsburg, PA"
    interests={[
      { url: "#", interests: "budgeting" },
      { url: "#", interests: "travel" },
      { url: "#", interests: "outdoors" }
    ]}
  />
);
const personCard2 = (
  <PersonCard
    image={image2}
    name="Sarah V."
    location="Stockholm, Sweden"
    interests={[
      { url: "#", interests: "veganism" },
      { url: "#", interests: "budgeting" },
      { url: "#", interests: "music" },
      { url: "#", interests: "outdoors" }
    ]}
  />
);
const personCard3 = (
  <PersonCard
    image={image3}
    name="Blossom D."
    location="Washington D.C."
    interests={[
      { url: "#", interests: "education" },
      { url: "#", interests: "outdoors" },
      { url: "#", interests: "software development" }
    ]}
  />
);

const handleClick = e => {
  e.preventDefault();
  console.log("clicked");
};
function pillClick(val) {
  console.log(val);
}

const HomePageOldUser = props => {
  return (
    <body className="HomePageOld__wrapper">
      <nav>
        <NavBar page={5} to={"/member-page"} profileImage={people}></NavBar>
      </nav>
      <div className="HomePageOld__content">
        <Banner background={Banner__purpleBig}>
          {props.first_name ? <h1>Welcome Back, {props.first_name}!</h1> : <h1>Welcome Back!</h1>}
        </Banner>
        <a href="./home">New User Sample</a>
        <br></br>
        <a href="./home-old-user">Old User Sample</a>
        <div className="HomePageOld_top-items-wrapper">
          <span className="HomePageOld__suggestions-container">
            <h1 className="HomePageOld__left-header">My Group</h1>
            <div className="HomePageOld__group-cards-container">
              <GroupCard
                className="HomePageOld__groupcard-pic"
                name="DIY with your kids"
                members="98"
                location="Boston, MA"
                picture={card1}
              />
              {/* <span className="HomePageOld__groupcard-pic"> */}
              <GroupCard
                className="HomePageOld__groupcard-pic"
                name="Mystery Stories!"
                members="213"
                location="NYC"
                picture={card2}
              />
              {/* </span> */}
              {/* <span className="HomePageOld__groupcard-pic"> */}
              <GroupCard
                className="HomePageOld__groupcard-pic"
                name="Bay Cruise"
                members="98"
                location="Lisbon"
                picture={card3}
              />
              {/* </span> */}
              <a href="/home" className="HomePageOld__arrow" />
            </div>
            <h1 className="HomePageOld__left-header">Topics and #hashtags I'm Following</h1>
            <div className="home-old-user-page-pill-container">
              <Pill
                className="Forum-Pill"
                text={"Traveling"}
                size={"shorter"}
                color={"red"}
                icon={"white"}
                onClick={pillClick}
                selectId={0}
              />
              <Pill
                className="Forum-Pill"
                text={"Traveling"}
                size={"shorter"}
                color={"red"}
                icon={"white"}
                onClick={pillClick}
                selectId={0}
              />
              <Pill
                className="Forum-Pill"
                text={"Traveling"}
                size={"shorter"}
                color={"pink"}
                icon={"white"}
                onClick={pillClick}
                selectId={0}
              />
              <Pill
                className="Forum-Pill"
                text={"Traveling"}
                size={"shorter"}
                color={"pink"}
                icon={"white"}
                onClick={pillClick}
                selectId={0}
              />
              <div className="forum-page-hollow-pill-container">
                <Pill
                  text={"#hashtags"}
                  size={"shorter"}
                  color={"pink"}
                  icon={"pink"}
                  shadow
                  border
                  onClick={pillClick}
                  selectId={0}
                />
                <Pill
                  text={"#hashtags"}
                  size={"shorter"}
                  color={"pink"}
                  icon={"pink"}
                  shadow
                  border
                  onClick={pillClick}
                  selectId={0}
                />
              </div>
            </div>

            <a href="/home" className="HomePageOld__arrow lower-people" />
          </span>

          <span className="HomePageOld__top-cards-wrapper">
            <div className="HomePageOld__old-cards-container">
              <BookTripCard>
                <h1>Book a Trip</h1>
                <TripCard src={example2} location="Hawaii" date="May 2020" />
                <TripCard src={example1} location="Puerto Rico" date="April 2019" />
              </BookTripCard>
              <TrendingHashtagCard
                data={[
                  "1 #art",
                  "2 #hawaii",
                  "3 #food",
                  "4 #vacation",
                  "5 #boats",
                  "6 #crafts",
                  "7 #parks",
                  "8 #dogs",
                  "9 #italy",
                  "10 #yoga"
                ]}
              >
                <h1>Trending Hashtags</h1>
              </TrendingHashtagCard>
            </div>
          </span>
        </div>

        <div className="HomePageOld__mobile-wrapper">
          <Link to="/">
            <Card color="yellow" size="mobile">
              <img src={groups} alt="suggested-groups-icon" className="HomePageOld__mobile-card-icon" />
              <h2>My Groups</h2>
            </Card>
          </Link>
          <Link to="/">
            <Card color="pink" size="mobile">
              <img src={airplane} alt="book-a-trip-icon" className="HomePageOld__mobile-card-icon" />
              <h2>Book a Trip</h2>
            </Card>
          </Link>

          <Link to="/">
            <Card color="purple" size="mobile">
              <img src={hashtags}  alt="suggested-people-icon" className="HomePageOld__mobile-card-icon" />
              <h2>Trending Hashtags</h2>
            </Card>
          </Link>
        </div>
      </div>
      <div className="HomePageOld__scrapbook-wrapper">
        <span className="HomePageOld__scrapbook-container">
          <h1 className="HomePageOld__suggested-header">CoTripper Scrapbook</h1>
          <div className="HomePageOld__scrapbook-cards-container">
            <MediaCard
              imageSrc={happiness}
              size="medium"
              to="/home"
              footerText="Posted By: Paula"
            />
            <MediaCard imageSrc={van} size="medium" to="/home" footerText="Posted By: Carmen" />

            <MediaCard
              imageSrc={nightSky}
              size="medium"
              to="/home"
              footerText="Posted By: Krystin"
            />

            <span className="HomePageOld__mediacard-hide">
              <MediaCard
                imageSrc={waterfall}
                size="medium"
                to="/home"
                footerText="Posted By: Paul"
              />
            </span>
            <span className="HomePageOld__mediacard-hide">
              <MediaCard imageSrc={flight} size="medium" to="/home" footerText="Posted By: Fiona" />
            </span>
          </div>
        </span>
      </div>

      <footer className="HomePageOld__footer-wrapper">
        <SignUp
          heading="Never Miss a Trip"
          subheading="Sign up with your email address to recieve news and updates"
        ></SignUp>
        <Footer history={props.history} handle_logout={props.handle_logout} />
      </footer>
    </body>
  );
};

export default HomePageOldUser;
