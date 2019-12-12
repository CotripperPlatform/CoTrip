import React from 'react';
import "./ForumComment.css";
import  '../../App.css';
import img from "../../Assets/mom.png";


export default function ForumComment(props) {
  return (
    <div className="ForumComment">
      <div className="ForumComment__top-middle">
        <div className="ForumComment__top">
          <div className="ForumComment__face-card">
            <ProfilePicture type="small" link={props.to} image={props.image} />
            <p className="ForumComment__name">{props.name}</p>
          </div>
          {props.comment ? (
            <CommentBody
              name={props.comment.name}
              date={props.comment.date}
              time={props.comment.time}
              body={props.comment.body}
            />
          ) : (
            <CommentBody />
          )}
        </div>
        </div>
      <div className="ForumComment__likes-comments">
            <p>
              {props.likes}
              {" Likes"}
            </p>
            <p>
              {props.replies}
              {" Replies"}
            </p>
        </div>
        </div>
        )};