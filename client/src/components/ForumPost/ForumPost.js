import React from "react";
import "./ForumPost.css";
import PostBody from "../PostBody/PostBody.js";
import Button from "../Button/Button.js";

// Function based React Component
const ForumPost = props => {
  // Default Class to apply to Component
  let classList = `ForumPost`;

  return (
    <div className={classList}>
      <div className="ForumPost__top">
        <div className="ForumPost__face-card-placeholder"></div>
        <PostBody />
      </div>
      <div className="ForumPost__middle">
        <div className="ForumPost__topic-pills">
          <Button text="Topic" color="pink" size="small" />
          <Button text="Topic" color="pink" size="small" />
          <Button text="Topic" color="pink" size="small" />
        </div>
        <div className="ForumPost__likes-comments">
          <p>
            {props.likes}
            {" likes"}
          </p>
          <p>
            {props.comments}
            {" comments"}
          </p>
        </div>
      </div>
      <div className="ForumPost__bottom">
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default ForumPost;
