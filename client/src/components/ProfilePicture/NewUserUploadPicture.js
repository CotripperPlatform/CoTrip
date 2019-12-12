import React from "react";
import './NewUserUploadPicture.css'
import Button from '../Button/Button'

const handleClick = e => {
  console.log("Clicked");
}; //from ../Button/Button.stories.js

const NewUserUpload = () => {

  return (
    <div className='NewUserUpload'>
      <p className='NewUserUpload__p'>Upload a profile photo</p>
      <Button text="Browse Files" color="pink" size="extra-small" handleClick={handleClick} />
    </div>
  );
};

export default NewUserUpload;