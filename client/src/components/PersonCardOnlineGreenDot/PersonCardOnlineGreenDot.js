import React from 'react';
import "./PersonCardOnlineGreenDot.css";
import { Link } from "react-router-dom";
import PersonCard from "../PersonCard/PersonCard";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import image from "../../assets/images/profile-picture-1.png";

// Function based React Component
const PersonCardOnlineGreenDot = (props) => {
  // Default Class to apply to Component
  let classList = `PersonCardOnlineGreenDot`;

  return(
    <div className={classList}>
    </div> 
  );
}

export default PersonCardOnlineGreenDot;
