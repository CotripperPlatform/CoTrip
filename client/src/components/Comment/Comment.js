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
    <body className="Comment_body">
      <section className="Comment_section Comment_section_1">
        <ProfilePicture type={type} to={to} image={image} />
        <h4 className="Comment_h4">{name}</h4>
      </section>
      <section className="Comment_section Comment_section_2">
        <p className="Comment_section_2_p">{body}</p>
        <div className="Comment_div">
          <article className="Comment_article">{likes} Likes</article>
          <article className="Comment_article">{replies} Replies</article>
        </div>
      </section>
      <section className="Comment_section Comment_section_3">
        <p className="Comment_section_3_p">{date}</p>
        <p className="Comment_section_3_p">{time}</p>
      </section>
    </body>
  );
};

export default Comment;
