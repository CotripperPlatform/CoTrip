import React from "react";
import "./ForumPost.css";
import PostBody from "../PostBody/PostBody.js";
import Button from "../Button/Button.js";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";
import Image from "../../assets/images/profile-picture-5.png";
import heart from "../../assets/images/heart_black.png";
import comment from "../../assets/images/comment_black.png";
import Pill from "../Pill/Pill.js";
import PropTypes from "prop-types";

export default function ForumPost(props) {
  return (
    <div className="ForumPost">
      <div className="ForumPost__top-middle">
        <div className="ForumPost__top">
          <div className="ForumPost__face-card">
            <ProfilePicture type="small" link={props.to} image={props.image} />
            <p className="ForumPost__name">{props.name}</p>
          </div>
          {props.post ? (
            <PostBody
              title={props.post.title}
              date={props.post.date}
              time={props.post.time}
              body={props.post.body}
              hashtags={props.post.hashtags}
            />
          ) : (
            <PostBody />
          )}
        </div>
        <div className="ForumPost__middle">
          <div className="ForumPost__topic-pills">
            {props.topics
              ? props.topics.map(topic => (
                  <Pill
                    key={topic}
                    text={topic}
                    active={false}
                    size={"small"}
                    color={"red"}
                    inactiveColor={"pink"}
                    onClick={props.pillClick}
                    selectId={0}
                  />
                ))
              : null}
          </div>
          <div className="ForumPost__likes-comments">
            <p>
              {props.likes}
              {" Likes"}
            </p>
            <p>
              {props.comments}
              {" Comments"}
            </p>
          </div>
        </div>
      </div>
      <div className="ForumPost__bottom">
        <Button icon={heart} text="Like" type="like" handleClick={props.likeClick} />
        <Button icon={comment} text="Comment" type="comment" handleClick={props.commentClick} />
      </div>
    </div>
  );
}

ForumPost.defaultProps = {
  image: Image,
  name: "Lexi R.",
  likes: 0,
  comments: 0
};
ForumPost.propTypes = {
  commentClick: PropTypes.func.isRequired,
  likeClick: PropTypes.func.isRequired,
  pillClick: PropTypes.func.isRequired,
  to: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  topics: PropTypes.array,
  post: PropTypes.object
};
