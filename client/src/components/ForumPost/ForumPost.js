import React, { Component } from "react";
import "./ForumPost.css";
import PostBody from "../PostBody/PostBody.js";
import Button from "../Button/Button.js";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";
import Image from "../../../../assets/images/profile_large.png";
import heart from "../../../../assets/images/heart_black.png";
import comment from "../../../../assets/images/comment_black.png";
import Pill from "../Pill/Pill.js";
import PropTypes from "prop-types";

class ForumPost extends Component {
  render() {
    return (
      <div className="ForumPost">
        <div className="ForumPost__top-middle">
          <div className="ForumPost__top">
            <div className="ForumPost__face-card">
              <ProfilePicture type="small" link={this.props.to} image={this.props.image} />
              <p className="ForumPost__name">{this.props.name}</p>
            </div>
            {this.props.post ? (
              <PostBody
                title={this.props.post.title}
                date={this.props.post.date}
                time={this.props.post.time}
                body={this.props.post.body}
                hashtags={this.props.post.hashtags}
              />
            ) : (
              <PostBody />
            )}
          </div>
          <div className="ForumPost__middle">
            <div className="ForumPost__topic-pills">
              {this.props.topics
                ? this.props.topics.map(topic => (
                    <Pill
                      key={topic}
                      text={topic}
                      active={false}
                      size={"small"}
                      color={"red"}
                      inactiveColor={"pink"}
                      onClick={this.props.pillClick}
                      selectId={0}
                    />
                  ))
                : null}
            </div>
            <div className="ForumPost__likes-comments">
              <p>
                {this.props.likes}
                {" Likes"}
              </p>
              <p>
                {this.props.comments}
                {" Comments"}
              </p>
            </div>
          </div>
        </div>
        <div className="ForumPost__bottom">
          <Button icon={heart} text="Like" type="like" handleClick={this.props.likeClick} />
          <Button
            icon={comment}
            text="Comment"
            type="comment"
            handleClick={this.props.commentClick}
          />
        </div>
      </div>
    );
  }
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
export default ForumPost;
