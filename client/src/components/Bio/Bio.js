import React, { Component } from "react";
import "./Bio.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";
// Class Based React Component
class Bio extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "Bio"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    return (
      <div className={this.state.classList}>
        <div>
          <h2>{this.props.name}</h2>
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
