import React from "react";
import "./CommentBody.css";
import ProfilePicture from "./../ProfilePicture/ProfilePicture";

// Function based React Component
const CommentBody = props => {
  // Default Class to apply to Component
  // No props right now but when there is data we can use
  // this.props.comment and this.props.date
  const { body, date, time, to, image, name, likes, replies, type } = props;

  return (
    <div className="CommentBody">
      <span className="CommentBody_item">
        <ProfilePicture type={type} to={to} image={image} />
        <p className="CommentBody_name">{name}</p>
      </span>
      <span className="CommentBody_item CommentBody_center_item">
        <p>{body}</p>
        <span className="CommentBody_activity">
          <span className="CommentBody_activity">{likes} Likes</span>
          <span className="CommentBody_activity">{replies} Replies</span>
        </span>
      </span>
      <span className="CommentBody__date CommentBody_item">
        <p>
          <span className="Date">{date}</span>
          <span>{time}</span>
        </p>
      </span>
    </div>
  );
};

export default CommentBody;
