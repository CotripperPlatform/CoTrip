import React from "react";
import "./CommentBody.css";

const CommentBody = props => {
  const { body, date, time } = props;

  return (
    <div className="CommentBody">
      <p>{body}</p>
      <div className="CommentBody__date">
        <p>
          <span>{date}</span>
          <span>{time}</span>
        </p>
      </div>
    </div>
  );
};

export default CommentBody;
