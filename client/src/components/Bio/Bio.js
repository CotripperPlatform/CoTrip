import React, { Component } from "react";
import "./Bio.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import InputTextField from "components/InputTextField/InputTextField";

library.add(faEdit);
// Class Based React Component
class Bio extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "Bio",
      isUser: this.props.isUser,
      isClicked: false
    };
  }
  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    console.log(this.props.isUser);
    const isUser = this.state.isUser;

    return (
      <div className={this.state.classList}>
        <div>
          <h2>
            {this.props.name}
            {isUser ? <FontAwesomeIcon icon={faEdit} /> : null}
          </h2>
          <h3>Bio</h3>
          <p>{this.props.bio}</p>
          <h3>Her Interests</h3>
          <div classname="hashtag--container">
            {this.props.hashtags.map(hashtag => (
              <span>{hashtag}</span>
            ))}
          </div>
          <div className="icons--div">
            <Link to={this.props.instagram}>
              <Icon onclick={this.props.handleclick} icon={["fab", "instagram"]} />
            </Link>
            <Link to={this.props.pinterest}>
              <Icon onclick={this.props.handleclick} icon={["fab", "pinterest"]} />
            </Link>
            <Link to={this.props.facebook}>
              <Icon onclick={this.props.handleclick} icon={["fab", "facebook"]} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
