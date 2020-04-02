import React from "react";
import "./Comment.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

// Function based React Component
const Comment = props => {
  // Default Class to apply to Component
  // No props right now but when there is data we can use
  // this.props.comment and this.props.date
  const { body, date, time, to, image, name, likes, replies, type } = props;

  return (
    <body className="Comment">
      <section className="Comment__column Comment__profile">
        <ProfilePicture type={type} to={to} image={image} />
        <h4 className="Comment__name">{name}</h4>
      </section>
      <section className="Comment__column Comment__content">
        <p className="Comment__body">{body}</p>
        <div className="Comment__activities">
          <article className="Comment__activity">{likes} Likes</article>
          <article className="Comment__activity">{replies} Replies</article>
        </div>
      </section>
      <section className="Comment__column Comment__timing--container">
        <p className="Comment__timing">{date}</p>
        <p className="Comment__timing">{time}</p>
      </section>
    </body>
  );
};

export default Comment;
