import React from 'react';
import "./ForumComment.css";
import  '../../App.css';
import img from "../../Assets/mom.png";

//Function based React Component
const ForumComment = (props) => {

    let classList = `ForumComment`;

    return(
        <div className={classList}>
        {/* <img className="profile" src={props.img}></img> */}
        <img className="ForumComment__Img" img src={img} />
        <p className="ForumComment__MomName">{props.ForumComment__MomName}</p>
          <p className="ForumComment__Comment">
          {props.ForumComment__Comment} 
          </p>
          <p className="ForumComment__Date">
          {props.ForumComment__Date} 
          </p>
          <p className="ForumComment__Likes">
             Likes:{props.ForumComment__Likes}
          </p>
          <p className="ForumComment__Replies">
              Replies:{props.ForumComment__Replies}
          </p>
        </div>
      );
    }









export default ForumComment;