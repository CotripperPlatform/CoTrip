import React from "react";
import "./CommentBody.css";

// Function based React Component
const CommentBody = props => {
  // Default Class to apply to Component
  // No props right now but when there is data we can use
  // this.props.comment and this.props.date
  const { body, date, time } = props;

  return (
    <div className="CommentBody">
      <p>{body}</p>
      <div className="CommentBody__date">
        <p>
          <span className="Date">{date}</span>
          <span>{time}</span>
        </p>
      </div>
    </div>
  );
};

export default CommentBody;
