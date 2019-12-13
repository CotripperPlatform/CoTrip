import React from "react";
import "./ForumComment.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";

const ForumComment = props => {
    return (
        <div className="ForumComment">
            <div className="ForumComment_profile">
            <div className="ForumComment__image">
           <ProfilePicture type="small" link={props.to} image={props.image} />
           </div>
        <div className="ForumComment__name">
            {props.name}
        </div>
        </div>
        <div className="ForumComment__body">
            {props.body}
        <div className="ForumComment__likes-replies">
           <p>
             {props.likes}
             {" Likes "}
             {props.replies}
             {" Replies" }
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


    export default ForumComment 
