import React from "react";
import "./ForumComment.css";
import Profile from "../../assets/images/card_profile3.png";

const ForumComment = props => {
  return (
    <div className="ForumComment">
      <div className="ForumComment__profile">
        <img className="ForumComment__image" src={Profile} alt=""/>
        <div className="ForumComment__name">Bethany</div>
      </div>
      <div className="ForumComment__body">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
        <div className="ForumComment__likes-replies">
          <p>
            {props.likes}
            {" Likes "}
            {props.replies}
            {" Replies"}
          </p>
        </div>
      </div>
      <div className="ForumComment__date">
        {props.date}
        {props.time}
      </div>
    </div>
  );
};

export default ForumComment;
