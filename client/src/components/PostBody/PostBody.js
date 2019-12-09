import React from "react";
import "./PostBody.css";

// Function based React Component
const PostBody = props => {
  // Default Class to apply to Component
  let classList = `PostBody`;

  return (
    <div className={classList}>
      <div className="post-body-top">
        <div className="post-body-top-left">
          <div className="post-body-title">{props.title}</div>
          <div className="post-body-hashtags">{props.hashtags}</div>
        </div>
        <div className="post-body-top-right">
          <div className="post-body-date">{props.date}</div>
          <div>{props.time}</div>
        </div>
      </div>
      <div className="post-body-text">{props.body}</div>
    </div>
  );
};
PostBody.defaultProps = {
  title: "Post Title: Sed ut perspiciatus unde omnis?",
  date: "August 19",
  time: "6:00 pm",
  hashtags: [<a href="#">#DCMoms</a>, <a href="#">#museumtrips</a>, <a href="#">#DIY</a>],
  body:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
};
export default PostBody;
