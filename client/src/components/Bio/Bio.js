import React, { Component } from "react";
import "./Bio.css";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

const Bio = props => {
  return (
    <div className={"Bio"}>
      <div>
        <h2 className={"Bio__header"}>
          {props.name}
          {props.isCurrentUser ? <Icon icon={"edit"} /> : null}
        </h2>
        <h3 className="Bio__subheader">Bio</h3>
        <p>{props.bio}</p>
        <h3 className="Bio__interests">Her Interests</h3>
        <div classname="hashtag__container">
          {props.hashtags.map(hashtag => (
            <span classname="Bio__span">{hashtag}</span>
          ))}
        </div>
        <div className="icons__div">
          <Link to={props.instagram}>
            <Icon onclick={props.handleclick} icon={["fab", "instagram"]} />
          </Link>
          <Link to={props.pinterest}>
            <Icon onclick={props.handleclick} icon={["fab", "pinterest"]} />
          </Link>
          <Link to={props.facebook}>
            <Icon onclick={props.handleclick} icon={["fab", "facebook"]} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;
