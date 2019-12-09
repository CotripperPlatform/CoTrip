
import React from 'react';
import { Link } from "react-router-dom";
import "./MediaCard.css";

// Function based React Component
const MediaCard = (props) => {

  // Default Class to apply to Component

  let styles = {
    backgroundImage: `url(${props.imageSrc})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column-reverse'
  }

  if (props.small) {
    styles.height = '220px'
    styles.width = '220px'
  } else if (props.medium) {
    styles.height = '248px'
    styles.width = '248px'
  } else if (props.large) {
    styles.height = '300px'
    styles.width = '300px'
  } else {
    styles.height = '275px'
    styles.width = '275px'
  }
  
  
  let userPath = `/User/--usernameid--`
  return (
  
    <Link className='media-card' to={userPath} style={styles}>
      <footer className='media-footer'>
        <p className='footer-text'>Posted By: {props.userFirstName}</p>
      </footer>
    </Link>
  );
}

export default MediaCard;
