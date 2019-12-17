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
    this.setState({ file: evt.target.files[0] }, this.props.handleFile)
  }

  render() {
    return (
      <div className="FileUpload">
        <h1>{this.props.header}</h1>
        <label htmlFor="inputTypeFile" className="FileUpload__label" >{this.props.buttonLabel}</label>
        <input onChange={(evt) => this.handleChange(evt.target.files[0])} accept={this.props.fileType} type="file" id="inputTypeFile" className='FileUpload__input' ></input>
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