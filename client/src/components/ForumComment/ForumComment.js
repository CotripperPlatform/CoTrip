import React from 'react';
import "./ForumComment.css";
import mom from "../../Assets/mom.png";

//Function based React Component
const ForumComment = (props) => {

    let classList = `ForumComment`;

    return(
        <div className={classList}>
        <img src={mom} />
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
          <p className="Likes">
              Likes
          </p>
          <p className="Replies">
              Replies
          </p>
        </div>
      );
    }









export default ForumComment;