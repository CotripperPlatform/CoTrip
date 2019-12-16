import React from "react";
import "./HomePage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import example1 from "../../assets/images/card_small2.png";
import example2 from "../../assets/images/Hawaii-resort.jpg";
import people from "../../assets/images/add-friend.png";
import happiness from "../../assets/images/media-card-2.png";
import van from "../../assets/images/media-card-3.png";
import nightSky from "../../assets/images/media-card-4.png";
import waterfall from "../../assets/images/media-card-5.png";
import flight from "../../assets/images/media-card-6.png";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import GroupCard from "../../components/GroupCard/GroupCard";
import TrendingHashtagCard from "../../components/TrendingHashtagCard/TrendingHashtagCard";
import BookTripCard from "../../components/BookTripCard/BookTripCard";
import TripCard from "../../components/TripCard/TripCard";
import MediaCard from "../../components/MediaCard/MediaCard";

const HomePage = props => {
  return (
    <body className="HomePage__wrapper">
      <nav>
        <NavBar></NavBar>
      </nav>
      <div className="HomePage__content">
        <div className="placeholder-welcome">Welcome User</div>
        <div className="HomePage_top-items-wrapper">
          <span className="HomePage__suggestions-container">
            <h1 className="HomePage__suggested-header">Suggested Groups</h1>
            <div className="HomePage__group-cards-container">
              <GroupCard
                name="DIY with your kids"
                members="98"
                location="Boston, MA"
                picture="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
              />
              <span className="HomePage__groupcard-2">
                <GroupCard
                  name="DIY with your kids"
                  members="98"
                  location="Boston, MA"
                  picture="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
                />
              </span>
              <span className="HomePage__groupcard-3">
                <GroupCard
                  name="DIY with your kids"
                  members="98"
                  location="Boston, MA"
                  picture="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80"
                />
              </span>
              <a href="/home" className="HomePage__arrow" />
            </div>
            <h1 className="HomePage__suggested-header">Suggested People</h1>
            <div className="HomePage__people-container">
              <div className="placeholder-person-card"></div>
              <div className="placeholder-person-card"></div>
              <div className="placeholder-person-card"></div>
              <a href="/home" className="HomePage__arrow lower-people" />
            </div>
          </span>

          <span className="HomePage__top-cards-wrapper">
            <div className="HomePage__cards-container">
              <BookTripCard>
                <h1>Book a Trip</h1>
                <TripCard src={example2} location="Hawaii" date="May 2020" />
                <TripCard src={example1} location="Puerto Rico" date="April 2019" />
              </BookTripCard>
              <TrendingHashtagCard
                data={[
                  "#dope",
                  "#torch",
                  "#hawaii",
                  "#kids",
                  "#cats",
                  "#dogs",
                  "#italy",
                  "#starwars",
                  "#babyyoda"
                ]}
              >
                <h1>Trending Hashtags</h1>
              </TrendingHashtagCard>
            </div>
          </span>
        </div>

        <div className="HomePage__mobile-wrapper">
          <Card color="yellow" size="mobile" picture={people}>
            <div>
              <h2>Suggested Groups</h2>
            </div>
          </Card>
          <Card color="pink" size="mobile" picture={people}>
            <div>
              <h2>Book a Trip</h2>
            </div>
          </Card>
          <Card color="red" size="mobile" picture={people}>
            <div>
              <h2>Suggested People</h2>
            </div>
          </Card>
          <Card color="purple" size="mobile" picture={people}>
            <div>
              <h2>Trending Hashtags</h2>
            </div>
          </Card>
        </div>
      </div>
      <div className="HomePage__scrapbook-wrapper">
        <span className="HomePage__scrapbook-container">
          <h1 className="HomePage__suggested-header">CoTripper Scrapbook</h1>
          <div className="HomePage__scrapbook-cards-container">
            <MediaCard
              imageSrc={happiness}
              size="medium"
              to="/home"
              footerText="Posted By: --user--"
            />
            <MediaCard imageSrc={van} size="medium" to="/home" footerText="Posted By: --user--" />
            <span className="HomePage__groupcard-2">
              <MediaCard
                imageSrc={nightSky}
                size="medium"
                to="/home"
                footerText="Posted By: --user--"
              />
            </span>
            <span className="HomePage__groupcard-3">
              <MediaCard
                imageSrc={waterfall}
                size="medium"
                to="/home"
                footerText="Posted By: --user--"
              />
            </span>
            <span className="HomePage__groupcard-3">
              <MediaCard
                imageSrc={flight}
                size="medium"
                to="/home"
                footerText="Posted By: --user--"
              />
            </span>
          </div>
        </span>
      </div>

      <footer className="HomePage__footer-wrapper">
        <div className="placeholder-footer-block">
          <h1>Bottom footer component</h1>
        </div>
        <Footer />
      </footer>
    </body>
  );
};

export default HomePage;
