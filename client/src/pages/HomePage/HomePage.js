import React from "react";
import "./HomePage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import GroupCard from "../../components/GroupCard/GroupCard";
import TrendingHashtagCard from "../../components/TrendingHashtagCard/TrendingHashtagCard";
import MediaCard from "../../components/MediaCard/MediaCard";
import people from "../../assets/images/add-friend.png";

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
              <Card color="pink">
                <h1>Book A Trip</h1>
                <h1>placeholder</h1>
              </Card>
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
            <MediaCard size="medium" to="/home" footerText="Posted By: --user--" />
            <MediaCard size="medium" to="/home" footerText="Posted By: --user--" />
            <span className="HomePage__groupcard-2">
              <MediaCard size="medium" to="/home" footerText="Posted By: --user--" />
            </span>
            <span className="HomePage__groupcard-3">
              <MediaCard size="medium" to="/home" footerText="Posted By: --user--" />
            </span>
            <span className="HomePage__groupcard-3">
              <MediaCard size="medium" to="/home" footerText="Posted By: --user--" />
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
