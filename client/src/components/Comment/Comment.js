import React from "react";
import "./Comment.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import Profile2 from "../../assets/images/card_profile3.png";


// Function based React Component
const Comment = props => {
  const { body, date, time, to, image, name, likes } = props;

  return (
    <div className="Comment">
      <div className="Comment__column Comment__profile">
        <ProfilePicture type="small" to={to} image={image} />
        <h4 className="Comment__name">{name}</h4>
      </div>
      <div className="Comment__column Comment__content">
        <div className="Comment__column--left">
          <p className="Comment__body">{body}</p>
          <div className="Comment__activities">
            <div className="Comment__likes">{likes} Likes</div>
          </div>
        </div>
        <div className="Comment__column Comment__timing--container">
          <p className="Comment__timing">{date}</p>
          <p className="Comment__timing">{time}</p>
        </div>
      </div>
    </div>
  )
}

export default Comment;
