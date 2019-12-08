
import React from 'react';
import "./CommentBody.css";

// Function based React Component
const CommentBody = (props) => {
  // Default Class to apply to Component
  // No props right now but when there is data we can use 
  // this.props.comment and this.props.date
  let classList = `CommentBody`;


  return(
    <div className={classList}>
      <p className="Body">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
      inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
      ipsam voluptatem quia voluptas sit aspernatur aut odit
      {/* {this.props.comment} */}
      </p>
      <p className="Date">
      Date <br/>
      Time
      {/* {this.props.date} */}
      </p>
    </div>
  );
}

export default CommentBody;
