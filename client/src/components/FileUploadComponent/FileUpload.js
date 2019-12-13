import React from "react";
import './FileUpload.css'

const FileUpload = (props) => {

  function handleChange(eo) {
    eo.preventDefault()
    eo.persist()
    console.log(eo)
  }

  if (props.context === "userPhoto") {
    return (
      <div onChange={handleChange} className='NewUserUpload'>
        <p>Upload a profile photo</p>
        <label for="inputTypeFile" className="FileUpload__label" >{props.buttonLabel}</label>
        <input type="file" id="inputTypeFile" className='FileUpload' ></input>
      </div>
    );
  } else {
    return (
      <div onChange={handleChange}>
        <label for="inputTypeFile" className="FileUpload__label" >{props.buttonLabel}</label>
        <input type="file" id="inputTypeFile" className='FileUpload' ></input>
      </div>
    )
  }
}

FileUpload.defaultProps = {
  buttonLabel: "Browse Files",
}

export default FileUpload;