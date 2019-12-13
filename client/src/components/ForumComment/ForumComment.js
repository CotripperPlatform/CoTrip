import React from "react";
import "./ForumComment.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";

export default function ForumComment(props) {
    return (
      <div className="ForumComment">
          <ForumComment
           date={props.Reply.date}
            time={props.Reply.time}
            body={props.Reply.body}
            />
          </div>
    )}
