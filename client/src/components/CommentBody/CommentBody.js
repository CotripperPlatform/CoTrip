
import React from 'react';
import "../../App.css"
import "./CommentBody.css";

// Function based React Component
const CommentBody = (props) => {
  // Default Class to apply to Component
  // No props right now but when there is data we can use 
  // this.props.comment and this.props.date
  let classList = `CommentBody`;
  const body = props.bodyProps;
  const date = props.dateProps;
  const time = props.timeProps;

  return(
    <div className={classList}>
      <p className="Body">
        {body}
      </p>
      <div className="Date">
        <p>
          {date}
          <br/>
          {time}
        </p>
      </div>
    </div>
  );
}

export default CommentBody;
