import React, { Component } from "react";
import "./ForumPage.css";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import Button from "../../components/Button/Button";
import Pill from "../../components/Pill/Pill";
import InputSelect from "../../components/InputSelect/InputSelect";
import { Link } from "react-router-dom";
import { getAllTopics, getAllHashtags } from "../../services/Community";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

// TODO: Enable methods for button interactions
const handleSelect = props => {};
function pillClick(val) {}
const handleClick = e => {};

class ForumPageDiscover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getAllHashtags = getAllHashtags.bind(this);
    this.getAllTopics = getAllTopics.bind(this);
  }

  componentDidMount() {
    this.getAllHashtags(this.getAllTopics());
  }

  handleSelect = e => {
    // TODO: load selected hashtag or topic page
    console.log(e.target.value);
  };

  render() {
    let searchList = [];
    if (this.state.hashtagList && this.state.topicList) {
      searchList = [...this.state.hashtagList, ...this.state.topicList];
    }

    const hashtags = !this.state.hashtagList
      ? ""
      : this.state.hashtagList.map(hashtag => {
          return (
            <div className="Forum-Pill">
              <Link to={`./forum-page-hashtag/${hashtag.id}`} style={{ textDecoration: "none" }}>
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
        });
    const topics = !this.state.topicList
      ? ""
      : this.state.topicList.map(topic => {
          return (
            <Link to={`./forum-page-topic/${topic.id}`} style={{ textDecoration: "none" }}>
              <Pill
                className="Forum__Pill"
                text={topic.title}
                size={"medium"}
                color={"red"}
                icon={"white"}
                onClick={pillClick}
                selectId={topic.id}
              />
            </Link>
          );
        });

    return (
      <div className="ForumPage">
        <Banner background={Banner__Community}>
          <h3 style={{ margin: 0 }}>Search: Packing</h3>
          <Autocomplete
            style={{ width: 300 }}
            id="AutoStateField"
            options={searchList}
            value={option => option.id}
            getOptionLabel={option => option.title}
            onSelect={this.handleSelect}
            renderInput={params => (
              <TextField {...params} label="Search Topics and #hashtags" variant="filled" />
            )}
          />
        </Banner>
        <div className="secondNav">
          <a className="secondNav" href="./forum-page">
            <Button
              text="My Favorite Topics"
              color="outlinepink"
              size="long"
              handleClick={handleClick}
            />
          </a>
          <a href="./forum-page" className="secondNav">
            <Button text="Discover Topics" color="pink" size="long" handleClick={handleClick} />
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
            <header className="ForumPage__header">Discover Topics</header>
          </div>
          <div className="ForumPage__pill-container">{topics}</div>
          <div>
            <header className="ForumPage__header">#hashtags</header>
          </div>
          <div className="ForumPage__hollow-pill-container">{hashtags}</div>
        </div>
      </div>
    );
  }
}
export default ForumPageDiscover;
