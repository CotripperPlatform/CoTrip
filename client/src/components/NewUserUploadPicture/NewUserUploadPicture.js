import React from "react";
import './NewUserUploadPicture.css'
import Button from '../Button/Button'

const NewUserUpload = (props) => {

  return (
    <div className='NewUserUpload'>
      <p>Upload a profile photo</p>
      <Button text="Browse Files" color="pink" size="extra-small" handleClick={props.handleClick} />
    </div>
  );
};

export default NewUserUpload;