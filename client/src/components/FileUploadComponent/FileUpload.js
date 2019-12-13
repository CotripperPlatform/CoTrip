import React from "react";
import './FileUpload.css'

const FileUpload = (props) => {
  if (props.context === "userPhoto") {
    return (
      <div className='NewUserUpload'>
        <p>Upload a profile photo</p>
        <label for="inputTypeFile" className="FileUpload__label" >{props.buttonLabel}</label>
        <input type="file" id="inputTypeFile" className='FileUpload' ></input>
      </div>
    );
  } else {
    return (
      <div>
        <label for="inputTypeFile" className="FileUpload__label" >{props.buttonLabel}</label>
        <input type="file" id="inputTypeFile" className='FileUpload' ></input>
      </div>
    )
  }
}

FileUpload.defaultProps = {
  buttonLabel: "Browse Files"
}

export default FileUpload;