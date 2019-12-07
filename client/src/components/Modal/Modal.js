import React, { Component } from 'react';
import "./Modal.css";


// Class Based React Component
class Modal extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "Modal",
    };
  }
  // Runs after Component is loaded in the broswer
  componentDidMount() { }
  render() {
    if (this.props.join){
      return(
        <div className={this.state.classList}>
        <div className="modal-header">
          <span className="close-modal-btn">×</span>
        </div>
        <div className="modal-body">
          <div className="htag">
            <h3>Are you sure you want to join {this.props.children}?</h3>
          </div>
        </div>
        <div className="modal-footer">
          <div className="cancel">
            <p>Cancel</p>
          </div>
          <div className="confirm">
            <p>join</p>
          </div>
        </div>
      </div>
      )
    }
    return (
      <div className={this.state.classList}>
        <div className="modal-header">
          <span className="close-modal-btn">×</span>
        </div>
        <div className="modal-body">
          <div className="htag">
            <h3>Are you sure you want to follow {this.props.children}?</h3>
          </div>
        </div>
        <div className="modal-footer">
          <div className="cancel">
            <p>Cancel</p>
          </div>
          <div className="confirm">
            <p>Confirm</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
