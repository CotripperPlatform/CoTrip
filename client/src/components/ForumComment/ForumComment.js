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
        <img src={img} />
        <p className="momName">{props.momName}</p>
          <p className="comment">
          {props.comment} 
          </p>
          <p className="date">
          {props.date} 
          </p>
          <p className="likes">
              Likes
          </p>
          <p className="replies">
              Replies
          </p>
        </div>
      );
    }









export default ForumComment;