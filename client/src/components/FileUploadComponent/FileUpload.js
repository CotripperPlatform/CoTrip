import React, { Component } from "react";
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import './FileUpload.css'

class FileUpload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      renderThis: null,
      style: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(eo) {
    eo.preventDefault()
    eo.persist()
    let files = eo.target.files
    console.warn("data files", files)
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (eo) => {
      console.warn("img data ", eo.target.result)
      console.log(this.state)
      this.setState({
        style: { backgroundImage: `url(${eo.target.result})` },
        renderThis: <div className='NewUserUpload' to="#" image={this.state.file} />
      })
      console.log(this.state)
    }
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