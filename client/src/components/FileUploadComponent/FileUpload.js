import React, { Component } from "react";
import './FileUpload.css'

class FileUpload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({file: evt.target.files[0]}, this.props.handleFile)
  }

  render() {
    return (
            <div className='NewUserUpload'>
              <p>{this.props.header}</p>
              <label htmlFor="inputTypeFile" className="FileUpload__label" >{this.props.buttonLabel}</label>
              <input onChange={this.handleChange} accept={this.props.fileType} type="file" id="inputTypeFile" className='FileUpload' ></input>
            </div>
    )
  }
}

FileUpload.defaultProps = {
  buttonLabel: 'Browse Files',
  fileType: 'image/*',
  handleFile: () => console.log("function handles the file")
}

export default FileUpload;