import React, { Component } from "react";
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './FileUpload.css'

class FileUpload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      renderThis: null,
      style: null,
      file: null
    }
  }

  render() {
    return (
      <>
        {
          this.props.context ?
            <div className='NewUserUpload'>
              <p>{this.props.header}</p>
              <label htmlFor="inputTypeFile" className="FileUpload__label" >{this.props.buttonLabel}</label>
              <input accept={this.props.fileType} type="file" id="inputTypeFile" className='FileUpload' ></input>
            </div>
            :
            <div>
              <label htmlFor="inputTypeFile" className="FileUpload__label" >{this.props.buttonLabel}</label>
              <input accept={this.props.fileType} type="file" id="inputTypeFile" className='FileUpload' ></input>
            </div>
        }
      </>

    )
  }
}

FileUpload.defaultProps = {
  buttonLabel: 'Browse Files',
  fileType: 'image/*'
}

export default FileUpload;