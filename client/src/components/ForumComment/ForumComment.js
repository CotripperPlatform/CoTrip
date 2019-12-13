import React from "react";
import "./ForumComment.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";

export default function ForumComment(props) {
    return (
      <div className="ForumComment">
        <div className="ForumComment__top-middle">
          <div className="ForumComment__top">
            <div className="ForumComment__face-card">
              <ProfilePicture type="small" link={props.to} image={props.image} />
              <p className="ForumComment__name">{props.name}</p>
            </div>
            {props.Reply ? (
              <Reply
                date={props.Reply.date}
                time={props.Reply.time}
                body={props.Reply.body}
              />
            ) : (
              <Reply />
            )}
            </div>
            </div>
            </div>
        <div className="ForumPost__middle">
        <div className="ForumPost__likes-replies">
            <p>
              {props.likes}
              {" Likes"}
            </p>
            <p>
              {props.replies}
              {" Replies"}
            </p>
        </div>
        </div>
