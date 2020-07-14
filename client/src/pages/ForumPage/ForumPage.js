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
import getHashtags from "../../services/Forum.js";
import { Link } from "react-router-dom";

const handleSelect = props => { };
function pillClick(val) { }
const handleClick = e => { };
class ForumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtags: []
    };
    this.getHashtags = getHashtags.bind(this);
  }

  componentDidMount() {
    this.getHashtags();
  }


  render() {
    const hashtags = this.state.hashtags ? this.state.hashtags : [];

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
          <a href="./forum-page" className="secondNav">
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


        <div className="ForumPage__body">
          <div className="ForumPage__sort">
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
            <header className="ForumPage__header">My Favorite Topics</header>
          </div>
          <div className="ForumPage__pill-container">
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"red"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"red"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"pink"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"pink"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"pink"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />{" "}
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"pink"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />{" "}
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"pink"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              className="Forum-Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"pink"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"pink"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />
            <Pill
              className="Forum__Pill"
              text={"Traveling"}
              size={"medium"}
              size={"short"}
              color={"pink"}
              icon={"white"}
              onClick={pillClick}
              selectId={0}
            />
          </div>
          <div>
            <header className="ForumPage__header">#hashtags I'm Following</header>
          </div>
          <div className="ForumPage__hollow-pill-container">
            {hashtags.map(hashtag => {
              return (
                <div className="Forum-Pill">
                  <Link to={"./forum-page-hashtag/"} style={{ textDecoration: "none" }}>
                    <Pill
                      text={hashtag.title}
                      size={"medium"}
                      color={"pink"}
                      icon={"pink"}
                      shadow
                      border
                      onClick={pillClick}
                      selectId={hashtag.id}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="ForumPage__button-container"></div>
        </div>
      </div>
    );
  }
}
export default ForumPage;
