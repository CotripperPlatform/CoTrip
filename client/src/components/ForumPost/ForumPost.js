import React from "react";
import "./ForumPost.css";
import PostBody from "../PostBody/PostBody.js";
import Button from "../Button/Button.js";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";
import Image from "../../../../assets/images/profile_large.png";
import heart from "../../../../assets/images/heart_black.png";
import comment from "../../../../assets/images/comment_black.png";

// Function based React Component
const ForumPost = props => {
  // Default Class to apply to Component
  let classList = `ForumPost`;

  return (
    <div className={classList}>
      <div className="ForumPost__top">
        <div className="ForumPost__face-card">
          <ProfilePicture type="extra-small" link="#" image={props.image} />
          <p className="ForumPost__name">{props.name}</p>
        </div>
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
        <Button icon={heart} text="Like" type="like" onClick={props.onClick} />
        <Button icon={comment} text="Comment" type="comment" onClick={props.onClick} />
      </div>
    </div>
  );
};

ForumPost.defaultProps = {
  image: Image,
  name: "Lexi R."
};
export default ForumPost;
