import React from "react";
import "./ForumComment.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture.js";

const ForumComment = props => {
    return (
        <div className="ForumComment">
           <ProfilePicture type="small" link={props.to} image={props.image} />
           <p className="ForumComment__name">{props.name}</p>
            {props.date}
            {props.time}
            {props.body}
        <div className="ForumPost__likes-replies">
           <p>
             {props.likes}
             {" Likes"}
             {props.replies}
             {" Replies" }
           </p>
           </div>
         </div>
    );
};


    export default ForumComment 
