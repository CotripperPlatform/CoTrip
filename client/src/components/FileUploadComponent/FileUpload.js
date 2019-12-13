import React, { Component } from "react";
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './FileUpload.css'

class FileUpload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: null,
      renderThis: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(eo) {
    eo.preventDefault()
    eo.persist()
    this.setState({ 
      file: eo.target.files,
      renderThis: <ProfilePicture to="#" image={this.state.file} />
    })
  }

  componentDidMount() {
    if (this.props.context === "userPhoto") {
      this.setState({
        renderThis:
          <div onChange={this.handleChange} className='NewUserUpload'>
            <p>Upload a profile photo</p>
            <label for="inputTypeFile" className="FileUpload__label" >{this.props.buttonLabel}</label>
            <input type="file" id="inputTypeFile" className='FileUpload' ></input>
          </div>
      })

    } else {
      this.setState({
        renderThis:
          <div onChange={this.handleChange}>
            <label for="inputTypeFile" className="FileUpload__label" >{this.props.buttonLabel}</label>
            <input type="file" id="inputTypeFile" className='FileUpload' ></input>
          </div>
      })
    }
  }

  render() {
    return this.state.renderThis
  }
}

FileUpload.defaultProps = {
  buttonLabel: 'Browse Files'
}

export default FileUpload;