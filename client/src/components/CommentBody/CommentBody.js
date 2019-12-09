
import React from 'react';
import "./CommentBody.css";

// Function based React Component
const CommentBody = (props) => {
  // Default Class to apply to Component
  // No props right now but when there is data we can use 
  // this.props.comment and this.props.date
  const body = props.body;
  const date = props.date;
  const time = props.time;

  return(
    <div className='CommentBody'>
      <p className="Body">
        {body}
      </p>
      <div className="Date">
        <p> 
          <span>{date}</span>
          <span>{time}</span>
        </p>
      </div>
    </div>
  );
}

export default CommentBody;
