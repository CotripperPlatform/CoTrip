import React, { Component } from "react";
import "./Bio.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

class BioStagnant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      form_first_name: "",
      form_last_name: "",
      form_bio: ""
    };
  }

  render() {
    return (
      <div className={"Bio"}>
        <div>
          <h2 className={"Bio__header"}>
            {this.props.first_name} {this.props.last_name}
            <Link to="/user/settings">
              <Icon icon={"edit"} />
            </Link>
          </h2>

          <h3 className="Bio__subheader">Bio </h3>

          <p className="Bio__paragraph">{this.props.bio}</p>
          <h3 className="Bio__interests">Interests</h3>
          <div className="hashtag__container">
            {this.props.hashtags.map(hashtag => (
              <span className="Bio__span" key={hashtag + 1}>
                {hashtag}
              </span>
            ))}
          </div>
          <div className="icons__div">
            <Link to={this.props.instagram}>
              <Icon onClick={this.props.onClick} icon={["fab", "instagram"]} />
            </Link>
            <Link to={this.props.pinterest}>
              <Icon onClick={this.props.onClick} icon={["fab", "pinterest"]} />
            </Link>
            <Link to={this.props.facebook}>
              <Icon onClick={this.props.onClick} icon={["fab", "facebook"]} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BioStagnant;
