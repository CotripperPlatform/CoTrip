import React from "react";
import "./ForumPost.css";
import PostBody from "../PostBody/PostBody.js";
import Button from "../Button/Button.js";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";
import Image from "../../../../assets/images/profile_large.png";
import heart from "../../../../assets/images/heart_black.png";
import comment from "../../../../assets/images/comment_black.png";
import Pill from "../Pill/Pill.js";

// Function based React Component
const ForumPost = props => {
  // Default Class to apply to Component
  let classList = `ForumPost`;

  return (
    <div className={classList}>
      <div className="ForumPost__top-middle">
        <div className="ForumPost__top">
          <div className="ForumPost__face-card">
            <ProfilePicture type="small" link="#" image={props.image} />
            <p className="ForumPost__name">{props.name}</p>
          </div>
          <PostBody />
        </div>
        <div className="ForumPost__middle">
          <div className="ForumPost__topic-pills">
            <Pill
              text={"Topic"}
              active={false}
              size={"small"}
              color={"red"}
              inactiveColor={"pink"}
              onClick={props.pillClick}
              selectId={0}
            />
            <Pill
              text={"Topic"}
              active={false}
              size={"small"}
              color={"red"}
              inactiveColor={"pink"}
              onClick={props.pillClick}
              selectId={0}
            />
            <Pill
              text={"Topic"}
              active={false}
              size={"small"}
              color={"red"}
              inactiveColor={"pink"}
              onClick={props.pillClick}
              selectId={0}
            />
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
