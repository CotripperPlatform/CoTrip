import React from "react";
import './FileUpload.css'

const FileUpload = props => {
  return (
    <div className="FileUpload">
      <h1>{props.header}</h1>
      <label htmlFor="inputTypeFile" className="FileUpload__label" >{props.buttonLabel}</label>
      <input onChange={(evt) => props.handleFile(evt.target.files[0])} accept={props.fileType} type="file" id="inputTypeFile" className='FileUpload__input' ></input>
    </div>
  )
}

FileUpload.defaultProps = {
  buttonLabel: 'Browse Files',
  fileType: 'image/*',
  handleFile: (evt) => console.log(evt.target.files[0], "a function handles the file")
}
export default FileUpload;