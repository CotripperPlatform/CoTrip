import React from "react";
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

const handleSelect = props => {
  console.log(props);
};
function pillClick(val) {
  console.log(val);
}
const handleClick = e => {
  console.log("Clicked");
};

const ForumPage = props => {
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
        <a className="secondNav">
          <Button text="My Favorite Topics" color="pink" size="long" handleClick={handleClick} />
        </a>
        <a className="secondNav" href="./forum-page-discover">
          <Button text="Discover Topics" color="outline" size="long" handleClick={handleClick} />
        </a>
      </div>

      <div className="forum-page-body">
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
        <div>
          <header className="ForumPage__header">My Favorite Topics</header>
        </div>
        <div className="forum-page-pill-container">
          <Pill
            className="Forum-Pill"
            text={"Traveling"}
            size={"medium"}
            size={"short"}
            color={"red"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />
          <Pill
            className="Forum-Pill"
            text={"Traveling"}
            size={"medium"}
            size={"short"}
            color={"red"}
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
            className="Forum-Pill"
            text={"Traveling"}
            size={"medium"}
            size={"short"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />{" "}
          <Pill
            className="Forum-Pill"
            text={"Traveling"}
            size={"medium"}
            size={"short"}
            color={"pink"}
            icon={"white"}
            onClick={pillClick}
            selectId={0}
          />{" "}
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
            className="Forum-Pill"
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
          <header className="ForumPage__header">
            #hashtags I'm Following: <a href="/forum-page-hashtag">Example Tag</a>
          </header>{" "}
        </div>
        <div className="forum-page-hollow-pill-container">
          <Pill
            text={"#hashtags"}
            size={"medium"}
            size={"short"}
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
            size={"short"}
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
            size={"short"}
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
            size={"short"}
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
            size={"short"}
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
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default ForumPage;
