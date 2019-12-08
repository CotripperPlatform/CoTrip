
import React from 'react';
import "./MediaCard.css";


// Function based React Component
const MediaCard = (props) => {

  // Default Class to apply to Component
  let classList = `MediaCard`;
  let styles = {
    height: '248px',
    width: '248px',
    backgroundImage: `url(${props.imageSrc})`,
    display: 'flex',
    flexDirection: 'column-reverse'
  }

  console.log(props.imageSrc)
  return (
    <div style={styles} className='.MeidaCard'>
      <footer className='media-footer'>Photo By: {props.userFirstName}</footer>
    </div>
  );
}

export default MediaCard;
