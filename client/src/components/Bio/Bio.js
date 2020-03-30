import React from "react";
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
        <p className="Bio__paragraph">{props.bio}</p>
        <h3 className="Bio__interests">Her Interests</h3>
        <div className="hashtag__container">
          {props.hashtags.map(hashtag => (
            <span className="Bio__span" key={hashtag + 1}>
              {hashtag}
            </span>
          ))}
        </div>
        <div className="icons__div">
          <Link to={props.instagram}>
            <Icon onClick={props.onClick} icon={["fab", "instagram"]} />
          </Link>
          <Link to={props.pinterest}>
            <Icon onClick={props.onClick} icon={["fab", "pinterest"]} />
          </Link>
          <Link to={props.facebook}>
            <Icon onClick={props.onClick} icon={["fab", "facebook"]} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bio;
