
import React from 'react';
import { Link } from "react-router-dom";
import "./MediaCard.css";

// Function based React Component
const MediaCard = (props) => {

  // Default Class to apply to Component

  let styles = {
    backgroundImage: `url(${props.imageSrc})`,
    backgroundSize: 'cover',
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
  

  return (
  
    <Link className='media-card' to={props.to} style={styles}>
      <footer className='media-footer'>
        <p className='footer-text'>{props.footerText}</p>
      </footer>
    </Link>
  );
}

export default MediaCard;
