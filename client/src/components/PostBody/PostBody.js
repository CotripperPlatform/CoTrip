import React from "react";
import "./PostBody.css";

// Function based React Component
const PostBody = props => {
  return (
    <div className="PostBody">
      <div className="PostBody__top">
        <div className="PostBody__top-left">
          <div className="PostBody__title">{props.title}</div>
          <div className="PostBody__hashtags">
            {props.hashtags.map(hashtag => (
              <a className="PostBody__hashtag-links" key={hashtag.title} href={hashtag.url}>
                #{hashtag.title}
              </a>
            ))}
          </div>
        </div>
        <div className="PostBody__top-right">
          <div className="PostBody__date">{props.date}</div>
          <div>{props.time}</div>
        </div>
      </div>
      <div className="PostBody__text">{props.body}</div>
    </div>
  );
};
PostBody.defaultProps = {
  title: "Post Title: Sed ut perspiciatus unde omnis?",
  date: "August 19",
  time: "6:00 pm",
  hashtags: [
    { url: "#", title: "DCMoms" },
    { url: "#", title: "museumtrips" },
    { url: "#", title: "DIY" }
  ],
  body:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
};
export default PostBody;
