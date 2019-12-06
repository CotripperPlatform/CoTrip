
import React from 'react';
import "./CommentBody.css";

// Function based React Component
const CommentBody = (props) => {
  // Default Class to apply to Component
  let classList = `CommentBody`;


  return(
    <div className={classList}>
      <p className="Body">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
      inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
      ipsam voluptatem quia voluptas sit aspernatur aut odit
      </p>
      <p className="Date">
      Date <br/>
      Time
      </p>
    </div>
  );
}

export default CommentBody;
