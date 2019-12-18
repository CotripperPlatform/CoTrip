import React from "react";
import "./ForumComment.css";

const ForumComment = props => {
  return (
    <div className="ForumComment">
      <div className="ForumComment__profile">
        <img className="ForumComment__image" src={props.image} />
        <div className="ForumComment__name">{props.name}</div>
      </div>
      <div className="ForumComment__body">
        {props.body}
        <div className="ForumComment__likes-replies">
          <p>
            {props.likes}
            {" Likes "}
            {props.replies}
            {" Replies"}
          </p>
        </div>
      </div>
      <div className="ForumComment__date">
        {props.date}
        {props.time}
      </div>
    </div>
  );
};

export default ForumComment;
