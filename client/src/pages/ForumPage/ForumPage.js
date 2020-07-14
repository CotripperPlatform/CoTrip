import React, { Component } from "react";
import "./ForumPage.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Pill from "../../components/Pill/Pill";
import InputSelect from "../../components/InputSelect/InputSelect";

import getTopics from "../../services/Forum.js";
import { Link } from "react-router-dom";

const ForumPage = props => {
  return (
    <div className="ForumPage">
      <Banner background={Banner__Community}>
        <h3 style={{ margin: 0 }}>Forum: Discover Topics</h3>
        <InputTextField
          type="text"
          variation="wide"
          name="search directory"
          placeholder="Search Topics and #hashtags"
        />
      </Banner>
      <div className="secondNav">
        <a className="secondNav">
          <Button text="My Favorite Topics" color="pink" size="long" handleClick={handleClick} />
        </a>
        <a className="secondNav" href="./forum-page-discover">
          <Button
            text="Discover Topics"
            color="outlinepink"
            size="long"
            handleClick={handleClick}
          />
        </a>
      </div>

class ForumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
    this.getTopics = getTopics.bind(this);
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const topics = this.state.topics ? this.state.topics : [];

    return (
      <div className="ForumPage">
        <NavBar page={2} profileImage={people} />
        <Banner background={Banner__Community}>
          <h3 style={{ margin: 0 }}>Forum: Discover Topics</h3>
          <InputTextField
            type="text"
            variation="wide"
            name="search directory"
            placeholder="Search Topics and #hashtags"
          />
        </Banner>
        <div className="secondNav">
          <a href className="secondNav">
            <Button text="My Favorite Topics" color="pink" size="long" handleClick={handleClick} />
          </a>
          <a className="secondNav" href="./forum-page-discover">
            <Button
              text="Discover Topics"
              color="outlinepink"
              size="long"
              handleClick={handleClick}
            />
          </a>
        </div>

        <div className="forum-page-body">
          <div className="forum-page-sort">
            <InputSelect
              onSelect={handleSelect}
              optionPrefix={"Sort By:  "}
              options={[
                { value: "location", title: "Location" },
                { value: "date", title: "Date" },
                { value: "type", title: "Type" },
                { value: "Popularity", title: "Popularity" }
              ]}
            />
          </div>
          <div>
            <header className="ForumPage__header">
              My Favorite Topics:
              <a href="/forum-page-topic">Example Topic</a>
            </header>
          </div>
          <div className="forum-page-pill-container">
            {topics.map(topic => {
              return (
                <div className="Forum-Pill">
                  <Link to={`/forum-page-topic/${topic.id}`} style={{ textDecoration: "none" }}>
                    <Pill
                      text={topic.title}
                      size={"medium"}
                      color={"red"}
                      icon={"white"}
                      onClick={pillClick}
                      selectId={topic.id}
                    />
                  </Link>
                </div>
              );
            })}
          </div>{" "}
          <a href className="seeMore-Button">
            See More
          </a>
          <div>
            <header className="ForumPage__header">
              #hashtags I'm Following: <a href="/forum-page-hashtag">Example Tag</a>
            </header>{" "}
          </div>
          <div className="forum-page-hollow-pill-container">
            <Pill
              text={"#hashtags"}
              size={"medium"}
              color={"pink"}
              icon={"pink"}
              shadow
              border
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              text={"#hashtags"}
              size={"medium"}
              color={"pink"}
              icon={"pink"}
              shadow
              border
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              text={"#hashtags"}
              size={"medium"}
              color={"pink"}
              icon={"pink"}
              shadow
              border
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              text={"#hashtags"}
              size={"medium"}
              color={"pink"}
              icon={"pink"}
              shadow
              border
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              text={"#hashtags"}
              size={"medium"}
              color={"pink"}
              icon={"pink"}
              shadow
              border
              onClick={pillClick}
              selectId={0}
            />
          </div>
          <div className="ForumPage__button-container"></div>
        </div>
        <a href className="seeAll-Button">
          See All
        </a>
        <Footer history={this.props.history} handle_logout={this.props.handle_logout} />
      </div>
    </div>
  );
};

export default ForumPage;
